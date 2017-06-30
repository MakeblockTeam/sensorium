import Mcore from './mcore';
import Orion from './orion';
import Auriga from './auriga';
import MegaPi from './megaPi';

const boards = {
    "Mcore":  Mcore,
    "Orion":  Orion,
    "Auriga": Auriga,
    "MegaPi": MegaPi
}

function Sensorium (boardName, opts) {
  let board = boards[boardName];
  if(typeof board == 'undefined'){
    throw new Error('sorry, the board could not be supported!');
  }
  //TO IMPROVE: 需释放上一次板子实例
  return new board(opts);
}

module.exports = Sensorium;
