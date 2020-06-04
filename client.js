const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  
  conn.on('connect', () => {
    conn.write('Name: SNK');
    conn.write('Say: I dislike you');
    //setInterval(()=>conn.write('Move: up'), 50);
  });
 
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', () => {
    console.log('you ded cuz you idled')
  });
  return conn;
}
module.exports = {
  connect
};