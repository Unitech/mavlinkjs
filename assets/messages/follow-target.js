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
exports.FollowTarget = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Current motion information from a designated system
*/
// timestamp Timestamp (time since system boot). uint64_t
// est_capabilities bit positions for tracker reporting capabilities (POS = 0, VEL = 1, ACCEL = 2, ATT + RATES = 3) uint8_t
// lat Latitude (WGS84) int32_t
// lon Longitude (WGS84) int32_t
// alt Altitude (MSL) float
// vel target velocity (0,0,0) for unknown float
// acc linear target acceleration (0,0,0) for unknown float
// attitude_q (1 0 0 0 for unknown) float
// rates (0 0 0 for unknown) float
// position_cov eph epv float
// custom_state button states or switches of a tracker device uint64_t
var FollowTarget = /** @class */ (function (_super) {
    __extends(FollowTarget, _super);
    function FollowTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 144;
        _this._message_name = 'FOLLOW_TARGET';
        _this._crc_extra = 127;
        _this._message_fields = [
            ['timestamp', 'uint64_t', false],
            ['custom_state', 'uint64_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['alt', 'float', false],
            ['vel', 'float', false],
            ['acc', 'float', false],
            ['attitude_q', 'float', false],
            ['rates', 'float', false],
            ['position_cov', 'float', false],
            ['est_capabilities', 'uint8_t', false],
        ];
        return _this;
    }
    return FollowTarget;
}(node_mavlink_1.MAVLinkMessage));
exports.FollowTarget = FollowTarget;
//# sourceMappingURL=follow-target.js.map