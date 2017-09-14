import { validateNumber } from '../core/validate';
import Electronic from './electronic';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
/**
 * @private
 */
function write(bufArray) {
  let buf = Utils.composer(protocolAssembler.setLedMatrix, bufArray);
  Control.write(buf);
}
/**
 * @description It is a base Class of LedMatrix
 * @extends Electronic
 * @private
 */
class BaseLedMatrix extends Electronic {
  /**
   * Create a ledMatrix.
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      type: null,
      // char
      char: null,
      // emotion
      emotion: null,
      // number
      number: null,
      // time
      separator: null,
      hour: null,
      minute: null
    }

    this.isClear = false;
  }

  /**
   * clear Matrix panel content
   * TOIMPROVE: 甚至可以提供接口清除某个区域
   */
  clear() {
    this.isClear = true;
    return this;
  }

  /**
   * 获取协议
   */
  protocol() {
    // bufArray [port, type, x, y, ...byteArray]
    let bufArray = [];

    if (this.isClear) {
      // if clear
      let byteResult = Utils.emotionByteString2binaryByte('0'.repeat(128));
      bufArray = [this.args.port, BaseLedMatrix.EMOTION_TYPE(), 0, 0, ...byteResult];
    } else if (this.args.char !== null) {
      // if char mode
      const charCodeArray = this.args.char.slice('').map(char => (char.charCodeAt()));
      bufArray = [this.args.port, this.args.type, this.args.x, this.args.y, this.args.char.length, ...charCodeArray];
    } else if (this.args.emotion !== null) {
      // if emotion mode
      const byteResult = Utils.emotionByteString2binaryByte(this.args.emotion);
      bufArray = [this.args.port, this.args.type, this.args.x, this.args.y, ...byteResult];
    } else if (this.args.number !== null) {
      // if number mode
      bufArray = [this.args.port, this.args.type, ...Utils.float32ToBytes(this.args.number)];
    } else if (this.args.separator !== null) {
      // if time mode
      bufArray = [this.args.port, this.args.type, this.args.separator, this.args.hour, this.args.minute];
    }
    
    const buf = Utils.composer(protocolAssembler.setLedMatrix, bufArray);;
    return buf;
  }

  /**
   * run
   */
  run(){
    Control.write(this.protocol());
    this.isClear = false;
    return this;
  }

  static CHAR_TYPE () {
    return 0x01;
  }

  static EMOTION_TYPE () {
    return 0x02;
  }

  static TIME_TYPE () {
    return 0x03;
  }
  
  static NUMBER_TYPE () {
    return 0x04;
  }
}

export default BaseLedMatrix;