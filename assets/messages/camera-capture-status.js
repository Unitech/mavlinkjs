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
exports.CameraCaptureStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about the status of a capture. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// image_status Current status of image capturing (0: idle, 1: capture in progress, 2: interval set but idle, 3: interval set and capture in progress) uint8_t
// video_status Current status of video capturing (0: idle, 1: capture in progress) uint8_t
// image_interval Image capture interval float
// recording_time_ms Time since recording started uint32_t
// available_capacity Available storage capacity. float
// image_count Total number of images captured ('forever', or until reset using MAV_CMD_STORAGE_FORMAT). int32_t
var CameraCaptureStatus = /** @class */ (function (_super) {
    __extends(CameraCaptureStatus, _super);
    function CameraCaptureStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 262;
        _this._message_name = 'CAMERA_CAPTURE_STATUS';
        _this._crc_extra = 12;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['image_interval', 'float', false],
            ['recording_time_ms', 'uint32_t', false],
            ['available_capacity', 'float', false],
            ['image_status', 'uint8_t', false],
            ['video_status', 'uint8_t', false],
            ['image_count', 'int32_t', true],
        ];
        return _this;
    }
    return CameraCaptureStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.CameraCaptureStatus = CameraCaptureStatus;
//# sourceMappingURL=camera-capture-status.js.map