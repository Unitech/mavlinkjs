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
exports.EkfStatusReport = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
EKF Status message including flags and variances.
*/
// flags Flags. uint16_t
// velocity_variance Velocity variance. float
// pos_horiz_variance Horizontal Position variance. float
// pos_vert_variance Vertical Position variance. float
// compass_variance Compass variance. float
// terrain_alt_variance Terrain Altitude variance. float
// airspeed_variance Airspeed variance. float
var EkfStatusReport = /** @class */ (function (_super) {
    __extends(EkfStatusReport, _super);
    function EkfStatusReport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 193;
        _this._message_name = 'EKF_STATUS_REPORT';
        _this._crc_extra = 71;
        _this._message_fields = [
            ['velocity_variance', 'float', false],
            ['pos_horiz_variance', 'float', false],
            ['pos_vert_variance', 'float', false],
            ['compass_variance', 'float', false],
            ['terrain_alt_variance', 'float', false],
            ['flags', 'uint16_t', false],
            ['airspeed_variance', 'float', true],
        ];
        return _this;
    }
    return EkfStatusReport;
}(node_mavlink_1.MAVLinkMessage));
exports.EkfStatusReport = EkfStatusReport;
//# sourceMappingURL=ekf-status-report.js.map