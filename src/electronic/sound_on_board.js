import BaseSound from './BaseSound';

/**
 * SoundOnBoard sensor module
 * @extends BaseSound
 */
class SoundOnBoard extends BaseSound {
  constructor() {
    super(14);
  }

  static get supportStamp(){
    return '010000';
  }

}

export default SoundOnBoard;