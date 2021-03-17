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
exports.TrajectoryRepresentationBezier = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Describe a trajectory using an array of up-to 5 bezier control points in the local frame (MAV_FRAME_LOCAL_NED).
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// valid_points Number of valid control points (up-to 5 points are possible) uint8_t
// pos_x X-coordinate of bezier control points. Set to NaN if not being used float
// pos_y Y-coordinate of bezier control points. Set to NaN if not being used float
// pos_z Z-coordinate of bezier control points. Set to NaN if not being used float
// delta Bezier time horizon. Set to NaN if velocity/acceleration should not be incorporated float
// pos_yaw Yaw. Set to NaN for unchanged float
var TrajectoryRepresentationBezier = /** @class */ (function (_super) {
    __extends(TrajectoryRepresentationBezier, _super);
    function TrajectoryRepresentationBezier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 333;
        _this._message_name = 'TRAJECTORY_REPRESENTATION_BEZIER';
        _this._crc_extra = 231;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['pos_x', 'float', false],
            ['pos_y', 'float', false],
            ['pos_z', 'float', false],
            ['delta', 'float', false],
            ['pos_yaw', 'float', false],
            ['valid_points', 'uint8_t', false],
        ];
        return _this;
    }
    return TrajectoryRepresentationBezier;
}(node_mavlink_1.MAVLinkMessage));
exports.TrajectoryRepresentationBezier = TrajectoryRepresentationBezier;
//# sourceMappingURL=trajectory-representation-bezier.js.map