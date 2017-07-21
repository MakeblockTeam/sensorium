import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import protocolAssembler from '../../protocol/cmd';
import Command from '../../communicate/command';

class EncoderMotorBase extends Electronic {
  /**
   * EncoderMotorBase
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  constructor(port, slot) {
    super();
    this.args = {
      port: defineNumber(port),
      slot: defineNumber(slot),
      speed: 0
    };
  }

  /**
   * EncoderMotor run
   * @return {Object} the instance
   */
  run() {
    let buf;
    if(this.args.port == 0){
      buf = Utils.composer(protocolAssembler.setEncoderMotorOnBoard, [this.args.slot, this.args.speed]);
    }else{
      buf = Utils.composer(protocolAssembler.setEncoderMotor, [this.args.port, this.args.slot, this.args.speed, this.args.angle]);
    }
    Command.write(buf);
    return this;
  }

  /**
   * EncoderMotor run reversely
   * @return {Object} the instance
   */
  reverse() {
    this.offsetAngle(-1 * this.args.angle);
    return this.run();
  }
}

export default EncoderMotorBase;