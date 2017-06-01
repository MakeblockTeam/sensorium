/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman (hujinhong@makelbock.cc)
 */

import utils from "./utils";
import Transport from '../communicate/transport';
import Command from '../communicate/command';
import parse from './parse';
import Settings from '../protocol/settings';
var _ = require('underscore');

class Board {

  init(conf) {
    this._config = _.extend(Settings.DEFAULT_CONF, conf || {});
    this.setTransport(this._config.transport);

    // 启动数据监听
    this.onReceive();
  };

  /**
   * 存储通信的通道
   * @param {Object} transport json object.
   * @example
   * {
   *   "send": function(data, callback) {
   *     serialPort.write(data, callback);
   *   },
   *   "onReceive": function(data, callback) {
   *      serialPort.on('data', function(data){
   *        var array = utils.arrayFromArrayBuffer(data);
   *        callback(array);
   *      });
   *   }
   * }
   */
  setTransport(transport) {
    this.transport = transport;
    Transport.set(this.transport);
  };

  /**
   * 注册主板发送数据通道
   * @param  {[type]} command [description]
   */
  send(command) {
    this.transport.send(command);
    return utils.intStrToHexStr(command);
  };

  /**
   * 定义数据接收通道
   * parse 是解析器
   */
  onReceive() {
    this.transport.onReceive(parse);
  }
}

let board = new Board();

export default board;