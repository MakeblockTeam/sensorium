import RgbLedBase from './base/RgbLedBase';

class RgbLedOnBoard extends RgbLedBase {
  constructor(){
    super(0, 2);
  }

  static supportStamp(){
    return '0100';
  }
}

export default RgbLedOnBoard;