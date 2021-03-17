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
exports.CameraStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Camera Event.
*/
// time_usec Image timestamp (since UNIX epoch, according to camera clock). uint64_t
// target_system System ID. uint8_t
// cam_idx Camera ID. uint8_t
// img_idx Image index. uint16_t
// event_id Event type. uint8_t
// p1 Parameter 1 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum). float
// p2 Parameter 2 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum). float
// p3 Parameter 3 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum). float
// p4 Parameter 4 (meaning depends on event_id, see CAMERA_STATUS_TYPES enum). float
var CameraStatus = /** @class */ (function (_super) {
    __extends(CameraStatus, _super);
    function CameraStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 179;
        _this._message_name = 'CAMERA_STATUS';
        _this._crc_extra = 189;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['p1', 'float', false],
            ['p2', 'float', false],
            ['p3', 'float', false],
            ['p4', 'float', false],
            ['img_idx', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['cam_idx', 'uint8_t', false],
            ['event_id', 'uint8_t', false],
        ];
        return _this;
    }
    return CameraStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.CameraStatus = CameraStatus;
//# sourceMappingURL=camera-status.js.map