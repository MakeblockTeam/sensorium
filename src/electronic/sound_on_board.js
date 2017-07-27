import BaseSound from './BaseSound';

class SoundOnBoard extends BaseSound {
  constructor() {
    super(14);
  }

  static supportStamp(){
    return '010000';
  }

}

export default SoundOnBoard;