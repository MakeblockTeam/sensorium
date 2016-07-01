/**
 * example block type definition.
 */

var example = {
  // the name of the block, must not be unique.
  name: 'example',
  // the typeid of block.
  type: 0x00,
  // available status' datatype.
  status: ['byte', 'BYTE', 'short', 'float', 'string', 'dobule', 'long']
};

module.exports = example;