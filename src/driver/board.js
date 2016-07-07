/**
 * @fileOverview mainboards of Makeblock. Include orion, mcore, auriga, megaPi.
 * 主板类，实际的入口
 * @author Hyman (hujinhong@makelbock.cc)
 */

var Auriga = require("../protocol/auriga.js");
var Mbot = require("../protocol/mbot.js");
var Orion = require("../protocol/orion.js");
var Megapi = require("../protocol/megapi.js");
var Utils = require("./utils.js");

var actionList = Utils.extend(Auriga, Mbot, Orion, Megapi);

function Board(type) {
    console.log("[BoardType]: " + type);
    var actions = actionList[type];
    for(var i in actions) {
        this[i] = actions[i];
    }
    this.type = type;
    // this.version = this._getVersion();
    this.mode = this._getMode();
}

Board.prototype._getVersion = function() {
    this.getVersion(function(val) {
        this.version = val;
        return val;
    });
};

Board.prototype._getMode = function() {

};

if(window) {
    window.Board = Board;
}
module.exports = Board;
