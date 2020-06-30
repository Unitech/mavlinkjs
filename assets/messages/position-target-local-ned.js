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
exports.PositionTargetLocalNed = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Reports the current commanded vehicle position, velocity, and acceleration as specified by the autopilot. This should match the commands sent in SET_POSITION_TARGET_LOCAL_NED if the vehicle is being controlled this way.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// coordinate_frame Valid options are: MAV_FRAME_LOCAL_NED = 1, MAV_FRAME_LOCAL_OFFSET_NED = 7, MAV_FRAME_BODY_NED = 8, MAV_FRAME_BODY_OFFSET_NED = 9 uint8_t
// type_mask Bitmap to indicate which dimensions should be ignored by the vehicle. uint16_t
// x X Position in NED frame float
// y Y Position in NED frame float
// z Z Position in NED frame (note, altitude is negative in NED) float
// vx X velocity in NED frame float
// vy Y velocity in NED frame float
// vz Z velocity in NED frame float
// afx X acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N float
// afy Y acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N float
// afz Z acceleration or force (if bit 10 of type_mask is set) in NED frame in meter / s^2 or N float
// yaw yaw setpoint float
// yaw_rate yaw rate setpoint float
var PositionTargetLocalNed = /** @class */ (function (_super) {
    __extends(PositionTargetLocalNed, _super);
    function PositionTargetLocalNed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 85;
        _this._message_name = 'POSITION_TARGET_LOCAL_NED';
        _this._crc_extra = 140;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
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
    return PositionTargetLocalNed;
}(node_mavlink_1.MAVLinkMessage));
exports.PositionTargetLocalNed = PositionTargetLocalNed;
//# sourceMappingURL=position-target-local-ned.js.map