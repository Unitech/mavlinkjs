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
exports.LogData = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Reply to LOG_REQUEST_DATA
*/
// id Log id (from LOG_ENTRY reply) uint16_t
// ofs Offset into the log uint32_t
// count Number of bytes (zero for end of log) uint8_t
// data log data uint8_t
var LogData = /** @class */ (function (_super) {
    __extends(LogData, _super);
    function LogData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 120;
        _this._message_name = 'LOG_DATA';
        _this._crc_extra = 134;
        _this._message_fields = [
            ['ofs', 'uint32_t', false],
            ['id', 'uint16_t', false],
            ['count', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return LogData;
}(node_mavlink_1.MAVLinkMessage));
exports.LogData = LogData;
//# sourceMappingURL=log-data.js.map