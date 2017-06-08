const { defineNumber, defineString } = require('../core/type');
const Electronic = require('./electronic');

class DcMotor extends Electronic {

  /**
   * DcMotor类，直流电机模块
   * @constructor
   * @param {number} port - 电子模块port口
   * @param {number} slot - 电子模块slot口
   */
  constructor(port, slot) {
    super(port, slot);
    this.on = false;
    this.speed = 0;
    this.direction = 1;
  }

  /**
   * 直流电机启动
   * @param {number} speed - 启动速度
   */
  start(speed) {
    this.speed = defineNumber(speed);
    this._run();
    return this;
  }

  /**
   * 直流电机停止
   */
  stop() {
    this.speed = 0;
    this._run();
    return this;
  }

  _run() {
    this.api.setDcMotor(this.port, this.speed);
  }
}

module.exports = DcMotor;