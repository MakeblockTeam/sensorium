import { validateNumber } from '../core/validate';
import {
  composer,
  fiterWithBinaryStr,
  hexToRgb,
  limitValue
} from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import Control from '../communicate/control';
import { SUPPORTLIST } from '../settings';

//@private
// function write(baseArgs, extra){
//   let baseCmd = [baseArgs.index, baseArgs.subCmd];
//   if(!Array.isArray(extra)){
//     baseCmd.push(typeof extra !== 'undefined'?[extra]:[]);
//   }else{
//     baseCmd.push(extra);
//   }
//   let buf = composer(protocolAssembler.setSmartServo, baseCmd);
//   Control.write(buf);
// }

// //@private
// async function read(baseArgs){
//   let buf = composer(protocolAssembler.readSmartServoParam, [baseArgs.index, baseArgs.subCmd]);
//   return await Control.read(buf);
// }

/**
 * SmartServo sensor module
 * @extends Electronic
 */
class SmartServo extends Electronic {
  constructor(index) {
    super();
    this.args = {
      index: index,
      subCmd: null,
      speed: 0,
      angle: null
    }
    this.extraCmd = null;
  }

  /**
   * getter of protocol
   */
  get protocol() {
    if (this.args.subCmd < 4 || this.args.subCmd === 7 || this.args.subCmd === 8) {
      let baseCmd = [this.args.index, this.args.subCmd];
      if (Array.isArray(this.extraCmd)) {
        baseCmd.push(this.extraCmd);
      } else {
        baseCmd.push(this.extraCmd !== null ? [this.extraCmd] : []);
      }
      this.extraCmd = null;
      return composer(protocolAssembler.setSmartServo, baseCmd);
    } else if (this.args.subCmd === 4) {
      return composer(protocolAssembler.setSmartServoForAbsoluteAngle, [this.args.index, this.args.subCmd, this.args.angle, this.args.speed]);
    } else if (this.args.subCmd === 5) {
      return composer(protocolAssembler.setSmartServoForRelativeAngle, [this.args.index, this.args.subCmd, this.args.angle, this.args.speed]);
    } else if (this.args.subCmd === 6) {
      return composer(protocolAssembler.setSmartServoForDcMotor, [this.args.index, this.args.subCmd, this.args.speed]);
    } else {
      return composer(protocolAssembler.readSmartServoParam, [this.args.index, this.args.subCmd]);
    }
  }

  /**
   * 锁定
   * @return {[type]} [description]
   */
  lock(){
    this.isReadMode = false;
    this.extraCmd = 0x00;
    this.args.subCmd = 0x01;
    return this;
  }
  /**
   * 解锁
   * @return {[type]} [description]
   */
  unclock(){
    this.isReadMode = false;
    this.extraCmd = 0x01;
    this.args.subCmd = 0x01;
    return this;
  }

  /**
   * set led color of the smart servo
   * @param {String|Array} hex_rgb #ff0064 or [255, 00, 100]
   */
  ledColor(hex_rgb = [255, 0, 0]){
    this.extraCmd = Array.isArray(hex_rgb) ? hex_rgb : hexToRgb(hex_rgb);
    this.args.subCmd = 0x02;
    return this;
  }

  /**
   * handshake
   */
  handshake(){
    this.args.subCmd = 0x03;
    return this;
  }

  /**
   * Set speed for smart servo
   * @param  {Number} speed the speed
   */
  speed(speed){
    this.args.speed = validateNumber(speed);
    return this;
  }
  /**
   * Move to the absolute angle
   * @param  {Number} angle the absolute angle
   */
  absoluteAngle(angle){
    this.args.subCmd = 0x04;
    this.angle = validateNumber(angle, 0);
    return this;
  }
  /**
   * Move to the relative angle
   * @param  {Number} angle the relative angle
   */
  relativeAngle(angle){
    this.args.subCmd = 0x05;
    this.angle = validateNumber(angle, 0);
    return this;
  }
  /**
   * move smart servo as a DC motor
   * @param  {Number} speed (optional) speed of the smart servo
   */
  runAsDcMotor(speed){
    speed = validateNumber(speed, this.args.speed);
    //限制速度 -255~255
    this.args.speed = limitValue(speed);
    this.args.subCmd = 0x06;
    return this;
  }

  /**
   * 设置零点
   */
  setZeroPoint(){
    this.args.subCmd = 0x07;
    return this;
  }

  /**
   * 回到起点
   * @return {[type]} [description]
   */
  backToStart(){
    this.args.subCmd = 0x08;
    return this;
  }

  /**
   * 读速度
   */
  readSpeed(){
    this.args.subCmd = 0x09;
    return this;
  }
  /**
   * 读温度
   */
  readTemperature(){
    this.args.subCmd = 0x0a;
    return this;
  }

  /**
   * 读电流
   */
  readCurrent(){
    this.args.subCmd = 0x0b;
    return this;
  }

  /**
   * 读电压
   */
  readVoltage(){
    this.args.subCmd = 0x0c;
    return this;
  }

  /**
   * 读角度
   */
  readAngle(){
    this.args.subCmd = 0x0d;
    return this;
  }

  /**
   * run of write API such as speed, runAsDcMotor, setZeroPoint and so on
   * @example
   * mcore.SmartServo(1)
   *      .speed()
   *      .run()
   * @return {Instance} @this
   */
  run () {
    Control.write(this.protocol);
    return this;
  }

  /**
   * Get data of read API such as readSpeed, readVoltage, readAngle and so on
   * @example
   * mcore.SmartServo(1)
   *      .readSpeed()
   *      .getData()
   *      .then((val) => {
   *        console.log(val)
   *       });
   * @return {Promise}
   */
  async getData () {
    return await Control.read(this.protocol);
  }

  static get SUPPORT(){
    return fiterWithBinaryStr(SUPPORTLIST, '0100');
  }
}
export default SmartServo;

