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
exports.PositionTargetGlobalInt = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Reports the current commanded vehicle position, velocity, and acceleration as specified by the autopilot. This should match the commands sent in SET_POSITION_TARGET_GLOBAL_INT if the vehicle is being controlled this way.
*/
// time_boot_ms Timestamp (time since system boot). The rationale for the timestamp in the setpoint is to allow the system to compensate for the transport delay of the setpoint. This allows the system to compensate processing latency. uint32_t
// coordinate_frame Valid options are: MAV_FRAME_GLOBAL_INT = 5, MAV_FRAME_GLOBAL_RELATIVE_ALT_INT = 6, MAV_FRAME_GLOBAL_TERRAIN_ALT_INT = 11 uint8_t
// type_mask Bitmap to indicate which dimensions should be ignored by the vehicle. uint16_t
// lat_int X Position in WGS84 frame int32_t
// lon_int Y Position in WGS84 frame int32_t
// alt Altitude (MSL, AGL or relative to home altitude, depending on frame) float
// vx X velocity in NED frame float
// vy Y velocity in NED frame float
// vz Z velocity in NED frame float
// afx X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N float
// afy Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N float
// afz Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N float
// yaw yaw setpoint float
// yaw_rate yaw rate setpoint float
var PositionTargetGlobalInt = /** @class */ (function (_super) {
    __extends(PositionTargetGlobalInt, _super);
    function PositionTargetGlobalInt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 87;
        _this._message_name = 'POSITION_TARGET_GLOBAL_INT';
        _this._crc_extra = 150;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['lat_int', 'int32_t', false],
            ['lon_int', 'int32_t', false],
            ['alt', 'float', false],
            ['vx', 'float', false],
            ['vy', 'float', false],
            ['vz', 'float', false],
            ['afx', 'float', false],
            ['afy', 'float', false],
            ['afz', 'float', false],
            ['yaw', 'float', false],
            ['yaw_rate', 'float', false],
            ['type_mask', 'uint16_t', false],
            ['coordinate_frame', 'uint8_t', false],
        ];
        return _this;
    }
    return PositionTargetGlobalInt;
}(node_mavlink_1.MAVLinkMessage));
exports.PositionTargetGlobalInt = PositionTargetGlobalInt;
//# sourceMappingURL=position-target-global-int.js.map