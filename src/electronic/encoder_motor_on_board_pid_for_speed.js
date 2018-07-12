import {
  validateNumber
} from '../core/validate';
import {
  composer
} from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';

class PIDForSpeed {
  constructor(slot) {
    this.args = {
      speed: 0,
      slot: validateNumber(slot, 1)
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
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.setEncoderMotorPIDSpeed, [this.args.slot, this.args.speed]);
  }

  run() {
    Control.write(this.protocol);
    return this;
  }
  runAwait() {
    return Control.writeAwait(this.protocol,arguments);
  }
}

export default PIDForSpeed;