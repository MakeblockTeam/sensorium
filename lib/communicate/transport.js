"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @fileOverview 指令的传输通道：蓝牙，串口，2.4G。
 */

var Transport = {
  send: function send(buf) {},
  onReceived: function onReceived(pipe) {}
};

exports.default = Transport;