import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import MotorBase from './base/MotorBase';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class StepperMotor extends MotorBase {

  constructor(port) {
    super(port);
    Object.assign(this.args, {
      distance: 0
    })
  }

  /**
   * set distance
   * @param  {Number} speed
   * @return {Object} the instance
   */
  distance(distance){
    this.args.distance = defineNumber(distance, 0);
    return this;
  }

  /**
   * run reversely
   * @return {Object} the instance
   */
  reverse() {
    this.speed(-1 * this.args.distance);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setStepperMotor, [this.args.port, this.args.speed, this.args.distance]);
    command.execWrite(buf);
    return this;
  }

  static supportStamp(){
    return '0111';
  }
}

export default StepperMotor;