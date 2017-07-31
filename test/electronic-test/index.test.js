/**
 * 对每个电子模块实例的方法可用性测试
 * @Jeremy
 */
import eModuleList from "../../src/electronic/index";
import Util from "../../src/core/utils";
import chai from 'chai';
const expect = chai.expect;

describe('test all the electronic modules', function() {
  //测试 es6 模块引用是否正确
  it('modules should be collected as an object', function(){
    expect(eModuleList).to.be.an('object');
  });

  //测试链式调用
  {
    console.warn = function(){};
    for(let electronic in eModuleList){
      let func = eModuleList[electronic];
      let instance_ = new func(1, 2, 3);
      //读取所有包括原型链上的 API
      let apis = Util.getAllMethods(instance_);
      if(func.name === 'EncoderMotorOnBoardPID'){
        //暂不做验证
        console.log(func.name, apis.join(','));
      }else{
        for(let method of apis){
          console.log(instance_[method].name);
        }
        it(`${electronic} should have perfectly chaining method`, function(){
          for(let method of apis){
            expect(instance_[method]()).to.eql(instance_);
          }
        });
      }
    }
  }
});