import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class LedMatrixNumber extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      number: null
    });
  }

  number(num) {
    this.args.number = defineNumber(num);
    return this;
  }

  run(){
    let buf = Utils.composer(protocolAssembler.setLedMatrixNumber, [this.args.port, this.args.number]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixNumber;