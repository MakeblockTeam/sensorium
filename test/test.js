var Sensorium = require("../src/protocol/index");
var SerialPort = require("serialport");

var serialName = '';
var serialPort = null;
var BAUDRATE = 115200;


initSerial(doTest);

function checkConnection(err) {
  console.debug(err.message);
  if (err && (err.message.indexOf('not open') > 0)) {
    console.warn('serial connection lost.');
    serialName = '';
    serialPort = null;
    initSerial();
  }
}

function initSerial(callback) {
  if (serialName === '') {
    // find serial available serial port
    require("serialport").list(function(err, ports) {

      //for PC and raspberry pi
      ports.forEach(function(port) {
        var name = port.comName;
        // console.log(port.comName);
        var NAME = name.toUpperCase();
        if (NAME.indexOf('USB') > 0 || NAME.indexOf('AMA') > 0 || NAME.indexOf('COM') > 0) {
          // console.info('serial port found:', name);
          serialName = name;
          return;
        }
      });

      if (serialPort === null && serialName !== '') {
        serialPort = new SerialPort(serialName, {
          baudrate: BAUDRATE
        });

        serialPort.on('open', function() {
          console.info('serial opened: ', serialName);

          serialPort.on('ready', function() {
            console.info('ready');
          });

          setTimeout(function() {
            callback(serialPort);
          }, 1000);
        });
      }
    });
  }
}


function doTest(serialPort) {
  console.log("everything is ready");

  var transport = {
    send: function(buf) {
      console.log(buf);

      serialPort.write(buf, function(err, results) {
        if (err) {
          console.warn(err);
          return -1;
        }
      });
    },

    onReceived: function(parse) {
      serialPort.on('data', function(buff) {
        parse.doParse(buff);
      });
    }
  };

  var auriga = new Sensorium.Auriga({
    "transport": transport
  });

  var ledPanel = auriga.ledPanel();
  ledPanel.turnOn(100,0,0);
  setTimeout(function() {
    ledPanel.turnOff();
  }, 3000);

  // var ultrasonic = auriga.ultrasonic(7);
  // setInterval(function() {
  //   ultrasonic.onData(function(val) {
  //     console.log(val);
  //   });
  // }, 1000);
}