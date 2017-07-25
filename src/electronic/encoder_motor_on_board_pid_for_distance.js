import {
  defineNumber
} from '../core/type';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

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
    this.args.distance = defineNumber(distance, this.args.distance);
    return this;
  }

  /**
   * set speed
   * @param  {Number} speed 速度
   */
  speed(speed) {
    this.args.speed = defineNumber(speed, this.args.speed);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setEncoderMotorPIDDistance, [this.args.distance, this.args.speed]);
    CommandManager.write(buf);
    return this;
  }
}

export default EncoderMotorPIDForDistance;