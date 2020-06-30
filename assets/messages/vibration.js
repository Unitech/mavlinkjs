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
exports.Vibration = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Vibration levels and accelerometer clipping
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// vibration_x Vibration levels on X-axis float
// vibration_y Vibration levels on Y-axis float
// vibration_z Vibration levels on Z-axis float
// clipping_0 first accelerometer clipping count uint32_t
// clipping_1 second accelerometer clipping count uint32_t
// clipping_2 third accelerometer clipping count uint32_t
var Vibration = /** @class */ (function (_super) {
    __extends(Vibration, _super);
    function Vibration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 241;
        _this._message_name = 'VIBRATION';
        _this._crc_extra = 90;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['vibration_x', 'float', false],
            ['vibration_y', 'float', false],
            ['vibration_z', 'float', false],
            ['clipping_0', 'uint32_t', false],
            ['clipping_1', 'uint32_t', false],
            ['clipping_2', 'uint32_t', false],
        ];
        return _this;
    }
    return Vibration;
}(node_mavlink_1.MAVLinkMessage));
exports.Vibration = Vibration;
//# sourceMappingURL=vibration.js.map