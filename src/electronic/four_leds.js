import BaseRgbLed from './BaseRgbLed';

/**
 * FourLed sensor module
 * @extends BaseRgbLed
 */
class FourLeds extends BaseRgbLed {
  constructor(port){
    super(port, 2);
    //接Adapter模块可以选择SLOT1(01) 和SLOT2(02)
  }

  static get supportStamp(){
    return '1111';
  }
}

export default FourLeds;