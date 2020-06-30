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
exports.GimbalManagerStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Current status about a high level gimbal manager. This message should be broadcast at a low regular rate (e.g. 5Hz).
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// flags High level gimbal manager flags currently applied. uint32_t
// gimbal_device_id Gimbal device ID that this gimbal manager is responsible for. uint8_t
var GimbalManagerStatus = /** @class */ (function (_super) {
    __extends(GimbalManagerStatus, _super);
    function GimbalManagerStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 281;
        _this._message_name = 'GIMBAL_MANAGER_STATUS';
        _this._crc_extra = 0;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['flags', 'uint32_t', false],
            ['gimbal_device_id', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalManagerStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalManagerStatus = GimbalManagerStatus;
//# sourceMappingURL=gimbal-manager-status.js.map