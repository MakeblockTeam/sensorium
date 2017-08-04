import Utils from '../core/utils';
import BaseMotor from './BaseMotor';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * DcMotor sensor module
 * @extends BaseMotor
 */
class DcMotor extends BaseMotor {

  constructor(port) {
    super(port);
  }

  reverse() {
    this.speed(-1 * this.args.speed);
    return this.run();
  }

  run() {
    let buf = Utils.composer(protocolAssembler.setDcMotor, [this.args.port, this.args.speed]);
    CommandManager.write(buf);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default DcMotor;