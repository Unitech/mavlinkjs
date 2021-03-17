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
exports.LocalPositionNedSystemGlobalOffset = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The offset in X, Y, Z and yaw between the LOCAL_POSITION_NED messages of MAV X and the global coordinate frame in NED coordinates. Coordinate frame is right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// x X Position float
// y Y Position float
// z Z Position float
// roll Roll float
// pitch Pitch float
// yaw Yaw float
var LocalPositionNedSystemGlobalOffset = /** @class */ (function (_super) {
    __extends(LocalPositionNedSystemGlobalOffset, _super);
    function LocalPositionNedSystemGlobalOffset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 89;
        _this._message_name = 'LOCAL_POSITION_NED_SYSTEM_GLOBAL_OFFSET';
        _this._crc_extra = 231;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
        ];
        return _this;
    }
    return LocalPositionNedSystemGlobalOffset;
}(node_mavlink_1.MAVLinkMessage));
exports.LocalPositionNedSystemGlobalOffset = LocalPositionNedSystemGlobalOffset;
//# sourceMappingURL=local-position-ned-system-global-offset.js.map