/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman
 */

// const Transport =  require('../communicate/transport');
const parse =  require('./parse');
const Command = require('./communicate/command');
const Settings =  require('../protocol/settings');

const createModuleId = function (eModule, args){
  args = [...args]; //转数组
  let name = eModule.name;
  let argsStamp = eModule.argsStamp();
  let argsLength = args.length;
  if(argsLength < argsStamp){
    //参数不足
    console.warn(`there's lack of ${argsStamp-argsLength} argument(s), and ${eModule.name} may not work as a result`);
  }else if(argsLength > argsStamp){
    //参数多余
    args.splice(argsStamp);
  }
  return [name].concat(...args).join('_').toLowerCase();
}

let Transport = null;
// 超类： 具备发送、接收方法
class Board {
  constructor(conf){
    this._config = null;
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
   * 电子模块实例工厂
   * @param  {Function} eModule 电子模块类
   * @param  {Array-Like} args    [port, slot, id...]
   * @return {Object}         电子模块实例
   */
  eModuleFactory(eModule, args){
    let id = createModuleId(eModule, args);
    if(this.connecting[id]){
      return this.connecting[id];
    }else{
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
    //
    Transport = transport;
  };

  /**
   * 注册主板发送数据通道
   * @param  {[type]} command [description]
   */
  send(buf) {
    Command.send(Transport.send, buf);
    // this.transport.send(command);
    return utils.intStrToHexStr(buf);
  };

  /**
   * 定义数据接收通道
   * parse 是解析器
   */
  onReceived() {
    if(Transport.onReceived) {
      Transport.onReceived(parse);
    }
  }
}

module.exports = Board;