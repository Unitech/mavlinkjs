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
exports.ActuatorControlTarget = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Set the vehicle attitude and body angular rates.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// group_mlx Actuator group. The "_mlx" indicates this is a multi-instance message and a MAVLink parser should use this field to difference between instances. uint8_t
// controls Actuator controls. Normed to -1..+1 where 0 is neutral position. Throttle for single rotation direction motors is 0..1, negative range for reverse direction. Standard mapping for attitude controls (group 0): (index 0-7): roll, pitch, yaw, throttle, flaps, spoilers, airbrakes, landing gear. Load a pass-through mixer to repurpose them as generic outputs. float
var ActuatorControlTarget = /** @class */ (function (_super) {
    __extends(ActuatorControlTarget, _super);
    function ActuatorControlTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 140;
        _this._message_name = 'ACTUATOR_CONTROL_TARGET';
        _this._crc_extra = 181;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['controls', 'float', false],
            ['group_mlx', 'uint8_t', false],
        ];
        return _this;
    }
    return ActuatorControlTarget;
}(node_mavlink_1.MAVLinkMessage));
exports.ActuatorControlTarget = ActuatorControlTarget;
//# sourceMappingURL=actuator-control-target.js.map