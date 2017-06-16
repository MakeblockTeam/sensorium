var FourLed = require('./four_led');
var RgbLed = require('./rgb_led');
var LedPanelOnBoard = require('./led_panel_on_board.js');
var RgbLedOnBoard = require('./rgb_led_on_board');
var Buzzer = require('./buzzer');
// var Ultrasonic = require('./ultrasonic');

// rgb led 
// function rgbLed(port, slot) {
//   return new RgbLed(port, slot);
// }

// function rgbLedOnBoard() {
//   return new RgbLed(0, 2);
// }

// function fourLed(port) {
//   return new RgbLed(port, 2);
// }

// motor 未完成
function dcMotor(port) {
  return new DcMotor(port);
}


// function ledPanel() {
//   return new LedPanel(...arguments);
// }

// 未完成
function ultrasonic() {
  return new Ultrasonic(...arguments);
}

// function buzzer() {
//   return new Buzzer(...arguments);
// }

module.exports = {
  FourLed,
  RgbLed,
  LedPanelOnBoard,
  RgbLedOnBoard,
  Buzzer
};