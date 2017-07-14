'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 对传入参数进行初始化
 */
function defineType(type) {
    return function (param, defaultValue) {
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
        var value = defaultValue;
        var condition = type === 'boolean' ? (typeof param === 'undefined' ? 'undefined' : _typeof(param)) === type : (typeof param === 'undefined' ? 'undefined' : _typeof(param)) === type || param === 1 || param === 0;
        if (condition) {
            value = param;
        } else {
            console.warn('param \'' + param + '\' is not a ' + type + '!');
        }
        return value;
    };
};

var defineNumber = defineType('number'),
    defineString = defineType('string'),
    defineArray = defineType('array'),
    defineBoolean = defineType('boolean'),
    defineObject = defineType('object');

exports.defineNumber = defineNumber;
exports.defineString = defineString;
exports.defineArray = defineArray;
exports.defineBoolean = defineBoolean;
exports.defineObject = defineObject;