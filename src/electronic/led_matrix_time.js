import { validateNumber, warnParamNotDate, warnParamNotInList } from '../core/validate';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * LedMatrix sensor module run as 'Time Mode'
 * @extends BaseLedMatrix
 * @private
 */
class LedMatrixTime extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      separator: 0x01,
      hour: 0,
      minute: 0
    });
  }

  /**
   * set separator between hour and minute
   * @param  {String} separator  01 signify `:`, 02 signify ` `
   */
  separator(separator){
    separator = warnParamNotInList(separator, [':', ' ']) || ':';
    separator = separator === ':'? 0x01 : 0x02;
    this.args.separator = separator;
    return this;
  }

  /**
   * set hour
   * @param  {Number} h hour
   */
  hour(h){
    h = Utils.limitValue(h, [0, 23]);
    this.args.hour = validateNumber(h);
    return this;
  }

  /**
   * set minute
   * @param  {Number} m minute
   */
  minute(m){
    m = Utils.limitValue(m, [0, 59]);
    this.args.minute = validateNumber(m);
    return this;
  }

  /**
   * set all data
   * @param  {Number} h minute
   * @param  {String} separator  01 signify `:`, 02 signify ` `
   * @param  {Number} m minute
   */
  matrixData(h, separator, m) {
    this.hour(h)
    this.minute(separator);
    this.separator(m);
    return this;
  }

  run(){
    let type = 0x03;
    let bufArray = [this.args.port, type, this.args.separator, this.args.hour, this.args.minute];
    super.run(bufArray);
    return this;
  }
}

export default LedMatrixTime;