import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class Temperature extends Electronic {
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot)
    };
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readTemperature, [this.args.port, this.args.slot]);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '1111';
  }

}

export default Temperature;