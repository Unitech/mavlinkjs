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
exports.ManualSetpoint = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Setpoint in roll, pitch, yaw and thrust from the operator
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// roll Desired roll rate float
// pitch Desired pitch rate float
// yaw Desired yaw rate float
// thrust Collective thrust, normalized to 0 .. 1 float
// mode_switch Flight mode switch position, 0.. 255 uint8_t
// manual_override_switch Override mode switch position, 0.. 255 uint8_t
var ManualSetpoint = /** @class */ (function (_super) {
    __extends(ManualSetpoint, _super);
    function ManualSetpoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 81;
        _this._message_name = 'MANUAL_SETPOINT';
        _this._crc_extra = 106;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['thrust', 'float', false],
            ['mode_switch', 'uint8_t', false],
            ['manual_override_switch', 'uint8_t', false],
        ];
        return _this;
    }
    return ManualSetpoint;
}(node_mavlink_1.MAVLinkMessage));
exports.ManualSetpoint = ManualSetpoint;
//# sourceMappingURL=manual-setpoint.js.map