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
exports.RcChannelsOverride = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The RAW values of the RC channels sent to the MAV to override info received from the RC radio. A value of UINT16_MAX means no change to that channel. A value of 0 means control of that channel should be released back to the RC radio. The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. Individual receivers/transmitters might violate this specification.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// chan1_raw RC channel 1 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan2_raw RC channel 2 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan3_raw RC channel 3 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan4_raw RC channel 4 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan5_raw RC channel 5 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan6_raw RC channel 6 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan7_raw RC channel 7 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan8_raw RC channel 8 value. A value of UINT16_MAX means to ignore this field. uint16_t
// chan9_raw RC channel 9 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan10_raw RC channel 10 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan11_raw RC channel 11 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan12_raw RC channel 12 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan13_raw RC channel 13 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan14_raw RC channel 14 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan15_raw RC channel 15 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan16_raw RC channel 16 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan17_raw RC channel 17 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
// chan18_raw RC channel 18 value. A value of 0 or UINT16_MAX means to ignore this field. uint16_t
var RcChannelsOverride = /** @class */ (function (_super) {
    __extends(RcChannelsOverride, _super);
    function RcChannelsOverride() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 70;
        _this._message_name = 'RC_CHANNELS_OVERRIDE';
        _this._crc_extra = 124;
        _this._message_fields = [
            ['chan1_raw', 'uint16_t', false],
            ['chan2_raw', 'uint16_t', false],
            ['chan3_raw', 'uint16_t', false],
            ['chan4_raw', 'uint16_t', false],
            ['chan5_raw', 'uint16_t', false],
            ['chan6_raw', 'uint16_t', false],
            ['chan7_raw', 'uint16_t', false],
            ['chan8_raw', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['chan9_raw', 'uint16_t', true],
            ['chan10_raw', 'uint16_t', true],
            ['chan11_raw', 'uint16_t', true],
            ['chan12_raw', 'uint16_t', true],
            ['chan13_raw', 'uint16_t', true],
            ['chan14_raw', 'uint16_t', true],
            ['chan15_raw', 'uint16_t', true],
            ['chan16_raw', 'uint16_t', true],
            ['chan17_raw', 'uint16_t', true],
            ['chan18_raw', 'uint16_t', true],
        ];
        return _this;
    }
    return RcChannelsOverride;
}(node_mavlink_1.MAVLinkMessage));
exports.RcChannelsOverride = RcChannelsOverride;
//# sourceMappingURL=rc-channels-override.js.map