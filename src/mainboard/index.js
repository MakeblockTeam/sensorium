import Mcore from './mcore';
import Orion from './orion';
import Auriga from './auriga';
import MegaPi from './megaPi';

const boards = {
    "auriga": Auriga,
    "mcore":  Mcore,
    "megapi": MegaPi,
    "orion":  Orion
}

/**
 * 构造函数返回值，改变了构造函数实例
 * Sensorium 原型方法只能统一用静态方法代替
 */
class Sensorium {
  /**
   * @constructor
   * @param {String} boardName 主控板名，忽略大小写
   * @param {Object} opts     (optional)
   */
  constructor(boardName, opts){
    let board = boards[boardName.toLowerCase()];
    if(typeof board == 'undefined'){
      throw new Error(`sorry, the board ${boardName} could not be supported!`);
    }
    return new board(opts);
  }

  static version(){
    return '0.1.5';
  }

  static supportedMainBoard(){
    return Object.keys(boards);
  }
}

module.exports = Sensorium;
