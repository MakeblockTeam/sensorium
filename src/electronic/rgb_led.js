import BaseRgbLed from './BaseRgbLed';
import {
  SUPPORTLIST
} from '../settings';
import {
  fiterWithBinaryStr
} from '../core/utils';
/**
 * RgbLed sensor module
 * @extends BaseRgbLed
 *  * @example
 * // turn on led attached to mcore
 * mcore.RgbLed(2).position(1).red()
 *
 * // turn on all led attached to auriga
 * auriga.RgbLed(2).white();
 */
class RgbLed extends BaseRgbLed {
  constructor(port, slot) {
    super(port, slot);
  }

  // orion 不能 port8 slot1和port7 slot1不能用于灯条
  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '111111');
  }
}

export default RgbLed;