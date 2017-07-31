import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class LedMatrixNumber extends BaseLedMatrix {
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      number: 0
    });
  }

  number(number) {
    this.args.number = validateNumber(number);
    return this;
  }

  run(){
    let type = 0x04;
    let bufArray = [this.args.port, type, ...Utils.float32ToBytes(this.args.number)];
    super.run(bufArray);
    return this;
  }
}

export default LedMatrixNumber;