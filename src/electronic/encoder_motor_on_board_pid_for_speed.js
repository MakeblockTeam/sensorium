import {
  defineNumber
} from '../core/type';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

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
    this.args.speed = defineNumber(speed, this.args.speed);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setEncoderMotorPIDSpeed, [this.args.speed]);
    CommandManager.write(buf);
    return this;
  }
}

export default PIDForSpeed;