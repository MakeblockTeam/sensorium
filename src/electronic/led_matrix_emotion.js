import { validateString } from '../core/validate';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
/**
 * LedMatrix sensor module run as 'Emotion Mode'
 * @extends BaseLedMatrix
 * @private
 */
class LedMatrixEmotion extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      x: 0,
      y: 0,
      emotion: 0
    });
  }

  /**
   * set the X axis coordinate of the emotion
   * @param  {Number} x
   */
  x(x){
    this.args.x = x;
    return this;
  }

  /**
   * set the Y axis coordinate of the emotion
   * @param  {Number} y
   */
  y(y){
    this.args.y = y;
    return this;
  }

  /**
   * use lattice to describe the emotion
   * @param  {String} emotion lattice
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

  run(){
    let type = 0x02;
    let byteResult = Utils.byteString2binaryByte(this.args.emotion);
    let bufArray = [this.args.port, type, this.args.x, this.args.y].concat(byteResult);
    super.run(bufArray);
    return this;
  }
}

export default LedMatrixEmotion;