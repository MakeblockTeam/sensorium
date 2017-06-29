import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import LedMatrixBase from './base/LedMatrixBase';
import protocolAssembler from '../protocol/cmd';
import Command from '../communicate/command';

class LedMatrixTime extends LedMatrixBase {
  /**
   * @constructor
   */
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

  showTime(){
    //组装buf
    let buf = Utils.composer(protocolAssembler.setLedMatrixTime, [this.args.port, this.args.separator, this.args.hour, this.args.minute]);
    Command.execWrite(buf);
    return this;
  }

  //主控支持戳：描述各主控的支持情况
  //orion 不支持
  static supportStamp(){
    return '1110';
  }
}

export default LedMatrixTime;