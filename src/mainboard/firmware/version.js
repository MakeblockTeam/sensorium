import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import protocolAssembler from '../../protocol/cmd';
import command from '../../communicate/command';

class Version {
  constructor() {
  }

  getVersion(callback) {
    let buf = Utils.composer(protocolAssembler.readVersion);
    command.execRead(buf, callback);
    return this;
  }
}

export default new Version();