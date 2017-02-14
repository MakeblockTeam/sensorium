var Auriga = require("../src/protocol/auriga");
var auriga = new Auriga({
    "driver": "serial"
});


setTimeout(function() {

  auriga.getSensorValue('temperatureOnBoard', function(val) { console.log(val);})
}, 3000);

// setInterval(function() {orion.getSensorValue('limitSwitch', function(val) { console.log(val);})}, 1000);