import BaseLight from './BaseLight';
import {
  fiterWithBinaryStr
} from '../core/utils';
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
    return fiterWithBinaryStr(SUPPORTLIST, '111111');
  }
}

export default Light;