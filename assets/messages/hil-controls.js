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
exports.HilControls = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Sent from autopilot to simulation. Hardware in the loop control outputs
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// roll_ailerons Control output -1 .. 1 float
// pitch_elevator Control output -1 .. 1 float
// yaw_rudder Control output -1 .. 1 float
// throttle Throttle 0 .. 1 float
// aux1 Aux 1, -1 .. 1 float
// aux2 Aux 2, -1 .. 1 float
// aux3 Aux 3, -1 .. 1 float
// aux4 Aux 4, -1 .. 1 float
// mode System mode. uint8_t
// nav_mode Navigation mode (MAV_NAV_MODE) uint8_t
var HilControls = /** @class */ (function (_super) {
    __extends(HilControls, _super);
    function HilControls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 91;
        _this._message_name = 'HIL_CONTROLS';
        _this._crc_extra = 63;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['roll_ailerons', 'float', false],
            ['pitch_elevator', 'float', false],
            ['yaw_rudder', 'float', false],
            ['throttle', 'float', false],
            ['aux1', 'float', false],
            ['aux2', 'float', false],
            ['aux3', 'float', false],
            ['aux4', 'float', false],
            ['mode', 'uint8_t', false],
            ['nav_mode', 'uint8_t', false],
        ];
        return _this;
    }
    return HilControls;
}(node_mavlink_1.MAVLinkMessage));
exports.HilControls = HilControls;
//# sourceMappingURL=hil-controls.js.map