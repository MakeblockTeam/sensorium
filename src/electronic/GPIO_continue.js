import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class GPIOContinue extends Electronic {
  constructor(port, key) {
    super();
    this.args = {
      port: defineNumber(port),
      key: defineNumber(key)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readGPIOContinue, [this.args.port, this.args.key]);
    CommandManager.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '00001';
  }
}

export default GPIOContinue;