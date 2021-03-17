"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MavState = void 0;
var MavState;
(function (MavState) {
    MavState[MavState["MAV_STATE_UNINIT"] = 0] = "MAV_STATE_UNINIT";
    MavState[MavState["MAV_STATE_BOOT"] = 1] = "MAV_STATE_BOOT";
    MavState[MavState["MAV_STATE_CALIBRATING"] = 2] = "MAV_STATE_CALIBRATING";
    MavState[MavState["MAV_STATE_STANDBY"] = 3] = "MAV_STATE_STANDBY";
    MavState[MavState["MAV_STATE_ACTIVE"] = 4] = "MAV_STATE_ACTIVE";
    MavState[MavState["MAV_STATE_CRITICAL"] = 5] = "MAV_STATE_CRITICAL";
    MavState[MavState["MAV_STATE_EMERGENCY"] = 6] = "MAV_STATE_EMERGENCY";
    MavState[MavState["MAV_STATE_POWEROFF"] = 7] = "MAV_STATE_POWEROFF";
    MavState[MavState["MAV_STATE_FLIGHT_TERMINATION"] = 8] = "MAV_STATE_FLIGHT_TERMINATION";
    MavState[MavState["MAV_STATE_ENUM_END"] = 9] = "MAV_STATE_ENUM_END";
})(MavState = exports.MavState || (exports.MavState = {}));
//# sourceMappingURL=mav-state.js.map