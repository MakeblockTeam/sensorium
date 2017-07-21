//暂未完成，待确认需求
import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class ServoMotor extends Electronic {

  constructor(port, slot) {
    super();
    this.args = {
      port: defineNumber(port),
      slot: defineNumber(slot),
      angle: 0
    };
  }

  run(){
    let buf = Utils.composer(protocolAssembler.ButtonOnBoard, [this.args.port, this.args.slot, this.args.angle]);
    command.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default ButtonOnBoard;