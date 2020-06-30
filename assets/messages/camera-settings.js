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
exports.CameraSettings = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Settings of a camera. Can be requested with a MAV_CMD_REQUEST_MESSAGE command.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// mode_id Camera mode uint8_t
// zoomLevel Current zoom level (0.0 to 100.0, NaN if not known) float
// focusLevel Current focus level (0.0 to 100.0, NaN if not known) float
var CameraSettings = /** @class */ (function (_super) {
    __extends(CameraSettings, _super);
    function CameraSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 260;
        _this._message_name = 'CAMERA_SETTINGS';
        _this._crc_extra = 146;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['mode_id', 'uint8_t', false],
            ['zoomLevel', 'float', true],
            ['focusLevel', 'float', true],
        ];
        return _this;
    }
    return CameraSettings;
}(node_mavlink_1.MAVLinkMessage));
exports.CameraSettings = CameraSettings;
//# sourceMappingURL=camera-settings.js.map