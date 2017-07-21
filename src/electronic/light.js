import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Light extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readLight, [this.args.port]);
    command.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Light;