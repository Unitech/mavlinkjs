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
exports.LogRequestList = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request a list of available logs. On some systems calling this may stop on-board logging until LOG_REQUEST_END is called. If there are no log files available this request shall be answered with one LOG_ENTRY message with id = 0 and num_logs = 0.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// start First log id (0 for first available) uint16_t
// end Last log id (0xffff for last available) uint16_t
var LogRequestList = /** @class */ (function (_super) {
    __extends(LogRequestList, _super);
    function LogRequestList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 117;
        _this._message_name = 'LOG_REQUEST_LIST';
        _this._crc_extra = 128;
        _this._message_fields = [
            ['start', 'uint16_t', false],
            ['end', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return LogRequestList;
}(node_mavlink_1.MAVLinkMessage));
exports.LogRequestList = LogRequestList;
//# sourceMappingURL=log-request-list.js.map