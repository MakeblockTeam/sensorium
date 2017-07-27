import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class Potentionmeter extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readPotentionmeter, [this.args.port]);
    CommandManager.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Potentionmeter;