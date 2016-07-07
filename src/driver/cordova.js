/**
 * driver for makeblockHD APP(cordova ble bridge)
 */

var Driver = require('./driver');
var logger = require('../log/log4js').logger;


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
    if (ble && ble.connectedDeviceID) {
      ble.startNotification(ble.connectedDeviceID, commServiceID, readCharacteristicID, function(data) {
        // read success
        //
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
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
  this._send = function(buf) {
    var tempBuf = new Buffer(buf.byteLength + 3);

    if (ble && ble.connectedDeviceID) {
      ble.writeWithoutResponse(ble.connectedDeviceID, commServiceID,
        writeCharacteristicID, bufferToArrayBuffer(tempBuf),
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
    return tempBuf.length;
  };
}

CordovaBle.prototype = driver;

module.exports = CordovaBle;