import { validateNumber, validateString } from '../core/validate';
import BaseLedMatrix from './BaseLedMatrix';
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
    this.args.x = validateNumber(x, this.args.x);
    return this;
  }

  /**
   * set the Y axis coordinate of the char
   * @param  {Number} y
   */
  y(y){
    this.args.y = validateNumber(y, this.args.y);
    return this;
  }

  char(str) {
    this.args.char = validateString(str);
    return this;
  }

  /**
   * set content for Matrix panel
   * @param  {String} str
   * @param  {Number} coordinate contains [x, y]
   */
  content(str, coordinate) {
    if(!Array.isArray(coordinate)){
      coordinate = [0, 0];
    }
    //设定坐标
    this.x(coordinate[0]);
    this.y(coordinate[1]);
    return this.char(str);
  }

  run(){
    let type = 0x01;
    let bufArray = [this.args.port, type, this.args.x, this.args.y, this.args.char.length];
    for (let char of this.args.char) {
      bufArray.push(char.charCodeAt());
    }
    // console.log('Matrix panel show chars ===>', bufArray);
    super.run(bufArray);
    return this;
  }
}

export default LedMatrixChar;