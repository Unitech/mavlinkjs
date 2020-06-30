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
exports.IsbdLinkStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of the Iridium SBD link.
*/
// timestamp Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// last_heartbeat Timestamp of the last successful sbd session. The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// failed_sessions Number of failed SBD sessions. uint16_t
// successful_sessions Number of successful SBD sessions. uint16_t
// signal_quality Signal quality equal to the number of bars displayed on the ISU signal strength indicator. Range is 0 to 5, where 0 indicates no signal and 5 indicates maximum signal strength. uint8_t
// ring_pending 1: Ring call pending, 0: No call pending. uint8_t
// tx_session_pending 1: Transmission session pending, 0: No transmission session pending. uint8_t
// rx_session_pending 1: Receiving session pending, 0: No receiving session pending. uint8_t
var IsbdLinkStatus = /** @class */ (function (_super) {
    __extends(IsbdLinkStatus, _super);
    function IsbdLinkStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 335;
        _this._message_name = 'ISBD_LINK_STATUS';
        _this._crc_extra = 225;
        _this._message_fields = [
            ['timestamp', 'uint64_t', false],
            ['last_heartbeat', 'uint64_t', false],
            ['failed_sessions', 'uint16_t', false],
            ['successful_sessions', 'uint16_t', false],
            ['signal_quality', 'uint8_t', false],
            ['ring_pending', 'uint8_t', false],
            ['tx_session_pending', 'uint8_t', false],
            ['rx_session_pending', 'uint8_t', false],
        ];
        return _this;
    }
    return IsbdLinkStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.IsbdLinkStatus = IsbdLinkStatus;
//# sourceMappingURL=isbd-link-status.js.map