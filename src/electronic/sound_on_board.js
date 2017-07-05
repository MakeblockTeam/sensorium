import SoundBase from './base/soundBase';

class SoundOnBoard extends SoundBase {
  constructor() {
    super(14);
  }

  static supportStamp(){
    return '0100';
  }

}

export default SoundOnBoard;