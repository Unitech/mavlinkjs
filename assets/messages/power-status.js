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
exports.PowerStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Power supply status
*/
// Vcc 5V rail voltage. uint16_t
// Vservo Servo rail voltage. uint16_t
// flags Bitmap of power supply status flags. uint16_t
var PowerStatus = /** @class */ (function (_super) {
    __extends(PowerStatus, _super);
    function PowerStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 125;
        _this._message_name = 'POWER_STATUS';
        _this._crc_extra = 203;
        _this._message_fields = [
            ['Vcc', 'uint16_t', false],
            ['Vservo', 'uint16_t', false],
            ['flags', 'uint16_t', false],
        ];
        return _this;
    }
    return PowerStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.PowerStatus = PowerStatus;
//# sourceMappingURL=power-status.js.map