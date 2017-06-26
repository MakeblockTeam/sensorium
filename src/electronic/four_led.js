import RgbLedBase from './base/RgbLedBase';

class FourLed extends RgbLedBase {
  constructor(port){
    super(port, 2);
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

export default FourLed;