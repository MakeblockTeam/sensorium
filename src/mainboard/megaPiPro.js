import Board from '../core/board';
import electronics from '../electronic/index';

/**
 * MegaPiPro Class for 'MegaPiPro' mainboard.
 * @extends Board
 */
class MegaPiPro extends Board{
  /**
   * Create a megaPiPro mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'MegaPiPro';
    //固件当前模式
    this.currentMode = null;
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.SUPPORT.includes(this.name)){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments, this_.name);
        };
      }
    }
  }
}

export default MegaPiPro;