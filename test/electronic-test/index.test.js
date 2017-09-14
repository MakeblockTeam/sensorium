/**
 * 对每个电子模块实例的方法可用性测试
 * @Jeremy
 */
import eModuleList from "../../src/electronic/index";
import Util from "../../src/core/utils";
import Read from '../../src/communicate/read';
import chai from 'chai';
const expect = chai.expect;

//override to Shorten the executed time
Read.watchdog = function(index) {
 this.timer = setTimeout(()=>{
    this.emitCallback(index, null);
  }, 10);
}

function isInstanceOfObject(instance_){
  let proto_ = Object.getPrototypeOf(instance_);
  return Object.getPrototypeOf(proto_) === null;
}
// 判断 [object AsyncFunction] 类型
function isAsyncFunction(method){
  return Object.prototype.toString.call(method) == '[object AsyncFunction]';
}
// 判断 [object Promise] 类型
function isPromiseObject(obj){
  return Object.prototype.toString.call(obj) == '[object Promise]';
}

describe('test all the electronic modules', function() {
  //测试 es6 模块引用是否正确
  it('modules should be an object', function() {
    expect(eModuleList).to.be.an('object');
  });

  //测试链式调用
  {
    console.warn = function() {};
    for (let electronic in eModuleList) {
      let func = eModuleList[electronic];
      let instance_ = new func(1, 2, 3);
      let instance_fn = Object.keys(instance_).filter(attr => typeof instance_[attr] === 'function');

      describe(`${electronic} prototype methods:`, function() {
        //构造函数中出现组合模式
        if (instance_fn.length) {
          //实例原型链上的 API
          let apis = Util.getAllMethods(instance_.__proto__);
          for (let method of apis) {
            if (method === 'protocol') {
              continue;
            }
            let obj = instance_[method]();
            if(isPromiseObject(obj)){
              it(`${method} : should be promise methods and resolve(null)`, function(done) {
                obj.then(val => {
                  expect(val).to.eql(null);
                  done();
                })
              })
            }else{
              it(`${method} : should be chaining methods`, function() {
                expect(obj).to.eql(instance_);
              })
            }
          }
          //组合模式中的继承
          for (let fn of instance_fn) {
            let instance_instance_ = instance_[fn]();
            //instance_instance_ 是非 Object 类的实例
            if(!isInstanceOfObject(instance_instance_)){
              //读取所有包括原型链上的 API
              let apis = Util.getAllMethods(instance_instance_);
              for (let method of apis) {
                if (method === 'protocol') {
                  continue;
                }
                let obj = instance_instance_[method]();
                if(isPromiseObject(obj)){
                  it(`${method} : should be promise methods and resolve(null)`, function(done) {
                    obj.then(val => {
                      expect(val).to.eql(null);
                      done();
                    })
                  })
                }else{
                  it(`${method} : should be chaining methods`, function() {
                    expect(obj).to.eql(instance_instance_);
                  })
                }
              }
            }
          }
        }
        //纯继承模式
        else{
            //读取所有 API 包括原型链上的 API
            let apis = Util.getAllMethods(instance_);
            for (let method of apis) {
              if (method === 'protocol') {
                continue;
              }
              let obj = instance_[method]();
              if(isPromiseObject(obj)){
                it(`${method} : should be promise methods and resolve(null)`, function(done) {
                  obj.then(val => {
                    expect(val).to.eql(null);
                    done();
                  })
                })
              }else{
                it(`${method} : should be chaining methods`, function() {
                  expect(obj).to.eql(instance_);
                })
              }
            }
        }
      });
    }
  }
});