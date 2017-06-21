// import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import LedMatrixBase from './base/LedMatrixBase';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class LedMatrixEmotion extends LedMatrixBase {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    //参数
    Object.assign(this.args, {
      x: null,
      y: null,
      emotion: null
    });
  }

  x(xAxis){
    this.args.x = xAxis;
    return this;
  }

  y(yAxis){
    this.args.y = yAxis;
    return this;
  }

  showEmotion(emotion){
    this.args.emotion = emotion;
    //组装buf
    let buf = Utils.composer(protocolAssembler.setLedMatrixEmotion, [this.args.port, this.args.x, this.args.y, this.args.emotion]);
    //执行
    Command.execWrite(buf);
    return this;
  }

  //参数戳：描述port slot id 需传参的个数
  static argsStamp(){
    return 1;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixEmotion;