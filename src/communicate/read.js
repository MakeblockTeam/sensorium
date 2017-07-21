/**
 * @fileOverview read request controler.
 * @author jeremy
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
    // “找坑法”
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
   * @param {Function}   send  addRequest send function as proxy
   * @param {Array}   buf      rj25 buffer
   * @param {Function} callback [description]
   */
  addRequest: function(send, buf, callback) {
    let isFull = this.isOverflow();
    if(!isFull){
      //创建索引号
      let index = this.createSafeIndex();
      //记录
      this.addRecord(index, callback);
      //执行发送
      this.exec(send, index, buf);
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
   * @return {Number} 返回超时数目
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
   * 一个执行器
   * @param  {Function} send
   * @param  {Number} index    [description]
   * @param  {[type]} buf      [description]
   * @return {[type]}          [description]
   */
  exec: function(send, index, buf){
    //amand the index of the buf due to the rj25 protocol
    buf.splice(3, 1, index);
    send(buf);
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