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
exports.RcChannelsRaw = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The RAW values of the RC channels received. The standard PPM modulation is as follows: 1000 microseconds: 0%, 2000 microseconds: 100%. A value of UINT16_MAX implies the channel is unused. Individual receivers/transmitters might violate this specification.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// port Servo output port (set of 8 outputs = 1 port). Flight stacks running on Pixhawk should use: 0 = MAIN, 1 = AUX. uint8_t
// chan1_raw RC channel 1 value. uint16_t
// chan2_raw RC channel 2 value. uint16_t
// chan3_raw RC channel 3 value. uint16_t
// chan4_raw RC channel 4 value. uint16_t
// chan5_raw RC channel 5 value. uint16_t
// chan6_raw RC channel 6 value. uint16_t
// chan7_raw RC channel 7 value. uint16_t
// chan8_raw RC channel 8 value. uint16_t
// rssi Receive signal strength indicator in device-dependent units/scale. Values: [0-254], 255: invalid/unknown. uint8_t
var RcChannelsRaw = /** @class */ (function (_super) {
    __extends(RcChannelsRaw, _super);
    function RcChannelsRaw() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 35;
        _this._message_name = 'RC_CHANNELS_RAW';
        _this._crc_extra = 244;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['chan1_raw', 'uint16_t', false],
            ['chan2_raw', 'uint16_t', false],
            ['chan3_raw', 'uint16_t', false],
            ['chan4_raw', 'uint16_t', false],
            ['chan5_raw', 'uint16_t', false],
            ['chan6_raw', 'uint16_t', false],
            ['chan7_raw', 'uint16_t', false],
            ['chan8_raw', 'uint16_t', false],
            ['port', 'uint8_t', false],
            ['rssi', 'uint8_t', false],
        ];
        return _this;
    }
    return RcChannelsRaw;
}(node_mavlink_1.MAVLinkMessage));
exports.RcChannelsRaw = RcChannelsRaw;
//# sourceMappingURL=rc-channels-raw.js.map