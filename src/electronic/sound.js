import BaseSound from './BaseSound';

class Sound extends BaseSound {
  constructor(port) {
    super(port);
  }

  static supportStamp(){
    return '1111';
  }

}

export default Sound;