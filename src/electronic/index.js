import FourLed from './four_led';
import RgbLed from './rgb_led';
import LedPanelOnBoard from './led_panel_on_board';
import RgbLedOnBoard from './rgb_led_on_board';
import LedMatrixChar from './led_matrix_char';
import LedMatrixTime from './led_matrix_time';
import LedMatrixEmotion from './led_matrix_emotion';
import LedMatrixNumber from './led_matrix_number';
import Buzzer from './buzzer';
import SevenSegment from './seven_segment';
import Shutter from './shutter';
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
  LedMatrixChar,
  LedMatrixTime,
  LedMatrixEmotion,
  LedMatrixNumber,
  Buzzer,
  SevenSegment,
  Shutter,
  Ultrasonic,
};