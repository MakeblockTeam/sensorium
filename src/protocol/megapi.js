var boardType = (function(ext) {

    ext.megapi = {
        getVersion: function() {
            console.log("megapi");
        },

        setLedRgb: function(r,g,b, port) {

        },

        readUltrasonic: function() {

        }
    };

    return ext;
})({});


module.exports = boardType;