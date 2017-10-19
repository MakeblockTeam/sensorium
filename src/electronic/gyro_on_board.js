import BaseGyro from './BaseGyro';
import {
  fiterWithBinaryStr
} from '../core/utils';
import {
  SUPPORTLIST
} from '../settings';

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

  static get SUPPORT() {
    return fiterWithBinaryStr(SUPPORTLIST, '011001');
  }
}

export default GyroOnBoard;