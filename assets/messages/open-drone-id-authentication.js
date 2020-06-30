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
exports.OpenDroneIdAuthentication = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data for filling the OpenDroneID Authentication message. The Authentication Message defines a field that can provide a means of authenticity for the identity of the UAS (Unmanned Aircraft System). The Authentication message can have two different formats. Five data pages are supported. For data page 0, the fields PageCount, Length and TimeStamp are present and AuthData is only 17 bytes. For data page 1 through 4, PageCount, Length and TimeStamp are not present and the size of AuthData is 23 bytes.
*/
// target_system System ID (0 for broadcast). uint8_t
// target_component Component ID (0 for broadcast). uint8_t
// id_or_mac Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html. uint8_t
// authentication_type Indicates the type of authentication. uint8_t
// data_page Allowed range is 0 - 4. uint8_t
// page_count This field is only present for page 0. Allowed range is 0 - 5. uint8_t
// length This field is only present for page 0. Total bytes of authentication_data from all data pages. Allowed range is 0 - 109 (17 + 23*4). uint8_t
// timestamp This field is only present for page 0. 32 bit Unix Timestamp in seconds since 00:00:00 01/01/2019. uint32_t
// authentication_data Opaque authentication data. For page 0, the size is only 17 bytes. For other pages, the size is 23 bytes. Shall be filled with nulls in the unused portion of the field. uint8_t
var OpenDroneIdAuthentication = /** @class */ (function (_super) {
    __extends(OpenDroneIdAuthentication, _super);
    function OpenDroneIdAuthentication() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 12902;
        _this._message_name = 'OPEN_DRONE_ID_AUTHENTICATION';
        _this._crc_extra = 49;
        _this._message_fields = [
            ['timestamp', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['id_or_mac', 'uint8_t', false],
            ['authentication_type', 'uint8_t', false],
            ['data_page', 'uint8_t', false],
            ['page_count', 'uint8_t', false],
            ['length', 'uint8_t', false],
            ['authentication_data', 'uint8_t', false],
        ];
        return _this;
    }
    return OpenDroneIdAuthentication;
}(node_mavlink_1.MAVLinkMessage));
exports.OpenDroneIdAuthentication = OpenDroneIdAuthentication;
//# sourceMappingURL=open-drone-id-authentication.js.map