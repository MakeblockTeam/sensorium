/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman
 */
//es6 module
import Transport from '../communicate/transport';
import Command from '../communicate/command';
import Settings from '../mainboard/settings';
import VersionBase from '../electronic/base/VersionBase';


const createModuleId = function (eModule, args){
  args = [...args]; //转数组
  let name = eModule.name;
  let expectLength = eModule.length;
  let argsLength = args.length;
  if(argsLength < expectLength){
    //参数不足
    console.warn(`there's lack of ${expectLength-argsLength} argument(s), and ${eModule.name} may not work as a result`);
  }else if(argsLength > expectLength){
    //参数多余
    args.splice(expectLength);
  }
  return [name].concat(...args).join('_').toLowerCase();
}

// 超类： 具备发送、接收方法
class Board {
  constructor(conf){
    this._config = null;

    //固件模式
    this.firmModes = [];
    //已连接元件
    this.connecting = {};
    this.init(conf);
  }

  init(conf) {
    this._config = Object.assign(Settings.DEFAULT_CONF, conf || {});
    this.setTransport(this._config.transport || {});
  }

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

  //防止重复 setTransport 导致事件监听绑定多次
  setTransport(transport) {
    if(transport && typeof transport.send == 'function' && typeof transport.onReceived == 'function' ){
      Transport.send = transport.send;
      transport.onReceived(Command.pipe.bind(Command));
    }else{
      // console.warn('')
    }
  }

  /**
   * 获取版本号，所有主控板支持
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  getVersion(callback){
    let version = new VersionBase();
    version.getVersion(callback);
  }
}

export default Board;