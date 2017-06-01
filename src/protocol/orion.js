import board from '../core/board';
import electronics from '../electronic/index';

function Orion(conf) {
  board.init(conf);

  // 挂载各电子模块
  for (let i in electronics) {
    this[i] = function(port, slot) {
      return new electronics[i](port, slot);
    }
  }
}

// clone method and attributes from board to Orion.
Orion.prototype = board;

export default Orion;