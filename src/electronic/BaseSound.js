import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class BaseSound extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readSound, [this.args.port]);
    CommandManager.read(buf, callback);
    return this;
  }
}

export default BaseSound;