import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * Shutter sensor module
 * @extends Electronic
 */
class Shutter extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      action: null
    };
  }

  /**
   * set shutter mode
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */
  //TODO: 本API易用性还得改进
  action(actionId) {
    this.args.action = validateNumber(actionId);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setShutter, [this.args.port, this.args.action]);
    Control.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Shutter;