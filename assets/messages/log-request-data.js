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
exports.LogRequestData = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request a chunk of a log
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// id Log id (from LOG_ENTRY reply) uint16_t
// ofs Offset into the log uint32_t
// count Number of bytes uint32_t
var LogRequestData = /** @class */ (function (_super) {
    __extends(LogRequestData, _super);
    function LogRequestData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 119;
        _this._message_name = 'LOG_REQUEST_DATA';
        _this._crc_extra = 116;
        _this._message_fields = [
            ['ofs', 'uint32_t', false],
            ['count', 'uint32_t', false],
            ['id', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return LogRequestData;
}(node_mavlink_1.MAVLinkMessage));
exports.LogRequestData = LogRequestData;
//# sourceMappingURL=log-request-data.js.map