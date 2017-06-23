import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class GPIOContinue extends Electronic {
  constructor(port, key) {
    super();
    this.args = {
      port: defineNumber(port),
      key: defineNumber(key)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readGPIOContinue, [this.args.port, this.args.key]);
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

export default GPIOContinue;