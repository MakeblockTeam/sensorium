import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class FourKeys extends Electronic {
  constructor(port, key) {
    super();
    this.args = {
      port: defineNumber(port),
      key: defineString(key)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readFourKeys, [this.args.port, this.args.key]);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp(){
    return '1111';
  }

}

export default FourKeys;