"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MavAutopilot = void 0;
var MavAutopilot;
(function (MavAutopilot) {
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_GENERIC"] = 0] = "MAV_AUTOPILOT_GENERIC";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_RESERVED"] = 1] = "MAV_AUTOPILOT_RESERVED";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_SLUGS"] = 2] = "MAV_AUTOPILOT_SLUGS";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_ARDUPILOTMEGA"] = 3] = "MAV_AUTOPILOT_ARDUPILOTMEGA";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_OPENPILOT"] = 4] = "MAV_AUTOPILOT_OPENPILOT";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_GENERIC_WAYPOINTS_ONLY"] = 5] = "MAV_AUTOPILOT_GENERIC_WAYPOINTS_ONLY";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_GENERIC_WAYPOINTS_AND_SIMPLE_NAVIGATION_ONLY"] = 6] = "MAV_AUTOPILOT_GENERIC_WAYPOINTS_AND_SIMPLE_NAVIGATION_ONLY";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_GENERIC_MISSION_FULL"] = 7] = "MAV_AUTOPILOT_GENERIC_MISSION_FULL";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_INVALID"] = 8] = "MAV_AUTOPILOT_INVALID";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_PPZ"] = 9] = "MAV_AUTOPILOT_PPZ";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_UDB"] = 10] = "MAV_AUTOPILOT_UDB";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_FP"] = 11] = "MAV_AUTOPILOT_FP";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_PX4"] = 12] = "MAV_AUTOPILOT_PX4";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_SMACCMPILOT"] = 13] = "MAV_AUTOPILOT_SMACCMPILOT";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_AUTOQUAD"] = 14] = "MAV_AUTOPILOT_AUTOQUAD";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_ARMAZILA"] = 15] = "MAV_AUTOPILOT_ARMAZILA";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_AEROB"] = 16] = "MAV_AUTOPILOT_AEROB";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_ASLUAV"] = 17] = "MAV_AUTOPILOT_ASLUAV";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_SMARTAP"] = 18] = "MAV_AUTOPILOT_SMARTAP";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_AIRRAILS"] = 19] = "MAV_AUTOPILOT_AIRRAILS";
    MavAutopilot[MavAutopilot["MAV_AUTOPILOT_ENUM_END"] = 20] = "MAV_AUTOPILOT_ENUM_END";
})(MavAutopilot = exports.MavAutopilot || (exports.MavAutopilot = {}));
//# sourceMappingURL=mav-autopilot.js.map