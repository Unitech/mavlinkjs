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
exports.FileTransferProtocol = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
File transfer message
*/
// target_network Network ID (0 for broadcast) uint8_t
// target_system System ID (0 for broadcast) uint8_t
// target_component Component ID (0 for broadcast) uint8_t
// payload Variable length payload. The length is defined by the remaining message length when subtracting the header and other fields.  The entire content of this block is opaque unless you understand any the encoding message_type.  The particular encoding used can be extension specific and might not always be documented as part of the mavlink specification. uint8_t
var FileTransferProtocol = /** @class */ (function (_super) {
    __extends(FileTransferProtocol, _super);
    function FileTransferProtocol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 110;
        _this._message_name = 'FILE_TRANSFER_PROTOCOL';
        _this._crc_extra = 84;
        _this._message_fields = [
            ['target_network', 'uint8_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['payload', 'uint8_t', false],
        ];
        return _this;
    }
    return FileTransferProtocol;
}(node_mavlink_1.MAVLinkMessage));
exports.FileTransferProtocol = FileTransferProtocol;
//# sourceMappingURL=file-transfer-protocol.js.map