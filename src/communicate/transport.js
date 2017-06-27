/**
 * @fileOverview 存储指令的传输通道：蓝牙，串口，2.4G等，一个单例。
 */
//eg.
import serialPort from 'serialport';
// const serialport = require('serialport');

//单例
let Transport = {
  send: function(buf){
    console.log('transport send: ', buf);
    serialPort.send(buf);
  },

  //old name is onReceive
  addListener: function(pipe){
    serialPort.on('data', function(buff) {
      console.log(buff);
      pipe(buff);
    });
    // ble.startListenReceivedData(function(buff){
    //   pipe(buff);
    // }, function(){
    //   console.log('failure');
    // });
  }
};

export default Transport;



