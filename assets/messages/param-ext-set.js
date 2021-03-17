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
exports.ParamExtSet = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Set a parameter value. In order to deal with message loss (and retransmission of PARAM_EXT_SET), when setting a parameter value and the new value is the same as the current value, you will immediately get a PARAM_ACK_ACCEPTED response. If the current state is PARAM_ACK_IN_PROGRESS, you will accordingly receive a PARAM_ACK_IN_PROGRESS in response.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// param_id Parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string char
// param_value Parameter value char
// param_type Parameter type. uint8_t
var ParamExtSet = /** @class */ (function (_super) {
    __extends(ParamExtSet, _super);
    function ParamExtSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 323;
        _this._message_name = 'PARAM_EXT_SET';
        _this._crc_extra = 78;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['param_id', 'char', false],
            ['param_value', 'char', false],
            ['param_type', 'uint8_t', false],
        ];
        return _this;
    }
    return ParamExtSet;
}(node_mavlink_1.MAVLinkMessage));
exports.ParamExtSet = ParamExtSet;
//# sourceMappingURL=param-ext-set.js.map