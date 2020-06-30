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
exports.ButtonChange = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Report button state change.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// last_change_ms Time of last change of button state. uint32_t
// state Bitmap for state of buttons. uint8_t
var ButtonChange = /** @class */ (function (_super) {
    __extends(ButtonChange, _super);
    function ButtonChange() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 257;
        _this._message_name = 'BUTTON_CHANGE';
        _this._crc_extra = 131;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['last_change_ms', 'uint32_t', false],
            ['state', 'uint8_t', false],
        ];
        return _this;
    }
    return ButtonChange;
}(node_mavlink_1.MAVLinkMessage));
exports.ButtonChange = ButtonChange;
//# sourceMappingURL=button-change.js.map