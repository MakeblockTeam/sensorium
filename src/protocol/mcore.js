var board = require('../core/board');
var electronics = require('../electronic/index');

function Mcore(conf) {
  board.init(conf);

  // 挂载各电子模块
  for (let i in electronics) {
    this[i] = function(port, slot) {
      return new electronics[i](port, slot);
    }
  }
}

// clone method and attributes from board to Mcore.
Mcore.prototype = board;

module.exports = Mcore;