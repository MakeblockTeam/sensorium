/**
 * 对电子模块各个类实例的方法可用性测试，而不测试其功能正确
 * @Jeremy
 */
import eModuleList from "../../src/electronic/index";
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
      it(`${electronic} should have perfectly chaining method`, function(){
        for(let method in instance_){
          if(instance_.hasOwnProperty(method) && typeof method == 'function'){
            // method() === instance_
            expect(method()).to.eql(instance_);
          }
        }
      });
    }
  }
});