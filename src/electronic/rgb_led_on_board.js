import BaseRgbLed from './BaseRgbLed';
import { warnNotSupport } from '../core/validate';
import { SUPPORTLIST } from '../mainboard/settings';

/**
 * RgbLedOnBoard sensor module
 * @extends BaseRgbLed
 */
class RgbLedOnBoard extends BaseRgbLed {
  constructor(){
    super(7, 2); //mcore
    //宿主主控
    this.hostname = warnNotSupport(arguments[arguments.length-1]) || '';
    switch(this.hostname){
      //auriga
      case SUPPORTLIST[1]:
        this.args.port = 0;
        this.args.slot = 2;
        break;
      //mcore
      default:
        this.args.port = 7;
        this.args.slot = 2;
    }
  }

  static supportStamp(){
    return '110000';
  }
}

export default RgbLedOnBoard;