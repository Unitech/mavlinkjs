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
exports.LocalPositionNed = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The filtered local position (e.g. fused computer vision and accelerometers). Coordinate frame is right-handed, Z-axis down (aeronautical frame, NED / north-east-down convention)
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// x X Position float
// y Y Position float
// z Z Position float
// vx X Speed float
// vy Y Speed float
// vz Z Speed float
var LocalPositionNed = /** @class */ (function (_super) {
    __extends(LocalPositionNed, _super);
    function LocalPositionNed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 32;
        _this._message_name = 'LOCAL_POSITION_NED';
        _this._crc_extra = 185;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['vx', 'float', false],
            ['vy', 'float', false],
            ['vz', 'float', false],
        ];
        return _this;
    }
    return LocalPositionNed;
}(node_mavlink_1.MAVLinkMessage));
exports.LocalPositionNed = LocalPositionNed;
//# sourceMappingURL=local-position-ned.js.map