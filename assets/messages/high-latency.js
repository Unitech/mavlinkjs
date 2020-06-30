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
exports.HighLatency = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message appropriate for high latency connections like Iridium
*/
// base_mode Bitmap of enabled system modes. uint8_t
// custom_mode A bitfield for use for autopilot-specific flags. uint32_t
// landed_state The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown. uint8_t
// roll roll int16_t
// pitch pitch int16_t
// heading heading uint16_t
// throttle throttle (percentage) int8_t
// heading_sp heading setpoint int16_t
// latitude Latitude int32_t
// longitude Longitude int32_t
// altitude_amsl Altitude above mean sea level int16_t
// altitude_sp Altitude setpoint relative to the home position int16_t
// airspeed airspeed uint8_t
// airspeed_sp airspeed setpoint uint8_t
// groundspeed groundspeed uint8_t
// climb_rate climb rate int8_t
// gps_nsat Number of satellites visible. If unknown, set to 255 uint8_t
// gps_fix_type GPS Fix type. uint8_t
// battery_remaining Remaining battery (percentage) uint8_t
// temperature Autopilot temperature (degrees C) int8_t
// temperature_air Air temperature (degrees C) from airspeed sensor int8_t
// failsafe failsafe (each bit represents a failsafe where 0=ok, 1=failsafe active (bit0:RC, bit1:batt, bit2:GPS, bit3:GCS, bit4:fence) uint8_t
// wp_num current waypoint number uint8_t
// wp_distance distance to target uint16_t
var HighLatency = /** @class */ (function (_super) {
    __extends(HighLatency, _super);
    function HighLatency() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 234;
        _this._message_name = 'HIGH_LATENCY';
        _this._crc_extra = 150;
        _this._message_fields = [
            ['custom_mode', 'uint32_t', false],
            ['latitude', 'int32_t', false],
            ['longitude', 'int32_t', false],
            ['roll', 'int16_t', false],
            ['pitch', 'int16_t', false],
            ['heading', 'uint16_t', false],
            ['heading_sp', 'int16_t', false],
            ['altitude_amsl', 'int16_t', false],
            ['altitude_sp', 'int16_t', false],
            ['wp_distance', 'uint16_t', false],
            ['base_mode', 'uint8_t', false],
            ['landed_state', 'uint8_t', false],
            ['throttle', 'int8_t', false],
            ['airspeed', 'uint8_t', false],
            ['airspeed_sp', 'uint8_t', false],
            ['groundspeed', 'uint8_t', false],
            ['climb_rate', 'int8_t', false],
            ['gps_nsat', 'uint8_t', false],
            ['gps_fix_type', 'uint8_t', false],
            ['battery_remaining', 'uint8_t', false],
            ['temperature', 'int8_t', false],
            ['temperature_air', 'int8_t', false],
            ['failsafe', 'uint8_t', false],
            ['wp_num', 'uint8_t', false],
        ];
        return _this;
    }
    return HighLatency;
}(node_mavlink_1.MAVLinkMessage));
exports.HighLatency = HighLatency;
//# sourceMappingURL=high-latency.js.map