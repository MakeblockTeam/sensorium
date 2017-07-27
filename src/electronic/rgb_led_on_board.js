import BaseRgbLed from './BaseRgbLed';
import { warnNotSupport } from '../core/validate';
import Settings from '../mainboard/settings';
const SUPPORTLIST_ = Settings.SUPPORTLIST;

class RgbLedOnBoard extends BaseRgbLed {
  constructor(){
    super(7, 2); //mcore
    let host = warnNotSupport(arguments[arguments.length-1]) || '';
    //宿主主控
    this.hostname = host.toLowerCase();
    switch(this.hostname){
      //auriga
      case SUPPORTLIST_[1]:
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