import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';

class BaseLedMatrix extends Electronic {
  /**
   * LedMatrix 类，led模块
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    }
  }
}

export default BaseLedMatrix;