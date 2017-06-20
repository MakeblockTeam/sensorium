import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class EncoderMotorOnBoard extends Electronic {
  constructor(port, slot) {
    super();
    this.args = {
      slot: defineNumber(port),
      type: defineNumber(slot)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readEncoderMotorOnBoard, [this.args.slot, this.args.type]);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  //auriga megapi 支持
  static supportStamp(){
    return '0110';
  }

}

export default EncoderMotorOnBoard;