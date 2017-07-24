import BaseSound from './BaseSound';

class SoundOnBoard extends BaseSound {
  constructor() {
    super(14);
  }

  static supportStamp(){
    return '0100';
  }

}

export default SoundOnBoard;