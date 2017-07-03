import utils  from "../../src/core/utils";
import Parse  from "../../src/core/parse";
import chai from 'chai';
const expect = chai.expect;
var assert = require('chai').assert;

describe('test doParse', function() {
  // 接收到残缺数据
  it('should parse the incomplete data', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d],
      [0x0a]
    ];
    for (var i in mock_receive_data) {
      Parse.doParse(mock_receive_data[i], null, function(buf) {
        assert.equal(buf.length, 6);
      })
    }
  });

  // 接收到完整数据1
  it('should parse the complete data1', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a]
    ];
    for (var i in mock_receive_data) {
      Parse.doParse(mock_receive_data[i], null, function(buf) {
        assert.equal(buf.length, 6);
      })
    }
  });

  // 接收到完整数据2
  it('should parse the complete data2', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x0d, 0x0a]
    ];
    for (var i in mock_receive_data) {
      Parse.doParse(mock_receive_data[i], null, function(buf) {
        assert.equal(buf.length, 0);
      })
    }
  });

  // 接收到的数据有丢失
  it('should parse the lost data', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6],
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a]
    ];
    for (var i in mock_receive_data) {
      Parse.doParse(mock_receive_data[i], null, function(buf) {
        assert.equal(buf.length, 0);
      })
    }
  });

  // 接收到多余数据
  it('should parse the excess data', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a, 0xff, 0x55],
      [0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a],
    ];
    for (var i in mock_receive_data) {
      Parse.doParse(mock_receive_data[i], null, function(buf) {
        assert.equal(buf.length, 6);
      })
    }
  });

  // 接收到错误数据
  it('should parse the error data mixed in', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a, 0x03, 0x04, 0xff, 0x55],
      [0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a]
    ];
    for (var i in mock_receive_data) {
      Parse.doParse(mock_receive_data[i], null, function(buf) {
        assert.equal(buf.length, 6);
      })
    }
  });
});

describe('test getResult', function() {
  it('should get value "09.01.002"', function() {
    var data = [0x00, 0x04, 0x09, 0x30, 0x39, 0x2E, 0x30, 0x31, 0x2E, 0x30, 0x30, 0x32];
    var version = Parse.getResult(data);
    assert.equal(version, "09.01.002");
  });
});