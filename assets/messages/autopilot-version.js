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
exports.AutopilotVersion = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Version and capability of autopilot software. This should be emitted in response to a request with MAV_CMD_REQUEST_MESSAGE.
*/
// capabilities Bitmap of capabilities uint64_t
// flight_sw_version Firmware version number uint32_t
// middleware_sw_version Middleware version number uint32_t
// os_sw_version Operating system version number uint32_t
// board_version HW / board version (last 8 bytes should be silicon ID, if any) uint32_t
// flight_custom_version Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier, but should allow to identify the commit using the main version number even for very large code bases. uint8_t
// middleware_custom_version Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier, but should allow to identify the commit using the main version number even for very large code bases. uint8_t
// os_custom_version Custom version field, commonly the first 8 bytes of the git hash. This is not an unique identifier, but should allow to identify the commit using the main version number even for very large code bases. uint8_t
// vendor_id ID of the board vendor uint16_t
// product_id ID of the product uint16_t
// uid UID if provided by hardware (see uid2) uint64_t
// uid2 UID if provided by hardware (supersedes the uid field. If this is non-zero, use this field, otherwise use uid) uint8_t
var AutopilotVersion = /** @class */ (function (_super) {
    __extends(AutopilotVersion, _super);
    function AutopilotVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 148;
        _this._message_name = 'AUTOPILOT_VERSION';
        _this._crc_extra = 178;
        _this._message_fields = [
            ['capabilities', 'uint64_t', false],
            ['uid', 'uint64_t', false],
            ['flight_sw_version', 'uint32_t', false],
            ['middleware_sw_version', 'uint32_t', false],
            ['os_sw_version', 'uint32_t', false],
            ['board_version', 'uint32_t', false],
            ['vendor_id', 'uint16_t', false],
            ['product_id', 'uint16_t', false],
            ['flight_custom_version', 'uint8_t', false],
            ['middleware_custom_version', 'uint8_t', false],
            ['os_custom_version', 'uint8_t', false],
            ['uid2', 'uint8_t', true],
        ];
        return _this;
    }
    return AutopilotVersion;
}(node_mavlink_1.MAVLinkMessage));
exports.AutopilotVersion = AutopilotVersion;
//# sourceMappingURL=autopilot-version.js.map