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
exports.MountStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message with some status from APM to GCS about camera or antenna mount.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// pointing_a Pitch. int32_t
// pointing_b Roll. int32_t
// pointing_c Yaw. int32_t
var MountStatus = /** @class */ (function (_super) {
    __extends(MountStatus, _super);
    function MountStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 158;
        _this._message_name = 'MOUNT_STATUS';
        _this._crc_extra = 134;
        _this._message_fields = [
            ['pointing_a', 'int32_t', false],
            ['pointing_b', 'int32_t', false],
            ['pointing_c', 'int32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return MountStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.MountStatus = MountStatus;
//# sourceMappingURL=mount-status.js.map