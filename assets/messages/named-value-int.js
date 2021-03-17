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
exports.NamedValueInt = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Send a key-value pair as integer. The use of this message is discouraged for normal packets, but a quite efficient way for testing new messages and getting experimental debug output.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// name Name of the debug variable char
// value Signed integer value int32_t
var NamedValueInt = /** @class */ (function (_super) {
    __extends(NamedValueInt, _super);
    function NamedValueInt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 252;
        _this._message_name = 'NAMED_VALUE_INT';
        _this._crc_extra = 44;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['value', 'int32_t', false],
            ['name', 'char', false],
        ];
        return _this;
    }
    return NamedValueInt;
}(node_mavlink_1.MAVLinkMessage));
exports.NamedValueInt = NamedValueInt;
//# sourceMappingURL=named-value-int.js.map