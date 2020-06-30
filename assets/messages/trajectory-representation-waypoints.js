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
exports.TrajectoryRepresentationWaypoints = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Describe a trajectory using an array of up-to 5 waypoints in the local frame (MAV_FRAME_LOCAL_NED).
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// valid_points Number of valid points (up-to 5 waypoints are possible) uint8_t
// pos_x X-coordinate of waypoint, set to NaN if not being used float
// pos_y Y-coordinate of waypoint, set to NaN if not being used float
// pos_z Z-coordinate of waypoint, set to NaN if not being used float
// vel_x X-velocity of waypoint, set to NaN if not being used float
// vel_y Y-velocity of waypoint, set to NaN if not being used float
// vel_z Z-velocity of waypoint, set to NaN if not being used float
// acc_x X-acceleration of waypoint, set to NaN if not being used float
// acc_y Y-acceleration of waypoint, set to NaN if not being used float
// acc_z Z-acceleration of waypoint, set to NaN if not being used float
// pos_yaw Yaw angle, set to NaN if not being used float
// vel_yaw Yaw rate, set to NaN if not being used float
// command Scheduled action for each waypoint, UINT16_MAX if not being used. uint16_t
var TrajectoryRepresentationWaypoints = /** @class */ (function (_super) {
    __extends(TrajectoryRepresentationWaypoints, _super);
    function TrajectoryRepresentationWaypoints() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 332;
        _this._message_name = 'TRAJECTORY_REPRESENTATION_WAYPOINTS';
        _this._crc_extra = 236;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['pos_x', 'float', false],
            ['pos_y', 'float', false],
            ['pos_z', 'float', false],
            ['vel_x', 'float', false],
            ['vel_y', 'float', false],
            ['vel_z', 'float', false],
            ['acc_x', 'float', false],
            ['acc_y', 'float', false],
            ['acc_z', 'float', false],
            ['pos_yaw', 'float', false],
            ['vel_yaw', 'float', false],
            ['command', 'uint16_t', false],
            ['valid_points', 'uint8_t', false],
        ];
        return _this;
    }
    return TrajectoryRepresentationWaypoints;
}(node_mavlink_1.MAVLinkMessage));
exports.TrajectoryRepresentationWaypoints = TrajectoryRepresentationWaypoints;
//# sourceMappingURL=trajectory-representation-waypoints.js.map