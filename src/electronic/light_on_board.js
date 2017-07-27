import { validateNumber } from '../core/validate';
import BaseLight from './BaseLight';
import { warnNotSupport } from '../core/validate';
import Settings from '../mainboard/settings';
const SUPPORTLIST_ = Settings.SUPPORTLIST;

class LightOnBoard extends BaseLight {
  constructor(port) {
    super(6); //mcore
    let host = warnNotSupport(arguments[arguments.length-1]) || '';
    //宿主主控
    this.hostname = host.toLowerCase();
    switch(this.hostname){
      //auriga port 只能为 1，2
      case SUPPORTLIST_[1]:
        this.args.port = validateNumber(port, 1);
        break;
      //megapi
      case SUPPORTLIST_[2]:
        this.args.port = 0x0c;
        break;
      default:
        super(6); //mcore
    }
  }

  static supportStamp(){
    return '111111';
  }
}

export default LightOnBoard;