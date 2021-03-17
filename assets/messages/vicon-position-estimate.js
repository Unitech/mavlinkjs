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
exports.ViconPositionEstimate = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Global position estimate from a Vicon motion system source.
*/
// usec Timestamp (UNIX time or time since system boot) uint64_t
// x Global X position float
// y Global Y position float
// z Global Z position float
// roll Roll angle float
// pitch Pitch angle float
// yaw Yaw angle float
// covariance Row-major representation of 6x6 pose cross-covariance matrix upper right triangle (states: x, y, z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array. float
var ViconPositionEstimate = /** @class */ (function (_super) {
    __extends(ViconPositionEstimate, _super);
    function ViconPositionEstimate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 104;
        _this._message_name = 'VICON_POSITION_ESTIMATE';
        _this._crc_extra = 56;
        _this._message_fields = [
            ['usec', 'uint64_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['covariance', 'float', true],
        ];
        return _this;
    }
    return ViconPositionEstimate;
}(node_mavlink_1.MAVLinkMessage));
exports.ViconPositionEstimate = ViconPositionEstimate;
//# sourceMappingURL=vicon-position-estimate.js.map