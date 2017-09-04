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
 * @Class BaseLedMatrix
 * @description It is a base Class of LedMatrix
 * @extends Electronic
 */
class BaseLedMatrix extends Electronic {
  /**
   * Create a ledMatrix.
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    }
  }

  /**
   * clear Matrix panel content
   * TOIMPROVE: 甚至可以提供接口清除某个区域
   */
  clear() {
    let type = 0x02;
    let byteResult = Utils.byteString2binaryByte('0'.repeat(128));
    let bufArray = [this.args.port, type, 0, 0].concat(byteResult);
    write(bufArray);
    return this;
  }

  /**
   * @abstract
   * @param  {Array} bufArray  protocol buffer
   * @return {Instance}
   */
  run(bufArray){
    write(bufArray);
    return this;
  }
}

export default BaseLedMatrix;