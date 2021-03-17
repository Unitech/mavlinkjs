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
exports.CommandLong = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Send a command with up to seven parameters to the MAV. The command microservice is documented at https://mavlink.io/en/services/command.html
*/
// target_system System which should execute the command uint8_t
// target_component Component which should execute the command, 0 for all components uint8_t
// command Command ID (of command to send). uint16_t
// confirmation 0: First transmission of this command. 1-255: Confirmation transmissions (e.g. for kill command) uint8_t
// param1 Parameter 1 (for the specific command). float
// param2 Parameter 2 (for the specific command). float
// param3 Parameter 3 (for the specific command). float
// param4 Parameter 4 (for the specific command). float
// param5 Parameter 5 (for the specific command). float
// param6 Parameter 6 (for the specific command). float
// param7 Parameter 7 (for the specific command). float
var CommandLong = /** @class */ (function (_super) {
    __extends(CommandLong, _super);
    function CommandLong() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 76;
        _this._message_name = 'COMMAND_LONG';
        _this._crc_extra = 152;
        _this._message_fields = [
            ['param1', 'float', false],
            ['param2', 'float', false],
            ['param3', 'float', false],
            ['param4', 'float', false],
            ['param5', 'float', false],
            ['param6', 'float', false],
            ['param7', 'float', false],
            ['command', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['confirmation', 'uint8_t', false],
        ];
        return _this;
    }
    return CommandLong;
}(node_mavlink_1.MAVLinkMessage));
exports.CommandLong = CommandLong;
//# sourceMappingURL=command-long.js.map