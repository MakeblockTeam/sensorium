import { validateString } from '../core/validate';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

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
   * set the X axis coordinate of the char
   * @param  {Number} x
   */
  x(x){
    this.args.x = x;
    return this;
  }

  /**
   * set the Y axis coordinate of the char
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

  run(){
    let type = 0x02;
    let byteResult = Utils.byteString2binaryByte(this.args.emotion);
    let bufArray = [this.args.port, type, this.args.x, this.args.y].concat(byteResult);
    super.run(bufArray);
    return this;
  }
}

export default LedMatrixEmotion;