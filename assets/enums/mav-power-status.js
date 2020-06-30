"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MavPowerStatus = void 0;
var MavPowerStatus;
(function (MavPowerStatus) {
    MavPowerStatus[MavPowerStatus["MAV_POWER_STATUS_BRICK_VALID"] = 1] = "MAV_POWER_STATUS_BRICK_VALID";
    MavPowerStatus[MavPowerStatus["MAV_POWER_STATUS_SERVO_VALID"] = 2] = "MAV_POWER_STATUS_SERVO_VALID";
    MavPowerStatus[MavPowerStatus["MAV_POWER_STATUS_USB_CONNECTED"] = 4] = "MAV_POWER_STATUS_USB_CONNECTED";
    MavPowerStatus[MavPowerStatus["MAV_POWER_STATUS_PERIPH_OVERCURRENT"] = 8] = "MAV_POWER_STATUS_PERIPH_OVERCURRENT";
    MavPowerStatus[MavPowerStatus["MAV_POWER_STATUS_PERIPH_HIPOWER_OVERCURRENT"] = 16] = "MAV_POWER_STATUS_PERIPH_HIPOWER_OVERCURRENT";
    MavPowerStatus[MavPowerStatus["MAV_POWER_STATUS_CHANGED"] = 32] = "MAV_POWER_STATUS_CHANGED";
    MavPowerStatus[MavPowerStatus["MAV_POWER_STATUS_ENUM_END"] = 33] = "MAV_POWER_STATUS_ENUM_END";
})(MavPowerStatus = exports.MavPowerStatus || (exports.MavPowerStatus = {}));
//# sourceMappingURL=mav-power-status.js.map