import BaseRgbLed from './BaseRgbLed';

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
  constructor(port, slot){
    super(port, slot);
  }

  static supportStamp(){
    return '111111';
  }
}

export default RgbLed;