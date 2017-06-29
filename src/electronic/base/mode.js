import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

//TODO: 需要梳理，尚未正确实现
class Mode extends Electronic {
  constructor(callback) {
    super();
  }

  read(callback) {
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.readFirmwareMode);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  set(){
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.setFirmwareMode);
    //执行
    Command.execRead(buf, callback);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 0;
  }

  //主控支持戳：描述各主控的支持情况
  //Mcore Orion 均不支持
  static supportStamp(){
    return '0110';
  }

}

export default Mode;