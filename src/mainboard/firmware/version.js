import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import protocolAssembler from '../../protocol/cmd';
import CommandManager from '../../communicate/command-manager';

class Version {
  constructor() {
  }

  getVersion(callback) {
    let buf = Utils.composer(protocolAssembler.readVersion);
    CommandManager.read(buf, callback);
    return this;
  }
}

export default new Version();