// const Mcore = require("./mcore");
// const Orion = require("./orion");
// const Auriga = require("./auriga");
// const MegaPi = require("./megaPi");
// const Neuron = require("./neuron");

const boards = {
    "Mcore":  require("./mcore"),
    "Orion":  require("./orion"),
    "Auriga": require("./auriga"),
    "MegaPi": require("./megaPi"),
    "Neuron": require("./neuron")
}

function Sensorium(boardName, opts){
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
// cmd
module.exports = Sensorium;