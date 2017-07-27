import BaseRgbLed from './BaseRgbLed';

class RgbLed extends BaseRgbLed {
  constructor(port, slot){
    super(port, slot);
  }

  static supportStamp(){
    return '111111';
  }
}

export default RgbLed;