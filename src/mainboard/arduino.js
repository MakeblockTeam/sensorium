import Board from '../core/board';
import electronics from '../electronic/index';

/**
 * Arduino Class for 'Arduino' mainboard.
 * @private
 * @extends Board
 */
class Arduino extends Board{
  /**
   * Create a orion mainboard
   * @param  {Object} conf configure
   */
  constructor(conf){
    super(conf);
    let this_ = this;
    //@member {String} {maiboard name}
    this.name = 'Arduino';
    // 置空已连接块
    this.connecting = {};
    // 挂载电子模块
    for (let name in electronics) {
      let eModule = electronics[name];
      if (eModule.SUPPORT.includes(this.name)) {
        this[name] = function () {
          return this_.eModuleFactory({ eModule, name }, arguments, this.name);
        };
      }
    }
  }
}

export default Arduino;