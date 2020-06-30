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
exports.LinkNodeStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status generated in each node in the communication chain and injected into MAVLink stream.
*/
// timestamp Timestamp (time since system boot). uint64_t
// tx_buf Remaining free transmit buffer space uint8_t
// rx_buf Remaining free receive buffer space uint8_t
// tx_rate Transmit rate uint32_t
// rx_rate Receive rate uint32_t
// rx_parse_err Number of bytes that could not be parsed correctly. uint16_t
// tx_overflows Transmit buffer overflows. This number wraps around as it reaches UINT16_MAX uint16_t
// rx_overflows Receive buffer overflows. This number wraps around as it reaches UINT16_MAX uint16_t
// messages_sent Messages sent uint32_t
// messages_received Messages received (estimated from counting seq) uint32_t
// messages_lost Messages lost (estimated from counting seq) uint32_t
var LinkNodeStatus = /** @class */ (function (_super) {
    __extends(LinkNodeStatus, _super);
    function LinkNodeStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 8;
        _this._message_name = 'LINK_NODE_STATUS';
        _this._crc_extra = 117;
        _this._message_fields = [
            ['timestamp', 'uint64_t', false],
            ['tx_rate', 'uint32_t', false],
            ['rx_rate', 'uint32_t', false],
            ['messages_sent', 'uint32_t', false],
            ['messages_received', 'uint32_t', false],
            ['messages_lost', 'uint32_t', false],
            ['rx_parse_err', 'uint16_t', false],
            ['tx_overflows', 'uint16_t', false],
            ['rx_overflows', 'uint16_t', false],
            ['tx_buf', 'uint8_t', false],
            ['rx_buf', 'uint8_t', false],
        ];
        return _this;
    }
    return LinkNodeStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.LinkNodeStatus = LinkNodeStatus;
//# sourceMappingURL=link-node-status.js.map