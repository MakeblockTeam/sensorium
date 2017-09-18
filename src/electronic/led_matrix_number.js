import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
/**
 * LedMatrix sensor module run as 'Number Mode'
 * @extends BaseLedMatrix
 */
class LedMatrixNumber extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      number: 0,
      type: super.NUMBER_TYPE
    });
  }

  /**
   * set number
   * @param  {Number} number the number you want show on the led matrix
   */
  number(number) {
    this.args.number = validateNumber(number);
    return this;
  }

  /**
   * set content for Matrix panel
   * @param  {Number} number
   */
  content(number) {
    return this.number(number);
  }
}

export default LedMatrixNumber;