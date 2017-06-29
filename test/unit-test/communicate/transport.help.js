import Command from '../../../src/communicate/command';
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
  },
  onReceived: function(pipe){
    serialPort.on('data', function(buff) {
      pipe(buff);
    });
  }
};

Transport.onReceived(Command.pipe.bind(Command));
export default Transport;