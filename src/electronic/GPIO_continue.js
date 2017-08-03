import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class GPIOContinue extends Electronic {
  constructor(port, key) {
    super();
    this.args = {
      port: validateNumber(port),
      key: validateNumber(key)
    };
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readGPIOContinue, [this.args.port, this.args.key]);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '00001';
  }
}

export default GPIOContinue;