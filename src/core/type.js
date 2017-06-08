/**
 * 对传入参数进行初始化
 */
function defineNumber(param, defaultNumber = 0) {
    if(typeof param === 'undefined') {
        return ;
    }
    
    let value = defaultNumber;
    if(typeof param === 'number') {
        value = param;
    } else {
        console.warn(`param ${param} is not a number!`);
    }
    return value;
};

function defineString(param, defaultString = '') {
    if(typeof param === 'undefined') {
        return ;
    }

    let value = defaultString;
    if(typeof param === 'string') {
        value = param;
    } else {
        console.warn(`param ${param} is not a string!`);
    }
    return value;
};

function defineArray(param, defaultArray = []) {
    if(typeof param === 'undefined') {
        return ;
    }

    let value = defaultArray;
    if(typeof param === 'array') {
        value = param;
    } else {
        console.warn(`param ${param} is not a array!`);
    }
    return value;
};

function defineBoolean(param, defaultBoolean = false) {
    if(typeof param === 'undefined') {
        return ;
    }

    let value = defaultBoolean;
    if(typeof param === 'boolean' || param === 1 || param === 0) {
        value = param;
    } else {
        console.warn(`param ${param} is not a boolean!`);
    }
    return value;
};

function defineObject(param, defaultObject = {}) {
    if(typeof param === 'undefined') {
        return ;
    }

    let value = defaultObject;
    if(typeof param === 'object') {
        value = param;
    } else {
        console.warn(`param ${param} is not a object!`);
    }
    return value;
};

module.exports = {
    defineNumber,
    defineString,
    defineArray,
    defineBoolean,
    defineObject
}