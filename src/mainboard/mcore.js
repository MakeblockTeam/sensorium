import Board from '../core/Board';
import electronics from '../electronic/index';
import {SUPPORTLIST} from '../settings';
//支持位置
const SUPPORT_INDEX = SUPPORTLIST.indexOf('Mcore');

/**
 * Mcore Class for 'Mcore' mainboard.
 * @extends Board
 */
class Mcore extends Board{
  /**
   * Create a mcore mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'Mcore';
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if(eModule.supportStamp().charAt(SUPPORT_INDEX) === '1'){
        this[name] = function(){
          return this_.eModuleFactory(eModule, arguments, this.name);
        };
      }
    }
  }
}

export default Mcore;