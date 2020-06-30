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
exports.GimbalControl = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Control message for rate gimbal.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// demanded_rate_x Demanded angular rate X. float
// demanded_rate_y Demanded angular rate Y. float
// demanded_rate_z Demanded angular rate Z. float
var GimbalControl = /** @class */ (function (_super) {
    __extends(GimbalControl, _super);
    function GimbalControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 201;
        _this._message_name = 'GIMBAL_CONTROL';
        _this._crc_extra = 205;
        _this._message_fields = [
            ['demanded_rate_x', 'float', false],
            ['demanded_rate_y', 'float', false],
            ['demanded_rate_z', 'float', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return GimbalControl;
}(node_mavlink_1.MAVLinkMessage));
exports.GimbalControl = GimbalControl;
//# sourceMappingURL=gimbal-control.js.map