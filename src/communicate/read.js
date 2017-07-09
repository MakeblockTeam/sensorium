/**
 * @fileOverview 通信
 * @author jeremy
 */
//当前问题：发送请求超过 255 个时，进行了暴力覆盖。但是根据协议 index 大小，又只能识别 255 条请求

// 控制方案一(待整理):
//首先其 exec 将被控制执行，需完成以下动作后才执行：
//1、加入监听列队（第二队）时，先做监听列队分析————对一队列剔除哪些位于中间的、占位较多的监听器到垃圾箱
//2、一旦有数据返回，触发对应监听器，同时做关联分析，砍掉一批。同时清空垃圾箱
//3、执行这个 exec
//4、直到第二队也到达 255.
//5、选出列队一空缺的位置（指针拨到1，表明1需要彻底清理）

// 控制方案二:
//1、允许快速产生 255 条请求（或采用一定的节流方案）
//2、将请求保存在一个队列中（保存请求发起时间）
//3、再新增请求时，检查是否满队列，若满执行第6条。必须满足队列中有空位让出——也求是请求有返回值回来——才能进入队列中
//4、新增请求占领空位（需计算空位index），并执行发送
//5、后续请求依次遵循这个规则
//6、满队列的情况下，新增请求时清空那些超时（2s?）的请求，再进入


/**
 * read request controler
 */
//最大记录数
const MAX_RECORD = 256;
//超时时间
const OVERTIME = 1000;

const Read = {
  readRecord: {},
  index: 0,
  /**
   * create a safty index between 0~255
   * @return {Number|Null} return index
   */
  createSafeIndex: function() {
    if (this.index >= MAX_RECORD) {
      for(let i =0; i < MAX_RECORD; i++){
        if(!this.readRecord[i]){
          return i;
        }
      }
      //没有索引
      return null;
    };
    return this.index++;
  },

  /**
   * @return {Boolean}
   */
  isOverflow: function(){
    let keys = Object.keys(this.readRecord);
    return keys.length == MAX_RECORD;
  },

  /**
   * add a record of time and callback
   * @param  {Number}   index
   * @param  {Function} callback [description]
   */
  addRecord: function(index, callback){
    this.readRecord[index] = {
      time: (new Date()).getTime(),
      callback: callback
    }
  },
  /**
   * remove a record with index
   * @param  {Number} index record index
   */
  removeRecord: function(index){
    delete this.readRecord[index];
  },

  /**
   * this function is drived by
   * @param {Function}   execFunc  addRequest execute as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function(execFunc, buf, callback) {
    let isFull = this.isOverflow();
    if(!isFull){
      //创建索引号
      let index = this.createSafeIndex();
      //记录
      this.addRecord(index, callback);
      //执行发送
      this.execSend(execFunc, index, buf);
    }else{
      //清除超时
      let result = this.removeOvertimeRequest();
      if(result){
        this.addRequest(...arguments);
      }else{
        //TODO: 忽略请求？挂起请求？
        console.warn(`[${buf.join(',')}] request was ignored`);
      };
    }
  },
  /**
   * 移除超时未回调的
   * @return {[type]} [description]
   */
  removeOvertimeRequest: function(){
    let time = (new Date()).getTime();
    let count = 0;
    for(let index in this.readRecord){
      if(time - this.readRecord[index].time > OVERTIME){
        count++;
        this.callbackProxy(index, null);
      }
    }
    return count;
  },

  /**
   * 执行发送
   * @param  {Function} execFunc
   * @param  {Number} index    [description]
   * @param  {[type]} buf      [description]
   * @return {[type]}          [description]
   */
  execSend: function(execFunc, index, buf){
    //amand the index of the buf due to the rj25 protocol
    buf.splice(3, 1, index);
    execFunc(buf);
  },

  /**
   * execute the callback of the request
   * @param  {Number} index request index
   * @param  {Number} value request result
   */
  callbackProxy: function(index, value){
    if(this.readRecord[index]){
      this.readRecord[index].callback(value);
      this.removeRecord(index);
    }
  }
};

export default Read;