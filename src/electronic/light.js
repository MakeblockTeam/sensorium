import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class Light extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readLight, [this.args.port]);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  // argsLength
  static argsStamp(){
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  // supportMainboards
  static supportStamp(){
    return '1111';
  }

}

export default Light;