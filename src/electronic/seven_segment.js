import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

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
  /**
   * set the number you want show on the segment tube
   * @param  {Number} num
   * @return {Instance}     @this
   */
  number(num) {
    this.args.number = validateNumber(num, this.args.number);
    return this;
  }

  /**
   * run and show the number
   * @return {Instance}     @this
   */
  run() {
    let buf = Utils.composer(protocolAssembler.setSevenSegment, [this.args.port, this.args.number]);
    Control.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default SevenSegment;