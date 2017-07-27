import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class DoubleGPIO extends Electronic {
  constructor(port1, port2) {
    super();
    this.args = {
      port1: validateNumber(port1),
      port2: validateNumber(port2)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readDoubleGPIO, [this.args.port1, this.args.port2]);
    CommandManager.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '00001';
  }
}

export default DoubleGPIO;