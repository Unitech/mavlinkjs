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
exports.Tunnel = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message for transporting "arbitrary" variable-length data from one component to another (broadcast is not forbidden, but discouraged). The encoding of the data is usually extension specific, i.e. determined by the source, and is usually not documented as part of the MAVLink specification.
*/
// target_system System ID (can be 0 for broadcast, but this is discouraged) uint8_t
// target_component Component ID (can be 0 for broadcast, but this is discouraged) uint8_t
// payload_type A code that identifies the content of the payload (0 for unknown, which is the default). If this code is less than 32768, it is a 'registered' payload type and the corresponding code should be added to the MAV_TUNNEL_PAYLOAD_TYPE enum. Software creators can register blocks of types as needed. Codes greater than 32767 are considered local experiments and should not be checked in to any widely distributed codebase. uint16_t
// payload_length Length of the data transported in payload uint8_t
// payload Variable length payload. The payload length is defined by payload_length. The entire content of this block is opaque unless you understand the encoding specified by payload_type. uint8_t
var Tunnel = /** @class */ (function (_super) {
    __extends(Tunnel, _super);
    function Tunnel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 385;
        _this._message_name = 'TUNNEL';
        _this._crc_extra = 147;
        _this._message_fields = [
            ['payload_type', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['payload_length', 'uint8_t', false],
            ['payload', 'uint8_t', false],
        ];
        return _this;
    }
    return Tunnel;
}(node_mavlink_1.MAVLinkMessage));
exports.Tunnel = Tunnel;
//# sourceMappingURL=tunnel.js.map