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
exports.ParamExtRequestRead = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request to read the value of a parameter with the either the param_id string id or param_index.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// param_id Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string char
// param_index Parameter index. Set to -1 to use the Parameter ID field as identifier (else param_id will be ignored) int16_t
var ParamExtRequestRead = /** @class */ (function (_super) {
    __extends(ParamExtRequestRead, _super);
    function ParamExtRequestRead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 320;
        _this._message_name = 'PARAM_EXT_REQUEST_READ';
        _this._crc_extra = 243;
        _this._message_fields = [
            ['param_index', 'int16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['param_id', 'char', false],
        ];
        return _this;
    }
    return ParamExtRequestRead;
}(node_mavlink_1.MAVLinkMessage));
exports.ParamExtRequestRead = ParamExtRequestRead;
//# sourceMappingURL=param-ext-request-read.js.map