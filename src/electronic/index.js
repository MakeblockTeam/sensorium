var DcMotor = require('./dc_motor');
var RgbLed = require('./rgb_led');
var Ultrasonic = require('./ultrasonic');
var LedPanel = require('./led_panel');
var Buzzer = require('./Buzzer');

// rgb led 
function rgbLed(port, slot) {
  return new RgbLed(port, slot);
}

function rgbLedOnBoard() {
  return new RgbLed(0, 2);
}

function fourLed(port) {
  return new RgbLed(port, 2);
}

// motor
function dcMotor(port) {
  return new DcMotor(port);
}


function ledPanel() {
  return new LedPanel(...arguments);
}

function ultrasonic() {
  return new Ultrasonic(...arguments);
}

function buzzer() {
  return new Buzzer(...arguments);
}

module.exports = {
  dcMotor,
  rgbLed,
  rgbLedOnBoard,
  fourLed,
  ultrasonic,
  ledPanel,
  buzzer
};