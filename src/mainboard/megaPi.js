import Board from '../core/board';
import electronics from '../electronic/index';

const FIRMWAREMODE = Symbol('firmware');
/**
 * MegaPi Class for 'MegaPi' mainboard.
 * @extends Board
 */
class MegaPi extends Board{
  /**
   * Create a megaPi mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'MegaPi';
    //固件当前模式
    this.currentMode = null;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.SUPPORT.includes(this.name)){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments);
        };
      }
    }
  }
}

export default MegaPi;