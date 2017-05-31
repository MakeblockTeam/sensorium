import DcMotor from './dc_motor';
import RgbLed from './rgb_led';
import Ultrasonic from './ultrasonic';


let electronics = {
  "dcMotor": DcMotor,
  "rgbLed": RgbLed,
  "ultrasonic": Ultrasonic
};

export default electronics;