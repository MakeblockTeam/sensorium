const Sensorium = require('../browser/sensorium');
const serialConnect = require('./cli/serialConnect');
const auriga = new Sensorium('Auriga');
serialConnect(auriga);
auriga.Ultrasonic(6).getData(function(val){console.log('传感器获取值', val)})

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

