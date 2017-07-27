import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import BaseMotor from './BaseMotor';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class StepperMotor extends BaseMotor {

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
    this.args.distance = validateNumber(distance, 0);
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
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '0111';
  }
}

export default StepperMotor;