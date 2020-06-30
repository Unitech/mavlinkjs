"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServoOutputRaw = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Superseded by ACTUATOR_OUTPUT_STATUS. The RAW values of the servo outputs (for RC input from the remote, use the RC_CHANNELS messages). The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint32_t
// port Servo output port (set of 8 outputs = 1 port). Flight stacks running on Pixhawk should use: 0 = MAIN, 1 = AUX. uint8_t
// servo1_raw Servo output 1 value uint16_t
// servo2_raw Servo output 2 value uint16_t
// servo3_raw Servo output 3 value uint16_t
// servo4_raw Servo output 4 value uint16_t
// servo5_raw Servo output 5 value uint16_t
// servo6_raw Servo output 6 value uint16_t
// servo7_raw Servo output 7 value uint16_t
// servo8_raw Servo output 8 value uint16_t
// servo9_raw Servo output 9 value uint16_t
// servo10_raw Servo output 10 value uint16_t
// servo11_raw Servo output 11 value uint16_t
// servo12_raw Servo output 12 value uint16_t
// servo13_raw Servo output 13 value uint16_t
// servo14_raw Servo output 14 value uint16_t
// servo15_raw Servo output 15 value uint16_t
// servo16_raw Servo output 16 value uint16_t
var ServoOutputRaw = /** @class */ (function (_super) {
    __extends(ServoOutputRaw, _super);
    function ServoOutputRaw() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 36;
        _this._message_name = 'SERVO_OUTPUT_RAW';
        _this._crc_extra = 222;
        _this._message_fields = [
            ['time_usec', 'uint32_t', false],
            ['servo1_raw', 'uint16_t', false],
            ['servo2_raw', 'uint16_t', false],
            ['servo3_raw', 'uint16_t', false],
            ['servo4_raw', 'uint16_t', false],
            ['servo5_raw', 'uint16_t', false],
            ['servo6_raw', 'uint16_t', false],
            ['servo7_raw', 'uint16_t', false],
            ['servo8_raw', 'uint16_t', false],
            ['port', 'uint8_t', false],
            ['servo9_raw', 'uint16_t', true],
            ['servo10_raw', 'uint16_t', true],
            ['servo11_raw', 'uint16_t', true],
            ['servo12_raw', 'uint16_t', true],
            ['servo13_raw', 'uint16_t', true],
            ['servo14_raw', 'uint16_t', true],
            ['servo15_raw', 'uint16_t', true],
            ['servo16_raw', 'uint16_t', true],
        ];
        return _this;
    }
    return ServoOutputRaw;
}(node_mavlink_1.MAVLinkMessage));
exports.ServoOutputRaw = ServoOutputRaw;
//# sourceMappingURL=servo-output-raw.js.map