import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import BaseEncoderMotorPID from './BaseEncoderMotorPID';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class EncoderMotorPIDForDoubleMotor extends BaseEncoderMotorPID {
  constructor() {
    super();
    Object.assign(this.args, {
      distance: 0,
      direction: 1,
      speed: 0
    });
  }

  forward(){
    this.args.direction = 1;
    return this;
  }
  backward(){
    this.args.direction = 2;
    return this;
  }
  turnleft(){
    this.args.direction = 3;
    return this;
  }
  turnright(){
    this.args.direction = 4;
    return this;
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
   * @param  {Number} speed [description]
   * @return {[type]}       [description]
   */
  speed(speed) {
    this.args.speed = defineNumber(speed, this.args.speed);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setEncoderMotorPIDDoubleMotor, 
      [this.args.direction, this.args.distance, this.args.speed]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '010000';
  }
}

export default EncoderMotorPIDForDoubleMotor;