import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class Reset extends Electronic {
  constructor(callback) {
    super();
    this.reset(callback);
  }

  reset(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.reset, []);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //参数戳：描述 port slot id 需传参的个数
  static argsStamp(){
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }

}

export default Reset;
