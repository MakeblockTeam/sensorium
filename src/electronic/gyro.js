import BaseGyro from './BaseGyro';

/**
 * Gyro sensor module
 * @extends BaseGyro
 */
class Gyro extends BaseGyro {
  constructor(port) {
    //外接陀螺仪 port 始终传参为 0
    super(0);
  }

  static supportStamp(){
    return '1111';
  }
}

export default Gyro;