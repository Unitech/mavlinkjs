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
exports.ParamRequestRead = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request to read the onboard parameter with the param_id string id. Onboard parameters are stored as key[const char*] -> value[float]. This allows to send a parameter to any other component (such as the GCS) without the need of previous knowledge of possible parameter names. Thus the same GCS can store different parameters for different autopilots. See also https://mavlink.io/en/services/parameter.html for a full documentation of QGroundControl and IMU code.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// param_id Onboard parameter id, terminated by NULL if the length is less than 16 human-readable chars and WITHOUT null termination (NULL) byte if the length is exactly 16 chars - applications have to provide 16+1 bytes storage if the ID is stored as string char
// param_index Parameter index. Send -1 to use the param ID field as identifier (else the param id will be ignored) int16_t
var ParamRequestRead = /** @class */ (function (_super) {
    __extends(ParamRequestRead, _super);
    function ParamRequestRead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 20;
        _this._message_name = 'PARAM_REQUEST_READ';
        _this._crc_extra = 214;
        _this._message_fields = [
            ['param_index', 'int16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['param_id', 'char', false],
        ];
        return _this;
    }
    return ParamRequestRead;
}(node_mavlink_1.MAVLinkMessage));
exports.ParamRequestRead = ParamRequestRead;
//# sourceMappingURL=param-request-read.js.map