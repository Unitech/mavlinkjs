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
exports.LoggingAck = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
An ack for a LOGGING_DATA_ACKED message
*/
// target_system system ID of the target uint8_t
// target_component component ID of the target uint8_t
// sequence sequence number (must match the one in LOGGING_DATA_ACKED) uint16_t
var LoggingAck = /** @class */ (function (_super) {
    __extends(LoggingAck, _super);
    function LoggingAck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 268;
        _this._message_name = 'LOGGING_ACK';
        _this._crc_extra = 14;
        _this._message_fields = [
            ['sequence', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return LoggingAck;
}(node_mavlink_1.MAVLinkMessage));
exports.LoggingAck = LoggingAck;
//# sourceMappingURL=logging-ack.js.map