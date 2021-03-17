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
exports.Statustext = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status text message. These messages are printed in yellow in the COMM console of QGroundControl. WARNING: They consume quite some bandwidth, so use only for important status and error messages. If implemented wisely, these messages are buffered on the MCU and sent only at a limited rate (e.g. 10 Hz).
*/
// severity Severity of status. Relies on the definitions within RFC-5424. uint8_t
// text Status text message, without null termination character char
// id Unique (opaque) identifier for this statustext message.  May be used to reassemble a logical long-statustext message from a sequence of chunks.  A value of zero indicates this is the only chunk in the sequence and the message can be emitted immediately. uint16_t
// chunk_seq This chunk's sequence number; indexing is from zero.  Any null character in the text field is taken to mean this was the last chunk. uint8_t
var Statustext = /** @class */ (function (_super) {
    __extends(Statustext, _super);
    function Statustext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 253;
        _this._message_name = 'STATUSTEXT';
        _this._crc_extra = 83;
        _this._message_fields = [
            ['severity', 'uint8_t', false],
            ['text', 'char', false],
            ['id', 'uint16_t', true],
            ['chunk_seq', 'uint8_t', true],
        ];
        return _this;
    }
    return Statustext;
}(node_mavlink_1.MAVLinkMessage));
exports.Statustext = Statustext;
//# sourceMappingURL=statustext.js.map