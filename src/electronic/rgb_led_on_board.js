import BaseRgbLed from './BaseRgbLed';

class RgbLedOnBoard extends BaseRgbLed {
  constructor(){
    super(0, 2);
  }

  static supportStamp(){
    return '0100';
  }
}

export default RgbLedOnBoard;