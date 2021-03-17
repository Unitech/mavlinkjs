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
exports.MountConfigure = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message to configure a camera mount, directional antenna, etc.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// mount_mode Mount operating mode. uint8_t
// stab_roll (1 = yes, 0 = no). uint8_t
// stab_pitch (1 = yes, 0 = no). uint8_t
// stab_yaw (1 = yes, 0 = no). uint8_t
var MountConfigure = /** @class */ (function (_super) {
    __extends(MountConfigure, _super);
    function MountConfigure() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 156;
        _this._message_name = 'MOUNT_CONFIGURE';
        _this._crc_extra = 19;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['mount_mode', 'uint8_t', false],
            ['stab_roll', 'uint8_t', false],
            ['stab_pitch', 'uint8_t', false],
            ['stab_yaw', 'uint8_t', false],
        ];
        return _this;
    }
    return MountConfigure;
}(node_mavlink_1.MAVLinkMessage));
exports.MountConfigure = MountConfigure;
//# sourceMappingURL=mount-configure.js.map