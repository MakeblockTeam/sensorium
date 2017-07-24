import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import BaseEncoderMotorPID from './BaseEncoderMotorPID';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class EncoderMotorPIDForSpeed extends BaseEncoderMotorPID {
  constructor() {
    super();
    Object.assign(this.args, {
      speed: 0
    });
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

  static supportStamp(){
    return '010001';
  }
}

export default EncoderMotorPIDForSpeed;