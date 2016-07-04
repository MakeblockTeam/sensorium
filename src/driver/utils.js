/**
 * @fileOverview 工具类函数
 */


var Utils = {
    extend : function() {
        var args = arguments;
        if (args.length < 2) { return };
        var temp = args[0];
        for (var n = 1; n < args.length; n++) {
            for (var i in args[n]) {
                temp[i] = args[n][i];
            }
        }
        return temp;
    }
}


module.exports = Utils;
