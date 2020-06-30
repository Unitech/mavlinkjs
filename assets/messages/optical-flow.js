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
exports.OpticalFlow = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Optical flow from a flow sensor (e.g. optical mouse sensor)
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// sensor_id Sensor ID uint8_t
// flow_x Flow in x-sensor direction int16_t
// flow_y Flow in y-sensor direction int16_t
// flow_comp_m_x Flow in x-sensor direction, angular-speed compensated float
// flow_comp_m_y Flow in y-sensor direction, angular-speed compensated float
// quality Optical flow quality / confidence. 0: bad, 255: maximum quality uint8_t
// ground_distance Ground distance. Positive value: distance known. Negative value: Unknown distance float
// flow_rate_x Flow rate about X axis float
// flow_rate_y Flow rate about Y axis float
var OpticalFlow = /** @class */ (function (_super) {
    __extends(OpticalFlow, _super);
    function OpticalFlow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 100;
        _this._message_name = 'OPTICAL_FLOW';
        _this._crc_extra = 175;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['flow_comp_m_x', 'float', false],
            ['flow_comp_m_y', 'float', false],
            ['ground_distance', 'float', false],
            ['flow_x', 'int16_t', false],
            ['flow_y', 'int16_t', false],
            ['sensor_id', 'uint8_t', false],
            ['quality', 'uint8_t', false],
            ['flow_rate_x', 'float', true],
            ['flow_rate_y', 'float', true],
        ];
        return _this;
    }
    return OpticalFlow;
}(node_mavlink_1.MAVLinkMessage));
exports.OpticalFlow = OpticalFlow;
//# sourceMappingURL=optical-flow.js.map