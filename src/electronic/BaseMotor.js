import { validateNumber } from '../core/validate';
import Electronic from './electronic';
/**
 * @description It is a base Class of Motor
 * @extends Electronic
 */
class BaseMotor extends Electronic {
  /**
   * Create a motor
   * @param {Number} port
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      speed: 0
    };
  }

  /**
   * Set speed to the motor
   * @param  {Number} speed
   * @return {Instance} the motor instance
   */
  speed(speed){
    this.args.speed = validateNumber(speed, 0);
    return this;
  }

  /**
   * This interface should be overwrite by child class
   * @abstract
   */
  run() {
    return this;
  }

  /**
   * Stop motor
   * @return {Instance} the motor instance
   */
  stop() {
    return this.speed(0).run();
  }
}

export default BaseMotor;