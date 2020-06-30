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
exports.GlobalVisionPositionEstimate = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Global position/attitude estimate from a vision source.
*/
// usec Timestamp (UNIX time or since system boot) uint64_t
// x Global X position float
// y Global Y position float
// z Global Z position float
// roll Roll angle float
// pitch Pitch angle float
// yaw Yaw angle float
// covariance Row-major representation of pose 6x6 cross-covariance matrix upper right triangle (states: x_global, y_global, z_global, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array. float
// reset_counter Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM system detects a loop-closure and the estimate jumps. uint8_t
var GlobalVisionPositionEstimate = /** @class */ (function (_super) {
    __extends(GlobalVisionPositionEstimate, _super);
    function GlobalVisionPositionEstimate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 101;
        _this._message_name = 'GLOBAL_VISION_POSITION_ESTIMATE';
        _this._crc_extra = 102;
        _this._message_fields = [
            ['usec', 'uint64_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['covariance', 'float', true],
            ['reset_counter', 'uint8_t', true],
        ];
        return _this;
    }
    return GlobalVisionPositionEstimate;
}(node_mavlink_1.MAVLinkMessage));
exports.GlobalVisionPositionEstimate = GlobalVisionPositionEstimate;
//# sourceMappingURL=global-vision-position-estimate.js.map