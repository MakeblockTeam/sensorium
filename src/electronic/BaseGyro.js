import { validateNumber } from '../core/validate';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

class BaseGyro extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: validateNumber(port),
      axis: 0
    };
  }

  axis(axis){
    this.args.axis = validateNumber(axis, this.args.axis);
    return this;
  }

  async getData() {
    let buf = Utils.composer(protocolAssembler.readGyro, [this.args.port, this.args.axis]);
    return await CommandManager.read(buf);
  }
}

export default BaseGyro;