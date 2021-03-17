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
exports.VideoStreamStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about the status of a video stream. It may be requested using MAV_CMD_REQUEST_MESSAGE.
*/
// stream_id Video Stream ID (1 for first, 2 for second, etc.) uint8_t
// flags Bitmap of stream status flags uint16_t
// framerate Frame rate float
// resolution_h Horizontal resolution uint16_t
// resolution_v Vertical resolution uint16_t
// bitrate Bit rate uint32_t
// rotation Video image rotation clockwise uint16_t
// hfov Horizontal Field of view uint16_t
var VideoStreamStatus = /** @class */ (function (_super) {
    __extends(VideoStreamStatus, _super);
    function VideoStreamStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 270;
        _this._message_name = 'VIDEO_STREAM_STATUS';
        _this._crc_extra = 59;
        _this._message_fields = [
            ['framerate', 'float', false],
            ['bitrate', 'uint32_t', false],
            ['flags', 'uint16_t', false],
            ['resolution_h', 'uint16_t', false],
            ['resolution_v', 'uint16_t', false],
            ['rotation', 'uint16_t', false],
            ['hfov', 'uint16_t', false],
            ['stream_id', 'uint8_t', false],
        ];
        return _this;
    }
    return VideoStreamStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.VideoStreamStatus = VideoStreamStatus;
//# sourceMappingURL=video-stream-status.js.map