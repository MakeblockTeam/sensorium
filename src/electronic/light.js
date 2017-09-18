import BaseLight from './BaseLight';
import Utils from '../core/utils';
import { SUPPORTLIST } from '../settings';

/**
 * Light sensor module
 * @extends BaseLight
 */
class Light extends BaseLight {
  constructor(port) {
    super(port);
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '111111');
  }
}

export default Light;