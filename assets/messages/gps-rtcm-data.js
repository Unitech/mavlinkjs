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
exports.GpsRtcmData = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
RTCM message for injecting into the onboard GPS (used for DGPS)
*/
// flags LSB: 1 means message is fragmented, next 2 bits are the fragment ID, the remaining 5 bits are used for the sequence ID. Messages are only to be flushed to the GPS when the entire message has been reconstructed on the autopilot. The fragment ID specifies which order the fragments should be assembled into a buffer, while the sequence ID is used to detect a mismatch between different buffers. The buffer is considered fully reconstructed when either all 4 fragments are present, or all the fragments before the first fragment with a non full payload is received. This management is used to ensure that normal GPS operation doesn't corrupt RTCM data, and to recover from a unreliable transport delivery order. uint8_t
// len data length uint8_t
// data RTCM message (may be fragmented) uint8_t
var GpsRtcmData = /** @class */ (function (_super) {
    __extends(GpsRtcmData, _super);
    function GpsRtcmData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 233;
        _this._message_name = 'GPS_RTCM_DATA';
        _this._crc_extra = 35;
        _this._message_fields = [
            ['flags', 'uint8_t', false],
            ['len', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return GpsRtcmData;
}(node_mavlink_1.MAVLinkMessage));
exports.GpsRtcmData = GpsRtcmData;
//# sourceMappingURL=gps-rtcm-data.js.map