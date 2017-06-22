/**
 * @fileOverview 调度类
 * 负责协议收发调度
 */
//es6 module
import Transport from './transport';
import ValueWrapper from '../core/value_wrapper';
import PromiseList from '../core/promise';
import Parse from '../core/parse';

const OPEN_RESNET_MODE = false;
const RESENT_COUNT = 1;
const COMMAND_SEND_TIMEOUT = 1000;

const MAX_RECORD = 255;

class Command {
  constructor() {
    this.CONFIG = {
      // 开启超时重发
      OPEN_RESNET_MODE: false,
      // 超时重发的次数
      RESENT_COUNT: 1,
      // 读值指令超时的设定
      COMMAND_SEND_TIMEOUT: 1000,
    };
    this.writeRecord = {};
    this.wIndex = 0;
    this.readRecord = {};
    this.rIndex = 0;
  }

  getSafetyIndex(){
    if(this.rIndex >= MAX_RECORD){
      this.rIndex = 0;
    };
    return this.rIndex++;
  }

  exec(buf){
    // console.log(buf);
    Transport.send(buf); //借助通信管道发送
  }

  execWrite(buf, callback){
    if(typeof callback == 'function'){
      let index = getSafetyIndex();
      this.writeRecord[index] = {
        callback: callback,
        index: index
      }
    };
    this.exec(buf);
  }

  execRead(buf, callback){
    if(typeof callback == 'function'){
      let index = getSafetyIndex();
      this.readRecord[index] = {
        callback: callback,
        index: index
      }
      //修改索引值
      buf.splice(3, 1, index);
    }
    this.exec(buf);
  }

  /**
   * parse the buffer and callback
   * @param  {Array} buff buffer responsed from transportion
   * @return {Undefined}
   */
  doParse(buff){
    let buffer = Parse.doParse(buff);
    if(!buffer) { //一次失败的解析
      //do nothing
    }else if(buffer.length == 0){ //write 结果
      this.writeRecord[index].callback();
    }else{ //read 结果
      let index = buffer[0];
      let value = Parse.getResult(buffer);
      this.readRecord[index].callback(value);
    }
  }

  

  /**
   * Get sensor's value.
   * @param  {String}   deviceType the sensor's type.
   * @param  {Array}   buf    buf assembles from arguments such as port, slot etc.
   * @param  {Function} callback   the function to be excuted.
   */
  getSensorValue(deviceType, buf, callback) {
    if (callback == undefined && typeof(options) == 'function') {
      callback = options;
      options = {};
    }
    var params = {};
    params.deviceType = deviceType;
    params.callback = callback;
    // params.port = options.port;
    // params.slot = options.slot || 2;
    var valueWrapper = new ValueWrapper();
    var index = PromiseList.add(deviceType, callback, valueWrapper);
    // params.index = index;
    // 发送读取指令
    this._doGetSensorValue(params);
    if (this.CONFIG.OPEN_RESNET_MODE) {
      // 执行超时检测
      this._handlerCommandSendTimeout(params);
    }
    return valueWrapper;
  };
  
  _doGetSensorValue(params) {
    

    this._readBlockStatus(params);

    // 模拟传感器回传数据
    // setTimeout(function() {
    //   that.sensorCallback(params.index, 111);
    // }, 1000)
  };

  /**
   * Read module's value.
   * @param  {object} params command params.
   */
  _readBlockStatus(params) {
    this.api = new Api(Transport.get());

    var deviceType = params.deviceType;
    var index = params.index;
    var port = params.port;
    var slot = params.slot || null;
    var funcName = 'this.api.read' + utils.upperCaseFirstLetter(deviceType);
    var paramsStr = '(' + index + ',' + port + ',' + slot + ')';
    var func = funcName + paramsStr;
    eval(func);
  };

  /**
   * Command sending timeout handler.
   * @param  {Object} params params.
   */
  _handlerCommandSendTimeout(params) {
    var that = this;
    var promiseItem = PromiseList.requestList[params.index];
    setTimeout(function() {
      if (promiseItem.hasReceivedValue) {
        // 成功拿到数据，不进行处理
        return;
      } else {
        // 超过规定的时间，还没有拿到数据，需要进行超时重发处理
        if (promiseItem.resentCount >= that.CONFIG.RESENT_COUNT) {
          // 如果重发的次数大于规定次数,则终止重发
          console.log("【resend ends】");
          return;
        } else {
          console.log('【resend】:' + params.index);
          promiseItem.resentCount = promiseItem.resentCount || 0;
          promiseItem.resentCount++;
          that._doGetSensorValue(params);
          that._handlerCommandSendTimeout(params);
        }
      }
    }, that.CONFIG.COMMAND_SEND_TIMEOUT);
  };

  /**
   * Get value form sensor and put the value to user's callback.
   * @param  {Number} index  the index of sensor's request command in promiseList
   * @param  {Number} result the value of sensor.
   */
  sensorCallback(index, result) {
    var deviceType = PromiseList.getType(index);
    console.debug(deviceType + ": " + result);
    PromiseList.receiveValue(index, result);
  };
}

export default new Command();