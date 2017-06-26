import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import LedMatrixBase from './base/LedMatrixBase';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class LedMatrixChar extends LedMatrixBase {
  /**
   * @constructor
   */
  constructor(port) {
    super(port);
    //扩充参数
    Object.assign(this.args, {
      x: null,
      y: null,
      char: null
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

  showChar(str){
    this.args.char = str;
    //组装buf
    let buf = Utils.composer(protocolAssembler.setLedMatrixChar, [this.args.port, this.args.x, this.args.y, this.args.char]);
    Command.execWrite(buf);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixChar;