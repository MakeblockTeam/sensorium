import {
  validateNumber
} from '../core/validate';
import Electronic from './electronic';
import {
  emotionByteString2binaryByte,
  float32ToBytes,
  composer
} from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

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
      type: null
    }

    this.isClearType = false;
  }

  /**
   * clear Matrix panel content
   * TOIMPROVE: 甚至可以提供接口清除某个区域
   */
  clear() {
    this.isClearType = true;
    return this;
  }

  /**
   * getter of protocol
   */
  get protocol() {
    // bufArray [port, type, x, y, ...byteArray]
    let bufArray = [];
    if (this.isClearType) {
      // if clear
      let byteResult = emotionByteString2binaryByte('0'.repeat(128));
      bufArray = [this.args.port, BaseLedMatrix.EMOTION_TYPE, 0, 0, ...byteResult];
      this.isClearType = false;
    } else {
      switch(this.args.type) {
        case BaseLedMatrix.CHAR_TYPE:
          let charCodeArray = this.args.char.split('').map(char => (char.charCodeAt()));
          bufArray = [this.args.port, this.args.type, this.args.x, this.args.y, this.args.char.length, ...charCodeArray];
          break;
        case BaseLedMatrix.EMOTION_TYPE:
          let byteResult = emotionByteString2binaryByte(this.args.emotion);
          bufArray = [this.args.port, this.args.type, this.args.x, this.args.y, ...byteResult];
          break;
        case BaseLedMatrix.NUMBER_TYPE:
          bufArray = [this.args.port, this.args.type, ...float32ToBytes(this.args.number)];
          break;
        case BaseLedMatrix.TIME_TYPE:
          bufArray = [this.args.port, this.args.type, this.args.separator, this.args.hour, this.args.minute];
          break;
        default:
          break;
      }
    }
    // console.log('bufArray', this.args.type, '['+ bufArray.join(','))
    return composer(protocolAssembler.setLedMatrix, bufArray);
  }

  /**
   * run
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  static get CHAR_TYPE() {
    return 0x01;
  }

  static get EMOTION_TYPE() {
    return 0x02;
  }

  static get TIME_TYPE() {
    return 0x03;
  }

  static get NUMBER_TYPE() {
    return 0x04;
  }
}

export default BaseLedMatrix;