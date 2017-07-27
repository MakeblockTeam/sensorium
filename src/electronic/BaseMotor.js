import { validateNumber } from '../core/validate';
import Electronic from './electronic';

class BaseMotor extends Electronic {

  /**
   * Motor base class
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot),
      speed: 0
    };
  }

  /**
   * speed
   * @param  {Number} speed
   * @return {Object} the instance
   */
  speed(speed){
    this.args.speed = validateNumber(speed, 0);
    return this;
  }

  /**
   * this interface does nothing
   */
  run() {
    return this;
  }

  /**
   * stop motor
   */
  stop() {
    return this.speed(0).run();
  }
}

export default BaseMotor;