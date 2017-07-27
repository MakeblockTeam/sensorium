import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class Runtime extends Electronic {
  constructor() {
    super();
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readRuntime);
    CommandManager.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '00001';
  }
}

export default Runtime;