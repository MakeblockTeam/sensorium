import * as utils from "../../src/core/utils";
import Parse from "../../src/core/parse";
import chai from 'chai';
const expect = chai.expect;

function counter(number) {
  let NUM = number;
  let i = 0;
  let result = [];
  return function(buf, callback) {
    let buff = Parse.doParse(buf);
    if (buff) {
      result.push(buff);
    }
    if (++i == NUM) {
      callback(result);
    }
  }
}

describe('test doParse', function() {
  // 接收到残缺数据
  it('should parse the incomplete data', function() {
    let mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d],
      [0x0a]
    ];
    let doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(1);
        expect(result[0].length).to.equal(6);
      })
    }
  });

  // 接收到完整数据1
  it('should parse the complete data1', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(1);
        expect(result[0].length).to.equal(6);
      })
    }
  });

  // 接收到完整数据2
  it('should parse the complete data2 to []', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x0d, 0x0a]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(1);
        expect(result[0].length).to.equal(0);
      })
    }
  });

  // 接收到完整数据3
  it('should parse the complete data3 to []', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x0d, 0x0a],
      [0xff, 0x55, 0x0d, 0x0a]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(2);
        expect(result[0].length).to.equal(0);
      })
    }
  });

  // 接收到的数据有丢失
  it('should parse the lost data', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6],
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(1);
        expect(result[0].length).to.equal(6);
      })
    }
  });

  // 接收到多余数据
  it('should parse the excess data', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a, 0xff, 0x55],
      [0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a],
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(1);
        expect(result[0].length).to.equal(6);
      })
    }
  });

  // 接收到混入数据
  it('should parse the error data mixed in', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a, 0x03, 0x04, 0xff, 0x55],
      [0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(1);
        expect(result[0].length).to.equal(6);
      })
    }
  });

  // 接收的数据无头部
  it('should parse the error data without header', function() {
    var mock_receive_data = [
      [0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41, 0x0d, 0x0a]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(0);
      })
    }
  });

  // 接收的数据无尾部
  it('should parse the error data without footer', function() {
    var mock_receive_data = [
      [0xff, 0x55, 0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(0);
      })
    }
  });

  // 接收的数据无头部、无尾部
  it('should parse the error data without header and footer', function() {
    var mock_receive_data = [
      [0x00, 0x02, 0xe6, 0x9e, 0x16, 0x41]
    ];
    var doParse = counter(mock_receive_data.length);
    for (let data of mock_receive_data) {
      doParse(data, function(result) {
        expect(result.length).to.equal(0);
      })
    }
  });
});

describe('test getResult', function() {
  it('should get value "09.01.002"', function() {
    var data = [0x00, 0x04, 0x09, 0x30, 0x39, 0x2E, 0x30, 0x31, 0x2E, 0x30, 0x30, 0x32];
    var version = Parse.getResult(data);
    expect(version).to.equal("09.01.002");
  });
});