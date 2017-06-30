import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class VirtualJoystick extends Electronic {

  constructor() {
    super();
    // TODO: 加入args对象有什么好处？
    this.args = {
      leftSpeed: 0,
      rightSpeed: 0,
    };
  }

  speed(leftSpeed, rightSpeed) {
    this.args.leftSpeed = defineNumber(leftSpeed, 0);
    // TODO: 该方法与下列方法有什么区别?
    // this.args.leftSpeed = leftSpeed || 0;
    this.args.rightSpeed = defineNumber(rightSpeed, 0);
    return this;
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setJoystick, [this.args.leftSpeed, this.args.rightSpeed]);
    command.execWrite(buf);
    return this;
  }

  stop() {
    this.speed(0,0).run();
  }

  static supportStamp(){
    return '1111';
  }
}

export default VirtualJoystick;