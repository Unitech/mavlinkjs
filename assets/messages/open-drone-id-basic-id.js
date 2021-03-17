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
exports.OpenDroneIdBasicId = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data for filling the OpenDroneID Basic ID message. This and the below messages are primarily meant for feeding data to/from an OpenDroneID implementation. E.g. https://github.com/opendroneid/opendroneid-core-c. These messages are compatible with the ASTM Remote ID standard at https://www.astm.org/Standards/F3411.htm and the ASD-STAN Direct Remote ID standard. The usage of these messages is documented at https://mavlink.io/en/services/opendroneid.html.
*/
// target_system System ID (0 for broadcast). uint8_t
// target_component Component ID (0 for broadcast). uint8_t
// id_or_mac Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html. uint8_t
// id_type Indicates the format for the uas_id field of this message. uint8_t
// ua_type Indicates the type of UA (Unmanned Aircraft). uint8_t
// uas_id UAS (Unmanned Aircraft System) ID following the format specified by id_type. Shall be filled with nulls in the unused portion of the field. uint8_t
var OpenDroneIdBasicId = /** @class */ (function (_super) {
    __extends(OpenDroneIdBasicId, _super);
    function OpenDroneIdBasicId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 12900;
        _this._message_name = 'OPEN_DRONE_ID_BASIC_ID';
        _this._crc_extra = 114;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['id_or_mac', 'uint8_t', false],
            ['id_type', 'uint8_t', false],
            ['ua_type', 'uint8_t', false],
            ['uas_id', 'uint8_t', false],
        ];
        return _this;
    }
    return OpenDroneIdBasicId;
}(node_mavlink_1.MAVLinkMessage));
exports.OpenDroneIdBasicId = OpenDroneIdBasicId;
//# sourceMappingURL=open-drone-id-basic-id.js.map