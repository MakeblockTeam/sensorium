/**
 * driver for makeblockHD APP(cordova ble bridge)
 */

var Driver = require('./driver');
var logger = require('../log/log4js').logger;

var utils = require('../core/utils');
var Parse = require('../core/parse');
var parse = new Parse();

var bufferToArrayBuffer = function(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return ab;
};

var driver = new Driver();

function CordovaBle() {
  'use strict';

  var self = this;
  var isConnected = false;
  var commServiceID = 'FFE1';
  var writeCharacteristicID = 'FFE3';
  var readCharacteristicID = 'FFE2';

  this._init = function() {
    if (typeof ble != "undefined" && ble.connectedDeviceID) {
      ble.startNotification(ble.connectedDeviceID, commServiceID, readCharacteristicID, function(data) {
        var bufArray = utils.arrayFromArrayBuffer(data);
        // read success
        parse.doParse(bufArray, driver);

      }, function(err) {
        // read failure
        logger.warn('read error, ', err);
      });
    } else {
      // connection may lost
    }
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[Array]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    if (typeof ble != "undefined"  && ble.connectedDeviceID) {
      ble.writeWithoutResponse(ble.connectedDeviceID, commServiceID,
        writeCharacteristicID, utils.arrayBufferFromArray(buf),
        function() {
          if(!isConnected) {
            self._init();
          }
          isConnected = true;
        },
        function(err) {
          logger.warn('write error, ', err);
          ble.stopNotification(ble.connectedDeviceID, commServiceID, readCharacteristicID);
          isConnected = false;
        }
      );
    }
  };
}

CordovaBle.prototype = driver;

module.exports = CordovaBle;