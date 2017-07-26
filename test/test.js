const Sensorium = require('../browser/sensorium');
const serialConnect = require('./cli/serialConnect');
const sensorium = new Sensorium();
serialConnect(sensorium);
const auriga = sensorium.create('Auriga');
auriga.Ultrasonic(6).getData(function(val){console.log('传感器获取值', val)})


const Sensorium = require('../browser/sensorium');
const serialConnect = require('./cli/serialConnect');
const sensorium = new Sensorium();
serialConnect(sensorium);
const mcore = sensorium.create('Mcore');
mcore.Ultrasonic(3).getData(function(val){console.log('传感器获取值', val)})

// sensorium.readFirmwareInfo(function(name, version){console.log('mainboard is --->', name, 'version is --->', version)})
// auriga.RgbLedOnBoard().green();
// auriga.RgbLedOnBoard().red();
// auriga.RgbLedOnBoard().blue();
// auriga.RgbLedOnBoard().white();
// auriga.Buzzer().tone('C2').beat(500).run()
// auriga.Buzzer().tone('C5').beat(500).run()
// auriga.RgbLed(0,2).green().red().white()
// auriga.Ultrasonic(6).getData(function(buf){console.log(buf)})
// var n = 0; while(n < 257){n++; auriga.Ultrasonic(6).getData(function(val){console.log('sensor value ---->', val);})}
// var n = 0; while(n < 254){n++; auriga.Ultrasonic(6).getData(function(val){console.log('sensor value ---->', val);})}
// var n = 0; while(n < 20){n++; auriga.Ultrasonic(6).getData(function(val){console.log('sensor value ---->', val)})}

