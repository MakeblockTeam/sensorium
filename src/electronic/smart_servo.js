import { defineNumber } from '../core/type';
import Utils from '../core/utils';
import Electronic from './electronic';
import protocolAssembler from '../protocol/cmd';
import CommandManager from '../communicate/command-manager';

function write(baseArgs, extra){
  if(typeof extra !== 'undefined' && !Array.isArray(extra)){
    extra = [extra];
  }
  let buf = Utils.composer(protocolAssembler.setSmartServo, [baseArgs.index, baseArgs.subCmd, extra]);
  CommandManager.write(buf);
}

function read(baseArgs, callback){
  let buf = Utils.composer(protocolAssembler.readSmartServoParam, [baseArgs.index, baseArgs.subCmd]);
  CommandManager.read(buf, callback);
}

class SmartServo extends Electronic {
  constructor(index) {
    super();
    this.args = {
      index: index,
      subCmd: null,
      speed: 0
    }
  }

  //锁定
  lock(){
    let extraCmd = 0x00;
    this.args.subCmd = 0x01;
    write(this.args, extraCmd);
    return this;
  }
  //解锁
  unclock(){
    let extraCmd = 0x01;
    this.args.subCmd = 0x01;
    write(this.args, extraCmd);
    return this;
  }

  /**
   * 设置舵机led颜色
   * @param {String|Array} hex_rgb #ff0064 or [255, 00, 100]
   */
  setLedColor(hex_rgb){
    let extraCmd;
    if(typeof rgb === 'string'){
      extraCmd = Utils.hexToRgb(hex_rgb);
    }else if(Array.isArray(hex_rgb)){
      extraCmd = hex_rgb;
    }
    this.args.subCmd = 0x02;
    write(this.args, extraCmd);
    return this;
  }

  //握手
  handshake(){
    this.args.subCmd = 0x03;
    write(this.args);
    return this;
  }

  speed(speed){
    this.args.speed = defineNumber(speed);
    return this;
  }
  //运动到绝对角度
  runToAbsoluteAngle(angle){
    let extraCmd = this.args.speed;
    this.args.subCmd = 0x04;
    write(this.args, extraCmd);
    return this;
  }
  //运动到相对角度
  runToRelativeAngle(angle){
    let extraCmd = this.args.speed;
    this.args.subCmd = 0x05;
    write(this.args, extraCmd);
    return this;
  }
  //作为直流电机运动
  runAsDcMotor(){
    let extraCmd = this.args.speed;
    this.args.subCmd = 0x06;
    write(this.args, extraCmd);
    return this;
  }

  //设置零点
  setZeroPoint(){
    this.args.subCmd = 0x07;
    write(this.args);
    return this;
  }

  //回到起点
  backToStart(){
    this.args.subCmd = 0x08;
    write(this.args);
    return this;
  }

  //读速度
  readSpeed(callback){
    this.args.subCmd = 0x09;
    read(this.args, callback);
    return this;
  }
  //读温度
  readTemperature(callback){
    this.args.subCmd = 0x0a;
    read(this.args, callback);
    return this;
  }

  //读电流
  readCurrent(callback){
    this.args.subCmd = 0x0b;
    read(this.args, callback);
    return this;
  }

  //读电压
  readVoltage(callback){
    this.args.subCmd = 0x0c;
    read(this.args, callback);
    return this;
  }

  //读角度
  readAngle(callback){
    this.args.subCmd = 0x0d;
    read(this.args, callback);
    return this;
  }

  static supportStamp(){
    return '0100';
  }
}
export default SmartServo;

