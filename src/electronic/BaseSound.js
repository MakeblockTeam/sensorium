import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class BaseSound extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readSound, [this.args.port]);
    return await CommandManager.read(buf);
  }
}

export default BaseSound;