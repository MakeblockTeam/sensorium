import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class FourKeys extends Electronic {
  constructor(port, key) {
    super();
    this.args = {
      port: defineNumber(port),
      key: defineString(key)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readFourKeys, [this.args.port, this.args.key]);
    command.execRead(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default FourKeys;