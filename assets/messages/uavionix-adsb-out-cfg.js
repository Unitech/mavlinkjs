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
exports.UavionixAdsbOutCfg = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Static data to configure the ADS-B transponder (send within 10 sec of a POR and every 10 sec thereafter)
*/
// ICAO Vehicle address (24 bit) uint32_t
// callsign Vehicle identifier (8 characters, null terminated, valid characters are A-Z, 0-9, " " only) char
// emitterType Transmitting vehicle type. See ADSB_EMITTER_TYPE enum uint8_t
// aircraftSize Aircraft length and width encoding (table 2-35 of DO-282B) uint8_t
// gpsOffsetLat GPS antenna lateral offset (table 2-36 of DO-282B) uint8_t
// gpsOffsetLon GPS antenna longitudinal offset from nose [if non-zero, take position (in meters) divide by 2 and add one] (table 2-37 DO-282B) uint8_t
// stallSpeed Aircraft stall speed in cm/s uint16_t
// rfSelect ADS-B transponder reciever and transmit enable flags uint8_t
var UavionixAdsbOutCfg = /** @class */ (function (_super) {
    __extends(UavionixAdsbOutCfg, _super);
    function UavionixAdsbOutCfg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 10001;
        _this._message_name = 'UAVIONIX_ADSB_OUT_CFG';
        _this._crc_extra = 209;
        _this._message_fields = [
            ['ICAO', 'uint32_t', false],
            ['stallSpeed', 'uint16_t', false],
            ['callsign', 'char', false],
            ['emitterType', 'uint8_t', false],
            ['aircraftSize', 'uint8_t', false],
            ['gpsOffsetLat', 'uint8_t', false],
            ['gpsOffsetLon', 'uint8_t', false],
            ['rfSelect', 'uint8_t', false],
        ];
        return _this;
    }
    return UavionixAdsbOutCfg;
}(node_mavlink_1.MAVLinkMessage));
exports.UavionixAdsbOutCfg = UavionixAdsbOutCfg;
//# sourceMappingURL=uavionix-adsb-out-cfg.js.map