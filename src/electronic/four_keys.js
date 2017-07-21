import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import command from '../communicate/command';

class FourKeys extends Electronic {
  constructor(port) {
    super();
    this.args = {
      port: defineNumber(port),
      key: 1
    };
  }

  /**
   * 键位
   * @param  {Number} index 键位：1、2、3、4
   */
  key(index){
    this.args.key = defineNumber(index, this.args.key);
    return this;
  }

  getData(callback) {
    let buf = Utils.composer(protocolAssembler.readFourKeys, [this.args.port, this.args.key]);
    command.read(buf, callback);
    return this;
  }

  static supportStamp(){
    return '1111';
  }
}

export default FourKeys;