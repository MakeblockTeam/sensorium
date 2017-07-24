import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';

class BaseLedMatrix extends Electronic {
  /**
   * LedMatrix 类，led模块
   */
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    }
  }
}

export default BaseLedMatrix;