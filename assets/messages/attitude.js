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
exports.Attitude = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The attitude in the aeronautical frame (right-handed, Z-down, X-front, Y-right).
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// roll Roll angle (-pi..+pi) float
// pitch Pitch angle (-pi..+pi) float
// yaw Yaw angle (-pi..+pi) float
// rollspeed Roll angular speed float
// pitchspeed Pitch angular speed float
// yawspeed Yaw angular speed float
var Attitude = /** @class */ (function (_super) {
    __extends(Attitude, _super);
    function Attitude() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 30;
        _this._message_name = 'ATTITUDE';
        _this._crc_extra = 39;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['rollspeed', 'float', false],
            ['pitchspeed', 'float', false],
            ['yawspeed', 'float', false],
        ];
        return _this;
    }
    return Attitude;
}(node_mavlink_1.MAVLinkMessage));
exports.Attitude = Attitude;
//# sourceMappingURL=attitude.js.map