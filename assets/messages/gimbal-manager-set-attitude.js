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
exports.GimbalManagerSetAttitude = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
High level message to control a gimbal's attitude. This message is to be sent to the gimbal manager (e.g. from a ground station). Angles and rates can be set to NaN according to use case.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// flags High level gimbal manager flags to use. uint32_t
// gimbal_device_id Component ID of gimbal device to address (or 1-6 for non-MAVLink gimbal), 0 for all gimbal device components. (Send command multiple times for more than one but not all gimbals.) uint8_t
// q Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation, the frame is depends on whether the flag GIMBAL_MANAGER_FLAGS_YAW_LOCK is set) float
// angular_velocity_x X component of angular velocity, positive is banking to the right, NaN to be ignored. float
// angular_velocity_y Y component of angular velocity, positive is tilting up, NaN to be ignored. float
// angular_velocity_z Z component of angular velocity, positive is panning to the right, NaN to be ignored. float
var GimbalManagerSetAttitude = /** @class */ (function (_super) {
    __extends(GimbalManagerSetAttitude, _super);
    function GimbalManagerSetAttitude() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 282;
        _this._message_name = 'GIMBAL_MANAGER_SET_ATTITUDE';
        _this._crc_extra = 123;
        _this._message_fields = [
            ['flags', 'uint32_t', false],
            ['q', 'float', false],
            ['angular_velocity_x', 'float', false],
            ['angular_velocity_y', 'float', false],
            ['angular_velocity_z', 'float', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['gimbal_device_id', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalManagerSetAttitude;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalManagerSetAttitude = GimbalManagerSetAttitude;
//# sourceMappingURL=gimbal-manager-set-attitude.js.map