import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class DoubleGPIO extends Electronic {
  constructor(port1, port2) {
    super();
    this.args = {
      port1: defineNumber(port1),
      port2: defineNumber(port2)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readDoubleGPIO, [this.args.port1, this.args.port2]);
    command.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '00001';
  }
}

export default DoubleGPIO;