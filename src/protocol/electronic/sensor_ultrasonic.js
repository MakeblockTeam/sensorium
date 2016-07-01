/**
 * block type definition.
 */

var block = {
  name: 'sound', //名称
  type: 0x07,   // 设备类型
  // 发送的指令长度
  length: 8,
  //回复值的类型
  status: ['float']
};

module.exports = block;