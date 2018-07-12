import { validateNumber } from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import { SUPPORTLIST } from '../settings';


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

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.setShutter, [this.args.port, this.args.action]);
  }

  /**
   * run shutter with mode set before
   * @return {this}  模块实例
   */
  run() {
    Control.write(this.protocol);
    return this;
  }
  runAndAwait() {
    return Control.writeAndAwait(this.protocol,arguments);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default Shutter;