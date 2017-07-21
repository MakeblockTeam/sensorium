import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class EncoderMotor extends Electronic {
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