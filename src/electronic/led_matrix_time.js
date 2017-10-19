import { validateNumber, warnParamNotDateFormat, warnParamNotInList } from '../core/validate';
import {
  limitValue
} from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
/**
 * LedMatrix sensor module run as 'Time Mode'
 * @extends BaseLedMatrix
 */
class LedMatrixTime extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      separator: 0x01,
      hour: 0,
      minute: 0,
      type: BaseLedMatrix.TIME_TYPE
    });
  }

  /**
   * set separator between hour and minute
   * @param  {String} separator  01 signify `:`, 02 signify ` `
   */
  separator(separator){
    separator = warnParamNotInList(separator, [':', ' ']) || ':';
    separator = separator === ':'? 0x01 : 0x00;
    this.args.separator = separator;
    return this;
  }

  /**
   * set hour
   * @param  {Number} h hour
   */
  hour(h){
    h = limitValue(h, [0, 23]);
    this.args.hour = validateNumber(h, 0);
    return this;
  }

  /**
   * set minute
   * @param  {Number} m minute
   */
  minute(m){
    m = limitValue(m, [0, 59]);
    this.args.minute = validateNumber(m, 0);
    return this;
  }

  /**
   * set content for Matrix panel
   * @param  {String} timeStr time string format should be 'HH:MM' or 'HH MM' or 'H:M'
   */
  content(timeStr) {
    let timeArr = warnParamNotDateFormat(timeStr||'') || [0, ':', 0];
    //利用参数的校验接口
    this.separator(timeArr[1]);
    this.hour(Number(timeArr[0]));
    this.minute(Number(timeArr[2]));
    return this;
  }
}

export default LedMatrixTime;