import { validateNumber } from '../core/validate';
import Electronic from './electronic';

class BaseMotor extends Electronic {

  /**
   * Motor base class
   * @constructor
   * @param {number} port
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
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