const Motor = require('./motor');

class DcMotor extends Motor {

  /**
   * DC Motor
   * @constructor
   * @param {number} port
   * @param {number} slot
   */
  constructor(port) {
    super(port);
  }

  _run() {
    this.api.setDcMotor(this.port, this.speed);
  }
}

module.exports = DcMotor;