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
exports.UtmGlobalPosition = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The global position resulting from GPS and sensor fusion.
*/
// time Time of applicability of position (microseconds since UNIX epoch). uint64_t
// uas_id Unique UAS ID. uint8_t
// lat Latitude (WGS84) int32_t
// lon Longitude (WGS84) int32_t
// alt Altitude (WGS84) int32_t
// relative_alt Altitude above ground int32_t
// vx Ground X speed (latitude, positive north) int16_t
// vy Ground Y speed (longitude, positive east) int16_t
// vz Ground Z speed (altitude, positive down) int16_t
// h_acc Horizontal position uncertainty (standard deviation) uint16_t
// v_acc Altitude uncertainty (standard deviation) uint16_t
// vel_acc Speed uncertainty (standard deviation) uint16_t
// next_lat Next waypoint, latitude (WGS84) int32_t
// next_lon Next waypoint, longitude (WGS84) int32_t
// next_alt Next waypoint, altitude (WGS84) int32_t
// update_rate Time until next update. Set to 0 if unknown or in data driven mode. uint16_t
// flight_state Flight state uint8_t
// flags Bitwise OR combination of the data available flags. uint8_t
var UtmGlobalPosition = /** @class */ (function (_super) {
    __extends(UtmGlobalPosition, _super);
    function UtmGlobalPosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 340;
        _this._message_name = 'UTM_GLOBAL_POSITION';
        _this._crc_extra = 99;
        _this._message_fields = [
            ['time', 'uint64_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'int32_t', false],
            ['relative_alt', 'int32_t', false],
            ['next_lat', 'int32_t', false],
            ['next_lon', 'int32_t', false],
            ['next_alt', 'int32_t', false],
            ['vx', 'int16_t', false],
            ['vy', 'int16_t', false],
            ['vz', 'int16_t', false],
            ['h_acc', 'uint16_t', false],
            ['v_acc', 'uint16_t', false],
            ['vel_acc', 'uint16_t', false],
            ['update_rate', 'uint16_t', false],
            ['uas_id', 'uint8_t', false],
            ['flight_state', 'uint8_t', false],
            ['flags', 'uint8_t', false],
        ];
        return _this;
    }
    return UtmGlobalPosition;
}(node_mavlink_1.MAVLinkMessage));
exports.UtmGlobalPosition = UtmGlobalPosition;
//# sourceMappingURL=utm-global-position.js.map