
//暂未完成，待确认需求
//暂未完成，待确认需求
//
import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

class ButtonOnBoard extends Electronic {

  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot),
      angle: 0
    };
  }

  get protocol() {
    return Utils.composer(protocolAssembler.ButtonOnBoard, [this.args.port, this.args.slot, this.args.angle]);
  }

  run(){
    Control.write(this.protocol);
    return this;
  }

  static get SUPPORT() {
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default ButtonOnBoard;