import {
  validateNumber
} from '../core/validate';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

class EncoderMotorPIDForDistance {
  constructor() {
    this.args = {
      distance: 0,
      speed: 0
    };
  }

  /**
   * set distance
   * @param  {Number} distance 位移
   */
  distance(distance) {
    this.args.distance = validateNumber(distance, this.args.distance);
    return this;
  }

  /**
   * set speed
   * @param  {Number} speed 速度
   */
  speed(speed) {
    this.args.speed = validateNumber(speed, this.args.speed);
    return this;
  }

  /**
   * 获取协议
   */
  protocol() {
    return Utils.composer(protocolAssembler.setEncoderMotorPIDDistance, [this.args.distance, this.args.speed]);
  }

  /**
   * run
   */
  run() {
    Control.write(this.protocol());
    return this;
  }
}

export default EncoderMotorPIDForDistance;