/**
 * 测试维度：
 * 1、匀速请求
 * 2、随机请求
 * 3、请求异常（超时）
 * 4、响应异常（超时、队列占满）
 * 5、有请求必有响应（哪怕是超时，也需给出超时提示作为响应）
 */
import Transport from './transport.help';
import Command from '../../src/communicate/command';
import CommandManager from '../../src/communicate/command-manager';
import Read from '../../src/communicate/read';
import chai from 'chai';
const expect = chai.expect;

//重载 send 方法
Command.send = function(buf){
  Transport.send(buf);
}

//重置 Read
const resetReadForTest = function(){
  Read.readRecord = {};
  Read.index = 0;
}
const throttler = function(num){
  let NUM = num;
  let index = 0;
  return function(callback){
    index++;
    if(index == NUM){
      callback();
    }
  }
}
const defer = function (time){
  let timer_ = null;
  function createTimer(callback){
    //延迟激活的程序
    return setTimeout(callback, time||1500);
  }
  return function(callback){
    timer_ && clearTimeout(timer_);
    // console.log('timer_ ---->');
    timer_ = createTimer(callback);
  }
}

//以超声波协议为测试数据
//模拟快速创建 254、255 条请求
//模拟匀速创建 254、255 条请求
//模拟随机速度创建 254、255 条请求
const UltrasonicProtocol = [0xff, 0x55, 0x04, 0x00, 0x01, 0x01, 0x06];
describe('test doParse', function() {
  //模拟发送 1 条请求
  it('should create 1 readRecord', function(done) {
    resetReadForTest();
    CommandManager.read(UltrasonicProtocol).then((val) =>{
      expect(val).to.eql(9.41);
      done();
    });
  });

  //模拟快速创建 25 条请求
  it(`should create 25 readRecords`, function(done) {
    let CaseReadNumber = 25;
    resetReadForTest();
    let emitFunc = throttler(CaseReadNumber);
    for(let i = 0; i < CaseReadNumber; i++){
      CommandManager.read(UltrasonicProtocol).then((val) =>{
        //每次获取到的模拟值为 9.41
        expect(val).to.eql(9.41);
        emitFunc(function(){
          done();
        });
      });
    }
  });

  //模拟快速创建 255 条请求
  //预期能执行 255 次请求回调
  it('快速创建 255 条请求, 预期执行 255 次请求回调', function(done) {
    resetReadForTest();
    let CaseReadNumber = 255;
    let emitFunc = throttler(CaseReadNumber);
    for(let i = 0; i < CaseReadNumber; i++){
      CommandManager.read(UltrasonicProtocol).then((val) =>{
        //每次获取到的模拟值为 9.41
        expect(val).to.eql(9.41);
        emitFunc(function(){
          done();
        });
      });
    }
  });

  //模拟快速创建 260 条请求
  //预期能执行 260 次请求回调
  it('快速创建 260 条请求, 预期执行 260 次请求回调，且 4 次回调值为空', function(done) {
    resetReadForTest();
    let CaseReadNumber = 260;
    let emitFunc = throttler(CaseReadNumber);
    let count = 0;
    let countFoVal = 0;
    let countFoNull = 0;
    for(let i = 0; i < CaseReadNumber; i++){
      CommandManager.read(UltrasonicProtocol).then((val) =>{
        //每次获取到的模拟值为 9.41
        val === 9.41 ? countFoVal++: countFoNull++;
        emitFunc(function(){
          expect(countFoVal).to.eql(256);
          expect(countFoNull).to.eql(4);
          done();
        });
      });
    }
  });

  // 模拟匀速(20ms/条)创建 256 条请求，
  // 特别的，响应超时的情况，也会及时触发回调，故：预期执行 256 次请求回调
  // 若超过规定时间没有发生回调，则推测所有请求已完成回调，断言：回调数 == 请求数
  it('匀速(20ms/条)创建 256 条请求，预期执行 256 次请求回调', function(done) {
    resetReadForTest();
    this.timeout(10000);
    let CaseReadNumber = 256;
    let callbackNum = 0; //回调次数
    let i = 0;
    let validate = defer();
    let timer = setInterval(function(){
      if(i++ < CaseReadNumber){
        CommandManager.read(UltrasonicProtocol).then((val) =>{
          callbackNum++;
          //每次获取到的模拟值为 9.41
          expect(val).to.eql(9.41);
          validate(function(){
            expect(callbackNum).to.eq(CaseReadNumber);
            done();
          });
        });
      }else{
        clearInterval(timer);
      }
    }, 20);
  });

  //模拟匀速(60ms/条)创建 100 条请求
  //特别的，响应超时的情况，也会触发回调，故：预期执行 100 次请求回调
  // 若超过规定时间没有发生回调，则推测所有请求已完成回调，断言：回调数 == 请求数
  it('模拟匀速(60ms/条)创建 100 条请求，预期执行 100 次请求回调', function(done) {
    this.timeout(8000);
    resetReadForTest();
    let CaseReadNumber = 100;
    let callbackNum = 0; //回调次数
    let i = 0;
    let validate = defer();
    let timer = setInterval(function(){
      if(i++ < CaseReadNumber){
        CommandManager.read(UltrasonicProtocol).then((val) =>{
          callbackNum++;
          //每次获取到的模拟值为 9.41
          expect(val).to.eql(9.41);
          validate(function(){
            expect(callbackNum).to.eq(CaseReadNumber);
            done();
          });
        });
      }else{
        clearInterval(timer);
      }
    }, 60);
  });

  //模拟随机速度(10~100ms/条)创建 256 条请求
  //特别的，响应超时的情况，也会触发回调，故：预期执行 256 次请求回调
  // 若超过规定时间没有发生回调，则推测所有请求已完成回调，断言：回调数 == 请求数
  it('模拟随机速度(10~100ms/条)创建 256 条请求，预期执行 256 次请求回调', function(done) {
    this.timeout(10000);
    resetReadForTest();
    let CaseReadNumber = 256;
    let callbackNum = 0; //回调次数
    let i = 0;
    let validate = defer();
    function createRandomTime(){
      return parseInt(Math.random()*90 +10);
    }
    for(let i = 0; i < CaseReadNumber; i++){
      setTimeout(function(){
        CommandManager.read(UltrasonicProtocol).then((val) =>{
          callbackNum++;
          //每次获取到的模拟值为 9.41
          expect(val).to.eql(9.41);
          validate(function(){
            expect(callbackNum).to.eq(CaseReadNumber);
            done();
          });
        });
      }, createRandomTime());
    }
  });

  //模拟随机速度(10~100ms/条)创建 256 条请求
  it('模拟随机速度(10~100ms/条)创建 257 条请求，预期执行 257 次请求回调', function(done) {
    this.timeout(10000);
    resetReadForTest();
    let CaseReadNumber = 257;
    let callbackNum = 0; //回调次数
    let countForNull = 0;
    let i = 0;
    let validate = defer();
    function createRandomTime(){
      return parseInt(Math.random()*90 +60);
    }
    for(let i = 0; i < CaseReadNumber; i++){
      setTimeout(function(){
        CommandManager.read(UltrasonicProtocol).then((val) =>{
          callbackNum++;
          //每次获取到的模拟值为 9.41
          expect(val).to.eql(9.41);
          validate(function(){
            expect(callbackNum).to.eq(CaseReadNumber);
            done();
          });
        });
      }, createRandomTime());
    }
  });
});