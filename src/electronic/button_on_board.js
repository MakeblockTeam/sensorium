//暂未完成，待确认需求

import {
  validateNumber
} from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST
} from '../settings';

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
    return composer(protocolAssembler.ButtonOnBoard, [this.args.port, this.args.slot, this.args.angle]);
  }

  run() {
    Control.write(this.protocol);
    return this;
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default ButtonOnBoard;