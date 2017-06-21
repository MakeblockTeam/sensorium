import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import LedMatrixBase from './base/LedMatrixBase';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class LedMatrixNumber extends LedMatrixBase {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    Object.assign(this.args, {
      number: null
    });
  }

  showNumber(number){
    this.args.number = defineNumber(number);
    //组装buf
    let buf = Utils.composer(protocolAssembler.setLedMatrixNumber, [this.args.port, this.args.number]);
    //执行
    Command.execWrite(buf);
    return this;
  }
  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixNumber;