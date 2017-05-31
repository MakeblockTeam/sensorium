var Auriga = require("./auriga");
var Mcore = require("./mcore");
var Orion = require("./orion");
var MegaPi = require("./megapi");

function Sensorium() {
  return {
    "Auriga": Auriga,
    "Mcore": Mcore,
    "Orion": Orion,
    "MegaPi": MegaPi
  }
}

window.Sensorium = Sensorium;