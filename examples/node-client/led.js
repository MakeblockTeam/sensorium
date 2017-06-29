var Auriga = require("../../src/protocol/auriga");
var auriga = new Auriga({
  "driver": "serial"
});


setTimeout(function() {
  doReady();
}, 1000);


function doReady() {
  setInterval(blink, 1000);
  // setInterval(marquee, 1000);
  // marquee();
}

function setLeds(position, r, g, b) {
  auriga.setFourLeds(10, position, r, g, b);
  // auriga.setLedPanelOnBoard(position, r, g, b);
}

function turnOffLeds(position) {
  auriga.setFourLeds(10, position, 0, 0, 0);
  // auriga.setLedPanelOnBoard(position, 0, 0, 0);
}


function blink() {
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  setLeds(0, r, g, b);

  setTimeout(function() {
    turnOffLeds(0);
  }, 500);
}

function marquee() {
  // for(var i = 1; i < 5; i++) {
    // setTimeout((function(i) {
      // setLeds(0, 150, 0, 0);
    // })(i), 1000);
  // }
  // setTimeout(function() {
  //   for(var i = 1; i < 5; i ++) {
  //     turnOffLeds(i);
  //   }
  // }, 500)
}