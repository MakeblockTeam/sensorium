import { validateNumber } from '../core/validate';
import {composer,
fiterWithBinaryStr} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import { SUPPORTLIST } from '../settings';

/**
 * GPIOContinue sensor module
 * @extends Electronic
 */
class ArduinoServo extends Electronic {
  constructor(port, angle) {
    super();
    this.args = {
      port: validateNumber(port, 1),
      angle: validateNumber(angle, 90)
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.arduinoServo, [this.args.port, this.args.angle]);
  }

  runAwait() {
    return Control.writeAwait(this.protocol,arguments);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '00001');
  }
}

export default ArduinoServo;