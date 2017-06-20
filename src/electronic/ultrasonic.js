import { defineNumber, defineString } from '../core/type';
// import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class Ultrasonic extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port)
    };
  }

  getData(callback) {
    let buf = composer(protocolAssembler.readUltrasonic, [this.args.port]);
    //执行
    Command.getSensorValue('ultrasonic', buf, callback);
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

export default Ultrasonic;