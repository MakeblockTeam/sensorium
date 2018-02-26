/**
 * 对每个电子模块实例的方法可用性测试
 * @Jeremy
 */
import Sensorium from "../../src/index";
import Mcore from '../../src/mainboard/mcore';
import chai from 'chai';
const expect = chai.expect;

describe('test namespace modules', function() {
  it('Sensorium should be instantiated rightly', function() {
    let sensorium = new Sensorium();
    expect(sensorium).to.be.an.instanceof(Sensorium);
  });

  let sensorium = new Sensorium();
  it('Sensorium.create() should create a mainboard rightly', function() {
    let mcore1 = sensorium.create('mcore')
    let mcore2 = sensorium.createMcore()
    expect(mcore1).to.be.an.instanceof(Mcore);
    expect(mcore2).to.be.an.instanceof(Mcore);
  });
});