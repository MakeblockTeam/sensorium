import BaseGyro from './BaseGyro';

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

  static get supportStamp(){
    return '011001';
  }
}

export default GyroOnBoard;