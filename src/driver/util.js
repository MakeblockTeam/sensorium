(function(that) {
    // 辅助函数：扩充对象
    that.extend =  function() {
        var args = arguments;
        if (args.length < 2) { return };
        var temp = args[0];
        for (var n = 1; n < args.length; n++) {
            for (var i in args[n]) {
                temp[i] = args[n][i];
            }
        }
        return temp;
})(window);