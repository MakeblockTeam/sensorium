import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Humiture extends Electronic {
  constructor(port, type) {
    super();
    this.args = {
      port: defineNumber(port),
      type: defineNumber(type)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readHumiture, [this.args.port, this.args.type]);
    command.execRead(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Humiture;