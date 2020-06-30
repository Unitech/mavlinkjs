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
exports.SetGpsGlobalOrigin = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Sets the GPS co-ordinates of the vehicle local origin (0,0,0) position. Vehicle should emit GPS_GLOBAL_ORIGIN irrespective of whether the origin is changed. This enables transform between the local coordinate frame and the global (GPS) coordinate frame, which may be necessary when (for example) indoor and outdoor settings are connected and the MAV should move from in- to outdoor.
*/
// target_system System ID uint8_t
// latitude Latitude (WGS84) int32_t
// longitude Longitude (WGS84) int32_t
// altitude Altitude (MSL). Positive for up. int32_t
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
var SetGpsGlobalOrigin = /** @class */ (function (_super) {
    __extends(SetGpsGlobalOrigin, _super);
    function SetGpsGlobalOrigin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 48;
        _this._message_name = 'SET_GPS_GLOBAL_ORIGIN';
        _this._crc_extra = 41;
        _this._message_fields = [
            ['latitude', 'int32_t', false],
            ['longitude', 'int32_t', false],
            ['altitude', 'int32_t', false],
            ['target_system', 'uint8_t', false],
            ['time_usec', 'uint64_t', true],
        ];
        return _this;
    }
    return SetGpsGlobalOrigin;
}(node_mavlink_1.MAVLinkMessage));
exports.SetGpsGlobalOrigin = SetGpsGlobalOrigin;
//# sourceMappingURL=set-gps-global-origin.js.map