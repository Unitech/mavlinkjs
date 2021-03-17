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
exports.AttitudeQuaternion = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// q1 Quaternion component 1, w (1 in null-rotation) float
// q2 Quaternion component 2, x (0 in null-rotation) float
// q3 Quaternion component 3, y (0 in null-rotation) float
// q4 Quaternion component 4, z (0 in null-rotation) float
// rollspeed Roll angular speed float
// pitchspeed Pitch angular speed float
// yawspeed Yaw angular speed float
// repr_offset_q Rotation offset by which the attitude quaternion and angular speed vector should be rotated for user display (quaternion with [w, x, y, z] order, zero-rotation is [1, 0, 0, 0], send [0, 0, 0, 0] if field not supported). This field is intended for systems in which the reference attitude may change during flight. For example, tailsitters VTOLs rotate their reference attitude by 90 degrees between hover mode and fixed wing mode, thus repr_offset_q is equal to [1, 0, 0, 0] in hover mode and equal to [0.7071, 0, 0.7071, 0] in fixed wing mode. float
var AttitudeQuaternion = /** @class */ (function (_super) {
    __extends(AttitudeQuaternion, _super);
    function AttitudeQuaternion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 31;
        _this._message_name = 'ATTITUDE_QUATERNION';
        _this._crc_extra = 246;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['q1', 'float', false],
            ['q2', 'float', false],
            ['q3', 'float', false],
            ['q4', 'float', false],
            ['rollspeed', 'float', false],
            ['pitchspeed', 'float', false],
            ['yawspeed', 'float', false],
            ['repr_offset_q', 'float', true],
        ];
        return _this;
    }
    return AttitudeQuaternion;
}(node_mavlink_1.MAVLinkMessage));
exports.AttitudeQuaternion = AttitudeQuaternion;
//# sourceMappingURL=attitude-quaternion.js.map