import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

// 作为闭包内容不开放
class SevenSegment extends Electronic {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      number: null
    };
  }
  /**
   * @param {string} beat - 声音音节
   */
  showNumber(number) {
    this.args.number = defineNumber(number);debugger
    let buf = Utils.composer(protocolAssembler.setSevenSegment, [this.args.port, this.args.number]);
    Command.exec(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

export default SevenSegment;