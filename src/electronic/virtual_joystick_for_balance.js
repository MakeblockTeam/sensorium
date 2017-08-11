import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

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

  speed(leftSpeed) {
    this.args.speed = leftSpeed || 0;
    return this;
  }

  turnRange(range){
    this.args.turnRange = range || 0;
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setVirtualJoystickForBalance, [this.args.turnRange, this.args.speed]);
    CommandManager.write(buf);
    return this;
  }

  /**
   * Run reversely
   * @return {Instance} @this
   */
  reverse() {
    this.speed(-1 * this.args.speed);
    return this.run();
  }

  /**
   * Stop run
   * @return {Instance} @this
   */
  stop() {
    return this.speed(0).run();
  }

  static supportStamp(){
    return '0110';
  }
}

export default VirtualJoystickForBalance;