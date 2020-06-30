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
exports.GoproSetResponse = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Response from a GOPRO_COMMAND set request.
*/
// cmd_id Command ID. uint8_t
// status Status. uint8_t
var GoproSetResponse = /** @class */ (function (_super) {
    __extends(GoproSetResponse, _super);
    function GoproSetResponse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 219;
        _this._message_name = 'GOPRO_SET_RESPONSE';
        _this._crc_extra = 162;
        _this._message_fields = [
            ['cmd_id', 'uint8_t', false],
            ['status', 'uint8_t', false],
        ];
        return _this;
    }
    return GoproSetResponse;
}(node_mavlink_1.MAVLinkMessage));
exports.GoproSetResponse = GoproSetResponse;
//# sourceMappingURL=gopro-set-response.js.map