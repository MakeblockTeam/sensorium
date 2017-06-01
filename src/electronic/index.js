var DcMotor = require('./dc_motor');
var RgbLed = require('./rgb_led');
var Ultrasonic = require('./ultrasonic');
var LedPanel = require('./led_panel');


let electronics = {
  "dcMotor": DcMotor,
  "rgbLed": RgbLed,
  "ultrasonic": Ultrasonic,
  "ledPanel": LedPanel,
};

module.exports = electronics;