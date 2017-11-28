#sensorium
sensorium is an api library for makeblock mainboards. It includes `mcore`, `orion`, `auriga` and  `megapi`.
You can use it in browser, node enviroment.

# Install
```
npm install sensorium --save
```

# Usage
## Browser
Includ the source `/browser/sensorium.js` of `sensorium.js` in the root directory of project.
Actually you also need install [sensorium-server](https://www.npmjs.com/package/sensorium-server)

```
npm install sensorium-server -g

```
Then create a HTML page in the root directory, index.html for example, and type in the following code:
```
<script src="./browser/sensorium.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
<script>
  //firstly initialize
  var sensorium = new Sensorium();
  var mcore = sensorium.create('Mcore');

  //secondly set transport through `socket.io` like this:
  var socket = io.connect('http://localhost:8800');
  socket.on('sensor2web', function (data) {
      sensorium.doReceived(JSON.parse(data));
  });
  sensorium.setSender(function(buf) {
      socket.emit('web2sensor', { buf: JSON.stringify(buf), sensor: 'None' });
  });

  // set speed and run the motor.
  mcore.DcMotor(1).speed(200).run();

  // read ultrasonic sensor's value
  mcore.Ultrasonic(3).getData((val) => console.log(val));
</script>

```
## Nodejs
Firstly, install the dependencies or devDependencies like this:
```
npm install sensorium --save-dev
npm install serialport --save-dev
```

Touch a js file just like test.js, type in codes as follows:

```
var Sensorium = require("sensorium");
var SerialPort = require('serialport');

var sensorium = new Sensorium();
// Visit [serialport](https://www.npmjs.com/package/serialport) for detail usage
var serialPort = new SerialPort('/dev/ttyUSB0', { baudRate:115200 });

serialPort.on('open', function() {
  sensorium.setSender(function(buf) {
    console.log('send ----->', buf);
    serialPort.write(buf);
  });
  serialPort.on('data', function(buff) {
    console.log('-----> Received data', '[' + buff.join(',') + ']');
    sensorium.doReceived(buff);
  });
});

// optional mainboards are 'Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino'
var auriga = sensorium.create('Auriga');

// run DcMotor
auriga.DcMotor(1).speed(200).run();

// read ultrasonic sensor's value
auriga.Ultrasonic(3).getData().then(val => console.log(val));
```