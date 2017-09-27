import { validateString, validateNumber } from '../core/validate';
import BaseLedMatrix from './BaseLedMatrix';
/**
 * LedMatrix sensor module run as 'Emotion Mode'
 * @extends BaseLedMatrix
 */
class LedMatrixEmotion extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      x: 0,
      y: 0,
      emotion: 0,
      type: BaseLedMatrix.EMOTION_TYPE
    });
  }

  /**
   * set the X axis coordinate of the emotion
   * @param  {Number} x
   */
  x(x){
    this.args.x = validateNumber(Math.floor(x), this.args.x);
    return this;
  }

  /**
   * set the Y axis coordinate of the emotion
   * @param  {Number} y
   */
  y(y){
    this.args.y = validateNumber(Math.floor(y), this.args.y);
    return this;
  }

  /**
   * use lattice to describe the emotion
   * @param  {String} emotion lattice '000000100000100001110001001'
   */
  emotion(emotion) {
    // TODO: validate the param
    this.args.emotion = validateString(emotion);
    return this;
  }

  /**
   * set content for Matrix panel
   * @param  {String} emotionStr
   * @param  {Number} coordinate contains [x, y]
   */
  content(emotionStr, coordinate) {
    if(!Array.isArray(coordinate)){
      coordinate = [0, 0];
    }
    //设定坐标
    this.x(coordinate[0]);
    this.y(coordinate[1]);
    return this.emotion(emotionStr);
  }
}

export default LedMatrixEmotion;