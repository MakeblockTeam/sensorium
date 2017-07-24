import BaseRgbLed from './BaseRgbLed';

class FourLed extends BaseRgbLed {
  constructor(port){
    super(port, 2);
  }

  static supportStamp(){
    return '1111';
  }
}

export default FourLed;