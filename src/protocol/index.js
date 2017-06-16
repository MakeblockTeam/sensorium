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
  //对应的板子自带了电子模块 api
  return function (transportInterface){
    return new board_(transportInterface);
  }
}


if(typeof window != "undefined") {
  window.Sensorium = Sensorium;
}
// cmd
module.exports = Sensorium;

// {//board
//   send = transportInterface.send;
//   receive = transportInterface.receive;
//   // 板子调用电子模块 api
//   // api 将启用 send、receive 方法收发数据
// }

// //创建一个板子
// var mcore = Sensorium('Mcore');

// //创建这个板子时就已经装好了该板子的电子模块接口

// //装上收发功能
// mcore({
//   send: send,
//   receive: receive
// });

// mcore.rgbLed(1,1)
//     .r(100)
//     .g(0)
//     .b(0)
//     .turnOn(); //调用底层的 API 发送协议




