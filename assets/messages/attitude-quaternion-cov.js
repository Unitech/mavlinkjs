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
exports.AttitudeQuaternionCov = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right), expressed as quaternion. Quaternion order is w, x, y, z and a zero rotation would be expressed as (1 0 0 0).
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// q Quaternion components, w, x, y, z (1 0 0 0 is the null-rotation) float
// rollspeed Roll angular speed float
// pitchspeed Pitch angular speed float
// yawspeed Yaw angular speed float
// covariance Row-major representation of a 3x3 attitude covariance matrix (states: roll, pitch, yaw; first three entries are the first ROW, next three entries are the second row, etc.). If unknown, assign NaN value to first element in the array. float
var AttitudeQuaternionCov = /** @class */ (function (_super) {
    __extends(AttitudeQuaternionCov, _super);
    function AttitudeQuaternionCov() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 61;
        _this._message_name = 'ATTITUDE_QUATERNION_COV';
        _this._crc_extra = 167;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['q', 'float', false],
            ['rollspeed', 'float', false],
            ['pitchspeed', 'float', false],
            ['yawspeed', 'float', false],
            ['covariance', 'float', false],
        ];
        return _this;
    }
    return AttitudeQuaternionCov;
}(node_mavlink_1.MAVLinkMessage));
exports.AttitudeQuaternionCov = AttitudeQuaternionCov;
//# sourceMappingURL=attitude-quaternion-cov.js.map