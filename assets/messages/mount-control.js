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
exports.MountControl = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message to control a camera mount, directional antenna, etc.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// input_a Pitch (centi-degrees) or lat (degE7), depending on mount mode. int32_t
// input_b Roll (centi-degrees) or lon (degE7) depending on mount mode. int32_t
// input_c Yaw (centi-degrees) or alt (cm) depending on mount mode. int32_t
// save_position If "1" it will save current trimmed position on EEPROM (just valid for NEUTRAL and LANDING). uint8_t
var MountControl = /** @class */ (function (_super) {
    __extends(MountControl, _super);
    function MountControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 157;
        _this._message_name = 'MOUNT_CONTROL';
        _this._crc_extra = 21;
        _this._message_fields = [
            ['input_a', 'int32_t', false],
            ['input_b', 'int32_t', false],
            ['input_c', 'int32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['save_position', 'uint8_t', false],
        ];
        return _this;
    }
    return MountControl;
}(node_mavlink_1.MAVLinkMessage));
exports.MountControl = MountControl;
//# sourceMappingURL=mount-control.js.map