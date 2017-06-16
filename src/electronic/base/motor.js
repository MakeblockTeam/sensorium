const { defineNumber, defineString } = require('../core/type');
const Electronic = require('./electronic');

class Motor extends Electronic {

  /**
   * Motor base class
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  constructor(port, slot) {
    super(port, slot);
    this.on = false;
    this.speed = 0;
    this.direction = 1;
  }

  /**
   * move motor at speed
   * @param {number} speed
   */
  start(speed) {
    this.speed = defineNumber(speed);
    this._run();
    return this;
  }

  /**
   * stop motor
   */
  stop() {
    this.speed = 0;
    this._run();
    return this;
  }
}

module.exports = Motor;