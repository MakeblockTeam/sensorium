
//暂未完成，待确认需求
//暂未完成，待确认需求
//
import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

class ButtonOnBoard extends Electronic {

  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot),
      angle: 0
    };
  }

  run(){
    let buf = Utils.composer(protocolAssembler.ButtonOnBoard, [this.args.port, this.args.slot, this.args.angle]);
    Control.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default ButtonOnBoard;