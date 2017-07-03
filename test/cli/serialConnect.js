var SerialPort = require('serialport');
var Sensorium = require('../../browser/sensorium');

var auriga = Sensorium('Auriga');

//获取连接口
//建立连接
//设置主控板 transport
SerialPort.list(function(err, ports) {
  ports.forEach(function(port) {
    let portName = port.comName;
    // console.log(port.comName);
    if (/usb/g.test(portName)) {
      serialPort = new SerialPort(portName, { baudRate: 115200 }); //linux
      serialPort.on('open', function() {
        //设置 auriga transport 方式
        auriga.setTransport({
          send: function(buf) {
            serialPort.write(buf);
          },

          onReceived: function(pipe) {
            serialPort.on('data', function(buff) {
              console.log('[' + buff.join(',') + ']');
            });
          }
        });
      });
      // open errors will be emitted as an error event 
      serialPort.on('error', function(err) {
        console.log('Error: ', err.message);
      });
    }
  });
});

module.exports = auriga;


// auriga.RgbLedOnBoard().green();
// auriga.RgbLedOnBoard().red();
// auriga.RgbLedOnBoard().blue();