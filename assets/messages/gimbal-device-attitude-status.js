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
exports.GimbalDeviceAttitudeStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message reporting the status of a gimbal device. This message should be broadcasted by a gimbal device component. The angles encoded in the quaternion are in the global frame (roll: positive is tilt to the right, pitch: positive is tilting up, yaw is turn to the right). This message should be broadcast at a low regular rate (e.g. 10Hz).
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// time_boot_ms Timestamp (time since system boot). uint32_t
// flags Current gimbal flags set. uint16_t
// q Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation, the frame is depends on whether the flag GIMBAL_DEVICE_FLAGS_YAW_LOCK is set) float
// angular_velocity_x X component of angular velocity (NaN if unknown) float
// angular_velocity_y Y component of angular velocity (NaN if unknown) float
// angular_velocity_z Z component of angular velocity (NaN if unknown) float
// failure_flags Failure flags (0 for no failure) uint32_t
var GimbalDeviceAttitudeStatus = /** @class */ (function (_super) {
    __extends(GimbalDeviceAttitudeStatus, _super);
    function GimbalDeviceAttitudeStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 285;
        _this._message_name = 'GIMBAL_DEVICE_ATTITUDE_STATUS';
        _this._crc_extra = 137;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['q', 'float', false],
            ['angular_velocity_x', 'float', false],
            ['angular_velocity_y', 'float', false],
            ['angular_velocity_z', 'float', false],
            ['failure_flags', 'uint32_t', false],
            ['flags', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalDeviceAttitudeStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalDeviceAttitudeStatus = GimbalDeviceAttitudeStatus;
//# sourceMappingURL=gimbal-device-attitude-status.js.map