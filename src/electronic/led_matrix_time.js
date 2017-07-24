import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import BaseLedMatrix from './BaseLedMatrix';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class LedMatrixTime extends BaseLedMatrix {

  constructor(port) {
    super(port);
    Object.assign(this.args, {
      separator: null,
      hour: null,
      minute: null
    });
  }

  separator(separator){
    this.args.separator = separator;
    return this;
  }

  hour(h){
    this.args.hour = defineNumber(h);
    return this;
  }

  minute(m){
    this.args.minute = defineNumber(m);
    return this;
  }

  run(){
    let buf = Utils.composer(protocolAssembler.setLedMatrixTime, [this.args.port, this.args.separator, this.args.hour, this.args.minute]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixTime;