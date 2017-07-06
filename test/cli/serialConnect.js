var SerialPort = require('serialport');

function serialConnect(mainboard) {
  //获取连接口
  //建立连接
  //设置主控板 transport
  SerialPort.list(function(err, ports) {
    let serialportName;
    ports.forEach(function(port) {
      let portName = port.comName;
      // console.log(port.comName);
      if (/usb|ama|com/g.test(portName.toLowerCase())) {
        serialportName = portName;
        return false;
      }
    });
    serialPort = new SerialPort(serialportName, {
      baudRate: 115200
    }); //linux
    serialPort.on('open', function() {
      //设置 mainboard transport 方式
      mainboard.setTransport({
        send: function(buf) {
          console.log('send ----->', buf);
          serialPort.write(buf);
        },

        onReceived: function(pipe) {
          console.log('onReceived binder <-----');
          serialPort.on('data', function(buff) {
            console.log('onReceived then pipe ----->', '[' + buff.join(',') + ']');
            pipe(buff);
          });
        }
      });
    });
    // open errors will be emitted as an error event 
    serialPort.on('error', function(err) {
      console.log('Error: ', err.message);
    });
  });

}

module.exports = serialConnect;