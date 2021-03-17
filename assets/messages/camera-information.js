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
exports.CameraInformation = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// vendor_name Name of the camera vendor uint8_t
// model_name Name of the camera model uint8_t
// firmware_version Version of the camera firmware, encoded as: (Dev & 0xff) << 24 | (Patch & 0xff) << 16 | (Minor & 0xff) << 8 | (Major & 0xff) uint32_t
// focal_length Focal length float
// sensor_size_h Image sensor size horizontal float
// sensor_size_v Image sensor size vertical float
// resolution_h Horizontal image resolution uint16_t
// resolution_v Vertical image resolution uint16_t
// lens_id Reserved for a lens ID uint8_t
// flags Bitmap of camera capability flags. uint32_t
// cam_definition_version Camera definition version (iteration) uint16_t
// cam_definition_uri Camera definition URI (if any, otherwise only basic functions will be available). HTTP- (http://) and MAVLink FTP- (mavlinkftp://) formatted URIs are allowed (and both must be supported by any GCS that implements the Camera Protocol). char
var CameraInformation = /** @class */ (function (_super) {
    __extends(CameraInformation, _super);
    function CameraInformation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 259;
        _this._message_name = 'CAMERA_INFORMATION';
        _this._crc_extra = 92;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['firmware_version', 'uint32_t', false],
            ['focal_length', 'float', false],
            ['sensor_size_h', 'float', false],
            ['sensor_size_v', 'float', false],
            ['flags', 'uint32_t', false],
            ['resolution_h', 'uint16_t', false],
            ['resolution_v', 'uint16_t', false],
            ['cam_definition_version', 'uint16_t', false],
            ['vendor_name', 'uint8_t', false],
            ['model_name', 'uint8_t', false],
            ['lens_id', 'uint8_t', false],
            ['cam_definition_uri', 'char', false],
        ];
        return _this;
    }
    return CameraInformation;
}(node_mavlink_1.MAVLinkMessage));
exports.CameraInformation = CameraInformation;
//# sourceMappingURL=camera-information.js.map