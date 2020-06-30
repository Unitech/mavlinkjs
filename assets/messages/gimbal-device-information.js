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
exports.GimbalDeviceInformation = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about a low level gimbal. This message should be requested by the gimbal manager or a ground station using MAV_CMD_REQUEST_MESSAGE.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// vendor_name Name of the gimbal vendor uint8_t
// model_name Name of the gimbal model uint8_t
// firmware_version Version of the gimbal firmware, encoded as: (Dev & 0xff) << 24 | (Patch & 0xff) << 16 | (Minor & 0xff) << 8 | (Major & 0xff) uint32_t
// cap_flags Bitmap of gimbal capability flags. uint16_t
// tilt_max Maximum tilt/pitch angle (positive: up, negative: down) float
// tilt_min Minimum tilt/pitch angle (positive: up, negative: down) float
// tilt_rate_max Maximum tilt/pitch angular rate (positive: up, negative: down) float
// pan_max Maximum pan/yaw angle (positive: to the right, negative: to the left) float
// pan_min Minimum pan/yaw angle (positive: to the right, negative: to the left) float
// pan_rate_max Minimum pan/yaw angular rate (positive: to the right, negative: to the left) float
var GimbalDeviceInformation = /** @class */ (function (_super) {
    __extends(GimbalDeviceInformation, _super);
    function GimbalDeviceInformation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 283;
        _this._message_name = 'GIMBAL_DEVICE_INFORMATION';
        _this._crc_extra = 247;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['firmware_version', 'uint32_t', false],
            ['tilt_max', 'float', false],
            ['tilt_min', 'float', false],
            ['tilt_rate_max', 'float', false],
            ['pan_max', 'float', false],
            ['pan_min', 'float', false],
            ['pan_rate_max', 'float', false],
            ['cap_flags', 'uint16_t', false],
            ['vendor_name', 'uint8_t', false],
            ['model_name', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalDeviceInformation;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalDeviceInformation = GimbalDeviceInformation;
//# sourceMappingURL=gimbal-device-information.js.map