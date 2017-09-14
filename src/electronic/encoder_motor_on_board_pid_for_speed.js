import {
  validateNumber
} from '../core/validate';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

class PIDForSpeed {
  constructor() {
    this.args = {
      speed: 0
    };
  }

  /**
   * set speed
   * @param  {Number} speed 速度
   * @return {[type]}       [description]
   */
  speed(speed) {
    this.args.speed = validateNumber(speed, this.args.speed);
    return this;
  }

  /**
   * 获取协议
   */
  protocol() {
    return Utils.composer(protocolAssembler.setEncoderMotorPIDSpeed, [this.args.speed]);
  }

  run() {
    Control.write(this.protocol());
    return this;
  }
}

export default PIDForSpeed;