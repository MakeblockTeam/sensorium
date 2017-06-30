import RgbLedBase from './base/RgbLedBase';

class RgbLed extends RgbLedBase {
  constructor(port, slot){
    super(port, slot);
  }

  static supportStamp(){
    return '1111';
  }
}

export default RgbLed;