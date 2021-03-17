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
exports.LocalPositionNedCov = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// estimator_type Class id of the estimator this estimate originated from. uint8_t
// x X Position float
// y Y Position float
// z Z Position float
// vx X Speed float
// vy Y Speed float
// vz Z Speed float
// ax X Acceleration float
// ay Y Acceleration float
// az Z Acceleration float
// covariance Row-major representation of position, velocity and acceleration 9x9 cross-covariance matrix upper right triangle (states: x, y, z, vx, vy, vz, ax, ay, az; first nine entries are the first ROW, next eight entries are the second row, etc.). If unknown, assign NaN value to first element in the array. float
var LocalPositionNedCov = /** @class */ (function (_super) {
    __extends(LocalPositionNedCov, _super);
    function LocalPositionNedCov() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 64;
        _this._message_name = 'LOCAL_POSITION_NED_COV';
        _this._crc_extra = 191;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['vx', 'float', false],
            ['vy', 'float', false],
            ['vz', 'float', false],
            ['ax', 'float', false],
            ['ay', 'float', false],
            ['az', 'float', false],
            ['covariance', 'float', false],
            ['estimator_type', 'uint8_t', false],
        ];
        return _this;
    }
    return LocalPositionNedCov;
}(node_mavlink_1.MAVLinkMessage));
exports.LocalPositionNedCov = LocalPositionNedCov;
//# sourceMappingURL=local-position-ned-cov.js.map