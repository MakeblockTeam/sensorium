import DcMotor from './dc_motor';
import VirtualJoystick from './virtual_joystick';
import VirtualJoystickForBalance from './virtual_joystick_for_balance';
import StepperMotor from './stepper_motor';
import EncoderMotor from './encoder_motor';
import EncoderMotorOnBoard from './encoder_motor_on_board';  //包含读值和写的接口
import ServoMotor from './servo_motor';
import FourLed from './four_led';
import RgbLed from './rgb_led';
import RgbLedOnBoard from './rgb_led_on_board';
import LedMatrix from './led_matrix';
import Buzzer from './buzzer';
import SevenSegment from './seven_segment';
import Shutter from './shutter';
import SmartServo from './smart_servo';
import EncoderMotorOnBoardPID from './encoder_motor_on_board_pid'; //略不同的实现方式

import Reset from './reset';
import Ultrasonic from './ultrasonic';
import Temperature from './temperature';
import TemperatureOnBoard from './temperature_on_board';
import Light from './light';
import LightOnBoard from './light_on_board';
import Potentionmeter from './potentionmeter';
import Joystick from './joystick'; //读值
import Gyro from './gyro';
import GyroOnBoard from './Gyro_on_board';
import Sound from './sound';
import SoundOnBoard from './sound_on_board';
import Pirmotion from './pirmotion';
import LimitSwitch from './limit_switch';
import LineFollower from './line_follower';
import Compass from './compass';
import Humiture from './humiture';
import Flame from './flame';
import Gas from './gas';
import Touch from './touch';
import FourKeys from './four_keys';
import DigGPIO from './dig_GPIO';
import AnalogGPIO from './analog_GPIO';
import GPIOContinue from './GPIO_continue';
import DoubleGPIO from './double_GPIO';
import Runtime from './runtime';

export default {
  DcMotor,
  VirtualJoystick,
  VirtualJoystickForBalance,
  StepperMotor,
  EncoderMotor,
  EncoderMotorOnBoard,
  ServoMotor,
  FourLed,
  RgbLed,
  RgbLedOnBoard,
  LedMatrix,
  Buzzer,
  SevenSegment,
  Shutter,
  SmartServo,
  EncoderMotorOnBoardPID,
  
  Reset, //实现待验证
  Ultrasonic,
  Temperature,
  TemperatureOnBoard,
  Light,
  LightOnBoard,
  Potentionmeter,
  Joystick,
  Gyro,
  GyroOnBoard,
  Sound,
  SoundOnBoard,
  Pirmotion,
  LineFollower,
  LimitSwitch,
  Compass,
  Humiture,
  Flame,
  Gas,
  Touch,
  FourKeys,
  DigGPIO,
  AnalogGPIO,
  GPIOContinue,
  DoubleGPIO,
  Runtime
};