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
exports.NamedValueFloat = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Send a key-value pair as float. The use of this message is discouraged for normal packets, but a quite efficient way for testing new messages and getting experimental debug output.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// name Name of the debug variable char
// value Floating point value float
var NamedValueFloat = /** @class */ (function (_super) {
    __extends(NamedValueFloat, _super);
    function NamedValueFloat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 251;
        _this._message_name = 'NAMED_VALUE_FLOAT';
        _this._crc_extra = 170;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['value', 'float', false],
            ['name', 'char', false],
        ];
        return _this;
    }
    return NamedValueFloat;
}(node_mavlink_1.MAVLinkMessage));
exports.NamedValueFloat = NamedValueFloat;
//# sourceMappingURL=named-value-float.js.map