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
exports.EstimatorStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Estimator status message including flags, innovation test ratios and estimated accuracies. The flags message is an integer bitmask containing information on which EKF outputs are valid. See the ESTIMATOR_STATUS_FLAGS enum definition for further information. The innovation test ratios show the magnitude of the sensor innovation divided by the innovation check threshold. Under normal operation the innovation test ratios should be below 0.5 with occasional values up to 1.0. Values greater than 1.0 should be rare under normal operation and indicate that a measurement has been rejected by the filter. The user should be notified if an innovation test ratio greater than 1.0 is recorded. Notifications for values in the range between 0.5 and 1.0 should be optional and controllable by the user.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// flags Bitmap indicating which EKF outputs are valid. uint16_t
// vel_ratio Velocity innovation test ratio float
// pos_horiz_ratio Horizontal position innovation test ratio float
// pos_vert_ratio Vertical position innovation test ratio float
// mag_ratio Magnetometer innovation test ratio float
// hagl_ratio Height above terrain innovation test ratio float
// tas_ratio True airspeed innovation test ratio float
// pos_horiz_accuracy Horizontal position 1-STD accuracy relative to the EKF local origin float
// pos_vert_accuracy Vertical position 1-STD accuracy relative to the EKF local origin float
var EstimatorStatus = /** @class */ (function (_super) {
    __extends(EstimatorStatus, _super);
    function EstimatorStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 230;
        _this._message_name = 'ESTIMATOR_STATUS';
        _this._crc_extra = 163;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['vel_ratio', 'float', false],
            ['pos_horiz_ratio', 'float', false],
            ['pos_vert_ratio', 'float', false],
            ['mag_ratio', 'float', false],
            ['hagl_ratio', 'float', false],
            ['tas_ratio', 'float', false],
            ['pos_horiz_accuracy', 'float', false],
            ['pos_vert_accuracy', 'float', false],
            ['flags', 'uint16_t', false],
        ];
        return _this;
    }
    return EstimatorStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.EstimatorStatus = EstimatorStatus;
//# sourceMappingURL=estimator-status.js.map