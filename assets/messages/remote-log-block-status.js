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
exports.RemoteLogBlockStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Send Status of each log block that autopilot board might have sent.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// seqno Log data block sequence number. uint32_t
// status Log data block status. uint8_t
var RemoteLogBlockStatus = /** @class */ (function (_super) {
    __extends(RemoteLogBlockStatus, _super);
    function RemoteLogBlockStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 185;
        _this._message_name = 'REMOTE_LOG_BLOCK_STATUS';
        _this._crc_extra = 186;
        _this._message_fields = [
            ['seqno', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['status', 'uint8_t', false],
        ];
        return _this;
    }
    return RemoteLogBlockStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.RemoteLogBlockStatus = RemoteLogBlockStatus;
//# sourceMappingURL=remote-log-block-status.js.map