import BaseRgbLed from './BaseRgbLed';

class LedPanelOnBoard extends BaseRgbLed {
  constructor(){
    super(0, 2);
  }

  //主控支持戳：描述各主控的支持情况
  static supportStamp(){
    return '1111';
  }
}

export default LedPanelOnBoard;