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
   * 获取协议
   */
  get protocol() {
    return Utils.composer(protocolAssembler.setSevenSegment, [this.args.port, this.args.number]);
  }

  /**
   * run and show the number
   * @return {Instance}     @this
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  static get supportStamp(){
    return '1111';
  }
}

export default SevenSegment;