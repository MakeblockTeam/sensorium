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
    //参数不足的提示
    console.warn(`you need to pass in ${expectLength-argsLength} argument(s),
      otherwise the ${eModule.name} sensor may not work as a result`);
  }else if(argsLength > expectLength){
    //参数多余
    args.splice(expectLength);
  }
  return [name].concat(...args).join('_').toLowerCase();
}

// 超类： 具备发送、接收方法
class Board {
  constructor(conf){
    //私有的配置对象
    this.config_ = conf || {};
    //已连接电子模块
    this.connecting = {};
  }

  /**
   * 电子模块实例工厂
   * @param  {Function} eModule 电子模块类
   * @param  {Array-Like} args    [port, slot, id...]
   * @param  {String} host    电子模块的宿主，即主控板名——大部分电子模块是无需识别宿主的，少数电子模块因为宿主不同而表现不同特征
   * @return {Object}         电子模块实例
   */
  eModuleFactory(eModule, args, host){
    let id = createModuleId(eModule, args);
    if(this.connecting[id]){
      return this.connecting[id];
    }else{
      let emodule = new eModule(...args, host);
      // 保存模块
      this.connecting[id] = emodule;
      return emodule;
    }
  }
}

export default Board;