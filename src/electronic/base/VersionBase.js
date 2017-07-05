import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import Electronic from '../electronic';
import protocolAssembler from '../../protocol/cmd';
import command from '../../communicate/command';

class VersionBase extends Electronic {
  constructor() {
    super();
  }

  getVersion(callback) {
    let buf = Utils.composer(protocolAssembler.readVersion);
    command.execRead(buf, callback);
    return this;
  }
}

export default VersionBase;