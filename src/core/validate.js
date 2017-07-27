import Settings from '../mainboard/settings';
const SUPPORTLIST = Settings.SUPPORTLIST;

function validateType(type) {
  return function(param, defaultValue) {
    // 当 param 存在时 --> 判断类型 --->不合乎类型就用用默认值返回，合乎类型就返回自己
    // 当 param 不存在时 --> 直接返回默认值
    // （默认值必须符合类型，否则报错！）
    if (typeof param === type) {
      return param;
    } else {
      console.warn(`param '${param}' should be a ${type}!`);
      // 默认值
      if (typeof defaultValue === type) {
        return defaultValue;
      }
      //未传值
      else if (typeof defaultValue === 'undefined') {
        switch (type) {
          case 'number':
            defaultValue = 0;
            break;
          case 'string':
            defaultValue = '';
            break;
          case 'array':
            defaultValue = [];
            break;
          case 'boolean':
            defaultValue = false;
            break;
          case 'object':
            defaultValue = {};
            break;
          default:
            defaultValue = null;
        }
        return defaultValue;
      }
      //其他类型
      else {
        throw 'param ${defaultValue} should be a ${type} if passed in';
      }
    }
  }
};

let validateNumber = validateType('number'),
  validateString = validateType('string'),
  validateArray = validateType('array'),
  validateBoolean = validateType('boolean'),
  validateObject = validateType('object');
/**
 * 警告主控板不被支持
 * @param  {String} name 主控板名称
 */
let warnNotSupport = function(name) {
  if (SUPPORTLIST.indexOf(name) === -1) {
    console.warn(`the mainboard "${name}" expected to be one of ${SUPPORTLIST.join(',')}`);
    return false;
  }
}
export {
  warnNotSupport,
  validateNumber,
  validateString,
  validateArray,
  validateBoolean,
  validateObject
}