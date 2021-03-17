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
exports.RcChannelsScaled = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The scaled values of the RC channels received: (-100%) -10000, (0%) 0, (100%) 10000. Channels that are inactive should be set to UINT16_MAX.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// port Servo output port (set of 8 outputs = 1 port). Flight stacks running on Pixhawk should use: 0 = MAIN, 1 = AUX. uint8_t
// chan1_scaled RC channel 1 value scaled. int16_t
// chan2_scaled RC channel 2 value scaled. int16_t
// chan3_scaled RC channel 3 value scaled. int16_t
// chan4_scaled RC channel 4 value scaled. int16_t
// chan5_scaled RC channel 5 value scaled. int16_t
// chan6_scaled RC channel 6 value scaled. int16_t
// chan7_scaled RC channel 7 value scaled. int16_t
// chan8_scaled RC channel 8 value scaled. int16_t
// rssi Receive signal strength indicator in device-dependent units/scale. Values: [0-254], 255: invalid/unknown. uint8_t
var RcChannelsScaled = /** @class */ (function (_super) {
    __extends(RcChannelsScaled, _super);
    function RcChannelsScaled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 34;
        _this._message_name = 'RC_CHANNELS_SCALED';
        _this._crc_extra = 237;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['chan1_scaled', 'int16_t', false],
            ['chan2_scaled', 'int16_t', false],
            ['chan3_scaled', 'int16_t', false],
            ['chan4_scaled', 'int16_t', false],
            ['chan5_scaled', 'int16_t', false],
            ['chan6_scaled', 'int16_t', false],
            ['chan7_scaled', 'int16_t', false],
            ['chan8_scaled', 'int16_t', false],
            ['port', 'uint8_t', false],
            ['rssi', 'uint8_t', false],
        ];
        return _this;
    }
    return RcChannelsScaled;
}(node_mavlink_1.MAVLinkMessage));
exports.RcChannelsScaled = RcChannelsScaled;
//# sourceMappingURL=rc-channels-scaled.js.map