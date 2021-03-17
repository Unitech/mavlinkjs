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
exports.CommandAck = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Report status of a command. Includes feedback whether the command was executed. The command microservice is documented at https://mavlink.io/en/services/command.html
*/
// command Command ID (of acknowledged command). uint16_t
// result Result of command. uint8_t
// progress WIP: Also used as result_param1, it can be set with a enum containing the errors reasons of why the command was denied or the progress percentage or 255 if unknown the progress when result is MAV_RESULT_IN_PROGRESS. uint8_t
// result_param2 WIP: Additional parameter of the result, example: which parameter of MAV_CMD_NAV_WAYPOINT caused it to be denied. int32_t
// target_system WIP: System which requested the command to be executed uint8_t
// target_component WIP: Component which requested the command to be executed uint8_t
var CommandAck = /** @class */ (function (_super) {
    __extends(CommandAck, _super);
    function CommandAck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 77;
        _this._message_name = 'COMMAND_ACK';
        _this._crc_extra = 143;
        _this._message_fields = [
            ['command', 'uint16_t', false],
            ['result', 'uint8_t', false],
            ['progress', 'uint8_t', true],
            ['result_param2', 'int32_t', true],
            ['target_system', 'uint8_t', true],
            ['target_component', 'uint8_t', true],
        ];
        return _this;
    }
    return CommandAck;
}(node_mavlink_1.MAVLinkMessage));
exports.CommandAck = CommandAck;
//# sourceMappingURL=command-ack.js.map