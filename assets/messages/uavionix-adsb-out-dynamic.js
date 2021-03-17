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
exports.UavionixAdsbOutDynamic = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Dynamic data used to generate ADS-B out transponder data (send at 5Hz)
*/
// utcTime UTC time in seconds since GPS epoch (Jan 6, 1980). If unknown set to UINT32_MAX uint32_t
// gpsLat Latitude WGS84 (deg * 1E7). If unknown set to INT32_MAX int32_t
// gpsLon Longitude WGS84 (deg * 1E7). If unknown set to INT32_MAX int32_t
// gpsAlt Altitude (WGS84). UP +ve. If unknown set to INT32_MAX int32_t
// gpsFix 0-1: no fix, 2: 2D fix, 3: 3D fix, 4: DGPS, 5: RTK uint8_t
// numSats Number of satellites visible. If unknown set to UINT8_MAX uint8_t
// baroAltMSL Barometric pressure altitude (MSL) relative to a standard atmosphere of 1013.2 mBar and NOT bar corrected altitude (m * 1E-3). (up +ve). If unknown set to INT32_MAX int32_t
// accuracyHor Horizontal accuracy in mm (m * 1E-3). If unknown set to UINT32_MAX uint32_t
// accuracyVert Vertical accuracy in cm. If unknown set to UINT16_MAX uint16_t
// accuracyVel Velocity accuracy in mm/s (m * 1E-3). If unknown set to UINT16_MAX uint16_t
// velVert GPS vertical speed in cm/s. If unknown set to INT16_MAX int16_t
// velNS North-South velocity over ground in cm/s North +ve. If unknown set to INT16_MAX int16_t
// VelEW East-West velocity over ground in cm/s East +ve. If unknown set to INT16_MAX int16_t
// emergencyStatus Emergency status uint8_t
// state ADS-B transponder dynamic input state flags uint16_t
// squawk Mode A code (typically 1200 [0x04B0] for VFR) uint16_t
var UavionixAdsbOutDynamic = /** @class */ (function (_super) {
    __extends(UavionixAdsbOutDynamic, _super);
    function UavionixAdsbOutDynamic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 10002;
        _this._message_name = 'UAVIONIX_ADSB_OUT_DYNAMIC';
        _this._crc_extra = 186;
        _this._message_fields = [
            ['utcTime', 'uint32_t', false],
            ['gpsLat', 'int32_t', false],
            ['gpsLon', 'int32_t', false],
            ['gpsAlt', 'int32_t', false],
            ['baroAltMSL', 'int32_t', false],
            ['accuracyHor', 'uint32_t', false],
            ['accuracyVert', 'uint16_t', false],
            ['accuracyVel', 'uint16_t', false],
            ['velVert', 'int16_t', false],
            ['velNS', 'int16_t', false],
            ['VelEW', 'int16_t', false],
            ['state', 'uint16_t', false],
            ['squawk', 'uint16_t', false],
            ['gpsFix', 'uint8_t', false],
            ['numSats', 'uint8_t', false],
            ['emergencyStatus', 'uint8_t', false],
        ];
        return _this;
    }
    return UavionixAdsbOutDynamic;
}(node_mavlink_1.MAVLinkMessage));
exports.UavionixAdsbOutDynamic = UavionixAdsbOutDynamic;
//# sourceMappingURL=uavionix-adsb-out-dynamic.js.map