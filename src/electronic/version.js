import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Version extends Electronic {
  constructor(callback) {
    super();
    this.version(callback);
  }

  version(callback) {
    let buf = Utils.composer(protocolAssembler.readVersion);
    command.execRead(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default Version;