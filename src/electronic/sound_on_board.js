import BaseSound from './BaseSound';
import Utils from '../core/utils';
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
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '010000');
  }
}

export default SoundOnBoard;