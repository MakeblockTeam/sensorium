import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class SevenSegment extends Electronic {

  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      number: null
    };
  }

  number(num) {
    this.args.number = defineNumber(num);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setSevenSegment, [this.args.port, this.args.number]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default SevenSegment;