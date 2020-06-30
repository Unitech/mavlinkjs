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
exports.ParamSet = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Set a parameter value (write new value to permanent storage). IMPORTANT: The receiving component should acknowledge the new parameter value by sending a PARAM_VALUE message to all communication partners. This will also ensure that multiple GCS all have an up-to-date list of all parameters. If the sending GCS did not receive a PARAM_VALUE message within its timeout time, it should re-send the PARAM_SET message. The parameter microservice is documented at https://mavlink.io/en/services/parameter.html
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// param_id Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string char
// param_value Onboard parameter value float
// param_type Onboard parameter type. uint8_t
var ParamSet = /** @class */ (function (_super) {
    __extends(ParamSet, _super);
    function ParamSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 23;
        _this._message_name = 'PARAM_SET';
        _this._crc_extra = 168;
        _this._message_fields = [
            ['param_value', 'float', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['param_id', 'char', false],
            ['param_type', 'uint8_t', false],
        ];
        return _this;
    }
    return ParamSet;
}(node_mavlink_1.MAVLinkMessage));
exports.ParamSet = ParamSet;
//# sourceMappingURL=param-set.js.map