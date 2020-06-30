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
exports.LoggingDataAcked = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
A message containing logged data which requires a LOGGING_ACK to be sent back
*/
// target_system system ID of the target uint8_t
// target_component component ID of the target uint8_t
// sequence sequence number (can wrap) uint16_t
// length data length uint8_t
// first_message_offset offset into data where first message starts. This can be used for recovery, when a previous message got lost (set to 255 if no start exists). uint8_t
// data logged data uint8_t
var LoggingDataAcked = /** @class */ (function (_super) {
    __extends(LoggingDataAcked, _super);
    function LoggingDataAcked() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 267;
        _this._message_name = 'LOGGING_DATA_ACKED';
        _this._crc_extra = 35;
        _this._message_fields = [
            ['sequence', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['length', 'uint8_t', false],
            ['first_message_offset', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return LoggingDataAcked;
}(node_mavlink_1.MAVLinkMessage));
exports.LoggingDataAcked = LoggingDataAcked;
//# sourceMappingURL=logging-data-acked.js.map