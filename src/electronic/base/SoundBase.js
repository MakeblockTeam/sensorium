import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import Electronic from '../electronic';
import protocolAssembler from '../../protocol/cmd';
import command from '../../communicate/command';

class SoundBase extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readSound, [this.args.port]);
    command.execRead(buf, callback);
    return this;
  }
}

export default SoundBase;