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
exports.ParamExtValue = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Emit the value of a parameter. The inclusion of param_count and param_index in the message allows the recipient to keep track of received parameters and allows them to re-request missing parameters after a loss or timeout.
*/
// param_id Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string char
// param_value Parameter value char
// param_type Parameter type. uint8_t
// param_count Total number of parameters uint16_t
// param_index Index of this parameter uint16_t
var ParamExtValue = /** @class */ (function (_super) {
    __extends(ParamExtValue, _super);
    function ParamExtValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 322;
        _this._message_name = 'PARAM_EXT_VALUE';
        _this._crc_extra = 243;
        _this._message_fields = [
            ['param_count', 'uint16_t', false],
            ['param_index', 'uint16_t', false],
            ['param_id', 'char', false],
            ['param_value', 'char', false],
            ['param_type', 'uint8_t', false],
        ];
        return _this;
    }
    return ParamExtValue;
}(node_mavlink_1.MAVLinkMessage));
exports.ParamExtValue = ParamExtValue;
//# sourceMappingURL=param-ext-value.js.map