import { validateNumber } from '../core/validate';
import BaseLight from './BaseLight';
import { warnNotSupport } from '../core/validate';
import { SUPPORTLIST } from '../mainboard/settings';

/**
 * LightOnBoard sensor module
 * @extends BaseLight
 */
class LightOnBoard extends BaseLight {
  constructor() {
    super(6); //mcore
    //宿主主控
    this.hostname = warnNotSupport(arguments[arguments.length-1]) || '';
    switch(this.hostname){
      //TO IMPROVE: auriga 板载 port 只能为 0x0c，0x0b
      case SUPPORTLIST[1]:
        let port = arguments[0];
        this.args.port = validateNumber(port, 1);
        break;
      //megapi
      case SUPPORTLIST[2]:
        this.args.port = 0x0c;
        break;
      default:
        this.args.port = 6; //mcore
    }
  }

  static supportStamp(){
    return '111111';
  }
}

export default LightOnBoard;