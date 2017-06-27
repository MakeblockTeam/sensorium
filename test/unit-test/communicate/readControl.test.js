import Transport from './transport.help';
import Cammand from '../../../src/communicate/command';
import ReadControl from '../../../src/communicate/readControl';
import chai from 'chai';
const expect = chai.expect;

//重写
Cammand.exec = function(buf){
  Transport.send(buf);
}

const ajaxNum = function(num){
  let NUM = num;
  let index = 0;
  return function(callback){
    index++;
    if(index >= NUM){
      callback();
    }
  }
}
// console.log(Transport);

//模拟快速创建 254、255 条请求
//模拟匀速创建 254、255 条请求
//模拟随机速度创建 254、255 条请求
describe('test doParse', function() {
  //模拟发送 1 条请求
  it('should create 1 readRecord', function(done) {
    Cammand.execRead([0xff, 0x55, 0x04, 0x00, 0x01, 0x01, 0x06], function(val){
      let count = Object.keys(ReadControl.readRecord).length;
      console.log('ReadControl.readRecord', ReadControl.readRecord.index);
      expect(count).to.eql(1);
      done();
    }); //ff 55 04 00 01 01 06
  });

  //模拟快速创建 25 条请求
  it('should create 25 readRecords', function(done) {
    let ajaxCount = ajaxNum(25);
    for(let i = 0; i < 25; i++){
      Cammand.execRead([0xff, 0x55, 0x04, 0x00, 0x01, 0x01, 0x06], function(val){
        ajaxCount(function(){
          console.log(Object.keys(ReadControl.readRecord).length);
          done();
        });
      });
    }
  });

  //模拟快速创建 256 条请求
  it('should create 256 readRecord but send 255', function() {
    let ajaxCount = ajaxNum(256);
    for(let i = 0; i < 256; i++){
      Cammand.execRead([0xff, 0x55, 0x04, 0x00, 0x01, 0x01, 0x06], function(val){
        ajaxCount(function(){
          console.log(Object.keys(ReadControl.readRecord).length);
          done();
        });
      });
    }
  });

  //模拟匀速(10ms/条)创建 254 条请求
  it('should parse the incomplete data', function() {
    
  });

  //模拟匀速(10ms/条)创建 255 条请求
  it('should parse the incomplete data', function() {
    
  });

  //模拟随机速度(10~100ms/条)创建 254 条请求
  it('should parse the incomplete data', function() {
    
  });

  //模拟随机速度(10~100ms/条)创建 255 条请求
  it('should parse the incomplete data', function() {
    
  });
});