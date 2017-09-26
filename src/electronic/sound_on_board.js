import BaseSound from './BaseSound';
import {
  fiterWithBinaryStr
} from '../core/utils';
import { SUPPORTLIST } from '../settings';


/**
 * SoundOnBoard sensor module
 * @extends BaseSound
 */
class SoundOnBoard extends BaseSound {
  constructor() {
    super(14);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '010000');
  }
}

export default SoundOnBoard;