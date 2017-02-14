var utils = require("../../../src/core/utils");
var assert = require('chai').assert;

describe('limitSpeed', function() {
  it('test limitSpeed(200)', function() {
    assert.equal(utils.limitSpeed(200), 200);
  });

  it('test limitSpeed(256)', function() {
    assert.equal(utils.limitSpeed(256), 255);
  });

  it('test limitSpeed(-100)', function() {
    assert.equal(utils.limitSpeed(-100), -100);
  });

  it('test limitSpeed(-257)', function() {
    assert.equal(utils.limitSpeed(-257), -255);
  });

  it('test limitSpeed(3400, [0, 3000])', function() {
    assert.equal(utils.limitSpeed(3400, [0, 3000]), 3000);
  });

  it('test limitSpeed(-10, [0, 3000])', function() {
    assert.equal(utils.limitSpeed(-10, [0, 3000]), 0);
  });
});

describe('emotionArrayToBytes', function() {
  var matrixArray = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  it('test emotionArrayToBytes(matrixArray)', function() {
    var targetResult = [0, 0, 0, 0, 28, 56, 28, 56, 28, 56, 3, 192, 3, 192, 0, 0];
    var result = utils.emotionArrayToBytes(matrixArray);

    assert.equal(targetResult.length, result.length);

    for(var i in targetResult) {
      assert.equal(targetResult[i], result[i]);
    }
  });
});

describe('intStrToHexStr', function() {
  var cmd = "0,4,9,48,57,46,48,49,46,48,49,50";
  it('test intStrToHexStr(' + cmd + ', true)', function() {
    var targetCmd = "00 04 09 30 39 2E 30 31 2E 30 30 32";
    assert.equal(targetCmd, utils.intStrToHexStr(cmd.split(","), true));
  });
});


