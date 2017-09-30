import {
  validateNumber
} from '../core/validate';
import {
  hexToRgb,
  composer
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';

/**
 * @description It is a base Class of RgbLed
 * @extends Electronic
 * @private
 */
class BaseRgbLed extends Electronic {
  /**
   * Create a rgbLed
   * @param {Number} port  led port
   * @param {Number} slot  led slot
   */
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot, 2),
      ledPosition: 0,
      rgb: [0, 0, 0]
    };
  }

  /**
   * Set led position
   * @param {Number} position
   */
  position(position) {
    this.args.ledPosition = validateNumber(position, this.args.ledPosition);
    return this;
  }

  /**
   * Set led red value
   * @param {Number} value  0 ~ 255
   */
  r(value) {
    this.args.rgb[0] = validateNumber(value, this.args.rgb[0]);
    return this;
  }

  /**
   * Set led green value
   * @param {Number} value 0 ~ 255
   */
  g(value) {
    this.args.rgb[1] = validateNumber(value, this.args.rgb[1]);
    return this;
  }

  /**
   * Set led blue value
   * @param {Number} value 0 ~ 255
   */
  b(value) {
    this.args.rgb[2] = validateNumber(value, this.args.rgb[2]);
    return this;
  }

  /**
   * Set led color with hex-color
   * @param  {String} hex  hex color like '#ff0088'
   */
  rgb(hex = '#ff0000') {
    this.args.rgb = hexToRgb(hex);
    return this;
  }

  get protocol() {
    let args = [this.args.port, this.args.slot, this.args.ledPosition, ...this.args.rgb];
    return composer(protocolAssembler.setLed, args);
  }

  /**
   * run led with colors set before
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  /**
   * Turn on led
   */
  turnOn() {
    return this.run();
  }

  /**
   * Turn off led
   */
  turnOff() {
    this.args.rgb = [0, 0, 0];
    return this.run();
  }

  /**
   * Turn on all the leds
   */
  turnOnAll() {
    this.position(0);
    return this.turnOn();
  }

  /**
   * Turn off all the leds
   */
  turnOffAll() {
    this.position(0);
    return this.turnOff();
  }

  /**
   * Light on let with red color
   */
  red() {
    this.args.rgb = [255, 0, 0];
    return this.run();
  }

  /**
   * Light on let with green color
   */
  green() {
    this.args.rgb = [0, 255, 0];
    return this.run();
  }

  /**
   * Light on let with blue color
   */
  blue() {
    this.args.rgb = [0, 0, 255];
    return this.run();
  }

  /**
   * Light on let with white color
   */
  white() {
    this.args.rgb = [255, 255, 255];
    return this.run();
  }
}

export default BaseRgbLed;