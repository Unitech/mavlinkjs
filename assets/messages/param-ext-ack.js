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
exports.ParamExtAck = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Response from a PARAM_EXT_SET message.
*/
// param_id Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string char
// param_value Parameter value (new value if PARAM_ACK_ACCEPTED, current value otherwise) char
// param_type Parameter type. uint8_t
// param_result Result code. uint8_t
var ParamExtAck = /** @class */ (function (_super) {
    __extends(ParamExtAck, _super);
    function ParamExtAck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 324;
        _this._message_name = 'PARAM_EXT_ACK';
        _this._crc_extra = 132;
        _this._message_fields = [
            ['param_id', 'char', false],
            ['param_value', 'char', false],
            ['param_type', 'uint8_t', false],
            ['param_result', 'uint8_t', false],
        ];
        return _this;
    }
    return ParamExtAck;
}(node_mavlink_1.MAVLinkMessage));
exports.ParamExtAck = ParamExtAck;
//# sourceMappingURL=param-ext-ack.js.map