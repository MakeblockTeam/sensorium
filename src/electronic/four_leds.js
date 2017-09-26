import BaseRgbLed from './BaseRgbLed';
import {
  fiterWithBinaryStr
} from '../core/utils';
import {
  SUPPORTLIST
} from '../settings';

/**
 * FourLed sensor module
 * @extends BaseRgbLed
 */
class FourLeds extends BaseRgbLed {
  constructor(port) {
    super(port, 2);
    //接Adapter模块可以选择SLOT1(01) 和SLOT2(02)
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default FourLeds;