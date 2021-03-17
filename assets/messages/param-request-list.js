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
exports.ParamRequestList = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request all parameters of this component. After this request, all parameters are emitted. The parameter microservice is documented at https://mavlink.io/en/services/parameter.html
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
var ParamRequestList = /** @class */ (function (_super) {
    __extends(ParamRequestList, _super);
    function ParamRequestList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 21;
        _this._message_name = 'PARAM_REQUEST_LIST';
        _this._crc_extra = 159;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return ParamRequestList;
}(node_mavlink_1.MAVLinkMessage));
exports.ParamRequestList = ParamRequestList;
//# sourceMappingURL=param-request-list.js.map