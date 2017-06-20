/**
 * 对传入参数进行初始化
 */
function defineType(type) {
    return function(param, defaultValue) {
        if (arguments.length < 2 && typeof param === 'undefined') {
            return;
        }
        if (typeof defaultValue === 'undefinded') {
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
                    defaultValue = 0;
                    break;
            }
        }
        let value = defaultValue;
        let condition = type === 'boolean' ? (typeof param === type) : (typeof param === type || param === 1 || param === 0);
        if (condition) {
            value = param;
        } else {
            console.warn(`param '${param}' is not a ${type}!`);
        }
        return value;
    }
};

let defineNumber = defineType('number'),
    defineString = defineType('string'),
    defineArray = defineType('array'),
    defineBoolean = defineType('boolean'),
    defineObject = defineType('object');

export {
  defineNumber,
  defineString,
  defineArray,
  defineBoolean,
  defineObject
}