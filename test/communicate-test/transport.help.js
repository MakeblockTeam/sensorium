import Control from '../../src/core/control';
import Server from './parent';

function SerialPort(){
  const server = new Server();
  this.send = function(buf){
    server.send(buf);
  }
  this.on = function(event, callback){
    server.addListener(callback);
  };
}

const serialPort = new SerialPort();
const Transport = {
  send: function(buf){
    serialPort.send(buf);
  }
};
serialPort.on('data', function(buff) {
  Control.pipe(buff);
});

export default Transport;