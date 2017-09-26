import { validateNumber, validateString } from '../core/validate';
import BaseLedMatrix from './BaseLedMatrix';
/**
 * LedMatrix sensor module run as 'Char Mode'
 * @extends BaseLedMatrix
 */
class LedMatrixChar extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      x: 0,
      y: 7,  //默认将字体垂直居中，输入的 y 值时将在 y=7 上做偏移
      char: '',
      type: BaseLedMatrix.CHAR_TYPE
    });
  }

  /**
   * set the X axis coordinate of the char
   * @param  {Number} x
   * @return {Instance}     @this
   */
  x(x){
    this.args.x = validateNumber(Math.floor(x), this.args.x);
    return this;
  }

  /**
   * set the Y axis coordinate of the char
   * @param  {Number} y
   * @return {Instance}     @this
   */
  y(y){
    this.args.y = validateNumber(Math.floor(y) + 7, this.args.y);
    return this;
  }

  /**
   * set char as the content shown on the led maxtrix
   * @param  {String} str the content string
   * @return {Instance}     @this
   */
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
}

export default LedMatrixChar;