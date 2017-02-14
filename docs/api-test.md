auriga.setLedMatrixChar(6, 0, 0, 'nihao')
auriga.setLedMatrixTime(8, 1, 14, 12)
auriga.setLedMatrixEmotion(6, 0, 0, [00 ,00 ,0x40 ,0x48 ,0x44 ,0x42 ,0x02 ,0x02 ,0x02 ,0x02 ,0x42 ,0x44 ,0x48 ,0x40 ,0x00 ,0x00])
auriga.setLedMatrixNumber(6, 12)


for(var i = 0; i< 40; i++) {setTimeout((function(i) {auriga.setLedMatrixNumber(6, i)})(i), 1000);}

setInterval(function() { auriga.getSensorValue('temperatureOnBoard', {}, function(val) { console.log(val);}); }, 1000)

auriga.getSensorValue('temperatureOnBoard', function(val) { console.log(val);})

auriga.getSensorValue('version', function(val) { console.log(val);})

