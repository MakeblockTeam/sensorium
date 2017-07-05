import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import EncoderMotorBase from './base/EncoderMotorBase';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class EncoderMotor extends EncoderMotorBase {
  constructor(port, slot) {
    super(port, slot);
    Object.assign(this.args, {
      angle: 0
    });
  }

  /**
   * set angle offset to last angle position
   * @param  {Number} angle [description]
   * @return {[type]}       [description]
   */
  offsetAngle(angle){
    this.args.angle = defineNumber(angle, this.args.angle);
    return this;
  }


  static supportStamp(){
    return '0101';
  }
}

export default EncoderMotor;