import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class VirtualJoystick extends Electronic {

  constructor() {
    super();
    this.args = {
      leftSpeed: 0,
      rightSpeed: 0,
    };
  }

  speed(leftSpeed, rightSpeed) {
    this.args.leftSpeed = leftSpeed || 0;
    this.args.rightSpeed = rightSpeed || 0;
    return this;
  }

  leftSpeed(speed){
    this.args.leftSpeed = speed || 0;
    return this;
  }

  rightSpeed(speed){
    this.args.rightSpeed = speed || 0;
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setJoystick, [this.args.leftSpeed, this.args.rightSpeed]);
    CommandManager.write(buf);
    return this;
  }

  stop() {
    return this.speed(0,0).run();
  }

  static supportStamp(){
    return '1111';
  }
}

export default VirtualJoystick;