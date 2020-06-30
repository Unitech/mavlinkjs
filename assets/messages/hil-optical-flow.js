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
exports.HilOpticalFlow = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Simulated optical flow from a flow sensor (e.g. PX4FLOW or optical mouse sensor)
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// sensor_id Sensor ID uint8_t
// integration_time_us Integration time. Divide integrated_x and integrated_y by the integration time to obtain average flow. The integration time also indicates the. uint32_t
// integrated_x Flow in radians around X axis (Sensor RH rotation about the X axis induces a positive flow. Sensor linear motion along the positive Y axis induces a negative flow.) float
// integrated_y Flow in radians around Y axis (Sensor RH rotation about the Y axis induces a positive flow. Sensor linear motion along the positive X axis induces a positive flow.) float
// integrated_xgyro RH rotation around X axis float
// integrated_ygyro RH rotation around Y axis float
// integrated_zgyro RH rotation around Z axis float
// temperature Temperature int16_t
// quality Optical flow quality / confidence. 0: no valid flow, 255: maximum quality uint8_t
// time_delta_distance_us Time since the distance was sampled. uint32_t
// distance Distance to the center of the flow field. Positive value (including zero): distance known. Negative value: Unknown distance. float
var HilOpticalFlow = /** @class */ (function (_super) {
    __extends(HilOpticalFlow, _super);
    function HilOpticalFlow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 114;
        _this._message_name = 'HIL_OPTICAL_FLOW';
        _this._crc_extra = 237;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['integration_time_us', 'uint32_t', false],
            ['integrated_x', 'float', false],
            ['integrated_y', 'float', false],
            ['integrated_xgyro', 'float', false],
            ['integrated_ygyro', 'float', false],
            ['integrated_zgyro', 'float', false],
            ['time_delta_distance_us', 'uint32_t', false],
            ['distance', 'float', false],
            ['temperature', 'int16_t', false],
            ['sensor_id', 'uint8_t', false],
            ['quality', 'uint8_t', false],
        ];
        return _this;
    }
    return HilOpticalFlow;
}(node_mavlink_1.MAVLinkMessage));
exports.HilOpticalFlow = HilOpticalFlow;
//# sourceMappingURL=hil-optical-flow.js.map