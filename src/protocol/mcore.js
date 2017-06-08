var board = require('../core/board');
var electronics = require('../electronic/index');

function Mcore(conf) {
  board.init(conf);

  // 挂载各电子模块
  for (let i in electronics) {
    this[i] = electronics[i];
  }
}

// clone method and attributes from board to Mcore.
Mcore.prototype = board;

module.exports = Mcore;