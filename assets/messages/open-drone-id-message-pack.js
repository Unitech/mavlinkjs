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
exports.OpenDroneIdMessagePack = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
An OpenDroneID message pack is a container for multiple encoded OpenDroneID messages (i.e. not in the format given for the above messages descriptions but after encoding into the compressed OpenDroneID byte format). Used e.g. when transmitting on Bluetooth 5.0 Long Range/Extended Advertising or on WiFi Neighbor Aware Networking.
*/
// target_system System ID (0 for broadcast). uint8_t
// target_component Component ID (0 for broadcast). uint8_t
// single_message_size This field must currently always be equal to 25 (bytes), since all encoded OpenDroneID messages are specificed to have this length. uint8_t
// msg_pack_size Number of encoded messages in the pack (not the number of bytes). Allowed range is 1 - 10. uint8_t
// messages Concatenation of encoded OpenDroneID messages. Shall be filled with nulls in the unused portion of the field. uint8_t
var OpenDroneIdMessagePack = /** @class */ (function (_super) {
    __extends(OpenDroneIdMessagePack, _super);
    function OpenDroneIdMessagePack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 12915;
        _this._message_name = 'OPEN_DRONE_ID_MESSAGE_PACK';
        _this._crc_extra = 62;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['single_message_size', 'uint8_t', false],
            ['msg_pack_size', 'uint8_t', false],
            ['messages', 'uint8_t', false],
        ];
        return _this;
    }
    return OpenDroneIdMessagePack;
}(node_mavlink_1.MAVLinkMessage));
exports.OpenDroneIdMessagePack = OpenDroneIdMessagePack;
//# sourceMappingURL=open-drone-id-message-pack.js.map