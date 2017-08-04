import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * SevenSegment sensor module
 * @extends Electronic
 */
class SevenSegment extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      number: 1
    };
  }

  number(num) {
    this.args.number = validateNumber(num, this.args.number);
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