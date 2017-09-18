import Utils from '../core/utils';
import BaseMotor from './BaseMotor';
import { validateNumber } from '../core/validate';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * @description It is a base Class of EncoderMotor
 * @extends BaseMotor
 * @private
 */
class BaseEncoderMotor extends BaseMotor {
  /**
   * create a baseEncoderMotor
   * @param {number} port
   * @param {number} slot
   */
  constructor(port, slot) {
    super(port);
    Object.assign(this.args, {
      slot: validateNumber(slot),
      angle: 0
    })
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

  /**
   * getter of protocol
   */
  get protocol() {
    let buf;
    if(this.args.port == 0){
      buf = Utils.composer(protocolAssembler.setEncoderMotorOnBoard, [this.args.slot, this.args.speed]);
    }else{
      buf = Utils.composer(protocolAssembler.setEncoderMotor, [this.args.slot, this.args.speed, this.args.angle]);
    }
    return buf;
  }

  /**
   * EncoderMotor run
   * @return {Object} the instance
   */
  run() {
    Control.write(this.protocol);
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

export default BaseEncoderMotor;