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
exports.MessageInterval = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The interval between messages for a particular MAVLink message ID. This message is the response to the MAV_CMD_GET_MESSAGE_INTERVAL command. This interface replaces DATA_STREAM.
*/
// message_id The ID of the requested MAVLink message. v1.0 is limited to 254 messages. uint16_t
// interval_us The interval between two messages. A value of -1 indicates this stream is disabled, 0 indicates it is not available, > 0 indicates the interval at which it is sent. int32_t
var MessageInterval = /** @class */ (function (_super) {
    __extends(MessageInterval, _super);
    function MessageInterval() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 244;
        _this._message_name = 'MESSAGE_INTERVAL';
        _this._crc_extra = 95;
        _this._message_fields = [
            ['interval_us', 'int32_t', false],
            ['message_id', 'uint16_t', false],
        ];
        return _this;
    }
    return MessageInterval;
}(node_mavlink_1.MAVLinkMessage));
exports.MessageInterval = MessageInterval;
//# sourceMappingURL=message-interval.js.map