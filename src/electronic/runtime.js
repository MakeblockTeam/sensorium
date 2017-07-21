import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Runtime extends Electronic {
  constructor() {
    super();
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readRuntime);
    command.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '00001';
  }
}

export default Runtime;