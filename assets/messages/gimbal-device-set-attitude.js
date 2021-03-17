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
exports.GimbalDeviceSetAttitude = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Low level message to control a gimbal device's attitude. This message is to be sent from the gimbal manager to the gimbal device component. Angles and rates can be set to NaN according to use case.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// flags Low level gimbal flags. uint16_t
// q Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation, the frame is depends on whether the flag GIMBAL_DEVICE_FLAGS_YAW_LOCK is set, set all fields to NaN if only angular velocity should be used) float
// angular_velocity_x X component of angular velocity, positive is banking to the right, NaN to be ignored. float
// angular_velocity_y Y component of angular velocity, positive is tilting up, NaN to be ignored. float
// angular_velocity_z Z component of angular velocity, positive is panning to the right, NaN to be ignored. float
var GimbalDeviceSetAttitude = /** @class */ (function (_super) {
    __extends(GimbalDeviceSetAttitude, _super);
    function GimbalDeviceSetAttitude() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 284;
        _this._message_name = 'GIMBAL_DEVICE_SET_ATTITUDE';
        _this._crc_extra = 99;
        _this._message_fields = [
            ['q', 'float', false],
            ['angular_velocity_x', 'float', false],
            ['angular_velocity_y', 'float', false],
            ['angular_velocity_z', 'float', false],
            ['flags', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalDeviceSetAttitude;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalDeviceSetAttitude = GimbalDeviceSetAttitude;
//# sourceMappingURL=gimbal-device-set-attitude.js.map