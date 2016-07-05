/**
 * @fileOverview 中间数据层，提供所有应用的数据获取，
 * 取值数据全部从这里获取。
 */

function Data() {
    this.blockStatusList = {
        "boardType": "auriga",
        "version": "0e.103.12"
    };
}

/**
 * Get block status
 * @param  {string} type block's type.
 * @return {float}      sensor's value.
 */
Data.prototype.getBlockStatus = function(type) {

};

module.exports = Data;