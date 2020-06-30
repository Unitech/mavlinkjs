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
exports.GpsGlobalOrigin = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Publishes the GPS co-ordinates of the vehicle local origin (0,0,0) position. Emitted whenever a new GPS-Local position mapping is requested or set - e.g. following SET_GPS_GLOBAL_ORIGIN message.
*/
// latitude Latitude (WGS84) int32_t
// longitude Longitude (WGS84) int32_t
// altitude Altitude (MSL). Positive for up. int32_t
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
var GpsGlobalOrigin = /** @class */ (function (_super) {
    __extends(GpsGlobalOrigin, _super);
    function GpsGlobalOrigin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 49;
        _this._message_name = 'GPS_GLOBAL_ORIGIN';
        _this._crc_extra = 39;
        _this._message_fields = [
            ['latitude', 'int32_t', false],
            ['longitude', 'int32_t', false],
            ['altitude', 'int32_t', false],
            ['time_usec', 'uint64_t', true],
        ];
        return _this;
    }
    return GpsGlobalOrigin;
}(node_mavlink_1.MAVLinkMessage));
exports.GpsGlobalOrigin = GpsGlobalOrigin;
//# sourceMappingURL=gps-global-origin.js.map