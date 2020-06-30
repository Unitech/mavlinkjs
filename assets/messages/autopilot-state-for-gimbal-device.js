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
exports.AutopilotStateForGimbalDevice = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Low level message containing autopilot state relevant for a gimbal device. This message is to be sent from the gimbal manager to the gimbal device component. The data of this message server for the gimbal's estimator corrections in particular horizon compensation, as well as the autopilot's control intention e.g. feed forward angular control in z-axis.
*/
// time_boot_us Timestamp (time since system boot). uint64_t
// target_system System ID uint8_t
// target_component Component ID uint8_t
// q Quaternion components of autopilot attitude: w, x, y, z (1 0 0 0 is the null-rotation, Hamiltonian convention). float
// q_estimated_delay_us Estimated delay of the attitude data. uint32_t
// vx X Speed in NED (North, East, Down). float
// vy Y Speed in NED (North, East, Down). float
// vz Z Speed in NED (North, East, Down). float
// v_estimated_delay_us Estimated delay of the speed data. uint32_t
// feed_forward_angular_velocity_z Feed forward Z component of angular velocity, positive is yawing to the right, NaN to be ignored. This is to indicate if the autopilot is actively yawing. float
// estimator_status Bitmap indicating which estimator outputs are valid. uint16_t
// landed_state The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown. uint8_t
var AutopilotStateForGimbalDevice = /** @class */ (function (_super) {
    __extends(AutopilotStateForGimbalDevice, _super);
    function AutopilotStateForGimbalDevice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 286;
        _this._message_name = 'AUTOPILOT_STATE_FOR_GIMBAL_DEVICE';
        _this._crc_extra = 210;
        _this._message_fields = [
            ['time_boot_us', 'uint64_t', false],
            ['q', 'float', false],
            ['q_estimated_delay_us', 'uint32_t', false],
            ['vx', 'float', false],
            ['vy', 'float', false],
            ['vz', 'float', false],
            ['v_estimated_delay_us', 'uint32_t', false],
            ['feed_forward_angular_velocity_z', 'float', false],
            ['estimator_status', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['landed_state', 'uint8_t', false],
        ];
        return _this;
    }
    return AutopilotStateForGimbalDevice;
}(node_mavlink_1.MAVLinkMessage));
exports.AutopilotStateForGimbalDevice = AutopilotStateForGimbalDevice;
//# sourceMappingURL=autopilot-state-for-gimbal-device.js.map