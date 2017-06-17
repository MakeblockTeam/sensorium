/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman
 */

var Transport =  require('../communicate/transport');
var parse =  require('./parse');
var Settings =  require('../protocol/settings');

// 超类： 具备发送、接收方法
class Board {

  constructor(conf){
    this._config = null;
    //板子支持的电子元件
    this.electronics = {};
    //连接
    this.connecting = {};
    this.transport = null;
    this.init(conf);
  }

  init(conf) {
    this._config = Object.assign(Settings.DEFAULT_CONF, conf || {});
    this.setTransport(this._config.transport || {});

    // 启动数据监听
    this.onReceived();
  };

  /**
   * [connect description]
   * @param  {String}    name 电子模块名
   * @param  {...Array} args port, slot, id...
   * @return {Object}         电子模块实例
   */
  connect(name, ...args){
    if(typeof name == 'undefined'){
      throw new Error('electronic name should not be empty');
    }
    let id = [name].concat(args).join('_').toLowerCase();
    if(this.connecting[id]){
      return this.connecting[id];
    }else{
      // 电子模块类
      let eModule = this.electronics[name];
      let emodule = new eModule(...args);
      // 保存模块
      this.connecting[id] = emodule;
      return emodule;
    }
  }

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
    if(this.transport.onReceived) {
      this.transport.onReceived(parse);
    }
  }
}

module.exports = Board;