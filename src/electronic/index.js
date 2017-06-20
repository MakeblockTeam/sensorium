import Reset from './reset';
import Version from './version';
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
import Temperature from './temperature';
import Light from './light';
import Potentionmeter from './potentionmeter';
import Joystick from './joystick';
import Gyro from './gyro';
import TemperatureOnBoard from './temperature_on_board';
import Pirmotion from './pirmotion';
import LineFollower from './line_follower';
import Compass from './compass';
import Humiture from './humiture';
import Flame from './flame';
import Gas from './gas';
import Touch from './touch';
import FourKeys from './four_keys';
import EncoderMotorOnBoard from './encoder_motor_on_board';

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

  Reset,
  Version,
  Ultrasonic,
  Temperature,
  Light,
  Potentionmeter,
  Joystick,
  Gyro,
  TemperatureOnBoard,
  Pirmotion,
  LineFollower,
  Compass,
  Humiture,
  Flame,
  Gas,
  Touch,
  FourKeys,
  EncoderMotorOnBoard
};