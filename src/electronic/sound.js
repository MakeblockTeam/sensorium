import BaseSound from './BaseSound';

class Sound extends BaseSound {
  constructor(port) {
    super(port);
  }

  static supportStamp(){
    return '111111';
  }

}

export default Sound;