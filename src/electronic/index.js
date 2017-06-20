import FourLed from './four_led';
import RgbLed from './rgb_led';
import LedPanelOnBoard from './led_panel_on_board.js';
import RgbLedOnBoard from './rgb_led_on_board';
import Buzzer from './buzzer';
import SevenSegment from './seven_segment';
import Ultrasonic from './ultrasonic';

// motor 未完成
function dcMotor(port) {
  return new DcMotor(port);
}

export default {
  FourLed,
  RgbLed,
  LedPanelOnBoard,
  RgbLedOnBoard,
  Buzzer,
  SevenSegment,
  Ultrasonic
};