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
exports.GpsInput = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
GPS sensor input message.  This is a raw sensor value sent by the GPS. This is NOT the global position estimate of the system.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// gps_id ID of the GPS for multiple GPS inputs uint8_t
// ignore_flags Bitmap indicating which GPS input flags fields to ignore.  All other fields must be provided. uint16_t
// time_week_ms GPS time (from start of GPS week) uint32_t
// time_week GPS week number uint16_t
// fix_type 0-1: no fix, 2: 2D fix, 3: 3D fix. 4: 3D with DGPS. 5: 3D with RTK uint8_t
// lat Latitude (WGS84) int32_t
// lon Longitude (WGS84) int32_t
// alt Altitude (MSL). Positive for up. float
// hdop GPS HDOP horizontal dilution of position float
// vdop GPS VDOP vertical dilution of position float
// vn GPS velocity in north direction in earth-fixed NED frame float
// ve GPS velocity in east direction in earth-fixed NED frame float
// vd GPS velocity in down direction in earth-fixed NED frame float
// speed_accuracy GPS speed accuracy float
// horiz_accuracy GPS horizontal accuracy float
// vert_accuracy GPS vertical accuracy float
// satellites_visible Number of satellites visible. uint8_t
// yaw Yaw of vehicle relative to Earth's North, zero means not available, use 36000 for north uint16_t
var GpsInput = /** @class */ (function (_super) {
    __extends(GpsInput, _super);
    function GpsInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 232;
        _this._message_name = 'GPS_INPUT';
        _this._crc_extra = 151;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['time_week_ms', 'uint32_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'float', false],
            ['hdop', 'float', false],
            ['vdop', 'float', false],
            ['vn', 'float', false],
            ['ve', 'float', false],
            ['vd', 'float', false],
            ['speed_accuracy', 'float', false],
            ['horiz_accuracy', 'float', false],
            ['vert_accuracy', 'float', false],
            ['ignore_flags', 'uint16_t', false],
            ['time_week', 'uint16_t', false],
            ['gps_id', 'uint8_t', false],
            ['fix_type', 'uint8_t', false],
            ['satellites_visible', 'uint8_t', false],
            ['yaw', 'uint16_t', true],
        ];
        return _this;
    }
    return GpsInput;
}(node_mavlink_1.MAVLinkMessage));
exports.GpsInput = GpsInput;
//# sourceMappingURL=gps-input.js.map