var DcMotor = require('./dc_motor');
var RgbLed = require('./rgb_led');
var Ultrasonic = require('./ultrasonic');
var LedPanel = require('./led_panel');
var Buzzer = require('./Buzzer');


function dcMotor() {
  return new DcMotor(...arguments);
}

function rgbLed() {
  return new RgbLed(...arguments);
}

function rgbLedOnBoard() {
  return new RgbLed(0, 2);
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
  ultrasonic,
  ledPanel,
  buzzer
};