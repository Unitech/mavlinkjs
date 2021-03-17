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
exports.GimbalTorqueCmdReport = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
100 Hz gimbal torque command telemetry.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// rl_torque_cmd Roll Torque Command. int16_t
// el_torque_cmd Elevation Torque Command. int16_t
// az_torque_cmd Azimuth Torque Command. int16_t
var GimbalTorqueCmdReport = /** @class */ (function (_super) {
    __extends(GimbalTorqueCmdReport, _super);
    function GimbalTorqueCmdReport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 214;
        _this._message_name = 'GIMBAL_TORQUE_CMD_REPORT';
        _this._crc_extra = 69;
        _this._message_fields = [
            ['rl_torque_cmd', 'int16_t', false],
            ['el_torque_cmd', 'int16_t', false],
            ['az_torque_cmd', 'int16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalTorqueCmdReport;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalTorqueCmdReport = GimbalTorqueCmdReport;
//# sourceMappingURL=gimbal-torque-cmd-report.js.map