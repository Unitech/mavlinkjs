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
exports.ProtocolVersion = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Version and capability of protocol version. This message can be requested with MAV_CMD_REQUEST_MESSAGE and is used as part of the handshaking to establish which MAVLink version should be used on the network. Every node should respond to a request for PROTOCOL_VERSION to enable the handshaking. Library implementers should consider adding this into the default decoding state machine to allow the protocol core to respond directly.
*/
// version Currently active MAVLink version number * 100: v1.0 is 100, v2.0 is 200, etc. uint16_t
// min_version Minimum MAVLink version supported uint16_t
// max_version Maximum MAVLink version supported (set to the same value as version by default) uint16_t
// spec_version_hash The first 8 bytes (not characters printed in hex!) of the git hash. uint8_t
// library_version_hash The first 8 bytes (not characters printed in hex!) of the git hash. uint8_t
var ProtocolVersion = /** @class */ (function (_super) {
    __extends(ProtocolVersion, _super);
    function ProtocolVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 300;
        _this._message_name = 'PROTOCOL_VERSION';
        _this._crc_extra = 217;
        _this._message_fields = [
            ['version', 'uint16_t', false],
            ['min_version', 'uint16_t', false],
            ['max_version', 'uint16_t', false],
            ['spec_version_hash', 'uint8_t', false],
            ['library_version_hash', 'uint8_t', false],
        ];
        return _this;
    }
    return ProtocolVersion;
}(node_mavlink_1.MAVLinkMessage));
exports.ProtocolVersion = ProtocolVersion;
//# sourceMappingURL=protocol-version.js.map