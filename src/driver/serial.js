/**
 * [Serial Driver implementation. ONLY works in NodeJS]
 */

var Driver = require('./driver');
var SerialPort = require("serialport");
var Parse = require('../core/parse');
var utils = require('../core/utils');
var parse = new Parse();
var BAUDRATE = 115200;
var driver = new Driver();
var serialName = '';
var serialPort = null;

function checkConnection(err) {
  console.debug(err.message);
  if (err && (err.message.indexOf('not open') > 0)) {
    console.warn('serial connection lost.');
    serialName = '';
    serialPort = null;
    initSerial();
  }
}

function initSerial() {
  if (serialName === '') {
    // find serial available serial port
    require("serialport").list(function(err, ports) {

      //for PC and raspberry pi
      ports.forEach(function(port) {
        var name = port.comName;
        //console.log(port.comName);
        var NAME = name.toUpperCase();
        if (NAME.indexOf('USB') > 0 || NAME.indexOf('AMA') > 0 || NAME.indexOf('COM') > 0) {
          console.info('serial port found:', name);
          serialName = name;
          return;
        }
      });

      if (serialPort === null && serialName !== '') {

        serialPort = new SerialPort(serialName, {
          baudrate: BAUDRATE
        });

        serialPort.on('open', function() {
          console.info('serial opened: ', serialName);

          serialPort.on('ready', function() {
            console.info('ready');
          });

          // 接收硬件返回来的数据
          serialPort.on('data', function(data) {
            // console.debug('received: ' + utils.intStrToHexStr(utils.buffer2string(data).split(" ")));
            // parse buffer data

            data = utils.arrayFromArrayBuffer(data);
            parse.doParse(data, driver);
          });

          serialPort.on('error', function(err) {
            console.warn('serial port error ' + err);
            if (driver._on_error) {
              driver._on_error(err);
            }
            checkConnection(err);
          });
        });
      }
    });
  }
}

function Serial() {
  'use strict';

  var self = this;
  this._init = function() {
    initSerial();
  };

  /**
   * [_send sends array buffer to driver]
   * @param  {[ArrayBuffer]} buf [the buffer to send]
   * @return {[integer]}     [the actual byte length sent. -1 if send fails.]
   */
   this._send = function(buf) {
    if (serialPort === null) {
      initSerial();
      return -1;
    }

    serialPort.write(buf, function(err, results) {
      if (err) {
        console.warn(err);
        checkConnection(err);
        return -1;
      }
    });
  };
}


Serial.prototype = driver;

module.exports = Serial;
