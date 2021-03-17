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
exports.ActuatorOutputStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The raw values of the actuator outputs (e.g. on Pixhawk, from MAIN, AUX ports). This message supersedes SERVO_OUTPUT_RAW.
*/
// time_usec Timestamp (since system boot). uint64_t
// active Active outputs uint32_t
// actuator Servo / motor output array values. Zero values indicate unused channels. float
var ActuatorOutputStatus = /** @class */ (function (_super) {
    __extends(ActuatorOutputStatus, _super);
    function ActuatorOutputStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 375;
        _this._message_name = 'ACTUATOR_OUTPUT_STATUS';
        _this._crc_extra = 251;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['active', 'uint32_t', false],
            ['actuator', 'float', false],
        ];
        return _this;
    }
    return ActuatorOutputStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.ActuatorOutputStatus = ActuatorOutputStatus;
//# sourceMappingURL=actuator-output-status.js.map