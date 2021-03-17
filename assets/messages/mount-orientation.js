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
exports.MountOrientation = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Orientation of a mount
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// roll Roll in global frame (set to NaN for invalid). float
// pitch Pitch in global frame (set to NaN for invalid). float
// yaw Yaw relative to vehicle (set to NaN for invalid). float
// yaw_absolute Yaw in absolute frame relative to Earth's North, north is 0 (set to NaN for invalid). float
var MountOrientation = /** @class */ (function (_super) {
    __extends(MountOrientation, _super);
    function MountOrientation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 265;
        _this._message_name = 'MOUNT_ORIENTATION';
        _this._crc_extra = 26;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['yaw_absolute', 'float', true],
        ];
        return _this;
    }
    return MountOrientation;
}(node_mavlink_1.MAVLinkMessage));
exports.MountOrientation = MountOrientation;
//# sourceMappingURL=mount-orientation.js.map