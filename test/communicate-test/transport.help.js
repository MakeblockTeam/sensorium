import CommandManager from '../../src/communicate/command-manager';
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

Transport.onReceived(CommandManager.pipe.bind(CommandManager));
export default Transport;