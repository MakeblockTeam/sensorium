import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class Compass extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readCompass, [this.args.port]);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '1110';
  }
}

export default Compass;