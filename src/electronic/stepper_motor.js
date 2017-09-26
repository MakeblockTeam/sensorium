import {
  validateNumber
} from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import BaseMotor from './BaseMotor';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import {
  SUPPORTLIST
} from '../settings';

/**
 * StepperMotor sensor module
 * @extends BaseMotor
 */
class StepperMotor extends BaseMotor {

  constructor(port) {
    super(port);
    Object.assign(this.args, {
      distance: 0,
      direction: 1
    })
  }

  /**
   * set distance
   * @param  {Number} speed
   * @return {Instance} @this
   */
  distance(distance) {
    this.args.distance = validateNumber(distance, 0);
    return this;
  }

  /**
   * set direction of stepper motor rotate
   * @param  {Number} type  type is 1 or -1. 1 means rotate clockwise, and -1 means anticlockwise
   * @return {Instance} @this
   */
  direction(type) {
    if (type !== -1) {
      type = 1;
    }
    this.args.direction = type;
    return this;
  }

  /**
   * run reversely
   * @return {Instance} @this
   */
  reverse() {
    this.speed(-1 * this.args.distance);
    return this;
  }

  /**
   * getter of protocol
   */
  get protocol() {
    let buf = composer(protocolAssembler.setStepperMotor, [this.args.port, this.args.speed,
      this.args.distance * this.args.direction]);
    return buf;
  }

  /**
   * run
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '0111');
  }
}

export default StepperMotor;