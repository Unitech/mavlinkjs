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
exports.ScaledPressure2 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Barometer readings for 2nd barometer
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// press_abs Absolute pressure float
// press_diff Differential pressure float
// temperature Temperature measurement int16_t
var ScaledPressure2 = /** @class */ (function (_super) {
    __extends(ScaledPressure2, _super);
    function ScaledPressure2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 137;
        _this._message_name = 'SCALED_PRESSURE2';
        _this._crc_extra = 195;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['press_abs', 'float', false],
            ['press_diff', 'float', false],
            ['temperature', 'int16_t', false],
        ];
        return _this;
    }
    return ScaledPressure2;
}(node_mavlink_1.MAVLinkMessage));
exports.ScaledPressure2 = ScaledPressure2;
//# sourceMappingURL=scaled-pressure2.js.map