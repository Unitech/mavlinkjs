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
exports.HilSensor = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The IMU readings in SI units in NED body frame
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// xacc X acceleration float
// yacc Y acceleration float
// zacc Z acceleration float
// xgyro Angular speed around X axis in body frame float
// ygyro Angular speed around Y axis in body frame float
// zgyro Angular speed around Z axis in body frame float
// xmag X Magnetic field float
// ymag Y Magnetic field float
// zmag Z Magnetic field float
// abs_pressure Absolute pressure float
// diff_pressure Differential pressure (airspeed) float
// pressure_alt Altitude calculated from pressure float
// temperature Temperature float
// fields_updated Bitmap for fields that have updated since last message, bit 0 = xacc, bit 12: temperature, bit 31: full reset of attitude/position/velocities/etc was performed in sim. uint32_t
var HilSensor = /** @class */ (function (_super) {
    __extends(HilSensor, _super);
    function HilSensor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 107;
        _this._message_name = 'HIL_SENSOR';
        _this._crc_extra = 108;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['xacc', 'float', false],
            ['yacc', 'float', false],
            ['zacc', 'float', false],
            ['xgyro', 'float', false],
            ['ygyro', 'float', false],
            ['zgyro', 'float', false],
            ['xmag', 'float', false],
            ['ymag', 'float', false],
            ['zmag', 'float', false],
            ['abs_pressure', 'float', false],
            ['diff_pressure', 'float', false],
            ['pressure_alt', 'float', false],
            ['temperature', 'float', false],
            ['fields_updated', 'uint32_t', false],
        ];
        return _this;
    }
    return HilSensor;
}(node_mavlink_1.MAVLinkMessage));
exports.HilSensor = HilSensor;
//# sourceMappingURL=hil-sensor.js.map