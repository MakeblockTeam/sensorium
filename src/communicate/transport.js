/**
 * @fileOverview 存储指令的传输通道：蓝牙，串口，2.4G等，一个单例。
 */

//输出单例
let Transport = {
  send: function(buf){
    console.log(buf);
    //serialPort.send(buf);
  },

  //old name is onReceive
  addListener: function(doParse){
    serialPort.on('data', function(buff) {
      console.log(buff);
      // let value = doParse(buff);
    });
    // ble.startListenReceivedData(function(buff){
    //   let value = doParse(buff);
    // }, func_fail);
  }
};

export default Transport;



