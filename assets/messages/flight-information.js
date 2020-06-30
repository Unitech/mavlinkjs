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
exports.FlightInformation = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about flight since last arming.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// arming_time_utc Timestamp at arming (time since UNIX epoch) in UTC, 0 for unknown uint64_t
// takeoff_time_utc Timestamp at takeoff (time since UNIX epoch) in UTC, 0 for unknown uint64_t
// flight_uuid Universally unique identifier (UUID) of flight, should correspond to name of log files uint64_t
var FlightInformation = /** @class */ (function (_super) {
    __extends(FlightInformation, _super);
    function FlightInformation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 264;
        _this._message_name = 'FLIGHT_INFORMATION';
        _this._crc_extra = 49;
        _this._message_fields = [
            ['arming_time_utc', 'uint64_t', false],
            ['takeoff_time_utc', 'uint64_t', false],
            ['flight_uuid', 'uint64_t', false],
            ['time_boot_ms', 'uint32_t', false],
        ];
        return _this;
    }
    return FlightInformation;
}(node_mavlink_1.MAVLinkMessage));
exports.FlightInformation = FlightInformation;
//# sourceMappingURL=flight-information.js.map