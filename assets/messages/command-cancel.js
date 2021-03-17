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
exports.CommandCancel = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Cancel a long running command. The target system should respond with a COMMAND_ACK to the original command with result=MAV_RESULT_CANCELLED if the long running process was cancelled. If it has already completed, the cancel action can be ignored. The cancel action can be retried until some sort of acknowledgement to the original command has been received. The command microservice is documented at https://mavlink.io/en/services/command.html
*/
// target_system System executing long running command. Should not be broadcast (0). uint8_t
// target_component Component executing long running command. uint8_t
// command Command ID (of command to cancel). uint16_t
var CommandCancel = /** @class */ (function (_super) {
    __extends(CommandCancel, _super);
    function CommandCancel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 80;
        _this._message_name = 'COMMAND_CANCEL';
        _this._crc_extra = 14;
        _this._message_fields = [
            ['command', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return CommandCancel;
}(node_mavlink_1.MAVLinkMessage));
exports.CommandCancel = CommandCancel;
//# sourceMappingURL=command-cancel.js.map