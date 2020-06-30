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
exports.GimbalReport = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
3 axis gimbal measurements.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// delta_time Time since last update. float
// delta_angle_x Delta angle X. float
// delta_angle_y Delta angle Y. float
// delta_angle_z Delta angle X. float
// delta_velocity_x Delta velocity X. float
// delta_velocity_y Delta velocity Y. float
// delta_velocity_z Delta velocity Z. float
// joint_roll Joint ROLL. float
// joint_el Joint EL. float
// joint_az Joint AZ. float
var GimbalReport = /** @class */ (function (_super) {
    __extends(GimbalReport, _super);
    function GimbalReport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 200;
        _this._message_name = 'GIMBAL_REPORT';
        _this._crc_extra = 134;
        _this._message_fields = [
            ['delta_time', 'float', false],
            ['delta_angle_x', 'float', false],
            ['delta_angle_y', 'float', false],
            ['delta_angle_z', 'float', false],
            ['delta_velocity_x', 'float', false],
            ['delta_velocity_y', 'float', false],
            ['delta_velocity_z', 'float', false],
            ['joint_roll', 'float', false],
            ['joint_el', 'float', false],
            ['joint_az', 'float', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalReport;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalReport = GimbalReport;
//# sourceMappingURL=gimbal-report.js.map