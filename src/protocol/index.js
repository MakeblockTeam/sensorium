var Mcore = require("./mcore");
var Orion = require("./orion");
var Auriga = require("./auriga");
var MegaPi = require("./megaPi");
var Neuron = require("./neuron");

var Sensorium = {
    "Mcore": Mcore,
    "Orion": Orion,
    "Auriga": Auriga,
    "MegaPi": MegaPi,
    "Neuron": Neuron
}

if(typeof window != "undefined") {
  window.Sensorium = Sensorium;
}

module.exports = Sensorium;