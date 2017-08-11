import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

/**
 * Reset module
 * @extends Electronic
 */
class Reset extends Electronic {
  constructor() {
    super();
  }

  async reset() {
    let buf = Utils.composer(protocolAssembler.reset);
    return await CommandManager.read(buf);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Reset;
