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
exports.LogEntry = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Reply to LOG_REQUEST_LIST
*/
// id Log id uint16_t
// num_logs Total number of logs uint16_t
// last_log_num High log number uint16_t
// time_utc UTC timestamp of log since 1970, or 0 if not available uint32_t
// size Size of the log (may be approximate) uint32_t
var LogEntry = /** @class */ (function (_super) {
    __extends(LogEntry, _super);
    function LogEntry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 118;
        _this._message_name = 'LOG_ENTRY';
        _this._crc_extra = 56;
        _this._message_fields = [
            ['time_utc', 'uint32_t', false],
            ['size', 'uint32_t', false],
            ['id', 'uint16_t', false],
            ['num_logs', 'uint16_t', false],
            ['last_log_num', 'uint16_t', false],
        ];
        return _this;
    }
    return LogEntry;
}(node_mavlink_1.MAVLinkMessage));
exports.LogEntry = LogEntry;
//# sourceMappingURL=log-entry.js.map