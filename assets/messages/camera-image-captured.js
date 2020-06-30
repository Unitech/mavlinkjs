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
exports.CameraImageCaptured = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about a captured image. This is emitted every time a message is captured. It may be re-requested using MAV_CMD_REQUEST_MESSAGE, using param2 to indicate the sequence number for the missing image.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// time_utc Timestamp (time since UNIX epoch) in UTC. 0 for unknown. uint64_t
// camera_id Camera ID (1 for first, 2 for second, etc.) uint8_t
// lat Latitude where image was taken int32_t
// lon Longitude where capture was taken int32_t
// alt Altitude (MSL) where image was taken int32_t
// relative_alt Altitude above ground int32_t
// q Quaternion of camera orientation (w, x, y, z order, zero-rotation is 0, 0, 0, 0) float
// image_index Zero based index of this image (i.e. a new image will have index CAMERA_CAPTURE_STATUS.image count -1) int32_t
// capture_result Boolean indicating success (1) or failure (0) while capturing this image. int8_t
// file_url URL of image taken. Either local storage or http://foo.jpg if camera provides an HTTP interface. char
var CameraImageCaptured = /** @class */ (function (_super) {
    __extends(CameraImageCaptured, _super);
    function CameraImageCaptured() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 263;
        _this._message_name = 'CAMERA_IMAGE_CAPTURED';
        _this._crc_extra = 133;
        _this._message_fields = [
            ['time_utc', 'uint64_t', false],
            ['time_boot_ms', 'uint32_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'int32_t', false],
            ['relative_alt', 'int32_t', false],
            ['q', 'float', false],
            ['image_index', 'int32_t', false],
            ['camera_id', 'uint8_t', false],
            ['capture_result', 'int8_t', false],
            ['file_url', 'char', false],
        ];
        return _this;
    }
    return CameraImageCaptured;
}(node_mavlink_1.MAVLinkMessage));
exports.CameraImageCaptured = CameraImageCaptured;
//# sourceMappingURL=camera-image-captured.js.map