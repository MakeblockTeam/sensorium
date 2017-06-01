/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman
 */

import Transport from '../communicate/transport';
import parse from './parse';
import Settings from '../protocol/settings';
var _ = require('underscore');

class Board {

  init(conf) {
    this._config = _.extend(Settings.DEFAULT_CONF, conf || {});
    this.setTransport(this._config.transport);

    // 启动数据监听
    this.onReceived();
  };

  /**
   * 存储通信的通道
   * @param {Object} transport json object.
   * @example
   * {
   *    send: function(buf) {
   *      console.log(buf);
   *    },
   *
   *    onReceived: function(parse) {
   *      serialPort.on('data', function(buff) {
   *        parse.doParse(buff);
   *      });
   *    }
   *  }
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
  onReceived() {
    this.transport.onReceived(parse);
  }
}

let board = new Board();

export default board;