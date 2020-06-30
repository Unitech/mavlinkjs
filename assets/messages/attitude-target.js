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
exports.AttitudeTarget = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Reports the current commanded attitude of the vehicle as specified by the autopilot. This should match the commands sent in a SET_ATTITUDE_TARGET message if the vehicle is being controlled this way.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// type_mask Mappings: If any of these bits are set, the corresponding input should be ignored: bit 1: body roll rate, bit 2: body pitch rate, bit 3: body yaw rate. bit 4-bit 7: reserved, bit 8: attitude uint8_t
// q Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0) float
// body_roll_rate Body roll rate float
// body_pitch_rate Body pitch rate float
// body_yaw_rate Body yaw rate float
// thrust Collective thrust, normalized to 0 .. 1 (-1 .. 1 for vehicles capable of reverse trust) float
var AttitudeTarget = /** @class */ (function (_super) {
    __extends(AttitudeTarget, _super);
    function AttitudeTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 83;
        _this._message_name = 'ATTITUDE_TARGET';
        _this._crc_extra = 22;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['q', 'float', false],
            ['body_roll_rate', 'float', false],
            ['body_pitch_rate', 'float', false],
            ['body_yaw_rate', 'float', false],
            ['thrust', 'float', false],
            ['type_mask', 'uint8_t', false],
        ];
        return _this;
    }
    return AttitudeTarget;
}(node_mavlink_1.MAVLinkMessage));
exports.AttitudeTarget = AttitudeTarget;
//# sourceMappingURL=attitude-target.js.map