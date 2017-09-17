import BaseLight from './BaseLight';

/**
 * Light sensor module
 * @extends BaseLight
 */
class Light extends BaseLight {
  constructor(port) {
    super(port);
  }

  static get supportStamp(){
    return '111111';
  }
}

export default Light;