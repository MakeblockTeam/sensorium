/**
 * @fileOverview 只负解析指令的逻辑
 */

var protocol = require('../protocol/protocol.js');
var utils = require('./utils.js');


function Parse() {

}

Parse.prototype.parse = function(params) {
    this.doParse(params);
};

Parse.prototype.doParse = function(str) {

};



module.exports = Parse;