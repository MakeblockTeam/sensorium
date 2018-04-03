import {
  validateNumber,
  warnParamNotInList
} from '../core/validate';
import {
  composer
} from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  MOVE_DIRECTION
} from '../settings';

class PIDForDoubleMotor {
  constructor() {
      this.args = {
        distance: 0,
        direction: 1, // 实际是 slot
        speed: 0
      };
    }
    /**
     * set direction with a string argument
     * @param  {String} dir dir should be uppercase or lowercase of 'FORWARD'、'BACKWARD'、'TURNLEF'、'TURNRIGHT'
     */
  direction(dir) {
    dir = warnParamNotInList((dir || '').toUpperCase(), MOVE_DIRECTION);
    switch (dir) {
      case MOVE_DIRECTION[0]:
        this.args.direction = 1;
        break;
      case MOVE_DIRECTION[1]:
        this.args.direction = 2;
        break;
      case MOVE_DIRECTION[2]:
        this.args.direction = 3;
        break;
      case MOVE_DIRECTION[3]:
        this.args.direction = 4;
        break;
      default:
        this.args.direction = 1;
    }
    return this;
  }

  /**
   * direction + run
   * @return {[type]} [description]
   */
  forward() {
    this.args.direction = 1;
    return this;
  }

  /**
   * direction + run
   * @return {[type]} [description]
   */
  backward() {
    this.args.direction = 2;
    return this;
  }

  /**
   * direction + run
   * @return {[type]} [description]
   */
  turnleft() {
    this.args.direction = 3;
    return this;
  }

  /**
   * direction + run
   * @return {[type]} [description]
   */
  turnright() {
    this.args.direction = 4;
    return this;
  }

  /**
   * set distance
   * @param  {Number} distance 位移
   */
  distance(distance) {
    this.args.distance = validateNumber(distance, this.args.distance);
    return this;
  }

  /**
   * set speed
   * @param  {Number} speed [description]
   * @return {[type]}       [description]
   */
  speed(speed) {
    this.args.speed = validateNumber(speed, this.args.speed);
    return this;
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.setEncoderMotorPIDDoubleMotor, [this.args.direction, this.args.distance, this.args.speed]);
  }

  run() {
    Control.write(this.protocol);
    return this;
  }
}

export default PIDForDoubleMotor;