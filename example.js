var SerialPort = require('serialport')
var message_registry = require('./assets/message-registry')
var node_mavlink = require('@ifrunistuttgart/node-mavlink')
var mavLink = new node_mavlink.MAVLinkModule(message_registry.messageRegistry)

var serialPort = new SerialPort('/dev/ttyACM0', {
  baudRate: 1921600
})

serialPort.on('data', function (data) {
  mavLink.parse(data)
})

mavLink.on('error', function (e) {
  console.log(e)
})

mavLink.on('message', function (message) {
  console.log(message)
})

// mavLink.on('Vibration', function (bytes) {
//   console.log('Sending COMMAND_LONG to PX4')
//   serialPort.write(bytes)
// })

// mavLink.on('HIGHRES_IMU', function (message) {
//   // event listener for HIGHRES_IMU message
//   console.log(message)
// })yy
