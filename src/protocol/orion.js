var boardType = (function(ext) {

    ext.orion = {
        getVersion: function() {
            console.log("orion");
        },

        setLedRgb: function(r,g,b, port) {

        },

        readUltrasonic: function() {

        }
    };

    return ext;
})({});


module.exports = boardType;