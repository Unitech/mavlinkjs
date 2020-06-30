
## MAVLINKJS

Working system to directly connect to a PX4 controller via USB with Raw Javascript.
All GRPC files are linked into this repository, ready to be used without any compilation steps.

```javascript
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
```

Result of running this will output this data at very high rate:

```json
LocalPositionNed {
  _system_id: 1,
  _component_id: 1,
  _message_id: 32,
  _message_name: 'LOCAL_POSITION_NED',
  _crc_extra: 185,
  _message_fields: [
    [ 'time_boot_ms', 'uint32_t', false ],
    [ 'x', 'float', false ],
    [ 'y', 'float', false ],
    [ 'z', 'float', false ],
    [ 'vx', 'float', false ],
    [ 'vy', 'float', false ],
    [ 'vz', 'float', false ]
  ],
  time_boot_ms: 119908,
  x: 0,
  y: 0,
  z: -0.502192497253418,
  vx: 0.0037622619420289993,
  vy: -0.021268177777528763,
  vz: 0.043966297060251236
}
ActuatorControlTarget {
  _system_id: 1,
  _component_id: 1,
  _message_id: 140,
  _message_name: 'ACTUATOR_CONTROL_TARGET',
  _crc_extra: 181,
  _message_fields: [
    [ 'time_usec', 'uint64_t', false ],
    [ 'controls', 'float', false ],
    [ 'group_mlx', 'uint8_t', false ]
  ],
  time_usec: 119907157,
  controls: -0.018576160073280334,
  group_mlx: 227
}
ScaledImu2 {
  _system_id: 1,
  _component_id: 1,
  _message_id: 116,
  _message_name: 'SCALED_IMU2',
  _crc_extra: 76,
  _message_fields: [
    [ 'time_boot_ms', 'uint32_t', false ],
    [ 'xacc', 'int16_t', false ],
    [ 'yacc', 'int16_t', false ],
    [ 'zacc', 'int16_t', false ],
    [ 'xgyro', 'int16_t', false ],
    [ 'ygyro', 'int16_t', false ],
    [ 'zgyro', 'int16_t', false ],
    [ 'xmag', 'int16_t', false ],
    [ 'ymag', 'int16_t', false ],
    [ 'zmag', 'int16_t', false ],
    [ 'temperature', 'int16_t', true ]
  ],
  time_boot_ms: 119940,
  xacc: -5,
  yacc: -1,
  zacc: -215,
  xgyro: 14,
  ygyro: 19,
  zgyro: 8,
  xmag: -384,
  ymag: 9402,
  zmag: -92
}
Heartbeat {
  _system_id: 1,
  _component_id: 1,
  _message_id: 0,
  _message_name: 'HEARTBEAT',
  _crc_extra: 50,
  _message_fields: [
    [ 'custom_mode', 'uint32_t', false ],
    [ 'type', 'uint8_t', false ],
    [ 'autopilot', 'uint8_t', false ],
    [ 'base_mode', 'uint8_t', false ],
    [ 'system_status', 'uint8_t', false ],
    [ 'mavlink_version', 'uint8_t', false ]
  ],
  custom_mode: 65536,
  type: 2,
  autopilot: 12,
  base_mode: 81,
  system_status: 3,
  mavlink_version: 3
}
Ping {
  _system_id: 1,
  _component_id: 1,
  _message_id: 4,
  _message_name: 'PING',
  _crc_extra: 237,
  _message_fields: [
    [ 'time_usec', 'uint64_t', false ],
    [ 'seq', 'uint32_t', false ],
    [ 'target_system', 'uint8_t', false ],
    [ 'target_component', 'uint8_t', false ]
  ],
  time_usec: 119960505,
  seq: 116,
  target_system: 0,
  target_component: 0
}
GpsRawInt {
  _system_id: 1,
  _component_id: 1,
  _message_id: 24,
  _message_name: 'GPS_RAW_INT',
  _crc_extra: 24,
  _message_fields: [
    [ 'time_usec', 'uint64_t', false ],
    [ 'lat', 'int32_t', false ],
    [ 'lon', 'int32_t', false ],
    [ 'alt', 'int32_t', false ],
    [ 'eph', 'uint16_t', false ],
    [ 'epv', 'uint16_t', false ],
    [ 'vel', 'uint16_t', false ],
    [ 'cog', 'uint16_t', false ],
    [ 'fix_type', 'uint8_t', false ],
    [ 'satellites_visible', 'uint8_t', false ],
    [ 'alt_ellipsoid', 'int32_t', true ],
    [ 'h_acc', 'uint32_t', true ],
    [ 'v_acc', 'uint32_t', true ],
    [ 'vel_acc', 'uint32_t', true ],
    [ 'hdg_acc', 'uint32_t', true ],
    [ 'yaw', 'uint16_t', true ]
  ],
  time_usec: 119961265,
  lat: 0,
  lon: 0,
  alt: -17000,
  eph: 9999,
  epv: 9999,
  vel: 0,
  cog: 0,
  fix_type: 0,
  satellites_visible: 0
}
Attitude {
  _system_id: 1,
  _component_id: 1,
  _message_id: 30,
  _message_name: 'ATTITUDE',
  _crc_extra: 39,
  _message_fields: [
    [ 'time_boot_ms', 'uint32_t', false ],
    [ 'roll', 'float', false ],
    [ 'pitch', 'float', false ],
    [ 'yaw', 'float', false ],
    [ 'rollspeed', 'float', false ],
    [ 'pitchspeed', 'float', false ],
    [ 'yawspeed', 'float', false ]
  ],
  time_boot_ms: 119964,
  roll: 0.008923572488129139,
  pitch: -0.022306503728032112,
  yaw: 2.5876522064208984,
  rollspeed: -0.0006045978516340256,
  pitchspeed: -0.0007540639489889145,
  yawspeed: 0.00029691122472286224
}
HighresImu {
  _system_id: 1,
  _component_id: 1,
  _message_id: 105,
  _message_name: 'HIGHRES_IMU',
  _crc_extra: 93,
  _message_fields: [
    [ 'time_usec', 'uint64_t', false ],
    [ 'xacc', 'float', false ],
    [ 'yacc', 'float', false ],
    [ 'zacc', 'float', false ],
    [ 'xgyro', 'float', false ],
    [ 'ygyro', 'float', false ],
    [ 'zgyro', 'float', false ],
    [ 'xmag', 'float', false ],
    [ 'ymag', 'float', false ],
    [ 'zmag', 'float', false ],
    [ 'abs_pressure', 'float', false ],
    [ 'diff_pressure', 'float', false ],
    [ 'pressure_alt', 'float', false ],
    [ 'temperature', 'float', false ],
    [ 'fields_updated', 'uint16_t', false ],
    [ 'id', 'uint8_t', true ]
  ],
  time_usec: 119968657,
  xacc: -0.2032364308834076,
  yacc: -0.06762934476137161,
  zacc: -9.82526683807373,
  xgyro: 0.000703832134604454,
  ygyro: 0.00020623020827770233,
  zgyro: 0.0015877345576882362,
  xmag: -0.7811354994773865,
  ymag: -0.48602935671806335,
  zmag: -0.6154966354370117,
  abs_pressure: 100659,
  diff_pressure: 0,
  pressure_alt: 55.5970458984375,
  temperature: 29.959999084472656,
  fields_updated: 7167
}
```


### Getting further

To be able to build the GRPC messages protos:

#### pymavlink

Install pymavlink:
```
git clone https://github.com/ArduPilot/pymavlink.git
sudo apt-get install gcc python-dev libxml2-dev libxslt-dev
cd pymavlink
sudo pip2 install -U future lxml
```

Edit the generator file:
```
cd pymavlink
emacs pymavlink/generator/mavgen_typescript.py
# Replace node-mavlink to '@ifrunistuttgart/node-mavlink'
```

#### Retrieve messages_definitions

```
git clone https://github.com/mavlink/mavlink.git
cd ..
mkdir assets
python ./pymavlink/tools/mavgen.py -o ./assets --lang TypeScript --wire-protocol 2.0 mavlink/message_definitions/v1.0/ardupilotmega.xml
```

This will generates all GRPC mavlink message definitions in `./assets/`

```
cd assets/
tsc
```
