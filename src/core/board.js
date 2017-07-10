/**
 * @fileOverview board 用做通信基类，连接收和发送接口.
 * @author Hyman
 */
import Settings from '../mainboard/settings';

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
    this._config = conf || {};
    //已连接元件
    this.connecting = {};
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
}

export default Board;