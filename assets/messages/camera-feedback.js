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
exports.CameraFeedback = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Camera Capture Feedback.
*/
// time_usec Image timestamp (since UNIX epoch), as passed in by CAMERA_STATUS message (or autopilot if no CCB). uint64_t
// target_system System ID. uint8_t
// cam_idx Camera ID. uint8_t
// img_idx Image index. uint16_t
// lat Latitude. int32_t
// lng Longitude. int32_t
// alt_msl Altitude (MSL). float
// alt_rel Altitude (Relative to HOME location). float
// roll Camera Roll angle (earth frame, +-180). float
// pitch Camera Pitch angle (earth frame, +-180). float
// yaw Camera Yaw (earth frame, 0-360, true). float
// foc_len Focal Length. float
// flags Feedback flags. uint8_t
// completed_captures Completed image captures. uint16_t
var CameraFeedback = /** @class */ (function (_super) {
    __extends(CameraFeedback, _super);
    function CameraFeedback() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 180;
        _this._message_name = 'CAMERA_FEEDBACK';
        _this._crc_extra = 52;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['lat', 'int32_t', false],
            ['lng', 'int32_t', false],
            ['alt_msl', 'float', false],
            ['alt_rel', 'float', false],
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['foc_len', 'float', false],
            ['img_idx', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['cam_idx', 'uint8_t', false],
            ['flags', 'uint8_t', false],
            ['completed_captures', 'uint16_t', true],
        ];
        return _this;
    }
    return CameraFeedback;
}(node_mavlink_1.MAVLinkMessage));
exports.CameraFeedback = CameraFeedback;
//# sourceMappingURL=camera-feedback.js.map