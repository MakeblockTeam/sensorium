const Sensorium = require('../browser/sensorium');
const serialConnect = require('./cli/serialConnect');
const sensorium = new Sensorium();
serialConnect(sensorium);
const auriga = sensorium.create('Auriga');
auriga.Ultrasonic(6).getData().then(val=>console.log('传感器获取值', val), msg=>console.log('error', msg));

auriga.RgbLedOnBoard().red();


// const Sensorium = require('../browser/sensorium');
// const serialConnect = require('./cli/serialConnect');
// const sensorium = new Sensorium();
// serialConnect(sensorium);
// const mcore = sensorium.create('Mcore');
// mcore.RgbLedOnBoard().position(1).red();
// mcore.Ultrasonic(3).getData().then(val=>console.log('传感器获取值', val), msg=>console.log('error', msg));

// sensorium.readFirmwareInfo(function(name, version){console.log('mainboard is --->', name, 'version is --->', version)})
// auriga.RgbLedOnBoard().green();
// auriga.RgbLedOnBoard().red();
// auriga.RgbLedOnBoard().blue();
// auriga.RgbLedOnBoard().white();
// auriga.Buzzer().tone('C2').beat(500).run()
// auriga.Buzzer().tone('C5').beat(500).run()
// auriga.RgbLed(0,2).green().red().white()

