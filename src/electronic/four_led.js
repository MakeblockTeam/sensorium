import RgbLedBase from './base/RgbLedBase';

class FourLed extends RgbLedBase {
  constructor(port){
    super(port, 2);
  }

  static supportStamp(){
    return '1111';
  }
}

export default FourLed;