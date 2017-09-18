import BaseGyro from './BaseGyro';
import Utils from '../core/utils';
import { SUPPORTLIST } from '../settings';

/**
 * GyroOnBoard sensor module
 * @extends BaseGyro
 * @example
 * mcore.Gyro()
 *      .axis(1)
 *      .getData()
 *        .then((val) => {
 *          console.log(val)
 *        });
 */
class GyroOnBoard extends BaseGyro {
  constructor() {
    super(1);
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '011001');
  }
}

export default GyroOnBoard;