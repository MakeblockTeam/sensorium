import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Shutter extends Electronic {

  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      action: null
    };
  }

  /**
   * set shutter mode
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */
  action(actionId) {
    this.args.action = defineString(actionId);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setShutter, [this.args.port, this.args.action]);
    command.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Shutter;