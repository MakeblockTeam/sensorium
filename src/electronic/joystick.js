import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class Joystick extends Electronic {
  constructor(port, axis) {
    super();
    this.args = {
      port: defineNumber(port),
      axis: defineString(axis)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readJoystick, [this.args.port, this.args.axis]);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }

}

export default Joystick;