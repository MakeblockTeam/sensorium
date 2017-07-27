import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import BaseEncoderMotor from './BaseEncoderMotor';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class EncoderMotor extends BaseEncoderMotor {
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
    this.args.angle = validateNumber(angle, this.args.angle);
    return this;
  }


  static supportStamp(){
    return '0101';
  }
}

export default EncoderMotor;