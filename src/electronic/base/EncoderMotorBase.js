import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import MotorBase from './MotorBase';
import protocolAssembler from '../../protocol/cmd';
import Command from '../../communicate/command';

class EncoderMotorBase extends MotorBase {
  /**
   * EncoderMotorBase
   * @constructor
   * @param {number} port
   */
  constructor(port, slot) {
    super(port, slot);
    Object.assign(this.args, {
      angle: 0
    });
  }

  /**
   * set angle offset to last angle position
   * @param  {[type]} angle [description]
   * @return {[type]}       [description]
   */
  offsetAngle(angle){
    this.args.angle = defineNumber(angle, 0);
    return this;
  }

  /**
   * dcMoter run
   * @return {Object} the instance
   */
  run() {
    //组装buf
    let buf = Utils.composer(protocolAssembler.setEncoderMotor, [this.args.port, this.args.speed, this.args.angle]);
    //执行
    Command.execWrite(buf);
    return this;
  }

  /**
   * dcMoter run reversely
   * @return {Object} the instance
   */
  runReverse() {
    this.offsetAngle(-1 * this.args.angle);
    return this.run();
  }
}

export default EncoderMotorBase;