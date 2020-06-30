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
exports.GpsRawInt = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The global position, as returned by the Global Positioning System (GPS). This is
                NOT the global position estimate of the system, but rather a RAW sensor value. See message GLOBAL_POSITION for the global position estimate.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// fix_type GPS fix type. uint8_t
// lat Latitude (WGS84, EGM96 ellipsoid) int32_t
// lon Longitude (WGS84, EGM96 ellipsoid) int32_t
// alt Altitude (MSL). Positive for up. Note that virtually all GPS modules provide the MSL altitude in addition to the WGS84 altitude. int32_t
// eph GPS HDOP horizontal dilution of position (unitless). If unknown, set to: UINT16_MAX uint16_t
// epv GPS VDOP vertical dilution of position (unitless). If unknown, set to: UINT16_MAX uint16_t
// vel GPS ground speed. If unknown, set to: UINT16_MAX uint16_t
// cog Course over ground (NOT heading, but direction of movement) in degrees * 100, 0.0..359.99 degrees. If unknown, set to: UINT16_MAX uint16_t
// satellites_visible Number of satellites visible. If unknown, set to 255 uint8_t
// alt_ellipsoid Altitude (above WGS84, EGM96 ellipsoid). Positive for up. int32_t
// h_acc Position uncertainty. uint32_t
// v_acc Altitude uncertainty. uint32_t
// vel_acc Speed uncertainty. uint32_t
// hdg_acc Heading / track uncertainty uint32_t
// yaw Yaw in earth frame from north. Use 0 if this GPS does not provide yaw. Use 65535 if this GPS is configured to provide yaw and is currently unable to provide it. Use 36000 for north. uint16_t
var GpsRawInt = /** @class */ (function (_super) {
    __extends(GpsRawInt, _super);
    function GpsRawInt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 24;
        _this._message_name = 'GPS_RAW_INT';
        _this._crc_extra = 24;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'int32_t', false],
            ['eph', 'uint16_t', false],
            ['epv', 'uint16_t', false],
            ['vel', 'uint16_t', false],
            ['cog', 'uint16_t', false],
            ['fix_type', 'uint8_t', false],
            ['satellites_visible', 'uint8_t', false],
            ['alt_ellipsoid', 'int32_t', true],
            ['h_acc', 'uint32_t', true],
            ['v_acc', 'uint32_t', true],
            ['vel_acc', 'uint32_t', true],
            ['hdg_acc', 'uint32_t', true],
            ['yaw', 'uint16_t', true],
        ];
        return _this;
    }
    return GpsRawInt;
}(node_mavlink_1.MAVLinkMessage));
exports.GpsRawInt = GpsRawInt;
//# sourceMappingURL=gps-raw-int.js.map