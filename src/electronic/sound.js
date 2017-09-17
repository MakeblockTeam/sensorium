import BaseSound from './BaseSound';

/**
 * Sound sensor module
 * @extends BaseSound
 */
class Sound extends BaseSound {
  constructor(port) {
    super(port);
  }

  static get supportStamp(){
    return '111111';
  }

}

export default Sound;