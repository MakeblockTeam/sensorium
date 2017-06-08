const { defineNumber } = require('../core/type');
const Motor = require('./motor');

class EncoderMotor extends Motor {

  /**
   * DC Motor
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  constructor(port, slot) {
    super(port);
    this.angle = 0;
  }

  offset(value) {
    this.angle = defineNumber(value, this.angle);
  }

  _run() {
    this.api.setEncoderMotor(this.port, this.slot, this.speed, this.angle);
  }
}

module.exports = DcMotor;