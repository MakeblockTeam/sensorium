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
<script>
  //firstly initialize
  var sensorium = new Sensorium();
  var mcore = sensorium.create('Mcore');

  //secondly set transport through `XMLHttpRequest` like this:
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(e) {
    if (this.readyState == 4 && this.status == 200) {
      var buff = JSON.parse(this.response).data;
      Tool.receiveInfo(buff);
      **sensorium.doRecevied(buff);**
    }
  };
  sensorium.setSender(function(buf) {
    Tool.sendInfo(buf);
    let host = 'http://127.0.0.1:8800';
    var data = '/?buf='+ JSON.stringify(buf) + '&sensor=';
    xhr.open("GET", host + data ,true);
    xhr.send(null);
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
    sensorium.doRecevied(buff);
  });
});

// optional mainboards are 'Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino'
var auriga = sensorium.create('Auriga');

// run DcMotor
auriga.DcMotor(1).speed(200).run();

// read ultrasonic sensor's value
auriga.Ultrasonic(3).getData().then(val => console.log(val));
```