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
exports.GlobalPositionIntCov = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame (right-handed, Z-up). It  is designed as scaled integer message since the resolution of float is not sufficient. NOTE: This message is intended for onboard networks / companion computers and higher-bandwidth links and optimized for accuracy and completeness. Please use the GLOBAL_POSITION_INT message for a minimal subset.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// estimator_type Class id of the estimator this estimate originated from. uint8_t
// lat Latitude int32_t
// lon Longitude int32_t
// alt Altitude in meters above MSL int32_t
// relative_alt Altitude above ground int32_t
// vx Ground X Speed (Latitude) float
// vy Ground Y Speed (Longitude) float
// vz Ground Z Speed (Altitude) float
// covariance Row-major representation of a 6x6 position and velocity 6x6 cross-covariance matrix (states: lat, lon, alt, vx, vy, vz; first six entries are the first ROW, next six entries are the second row, etc.). If unknown, assign NaN value to first element in the array. float
var GlobalPositionIntCov = /** @class */ (function (_super) {
    __extends(GlobalPositionIntCov, _super);
    function GlobalPositionIntCov() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 63;
        _this._message_name = 'GLOBAL_POSITION_INT_COV';
        _this._crc_extra = 119;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'int32_t', false],
            ['relative_alt', 'int32_t', false],
            ['vx', 'float', false],
            ['vy', 'float', false],
            ['vz', 'float', false],
            ['covariance', 'float', false],
            ['estimator_type', 'uint8_t', false],
        ];
        return _this;
    }
    return GlobalPositionIntCov;
}(node_mavlink_1.MAVLinkMessage));
exports.GlobalPositionIntCov = GlobalPositionIntCov;
//# sourceMappingURL=global-position-int-cov.js.map