/**
 * @fileOverview Board 主控板的基类.
 * @author Jeremy
 */

/**
 * Create id for electronic module joined into the mainboard
 * @param  {Function} eModule  electronic module
 * @param  {Array} argsList [description]
 * @return {[type]}          [description]
 * @private
 */
const createModuleId = function (eModule, argsList){
  let name = eModule.name;
  let expectLength = eModule.length;
  let argsLength = argsList.length;
  if(argsLength < expectLength){
    //参数不足的提示
    let dl = expectLength - argsLength;
    let more = argsLength > 0 ? ' more':''; //更多
    console.warn(`you need to pass in ${dl} argument${dl>1?'s':''}${more}, otherwise the ${eModule.name} sensor may not work as a result`);
  }else if(argsLength > expectLength){
    //参数多余
    argsList.splice(expectLength);
  }
  return [name].concat(argsList).join('_').toLowerCase();
}

class Board {
  /**
   * Create a board
   * @param  {Object} conf configure
   */
  constructor(conf){
    //私有的配置对象
    this.config_ = conf || {};
    //已连接电子模块
    this.connecting = {};
    //固件版本
    // this.version = null;
  }

  /**
   * 电子模块实例工厂
   * @private
   * @param  {Function} eModule 电子模块类
   * @param  {Array-Like} args    [port, slot, id...]
   * @param  {String} host    电子模块的宿主，即主控板名——大部分电子模块是无需识别宿主的，少数电子模块因为宿主不同而表现不同特征
   * @return {Object}         电子模块实例
   */
  eModuleFactory(eModule, args, host){
    let argsList = [...args]; //转数组
    let id = createModuleId(eModule, argsList);
    if(this.connecting[id]){
      return this.connecting[id];
    }else{
      let params = argsList.length?args:[undefined];  //这里 es6 有坑
      let emodule = new eModule(...params, host);
      // 保存模块
      this.connecting[id] = emodule;
      return emodule;
    }
  }

  /**
   * get version of this mainboard
   * @example
   * let sensorium = new Sensorium();
   * let mcore = sensorium.createMcore();
   * mcore.readVersion()
   *         .getData()
   *         .then((val) => {
   *           console.log(val);
   *         })
   */
  readVersion () {
    this.currentMode = 'version';
    return this;
  }
}

export default Board;