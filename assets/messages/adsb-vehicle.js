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
exports.AdsbVehicle = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The location and information of an ADSB vehicle
*/
// ICAO_address ICAO address uint32_t
// lat Latitude int32_t
// lon Longitude int32_t
// altitude_type ADSB altitude type. uint8_t
// altitude Altitude(ASL) int32_t
// heading Course over ground uint16_t
// hor_velocity The horizontal velocity uint16_t
// ver_velocity The vertical velocity. Positive is up int16_t
// callsign The callsign, 8+null char
// emitter_type ADSB emitter type. uint8_t
// tslc Time since last communication in seconds uint8_t
// flags Bitmap to indicate various statuses including valid data fields uint16_t
// squawk Squawk code uint16_t
var AdsbVehicle = /** @class */ (function (_super) {
    __extends(AdsbVehicle, _super);
    function AdsbVehicle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 246;
        _this._message_name = 'ADSB_VEHICLE';
        _this._crc_extra = 184;
        _this._message_fields = [
            ['ICAO_address', 'uint32_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['altitude', 'int32_t', false],
            ['heading', 'uint16_t', false],
            ['hor_velocity', 'uint16_t', false],
            ['ver_velocity', 'int16_t', false],
            ['flags', 'uint16_t', false],
            ['squawk', 'uint16_t', false],
            ['altitude_type', 'uint8_t', false],
            ['callsign', 'char', false],
            ['emitter_type', 'uint8_t', false],
            ['tslc', 'uint8_t', false],
        ];
        return _this;
    }
    return AdsbVehicle;
}(node_mavlink_1.MAVLinkMessage));
exports.AdsbVehicle = AdsbVehicle;
//# sourceMappingURL=adsb-vehicle.js.map