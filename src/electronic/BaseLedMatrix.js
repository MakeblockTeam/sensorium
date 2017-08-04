import { validateNumber } from '../core/validate';
import Electronic from './electronic';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';
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
   * @abstract
   * @param  {Array} bufArray  protocal buffer
   * @return {Instance}
   */
  run(bufArray){
    let buf = Utils.composer(protocolAssembler.setLedMatrix, bufArray);
    CommandManager.write(buf);
    return this;
  }
}

export default BaseLedMatrix;