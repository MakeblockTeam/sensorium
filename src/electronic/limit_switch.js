import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class LimitSwitch extends Electronic {
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readLimitSwitch, [this.args.port, this.args.slot]);
    CommandManager.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default LimitSwitch;