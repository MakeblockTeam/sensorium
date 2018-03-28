/**
 * @fileOverview Board 主控板的基类.
 * @author Jeremy
 */
import Version from '../electronic/version'

/**
 * Create id for electronic module joined into the mainboard
 * @param  {Object} eModuleObj  包含电子模块类和电子模块的名称
 * @param  {Array} argsList [description]
 * @param  {String} eModuleName 模块的名称，为生成 id 为准备
 * @return {String}          当前实例 id
 * @private
 */
const createModuleId = function (eModuleObj, argsList){
  // 注意，不能使用 eModule.name，在编译压缩的时候，变量会被替换，不同的 eModule，
  // 都会被替换成同一个变量名称，会导致 id 生成重复。
  let name = eModuleObj.name;
  let eModule = eModuleObj.eModule;
  let expectLength = eModule.length;
  let argsLength = argsList.length;
  if(argsLength < expectLength){
    //参数不足的提示
    let dl = expectLength - argsLength;
    let more = argsLength > 0 ? ' more':''; //更多
    console.warn(`you need to pass in ${dl} argument${dl>1?'s':''}${more}, otherwise the ${name} sensor may not work as a result`);
  }else if(argsLength > expectLength){
    //参数多余
    argsList.splice(expectLength);
  }
  return [name].concat(argsList).join('_').toLowerCase();
}

class Board {
  /**
   * Create a board
   * @private
   * @param  {Object} conf configure
   */
  constructor(conf){
    //私有的配置对象
    this.config_ = conf || {};
    //已连接电子模块
    this.connecting = {};
    // 版本
    this.version = Version;
  }

  /**
   * 电子模块实例工厂
   * @private
   * @param  {Object} eModuleObj 包含电子模块类和电子模块的名称
   * @param  {Array-Like} args    [port, slot, id...]
   * @param  {String} host    电子模块的宿主，即主控板名——大部分电子模块是无需识别宿主的，少数电子模块因为宿主不同而表现不同特征
   * @return {Object}         电子模块实例
   */
  eModuleFactory(eModuleObj, args, host){
    let argsList = [...args]; //转数组
    let eModule = eModuleObj.eModule;
    let id = createModuleId(eModuleObj, argsList);
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
}

export default Board;