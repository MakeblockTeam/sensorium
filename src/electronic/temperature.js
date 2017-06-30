import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Temperature extends Electronic {
  constructor(port, slot) {
    super();
    this.args = {
      port: defineNumber(port),
      slot: defineNumber(slot)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readTemperature, [this.args.port, this.args.slot]);
    command.execRead(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }

}

export default Temperature;