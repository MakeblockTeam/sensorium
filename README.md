#sensorium
sensorium is an api library for makeblock mainboards. It includes `mcore`, `orion`, `auriga` and  `megapi`.

You can use it in browser, node enviroment.

# Install

```
npm install --save
```

# Generate library
Generate `sensorium.js` width npm. The target file is in `/browser`.

```
webpack
```

# Usage

## browser
included the file `/browser/sensorium.js` in your project.
actually you also need [serialport.js](https://www.npmjs.com/package/serialport) included.
```
<script src="sensorium.js"></script>
<script src="serialport.js"></script>
<script>

  //firstly initialize the mainboard
  var mcore = sensorium('Mcore');

  //secondly set transport through bluetooth or serialport like this:
  var serialPort = new SerialPort('/dev/ttyUSB0', { baudRate:115200 });

  // set speed and run the motor.
  mcore.DcMotor(1).speed(200).run();

  // or run with 1000ms and then run reversely
  mcore.DcMotor(1).speed(200).run();
  setTimeout(function(){
    mcore.DcMotor(1).reverse().run();
  }, 1000);

  // read ultrasonic sensor's value
  mcore.Ultrasonic(3).getData(function(val){
    console.log(val);
  });
</script>

```
## node
firstly install the dependencies or devDependencies like this:
```
npm install sensorium --save-dev
npm install serialport --save-dev
```

```js
var sensorium = require("sensorium");
var SerialPort = require('serialport');
var serialPort = new SerialPort('/dev/ttyUSB0', { baudRate:115200 });

var transport = {
  send: function(buf) {
    serialPort.write(buf, function(err, results) {
      if (err) {
        console.warn(err);
        return -1;
      }
    });
  },

  onReceived: function(pipe) {
    serialPort.on('data', function(buff) {
      pipe(buff);
    });
  }
};

var auriga = sensorium('Auriga');   // 可选的主板有 'Mcore', 'Auriga', 'MegaPi', 'Orion', 'Arduino'
auriga.setTransport(transport);

// run DcMotor
auriga.DcMotor(1).speed(200).run();

// read ultrasonic sensor's value
auriga.Ultrasonic(3).getData(function(val){
  console.log(val);
});

```