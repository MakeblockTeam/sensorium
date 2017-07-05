import SoundBase from './base/soundBase';

class Sound extends SoundBase {
  constructor(port) {
    super(port);
  }

  static supportStamp(){
    return '1111';
  }

}

export default Sound;