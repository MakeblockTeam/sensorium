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
 * VirtualJoystick for Balance car, actually it's a motor module
 * @extends Electronic
 */
class VirtualJoystickForBalance extends Electronic {
  constructor() {
      super();
      this.args = {
        speed: 0,
        turnRange: 0,
      };
    }
    /**
     * set speed
     * @param  {Number} speed  the balance speed
     * @return {Instance} @this
     */
  speed(speed) {
    this.args.speed = speed || 0;
    return this;
  }

  /**
   * set range
   * @param  {Number} range  the balance rotate angle
   * @return {Instance} @this
   */
  turnRange(range) {
    this.args.turnRange = range || 0;
    return this;
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.setVirtualJoystickForBalance, [this.args.turnRange, this.args.speed]);
  }

  /**
   * run with range and speed set before
   * @return {Instance} @this
   */
  run() {
    Control.write(this.protocol);
    return this;
  }
  runAndAwait() {
    return Control.writeAndAwait(this.protocol,arguments);
  }

  /**
   * Run reversely
   * @return {Instance} @this
   */
  setReverse() {
    this.speed(-1 * this.args.speed);
    return this;
  }

  /**
   * Stop run
   * @return {Instance} @this
   */
  setStop() {
    return this.turnRange(0).speed(0);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '0110');
  }
}

export default VirtualJoystickForBalance;