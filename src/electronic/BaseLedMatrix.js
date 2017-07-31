import { validateNumber } from '../core/validate';
import Electronic from './electronic';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class BaseLedMatrix extends Electronic {
  /**
   * LedMatrix 类，led模块
   */
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    }
  }

  run(bufArray){
    let buf = Utils.composer(protocolAssembler.setLedMatrix, bufArray);
    CommandManager.write(buf);
    return this;
  }
}

export default BaseLedMatrix;