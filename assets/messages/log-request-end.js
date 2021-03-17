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
exports.LogRequestEnd = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Stop log transfer and resume normal logging
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
var LogRequestEnd = /** @class */ (function (_super) {
    __extends(LogRequestEnd, _super);
    function LogRequestEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 122;
        _this._message_name = 'LOG_REQUEST_END';
        _this._crc_extra = 203;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return LogRequestEnd;
}(node_mavlink_1.MAVLinkMessage));
exports.LogRequestEnd = LogRequestEnd;
//# sourceMappingURL=log-request-end.js.map