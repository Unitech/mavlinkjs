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
exports.OpenDroneIdSelfId = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data for filling the OpenDroneID Self ID message. The Self ID Message is an opportunity for the operator to (optionally) declare their identity and purpose of the flight. This message can provide additional information that could reduce the threat profile of a UA (Unmanned Aircraft) flying in a particular area or manner.
*/
// target_system System ID (0 for broadcast). uint8_t
// target_component Component ID (0 for broadcast). uint8_t
// id_or_mac Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html. uint8_t
// description_type Indicates the type of the description field. uint8_t
// description Text description or numeric value expressed as ASCII characters. Shall be filled with nulls in the unused portion of the field. char
var OpenDroneIdSelfId = /** @class */ (function (_super) {
    __extends(OpenDroneIdSelfId, _super);
    function OpenDroneIdSelfId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 12903;
        _this._message_name = 'OPEN_DRONE_ID_SELF_ID';
        _this._crc_extra = 249;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['id_or_mac', 'uint8_t', false],
            ['description_type', 'uint8_t', false],
            ['description', 'char', false],
        ];
        return _this;
    }
    return OpenDroneIdSelfId;
}(node_mavlink_1.MAVLinkMessage));
exports.OpenDroneIdSelfId = OpenDroneIdSelfId;
//# sourceMappingURL=open-drone-id-self-id.js.map