import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import LedMatrixBase from './base/LedMatrixBase';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class LedMatrixChar extends LedMatrixBase {

  constructor(port) {
    super(port);
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

  char(str) {
    this.args.str = str;
    return this;
  }

  run(){
    let buf = Utils.composer(protocolAssembler.setLedMatrixChar, [this.args.port, this.args.x, this.args.y, this.args.char]);
    command.write(buf);
    return this;
  }

  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixChar;