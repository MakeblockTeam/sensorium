/**
 * @fileOverview board用做通信基类，被其他几大主板继承, 例如 orion, mcore, auriga, megaPi.
 * @author Hyman (hujinhong@makelbock.cc)
 */

var createDriver = require("../driver/index.js").create;
var CONFIG = require("./config");
var ValueWrapper = require("../core/value_wrapper");
var PromiseList = require("../core/promise");
var logger = require('../log/log4js').logger;
var utils = require("./utils");


function Board() {

}

Board.prototype.init = function(conf) {
  this.setDriver(conf.driver);
  logger.warn("Driver: " + conf.driver);
};

Board.prototype.setDriver = function(driver) {
  var that = this;
  this.driver = createDriver(driver);

  // get data from parse.
  this.driver.on('data', function(index, result) {
    that.sensorCallback(index, result);
  });

  this.driver.on('error', function(err) {
    logger.warn(err);
  });
};

/**
 * Get sensor's value.
 * @param  {String}   deviceType the sensor's type.
 * @param  {Object}   options    config options, such as port, slot etc.
 * @param  {Function} callback   the function to be excuted.
 */
Board.prototype.getSensorValue = function(deviceType, options, callback) {
  console.log(callback);
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

  if (CONFIG.OPEN_RESNET_MODE) {
    // 执行超时检测
    this._handlerCommandSendTimeout(params);
  }
  return valueWrapper;
};

Board.prototype._doGetSensorValue = function(params) {
  var that = this;
  this._readBlockStatus(params);

  // 模拟回复指令
  // setTimeout(function() {
  //     var result = 100;
  //     that.sensorCallback(params.index, result);
  // }, 200);
};

/**
 * Read module's value.
 * @param  {object} params command params.
 */
Board.prototype._readBlockStatus = function(params) {
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
Board.prototype._handlerCommandSendTimeout = function(params) {
  var that = this;
  var promiseItem = PromiseList.requestList[params.index];
  setTimeout(function() {
    if (promiseItem.hasReceivedValue) {
      // 成功拿到数据，不进行处理
      return;
    } else {
      // 超过规定的时间，还没有拿到数据，需要进行超时重发处理
      if (promiseItem.resentCount >= CONFIG.RESENT_COUNT) {
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
  }, CONFIG.COMMAND_SEND_TIMEOUT);
};

/**
 * Send sensor's data.
 * @param  {[type]} command [description]
 */
Board.prototype.send = function(command) {
  console.log('send: ' + utils.intStrToHexStr(command));
  this.driver.send(command);
};

/**
 * Get value form sensor and put the value to user's callback.
 * @param  {Number} index  the index of sensor's request command in promiseList
 * @param  {Number} result the value of sensor.
 */
Board.prototype.sensorCallback = function(index, result) {
  var deviceType = PromiseList.getType(index);
  // logger.warn(deviceType + ": " + result);
  PromiseList.receiveValue(index, result);
};


module.exports = Board;