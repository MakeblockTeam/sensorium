import BaseRgbLed from './BaseRgbLed';

class FourLed extends BaseRgbLed {
  constructor(port){
    super(port, 2);
    //接Adapter模块可以选择SLOT1(01) 和SLOT2(02)
  }

  static supportStamp(){
    return '1111';
  }
}

export default FourLed;