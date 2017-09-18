import BaseSound from './BaseSound';
import Utils from '../core/utils';
import { SUPPORTLIST } from '../settings';

/**
 * Sound sensor module
 * @extends BaseSound
 */
class Sound extends BaseSound {
  constructor(port) {
    super(port);
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '111111');
  }
}

export default Sound;