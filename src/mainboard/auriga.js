import Board from '../core/board';
import electronics from '../electronic/index';
import Version from '../electronic/version';

const FIRMWAREMODE = Symbol('firmware');
/**
 * Auriga Class for 'Auriga' mainboard.
 * @extends Board
 */
class Auriga extends Board{
  /**
   * Create a auriga mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'Auriga';
    //@member {Number} {current mode}
    this.currentMode = null;
    // @member {Object} modules is connecting to the mainboard
    // @override
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

export default Auriga;