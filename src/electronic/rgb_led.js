import RgbLedBase from './base/RgbLedBase';

class RgbLed extends RgbLedBase {
  constructor(port, slot){
    super(port, slot);
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

export default RgbLed;