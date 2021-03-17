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
exports.Battery2 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
2nd Battery status
*/
// voltage Voltage. uint16_t
// current_battery Battery current, -1: autopilot does not measure the current. int16_t
var Battery2 = /** @class */ (function (_super) {
    __extends(Battery2, _super);
    function Battery2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 181;
        _this._message_name = 'BATTERY2';
        _this._crc_extra = 174;
        _this._message_fields = [
            ['voltage', 'uint16_t', false],
            ['current_battery', 'int16_t', false],
        ];
        return _this;
    }
    return Battery2;
}(node_mavlink_1.MAVLinkMessage));
exports.Battery2 = Battery2;
//# sourceMappingURL=battery2.js.map