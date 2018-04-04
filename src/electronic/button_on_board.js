//暂未完成，待确认需求

import {
  validateNumber
} from '../core/validate';
import {
  composer,
  fiterWithBinaryStr
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../core/control';
import {
  SUPPORTLIST
} from '../settings';

/**
 * ButtonOnBoard sensor module
 * @extends Electronic
 *
 * @example
 * mcore.ButtonOnBoard()
 *      .checkPressed()
 *      .getData()
 *      .then(val => console.log(val));
 */
class ButtonOnBoard extends Electronic {

  constructor() {
    super();
    this.args = {
      port: 0x07,
      action: 0x00  // default pressed
    };
  }

  /**
   * getter of protocol
   */
  get protocol() {
    return composer(protocolAssembler.ButtonOnBoard, [this.args.port, this.args.action]);
  }

  /**
   * check whether the button pressed
   * @return {Instance} this
   */
  checkPressed() {
    this.args.action = 0x00;
    return this;
  }

  /**
   * check whether the button released
   * @return {Instance} this
   */
  checkReleased() {
    this.args.action = 0x01;
    return this;
  }

  /**
   * Get data of whether button on board was pressed
   * @return {Promise}
   */
  async getData() {
    return await Control.read(this.protocol);
  }

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '1000');
  }
}

export default ButtonOnBoard;