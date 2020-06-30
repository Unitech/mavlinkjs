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
exports.HilStateQuaternion = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Sent from simulation to autopilot, avoids in contrast to HIL_STATE singularities. This packet is useful for high throughput applications such as hardware in the loop simulations.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// attitude_quaternion Vehicle attitude expressed as normalized quaternion in w, x, y, z order (with 1 0 0 0 being the null-rotation) float
// rollspeed Body frame roll / phi angular speed float
// pitchspeed Body frame pitch / theta angular speed float
// yawspeed Body frame yaw / psi angular speed float
// lat Latitude int32_t
// lon Longitude int32_t
// alt Altitude int32_t
// vx Ground X Speed (Latitude) int16_t
// vy Ground Y Speed (Longitude) int16_t
// vz Ground Z Speed (Altitude) int16_t
// ind_airspeed Indicated airspeed uint16_t
// true_airspeed True airspeed uint16_t
// xacc X acceleration int16_t
// yacc Y acceleration int16_t
// zacc Z acceleration int16_t
var HilStateQuaternion = /** @class */ (function (_super) {
    __extends(HilStateQuaternion, _super);
    function HilStateQuaternion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 115;
        _this._message_name = 'HIL_STATE_QUATERNION';
        _this._crc_extra = 4;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['attitude_quaternion', 'float', false],
            ['rollspeed', 'float', false],
            ['pitchspeed', 'float', false],
            ['yawspeed', 'float', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'int32_t', false],
            ['vx', 'int16_t', false],
            ['vy', 'int16_t', false],
            ['vz', 'int16_t', false],
            ['ind_airspeed', 'uint16_t', false],
            ['true_airspeed', 'uint16_t', false],
            ['xacc', 'int16_t', false],
            ['yacc', 'int16_t', false],
            ['zacc', 'int16_t', false],
        ];
        return _this;
    }
    return HilStateQuaternion;
}(node_mavlink_1.MAVLinkMessage));
exports.HilStateQuaternion = HilStateQuaternion;
//# sourceMappingURL=hil-state-quaternion.js.map