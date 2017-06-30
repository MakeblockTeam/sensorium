import { defineNumber } from '../../core/type';
import Electronic from '../electronic';

class MotorBase extends Electronic {

  /**
   * Motor base class
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
   * speed
   * @param  {Number} speed
   * @return {Object} the instance
   */
  speed(speed){
    this.args.speed = defineNumber(speed, 0);
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
    this.speed(0).run();
    return this;
  }
}

export default MotorBase;