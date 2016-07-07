/**
 * @fileOverview board用做通信类，被其他几大主板调用, 例如 orion, mcore, auriga, megaPi.
 * @author Hyman (hujinhong@makelbock.cc)
 */

var createDriver = require("../driver/index.js").create;
var _driver = null;

function Board(conf) {
    this.setDriver(conf.driver);
}

Board.prototype.setDriver = function(driver) {
    this.driver = createDriver(driver);
    this.driver.on('data', function(buffer) {
        // 拿到数据
        this._processData();
    });

    this.driver.on('error', function(err) {
        logger.warn(err);
    });
};

module.exports = Board;
