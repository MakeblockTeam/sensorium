import { validateNumber, validateString } from '../core/validate';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * LedMatrix sensor module run as 'Char Mode'
 * @extends BaseLedMatrix
 * @private
 */
class LedMatrixChar extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      x: 0,
      y: 0,
      char: ''
    });
  }

  /**
   * set the X axis coordinate of the char
   * @param  {Number} x 
   */
  x(x){
    this.args.x = validateNumber(x);
    return this;
  }

  /**
   * set the Y axis coordinate of the char
   * @param  {Number} y
   */
  y(y){
    this.args.y = validateNumber(y);
    return this;
  }

  char(str) {
    this.args.char = validateString(str);
    return this;
  }

  /**
   * set all data
   * @param  {Number} x
   * @param  {Number} y
   * @param  {String} str
   */
  matrixData(x = 0, y = 0, str) {
    this.x(x);
    this.y(y);
    this.char(str);
    return this;
  }

  run(){
    let type = 0x01;
    let bufArray = [this.args.port, type, this.args.x, this.args.y, this.args.char.length];
    for (let char of this.args.char) {
      bufArray.push(char.charCodeAt());
    }
    super.run(bufArray);
    return this;
  }
}

export default LedMatrixChar;