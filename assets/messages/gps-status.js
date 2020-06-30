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
exports.GpsStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The positioning status, as reported by GPS. This message is intended to display status information about each satellite visible to the receiver. See message GLOBAL_POSITION for the global position estimate. This message can contain information for up to 20 satellites.
*/
// satellites_visible Number of satellites visible uint8_t
// satellite_prn Global satellite ID uint8_t
// satellite_used 0: Satellite not used, 1: used for localization uint8_t
// satellite_elevation Elevation (0: right on top of receiver, 90: on the horizon) of satellite uint8_t
// satellite_azimuth Direction of satellite, 0: 0 deg, 255: 360 deg. uint8_t
// satellite_snr Signal to noise ratio of satellite uint8_t
var GpsStatus = /** @class */ (function (_super) {
    __extends(GpsStatus, _super);
    function GpsStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 25;
        _this._message_name = 'GPS_STATUS';
        _this._crc_extra = 23;
        _this._message_fields = [
            ['satellites_visible', 'uint8_t', false],
            ['satellite_prn', 'uint8_t', false],
            ['satellite_used', 'uint8_t', false],
            ['satellite_elevation', 'uint8_t', false],
            ['satellite_azimuth', 'uint8_t', false],
            ['satellite_snr', 'uint8_t', false],
        ];
        return _this;
    }
    return GpsStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.GpsStatus = GpsStatus;
//# sourceMappingURL=gps-status.js.map