import { defineNumber, defineString } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

// 作为闭包内容不开放
class Shutter extends Electronic {
  /**
   * Buzzer类，声音模块
   * @constructor
   */
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      action: null
    };
  }

  /**
   * @param {string} actionId - 动作id  0: 按下快门; 1: 松开快门; 2: 聚焦; 3: 停止聚焦
   */
  action(actionId) {
    this.args.action = defineString(actionId);
    // 拿到协议组装器，组装协议
    let buf = Utils.composer(protocolAssembler.setShutter, [this.args.port, this.args.action]);
    //执行
    Command.execWrite(buf);
    return this;
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

export default Shutter;