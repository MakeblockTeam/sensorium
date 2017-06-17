var Mcore = require("./mcore");
// var Orion = require("./orion");
// var Auriga = require("./auriga");
// var MegaPi = require("./megaPi");
// var Neuron = require("./neuron");

const boards = {
    "Mcore": Mcore
    // ,"Orion": Orion,
    // "Auriga": Auriga,
    // "MegaPi": MegaPi,
    // "Neuron": Neuron
}

function Sensorium(board){
  //匹配对应的板子
  let board_ = boards[board];
  if(typeof board_ == 'undefined'){
    throw new Error('sorry, the board could not be supported!');
  }
  return new board_();
}


if(typeof window != "undefined") {
  window.Sensorium = Sensorium;
}
// cmd
module.exports = Sensorium;


// 1、创建一个板子
// var mcore = Sensorium('Mcore');

// 创建这个板子并不意味着已经建立了通信
// 也不意味着已经电子模块会自动接入

// 2、建立收发功能
// mcore.setTransport({
//   send: send,
//   receive: receive
// });

// 3、连接电子模块并运行
// mcore.join('RgbLed', 1,1)
//     .r(100)
//     .g(0)
//     .b(0)
//     .turnOn(); //调用底层的 API 发送协议




