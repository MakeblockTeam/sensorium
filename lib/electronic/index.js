'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dc_motor = require('./dc_motor');

var _dc_motor2 = _interopRequireDefault(_dc_motor);

var _virtual_joystick = require('./virtual_joystick');

var _virtual_joystick2 = _interopRequireDefault(_virtual_joystick);

var _virtual_joystick_for_balance = require('./virtual_joystick_for_balance');

var _virtual_joystick_for_balance2 = _interopRequireDefault(_virtual_joystick_for_balance);

var _stepper_motor = require('./stepper_motor');

var _stepper_motor2 = _interopRequireDefault(_stepper_motor);

var _encoder_motor = require('./encoder_motor');

var _encoder_motor2 = _interopRequireDefault(_encoder_motor);

var _encoder_motor_on_board = require('./encoder_motor_on_board');

var _encoder_motor_on_board2 = _interopRequireDefault(_encoder_motor_on_board);

var _servo_motor = require('./servo_motor');

var _servo_motor2 = _interopRequireDefault(_servo_motor);

var _four_led = require('./four_led');

var _four_led2 = _interopRequireDefault(_four_led);

var _rgb_led = require('./rgb_led');

var _rgb_led2 = _interopRequireDefault(_rgb_led);

var _led_panel_on_board = require('./led_panel_on_board');

var _led_panel_on_board2 = _interopRequireDefault(_led_panel_on_board);

var _rgb_led_on_board = require('./rgb_led_on_board');

var _rgb_led_on_board2 = _interopRequireDefault(_rgb_led_on_board);

var _led_matrix_char = require('./led_matrix_char');

var _led_matrix_char2 = _interopRequireDefault(_led_matrix_char);

var _led_matrix_time = require('./led_matrix_time');

var _led_matrix_time2 = _interopRequireDefault(_led_matrix_time);

var _led_matrix_emotion = require('./led_matrix_emotion');

var _led_matrix_emotion2 = _interopRequireDefault(_led_matrix_emotion);

var _led_matrix_number = require('./led_matrix_number');

var _led_matrix_number2 = _interopRequireDefault(_led_matrix_number);

var _buzzer = require('./buzzer');

var _buzzer2 = _interopRequireDefault(_buzzer);

var _seven_segment = require('./seven_segment');

var _seven_segment2 = _interopRequireDefault(_seven_segment);

var _shutter = require('./shutter');

var _shutter2 = _interopRequireDefault(_shutter);

var _reset = require('./reset');

var _reset2 = _interopRequireDefault(_reset);

var _ultrasonic = require('./ultrasonic');

var _ultrasonic2 = _interopRequireDefault(_ultrasonic);

var _temperature = require('./temperature');

var _temperature2 = _interopRequireDefault(_temperature);

var _light = require('./light');

var _light2 = _interopRequireDefault(_light);

var _potentionmeter = require('./potentionmeter');

var _potentionmeter2 = _interopRequireDefault(_potentionmeter);

var _joystick = require('./joystick');

var _joystick2 = _interopRequireDefault(_joystick);

var _gyro = require('./gyro');

var _gyro2 = _interopRequireDefault(_gyro);

var _Gyro_on_board = require('./Gyro_on_board');

var _Gyro_on_board2 = _interopRequireDefault(_Gyro_on_board);

var _sound = require('./sound');

var _sound2 = _interopRequireDefault(_sound);

var _sound_on_board = require('./sound_on_board');

var _sound_on_board2 = _interopRequireDefault(_sound_on_board);

var _temperature_on_board = require('./temperature_on_board');

var _temperature_on_board2 = _interopRequireDefault(_temperature_on_board);

var _pirmotion = require('./pirmotion');

var _pirmotion2 = _interopRequireDefault(_pirmotion);

var _limit_switch = require('./limit_switch');

var _limit_switch2 = _interopRequireDefault(_limit_switch);

var _line_follower = require('./line_follower');

var _line_follower2 = _interopRequireDefault(_line_follower);

var _compass = require('./compass');

var _compass2 = _interopRequireDefault(_compass);

var _humiture = require('./humiture');

var _humiture2 = _interopRequireDefault(_humiture);

var _flame = require('./flame');

var _flame2 = _interopRequireDefault(_flame);

var _gas = require('./gas');

var _gas2 = _interopRequireDefault(_gas);

var _touch = require('./touch');

var _touch2 = _interopRequireDefault(_touch);

var _four_keys = require('./four_keys');

var _four_keys2 = _interopRequireDefault(_four_keys);

var _dig_GPIO = require('./dig_GPIO');

var _dig_GPIO2 = _interopRequireDefault(_dig_GPIO);

var _analog_GPIO = require('./analog_GPIO');

var _analog_GPIO2 = _interopRequireDefault(_analog_GPIO);

var _GPIO_continue = require('./GPIO_continue');

var _GPIO_continue2 = _interopRequireDefault(_GPIO_continue);

var _double_GPIO = require('./double_GPIO');

var _double_GPIO2 = _interopRequireDefault(_double_GPIO);

var _runtime = require('./runtime');

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  DcMotor: _dc_motor2.default,
  VirtualJoystick: _virtual_joystick2.default,
  VirtualJoystickForBalance: _virtual_joystick_for_balance2.default,
  StepperMotor: _stepper_motor2.default,
  EncoderMotor: _encoder_motor2.default,
  EncoderMotorOnBoard: _encoder_motor_on_board2.default,
  ServoMotor: _servo_motor2.default,
  FourLed: _four_led2.default,
  RgbLed: _rgb_led2.default,
  LedPanelOnBoard: _led_panel_on_board2.default,
  RgbLedOnBoard: _rgb_led_on_board2.default,
  LedMatrixChar: _led_matrix_char2.default,
  LedMatrixTime: _led_matrix_time2.default,
  LedMatrixEmotion: _led_matrix_emotion2.default,
  LedMatrixNumber: _led_matrix_number2.default,
  Buzzer: _buzzer2.default,
  SevenSegment: _seven_segment2.default,
  Shutter: _shutter2.default,

  Reset: _reset2.default, //实现待验证
  Ultrasonic: _ultrasonic2.default,
  Temperature: _temperature2.default,
  Light: _light2.default,
  Potentionmeter: _potentionmeter2.default,
  Joystick: _joystick2.default,
  Gyro: _gyro2.default,
  GyroOnBoard: _Gyro_on_board2.default,
  Sound: _sound2.default,
  SoundOnBoard: _sound_on_board2.default,
  TemperatureOnBoard: _temperature_on_board2.default,
  Pirmotion: _pirmotion2.default,
  LineFollower: _line_follower2.default,
  LimitSwitch: _limit_switch2.default,
  Compass: _compass2.default,
  Humiture: _humiture2.default,
  Flame: _flame2.default,
  Gas: _gas2.default,
  Touch: _touch2.default,
  FourKeys: _four_keys2.default,
  DigGPIO: _dig_GPIO2.default,
  AnalogGPIO: _analog_GPIO2.default,
  GPIOContinue: _GPIO_continue2.default,
  DoubleGPIO: _double_GPIO2.default,
  Runtime: _runtime2.default
}; //读值
//包含读值和写的接口