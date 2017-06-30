import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class Sound extends Electronic {
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

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }

}

export default Sound;