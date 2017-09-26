import * as utils from "../../src/core/utils";
var assert = require('chai').assert;
describe('test limitValue', function() {
  it('test limitValue(200)', function() {
    assert.equal(utils.limitValue(200), 200);
  });

  it('test limitValue(256)', function() {
    assert.equal(utils.limitValue(256), 255);
  });

  it('test limitValue(-100)', function() {
    assert.equal(utils.limitValue(-100), -100);
  });

  it('test limitValue(-257)', function() {
    assert.equal(utils.limitValue(-257), -255);
  });

  it('test limitValue(3400, [0, 3000])', function() {
    assert.equal(utils.limitValue(3400, [0, 3000]), 3000);
  });

  it('test limitValue(-10, [0, 3000])', function() {
    assert.equal(utils.limitValue(-10, [0, 3000]), 0);
  });
});

describe('test intStrToHexStr', function() {
  var cmd = "0,4,9,48,57,46,48,49,46,48,48,50";
  it('test intStrToHexStr(' + cmd + ', true)', function() {
    var targetCmd = "00 04 09 30 39 2E 30 31 2E 30 30 32";
    assert.equal(targetCmd, utils.intStrToHexStr(cmd.split(","), true));
  });
});

describe('test bytesToString', function() {
  it('should get value "09.01.002"', function() {
    var data = [0x30, 0x39, 0x2E, 0x30, 0x31, 0x2E, 0x30, 0x30, 0x32];
    var version = utils.bytesToString(data);
    assert.equal(version, "09.01.002");
  });
});