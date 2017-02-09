var blessed = require('blessed');
var fs = require('fs');
var Log = require('log');
// var dataman = require('test/dataman');
var Mcore = require("./src/protocol/mcore");
var Auriga = require("./src/protocol/auriga");
var logger = require('./src/log/log4js').logger;
var log = new Log('debug', fs.createWriteStream('cli.log'));

var blocksTableColumns = ['{bold}Command{/bold}'];

// Create a screen object.
var screen = blessed.screen({
  smartCSR: true,
  title: 'sensorium'
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Create a box perfectly centered horizontally and vertically.
// var commandBox = blessed.listtable({
//   parent: screen,
//   shadow: true,
//   top: 0,
//   left: 0,
//   width: '50%',
//   height: '60%',
//   rows: [blocksTableColumns],
//   border: 'line',
//   tags: true,
//   style: {
//     header: {
//       bg: 'white',
//       fg: 'black'
//     }
//   },
//   label: 'blocks'
// });

// Create a box perfectly centered horizontally and vertically.
var consoleBox = blessed.log({
  parent: screen,
  shadow: true,
  top: 0,
  right: 0,
  width: '100%',
  height: '60%',
  border: 'line',
  tags: true,
  label: 'console'
});

var codeBox = blessed.textarea({
  parent: screen,
  shadow: true,
  height: '40%',
  width: '100%',
  top: '60%',
  border: 'line',
  left: 0,
  tags: true,
  label: 'code'
});

codeBox.key('enter', function() {
  var code = codeBox.getValue();
  consoleBox.add('{white-fg}' + code + '{/white-fg}');
  try {
    eval(code);
  } catch (err) {
    consoleBox.add('{red-fg}' + err + '{/red-fg}');
  }
  codeBox.clearValue();
});


logger.info = logger.warn = logger.debug = console.log = function() {
  consoleBox.add('{white-fg}' + Array.prototype.join.call(arguments, ' ') + '{/white-fg}');
  // log.debug(Array.prototype.join.call(arguments, ' '));
};

var COLORS = ['red', 'green', 'blue', 'white', 'yellow'];

// setInterval(function() {
//   var blocks = engine.getActiveBlocks();
//   var rows = [blocksTableColumns, ['<----->', '<----->', '<----->']];
//   var colorIdx = 0;
//   var i=0;
//   var color=null;
//   for (var name in blocks) {
//     for (i = 0; i < blocks[name].length; i++) {
//       color = COLORS[(colorIdx++) % COLORS.length];
//       rows.push(['{' + color + '-fg}{bold}' + name + '{/bold}{/' + color + '-fg}',
//         '{' + color + '-fg}{bold}' + JSON.stringify(blocks[name][i]) + '{/bold}{/' + color + '-fg}',
//         '{' + color + '-fg}{bold}' + i + '{/bold}{/' + color + '-fg}'
//       ]);
//     }
//   }

//   blocksTable.setRows(rows);
// }, 100);

// var mcore = new Mcore({
//     "driver": "serial"
// });

var auriga = new Auriga({
    "driver": "serial"
});

// Focus our element.
codeBox.focus();

// Render the screen.
screen.render();

codeBox.readInput(function() {});
