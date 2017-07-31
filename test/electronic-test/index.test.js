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
  it('modules should be collected as an object', function() {
    expect(eModuleList).to.be.an('object');
  });

  //测试链式调用
  {
    console.warn = function() {};
    for (let electronic in eModuleList) {
      let func = eModuleList[electronic];
      let instance_ = new func(1, 2, 3);

      //组合模式 所有方法满足链式调用
      //包括 LedMatrix、EncoderMotorOnBoardPID
      let instance_fn = Object.keys(instance_).filter(attr => typeof instance_[attr] === 'function');
      if (instance_fn.length) {
        //继承模式 所有方法满足链式调用
        it(`${electronic} should have chaining methods include methods in its prototype chain`, function() {
          //读取所有包括原型链上的 API
          // console.log(Util.getAllMethods(instance_.__proto__));
          let apis = Util.getAllMethods(instance_.__proto__);
          for (let method of apis) {
            expect(instance_[method]()).to.eql(instance_);
          }
        });
        for (let fn of instance_fn) {
          let className;
          //进一步实例化
          let instance_instance_ = instance_[fn]();
          //instance_instance_ 是非 Object 类的实例
          if((className = Object.getPrototypeOf(instance_instance_)) && Object.getPrototypeOf(className)){
            it(`${electronic} composed Class ${instance_instance_.constructor.name} also have chaining methods include methods in its prototype chain`, function() {
              //读取所有包括原型链上的 API
              let apis = Util.getAllMethods(instance_instance_);
              for (let method of apis) {
                expect(instance_instance_[method]()).to.eql(instance_instance_);
              }
            });
          }
        }
      }else{
        //继承模式 所有方法满足链式调用
        it(`${electronic} should have chaining methods include methods in its prototype chain`, function() {
          //读取所有包括原型链上的 API
          let apis = Util.getAllMethods(instance_);
          for (let method of apis) {
            expect(instance_[method]()).to.eql(instance_);
          }
        });
      }
    }
  }
});