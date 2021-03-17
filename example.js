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
  //console.log(e)
})

let y_min = null, y_max = null
let z_min = null, z_max = null

mavLink.on('message', function (message) {
  if (message._message_name == 'VIBRATION') {
    console.log(new Date())
    console.log(message.vibration_x)


    if (message.vibration_y < y_min || y_min == null)
      y_min = message.vibration_y
    if (message.vibration_y > y_max || y_max == null)  {
      y_max = message.vibration_y
      console.log('New y max detected', y_max)
    }


    console.log(message.vibration_y * 100000, y_min * 100000, y_max * 100000)

    if (message.vibration_z < z_min || z_min == null)
      z_min = message.vibration_z
    if (message.vibration_z > z_max || z_max == null) {
      z_max = message.vibration_z
      console.log('New x max detected', y_max)
    }

    console.log(message.vibration_z * 100000, z_min * 100000, z_max * 100000)

    //console.log(message.vibration_z * 1000)
  }
})

// mavLink.on('Vibration', function (bytes) {
//   console.log('Sending COMMAND_LONG to PX4')
//   serialPort.write(bytes)
// })

// mavLink.on('HIGHRES_IMU', function (message) {
//   // event listener for HIGHRES_IMU message
//   console.log(message)
// })yy
