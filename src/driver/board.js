/**
 * @fileOverview mainboards of Makeblock. Include orion, mcore, auriga, megaPi.
 * 主板类，实际的入口
 * @author Hyman (hujinhong@makelbock.cc)
 */

require

function Board(type) {
    this.type = type;
    this.version = this._getVersion();
    this.mode = this._getMode();
}

Board.prototype._getVersion = function() {
    var version = new Command(this.type).getVersion();
};

Board.prototype._getMode = function() {
    var version = new Command(this.type).getVersion();
};


/**
 * Get voltage
 * @return {[type]} [description]
 */
Board.prototype.getVoltage = function() {

};


module.exports = Command;