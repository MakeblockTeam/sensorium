import Mcore from './mcore';
import Orion from './orion';
import Auriga from './auriga';
import MegaPi from './megaPi';
import Neuron from './neuron';

const boards = {
    "Mcore":  Mcore,
    "Orion":  Orion,
    "Auriga": Auriga,
    "MegaPi": MegaPi,
    "Neuron": Neuron
}

function Sensorium (boardName, opts){
  //匹配对应的板子
  let board = boards[boardName];
  if(typeof board == 'undefined'){
    throw new Error('sorry, the board could not be supported!');
  }
  //TO IMPROVE: 需释放上一次板子实例
  return new board(opts);
}

if(typeof window != "undefined") {
  window.Sensorium = Sensorium;
}
// es6
export default Sensorium;
// module.exports = Sensorium;
