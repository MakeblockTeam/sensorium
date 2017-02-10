var Auriga = require("../src/protocol/auriga");
var auriga = new Auriga({
    "driver": "serial"
});


setTimeout(function() {

  auriga.getSensorValue('temperatureOnBoard', function(val) { console.log(val);})
}, 3000);