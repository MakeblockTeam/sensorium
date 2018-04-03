import {
  validateNumber
} from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST
} from '../settings';

/**
 * VirtualJoystick, actually it's a motor module
 * @extends Electronic
 */
class VirtualJoystick extends Electronic {
  constructor() {
    super();
    this.args = {
      leftSpeed: 0,
      rightSpeed: 0,
    };
  }

  /**
   * set both left speed and right speed
   * @param  {Number} leftSpeed  the left speed
   * @param  {Number} rightSpeed  the right speed
   * @return {Instance} @this
   */
  speed(leftSpeed, rightSpeed) {
    this.args.leftSpeed = validateNumber(leftSpeed, this.args.leftSpeed);
    this.args.rightSpeed = validateNumber(rightSpeed, this.args.rightSpeed);
    return this;
  }

  /**
   * set left speed
   * @param  {Number} speed  the left speed
   * @return {Instance} @this
   */
  leftSpeed(speed) {
    this.args.leftSpeed = validateNumber(speed, 0);
    return this;
  }

  /**
   * set right speed
   * @param  {Number} speed  the right speed
   * @return {Instance} @this
   */
  rightSpeed(speed) {
    this.args.rightSpeed = validateNumber(speed, 0);
    return this;
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.setJoystick, [this.args.leftSpeed, this.args.rightSpeed]);
  }

  /**
   * run
   * @param  {Number} speed  the balance speed
   * @return {Instance} @this
   */
  run() {
    Control.write(this.protocol);
    return this;
  }

  /**
   * stop, that is run with 0 speed
   * @return {Instance} @this
   */
  setStop() {
    return this.speed(0, 0);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default VirtualJoystick;