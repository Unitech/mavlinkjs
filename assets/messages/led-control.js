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
exports.LedControl = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Control vehicle LEDs.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// instance Instance (LED instance to control or 255 for all LEDs). uint8_t
// pattern Pattern (see LED_PATTERN_ENUM). uint8_t
// custom_len Custom Byte Length. uint8_t
// custom_bytes Custom Bytes. uint8_t
var LedControl = /** @class */ (function (_super) {
    __extends(LedControl, _super);
    function LedControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 186;
        _this._message_name = 'LED_CONTROL';
        _this._crc_extra = 72;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['instance', 'uint8_t', false],
            ['pattern', 'uint8_t', false],
            ['custom_len', 'uint8_t', false],
            ['custom_bytes', 'uint8_t', false],
        ];
        return _this;
    }
    return LedControl;
}(node_mavlink_1.MAVLinkMessage));
exports.LedControl = LedControl;
//# sourceMappingURL=led-control.js.map