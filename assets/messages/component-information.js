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
exports.ComponentInformation = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about a component. For camera components instead use CAMERA_INFORMATION, and for autopilots use AUTOPILOT_VERSION. Components including GCSes should consider supporting requests of this message via MAV_CMD_REQUEST_MESSAGE.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// metadata_type The type of metadata being requested. uint32_t
// metadata_uid Unique uid for this metadata which a gcs can use for created cached metadata and understanding whether it's cache it up to date or whether it needs to download new data. uint32_t
// metadata_uri Component definition URI. If prefix mavlinkftp:// file is downloaded from vehicle over mavlink ftp protocol. If prefix http[s]:// file is downloaded over internet. Files are json format. They can end in .gz to indicate file is in gzip format. char
// translation_uid Unique uid for the translation file associated with the metadata. uint32_t
// translation_uri The translations for strings within the metadata file. If null the either do not exist or may be included in the metadata file itself. The translations specified here supercede any which may be in the metadata file itself. The uri format is the same as component_metadata_uri . Files are in Json Translation spec format. Empty string indicates no tranlsation file. char
var ComponentInformation = /** @class */ (function (_super) {
    __extends(ComponentInformation, _super);
    function ComponentInformation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 395;
        _this._message_name = 'COMPONENT_INFORMATION';
        _this._crc_extra = 163;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['metadata_type', 'uint32_t', false],
            ['metadata_uid', 'uint32_t', false],
            ['translation_uid', 'uint32_t', false],
            ['metadata_uri', 'char', false],
            ['translation_uri', 'char', false],
        ];
        return _this;
    }
    return ComponentInformation;
}(node_mavlink_1.MAVLinkMessage));
exports.ComponentInformation = ComponentInformation;
//# sourceMappingURL=component-information.js.map