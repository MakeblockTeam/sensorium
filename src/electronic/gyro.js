import BaseGyro from './BaseGyro';
import Utils from '../core/utils';
import { SUPPORTLIST } from '../settings';

/**
 * Gyro sensor module
 * @extends BaseGyro
 * @example
 * mcore.Gyro()
 *      .axis(1)
 *      .getData()
 *        .then((val) => {
 *          console.log(val)
 *        });
 */
class Gyro extends BaseGyro {
  constructor() {
    //外接陀螺仪 port 始终传参为 0
    super(0);
  }

  static get SUPPORT(){
    return Utils.fiterWithBinaryStr(SUPPORTLIST, '1111');
  }
}

export default Gyro;