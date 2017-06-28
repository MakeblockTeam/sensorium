import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class LineFollower extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readLineFollower, [this.args.port]);
    //执行
    Command.execRead(buf, callback);
    // Command.getSensorValue('ultrasonic', buf, callback);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }

}

export default LineFollower;