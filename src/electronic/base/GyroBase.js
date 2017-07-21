import { defineNumber } from '../../core/type';
import Utils from '../../core/utils';
import Electronic from '../electronic';
import protocolAssembler from '../../protocol/cmd';
import CommandManager from '../../communicate/command-manager';

class GyroBase extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      axis: 0
    };
  }

  axis(axis){
    this.args.axis = defineNumber(axis, this.args.axis);
    return this;
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readGyro, [this.args.port, this.args.axis]);
    CommandManager.read(buf, callback);
    return this;
  }
}

export default GyroBase;