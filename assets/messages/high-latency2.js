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
exports.HighLatency2 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message appropriate for high latency connections like Iridium (version 2)
*/
// timestamp Timestamp (milliseconds since boot or Unix epoch) uint32_t
// type Type of the MAV (quadrotor, helicopter, etc.) uint8_t
// autopilot Autopilot type / class. Use MAV_AUTOPILOT_INVALID for components that are not flight controllers. uint8_t
// custom_mode A bitfield for use for autopilot-specific flags (2 byte version). uint16_t
// latitude Latitude int32_t
// longitude Longitude int32_t
// altitude Altitude above mean sea level int16_t
// target_altitude Altitude setpoint int16_t
// heading Heading uint8_t
// target_heading Heading setpoint uint8_t
// target_distance Distance to target waypoint or position uint16_t
// throttle Throttle uint8_t
// airspeed Airspeed uint8_t
// airspeed_sp Airspeed setpoint uint8_t
// groundspeed Groundspeed uint8_t
// windspeed Windspeed uint8_t
// wind_heading Wind heading uint8_t
// eph Maximum error horizontal position since last message uint8_t
// epv Maximum error vertical position since last message uint8_t
// temperature_air Air temperature from airspeed sensor int8_t
// climb_rate Maximum climb rate magnitude since last message int8_t
// battery Battery level (-1 if field not provided). int8_t
// wp_num Current waypoint number uint16_t
// failure_flags Bitmap of failure flags. uint16_t
// custom0 Field for custom payload. int8_t
// custom1 Field for custom payload. int8_t
// custom2 Field for custom payload. int8_t
var HighLatency2 = /** @class */ (function (_super) {
    __extends(HighLatency2, _super);
    function HighLatency2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 235;
        _this._message_name = 'HIGH_LATENCY2';
        _this._crc_extra = 179;
        _this._message_fields = [
            ['timestamp', 'uint32_t', false],
            ['latitude', 'int32_t', false],
            ['longitude', 'int32_t', false],
            ['custom_mode', 'uint16_t', false],
            ['altitude', 'int16_t', false],
            ['target_altitude', 'int16_t', false],
            ['target_distance', 'uint16_t', false],
            ['wp_num', 'uint16_t', false],
            ['failure_flags', 'uint16_t', false],
            ['type', 'uint8_t', false],
            ['autopilot', 'uint8_t', false],
            ['heading', 'uint8_t', false],
            ['target_heading', 'uint8_t', false],
            ['throttle', 'uint8_t', false],
            ['airspeed', 'uint8_t', false],
            ['airspeed_sp', 'uint8_t', false],
            ['groundspeed', 'uint8_t', false],
            ['windspeed', 'uint8_t', false],
            ['wind_heading', 'uint8_t', false],
            ['eph', 'uint8_t', false],
            ['epv', 'uint8_t', false],
            ['temperature_air', 'int8_t', false],
            ['climb_rate', 'int8_t', false],
            ['battery', 'int8_t', false],
            ['custom0', 'int8_t', false],
            ['custom1', 'int8_t', false],
            ['custom2', 'int8_t', false],
        ];
        return _this;
    }
    return HighLatency2;
}(node_mavlink_1.MAVLinkMessage));
exports.HighLatency2 = HighLatency2;
//# sourceMappingURL=high-latency2.js.map