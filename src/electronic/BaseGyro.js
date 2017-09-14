import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * @description It is a base Class of Gyro
 * @extends Electronic
 * @private
 */
class BaseGyro extends Electronic {
  /**
   * Create a gyro.
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      axis: 0
    };
  }

  /**
   * Set axis in order to get the coordinates by getData
   * @param  {Number} axis X轴(01)  Y轴(02)  Z轴(03)
   * @return {Instance}      return instance
   */
  axis(axis){
    this.args.axis = validateNumber(axis, this.args.axis);
    return this;
  }

  /**
   * 获取协议
   */
  protocol() {
    const buf = Utils.composer(protocolAssembler.readGyro, [this.args.port, this.args.axis]);
    return buf;
  }

  /**
   * Get data of Gyro sensor
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol());
  }
}

export default BaseGyro;