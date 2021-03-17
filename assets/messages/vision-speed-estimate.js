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
exports.VisionSpeedEstimate = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Speed estimate from a vision source.
*/
// usec Timestamp (UNIX time or time since system boot) uint64_t
// x Global X speed float
// y Global Y speed float
// z Global Z speed float
// covariance Row-major representation of 3x3 linear velocity covariance matrix (states: vx, vy, vz; 1st three entries - 1st row, etc.). If unknown, assign NaN value to first element in the array. float
// reset_counter Estimate reset counter. This should be incremented when the estimate resets in any of the dimensions (position, velocity, attitude, angular speed). This is designed to be used when e.g an external SLAM system detects a loop-closure and the estimate jumps. uint8_t
var VisionSpeedEstimate = /** @class */ (function (_super) {
    __extends(VisionSpeedEstimate, _super);
    function VisionSpeedEstimate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 103;
        _this._message_name = 'VISION_SPEED_ESTIMATE';
        _this._crc_extra = 208;
        _this._message_fields = [
            ['usec', 'uint64_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['covariance', 'float', true],
            ['reset_counter', 'uint8_t', true],
        ];
        return _this;
    }
    return VisionSpeedEstimate;
}(node_mavlink_1.MAVLinkMessage));
exports.VisionSpeedEstimate = VisionSpeedEstimate;
//# sourceMappingURL=vision-speed-estimate.js.map