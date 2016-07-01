/**
 * block type definition.
 */

var block = {
  name: 'sound', //名称
  type: 0x07,   // 设备类型
  length: 8,
  status: ['float'] //回复值的类型
};

module.exports = block;