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
exports.GlobalPositionInt = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The filtered global position (e.g. fused GPS and accelerometers). The position is in GPS-frame (right-handed, Z-up). It
               is designed as scaled integer message since the resolution of float is not sufficient.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// lat Latitude, expressed int32_t
// lon Longitude, expressed int32_t
// alt Altitude (MSL). Note that virtually all GPS modules provide both WGS84 and MSL. int32_t
// relative_alt Altitude above ground int32_t
// vx Ground X Speed (Latitude, positive north) int16_t
// vy Ground Y Speed (Longitude, positive east) int16_t
// vz Ground Z Speed (Altitude, positive down) int16_t
// hdg Vehicle heading (yaw angle), 0.0..359.99 degrees. If unknown, set to: UINT16_MAX uint16_t
var GlobalPositionInt = /** @class */ (function (_super) {
    __extends(GlobalPositionInt, _super);
    function GlobalPositionInt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 33;
        _this._message_name = 'GLOBAL_POSITION_INT';
        _this._crc_extra = 104;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'int32_t', false],
            ['relative_alt', 'int32_t', false],
            ['vx', 'int16_t', false],
            ['vy', 'int16_t', false],
            ['vz', 'int16_t', false],
            ['hdg', 'uint16_t', false],
        ];
        return _this;
    }
    return GlobalPositionInt;
}(node_mavlink_1.MAVLinkMessage));
exports.GlobalPositionInt = GlobalPositionInt;
//# sourceMappingURL=global-position-int.js.map