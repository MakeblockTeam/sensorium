import BaseGyro from './BaseGyro';

/**
 * GyroOnBoard sensor module
 * @extends BaseGyro
 */
class GyroOnBoard extends BaseGyro {
  constructor() {
    super(1);
  }

  static supportStamp(){
    return '011001';
  }
}

export default GyroOnBoard;