import {
  validateNumber
} from '../core/validate';
import Utils from '../core/utils';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

const DIRECTION_ = ['FORWARD', 'BACKWARD', 'TURNLEF', 'TURNRIGHT']
class PIDForDoubleMotor {
  constructor() {
    this.args = {
      distance: 0,
      direction: 1,
      speed: 0
    };
  }
  /**
   * set direction with a string argument
   * @param  {String} dir FORWARD、BACKWARD、TURNLEF、TURNRIGHT
   * @return {[type]}     [description]
   */
  direction(dir) {
    if(typeof dir === 'string'){
      switch (dir.toUpperCase()) {
        case DIRECTION_[0]:
          this.args.direction = 1;
          break;
        case DIRECTION_[1]:
          this.args.direction = 2;
          break;
        case DIRECTION_[2]:
          this.args.direction = 3;
          break;
        case DIRECTION_[3]:
          this.args.direction = 4;
          break;
        default:
          this.args.direction = 1;
      }
    }else{
      console.warn(`argument ${dir} should be one of ${DIRECTION_.join(',')}`);
      this.args.direction = 1;
    }
    return this;
  }
  
  //direction + run
  forward() {
    this.args.direction = 1;
    return this.run();
  }

  //direction + run
  backward() {
    this.args.direction = 2;
    return this.run();
  }

  //direction + run
  turnleft() {
    this.args.direction = 3;
    return this.run();
  }
  
  //direction + run
  turnright() {
    this.args.direction = 4;
    return this.run();
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

  run() {
    let buf = Utils.composer(protocolAssembler.setEncoderMotorPIDDoubleMotor, [this.args.direction, this.args.distance, this.args.speed]);
    CommandManager.write(buf);
    return this;
  }
}

export default PIDForDoubleMotor;