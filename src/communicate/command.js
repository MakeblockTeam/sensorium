/**
 * @fileOverview 协议发送基类.
 */

import ValueWrapper from "../core/value_wrapper";
import PromiseList from "../core/promise";

class Command {
  constructor() {
    this.CONFIG = {
      // 开启超时重发
      OPEN_RESNET_MODE: false,
      // 超时重发的次数
      RESENT_COUNT: 2,
      // 读值指令超时的设定
      COMMAND_SEND_TIMEOUT: 3000,
    };
  }

  /**
   * Get sensor's value.
   * @param  {String}   deviceType the sensor's type.
   * @param  {Object}   options    config options, such as port, slot etc.
   * @param  {Function} callback   the function to be excuted.
   */
  getSensorValue(deviceType, options, callback) {
    if (callback == undefined && typeof(options) == 'function') {
      callback = options;
      options = {};
    }
    var params = {};
    params.deviceType = deviceType;
    params.callback = callback;
    params.port = options.port;
    params.slot = options.slot || 2;
    var valueWrapper = new ValueWrapper();
    var index = PromiseList.add(deviceType, callback, valueWrapper);
    params.index = index;
    // 发送读取指令
    this._doGetSensorValue(params);
    if (this.CONFIG.OPEN_RESNET_MODE) {
      // 执行超时检测
      this._handlerCommandSendTimeout(params);
    }
    return valueWrapper;
  };
  _doGetSensorValue(params) {
    var that = this;
    this._readBlockStatus(params);
  };

  /**
   * Read module's value.
   * @param  {object} params command params.
   */
  _readBlockStatus(params) {
    var deviceType = params.deviceType;
    var index = params.index;
    var port = params.port;
    var slot = params.slot || null;
    var funcName = 'this.read' + utils.upperCaseFirstLetter(deviceType);
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

var command = new Command();

export default command;