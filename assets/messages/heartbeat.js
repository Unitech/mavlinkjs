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
exports.Heartbeat = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The heartbeat message shows that a system or component is present and responding. The type and autopilot fields (along with the message component id), allow the receiving system to treat further messages from this system appropriately (e.g. by laying out the user interface based on the autopilot). This microservice is documented at https://mavlink.io/en/services/heartbeat.html
*/
// type Vehicle or component type. For a flight controller component the vehicle type (quadrotor, helicopter, etc.). For other components the component type (e.g. camera, gimbal, etc.). This should be used in preference to component id for identifying the component type. uint8_t
// autopilot Autopilot type / class. Use MAV_AUTOPILOT_INVALID for components that are not flight controllers. uint8_t
// base_mode System mode bitmap. uint8_t
// custom_mode A bitfield for use for autopilot-specific flags uint32_t
// system_status System status flag. uint8_t
// mavlink_version MAVLink version, not writable by user, gets added by protocol because of magic data type: uint8_t_mavlink_version uint8_t
var Heartbeat = /** @class */ (function (_super) {
    __extends(Heartbeat, _super);
    function Heartbeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 0;
        _this._message_name = 'HEARTBEAT';
        _this._crc_extra = 50;
        _this._message_fields = [
            ['custom_mode', 'uint32_t', false],
            ['type', 'uint8_t', false],
            ['autopilot', 'uint8_t', false],
            ['base_mode', 'uint8_t', false],
            ['system_status', 'uint8_t', false],
            ['mavlink_version', 'uint8_t', false],
        ];
        return _this;
    }
    return Heartbeat;
}(node_mavlink_1.MAVLinkMessage));
exports.Heartbeat = Heartbeat;
//# sourceMappingURL=heartbeat.js.map