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
exports.RemoteLogDataBlock = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Send a block of log data to remote location.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// seqno Log data block sequence number. uint32_t
// data Log data block. uint8_t
var RemoteLogDataBlock = /** @class */ (function (_super) {
    __extends(RemoteLogDataBlock, _super);
    function RemoteLogDataBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 184;
        _this._message_name = 'REMOTE_LOG_DATA_BLOCK';
        _this._crc_extra = 159;
        _this._message_fields = [
            ['seqno', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return RemoteLogDataBlock;
}(node_mavlink_1.MAVLinkMessage));
exports.RemoteLogDataBlock = RemoteLogDataBlock;
//# sourceMappingURL=remote-log-data-block.js.map