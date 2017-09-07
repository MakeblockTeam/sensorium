import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';

/**
 * ServoMotor sensor module
 * @extends Electronic
 */
class ServoMotor extends Electronic {
  constructor(port, slot) {
    super();
    this.args = {
      port: validateNumber(port),
      slot: validateNumber(slot),
      angle: 0
    };
  }

  /**
   * set angle of degree
   * @param  {Number} degree
   * @return {Object} the instance
   */
  angle(degree){
    this.args.angle = validateNumber(degree, 0);
    return this;
  }

  /**
   * go to the start
   * @return {[type]} [description]
   */
  toStart(){
    this.angle(0);
    return this.run();
  }

  /**
   * go to the end
   * @return {[type]} [description]
   */
  toEnd(){
    this.angle(180);
    return this.run();
  }

  /**
   * run
   */
  run(){
    let buf = Utils.composer(protocolAssembler.setServoMotor, [this.args.port, this.args.slot, this.args.angle]);
    Control.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default ServoMotor;