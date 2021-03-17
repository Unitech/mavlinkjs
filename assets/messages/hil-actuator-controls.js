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
exports.HilActuatorControls = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Sent from autopilot to simulation. Hardware in the loop control outputs (replacement for HIL_CONTROLS)
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// controls Control outputs -1 .. 1. Channel assignment depends on the simulated hardware. float
// mode System mode. Includes arming state. uint8_t
// flags Flags as bitfield, 1: indicate simulation using lockstep. uint64_t
var HilActuatorControls = /** @class */ (function (_super) {
    __extends(HilActuatorControls, _super);
    function HilActuatorControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 93;
        _this._message_name = 'HIL_ACTUATOR_CONTROLS';
        _this._crc_extra = 47;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['flags', 'uint64_t', false],
            ['controls', 'float', false],
            ['mode', 'uint8_t', false],
        ];
        return _this;
    }
    return HilActuatorControls;
}(node_mavlink_1.MAVLinkMessage));
exports.HilActuatorControls = HilActuatorControls;
//# sourceMappingURL=hil-actuator-controls.js.map