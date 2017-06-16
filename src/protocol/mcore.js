const Board = require('../core/Board');
const electronics = require('../electronic/index');

//实现一个板子就注册一个板子名称
class Mcore extends Board{
  constructor(conf){
    //继承 Board
    super(conf);

    // 挂载各电子模块
    for (let apiName in electronics) {
      let func = electronics[apiName];
      if(func.support().charAt(0) === '1'){
        this[apiName] = function() {
          return new func(...arguments);
        }
      }
      
    }

  }
}

// clone method and attributes from board to Mcore.
module.exports = Mcore;