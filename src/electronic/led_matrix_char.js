import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class LedMatrixChar extends BaseLedMatrix {

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
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixChar;