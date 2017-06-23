import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class DoubleGPIO extends Electronic {
  constructor(port1, port2) {
    super();
    this.args = {
      port1: defineNumber(port1),
      port2: defineNumber(port2)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readDoubleGPIO, [this.args.port1, this.args.port2]);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 2;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '00001';
  }

}

export default DoubleGPIO;