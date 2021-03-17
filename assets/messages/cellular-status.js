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
exports.CellularStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Report current used cellular network status
*/
// status Status bitmap uint16_t
// type Cellular network radio type: gsm, cdma, lte... uint8_t
// quality Cellular network RSSI/RSRP in dBm, absolute value uint8_t
// mcc Mobile country code. If unknown, set to: UINT16_MAX uint16_t
// mnc Mobile network code. If unknown, set to: UINT16_MAX uint16_t
// lac Location area code. If unknown, set to: 0 uint16_t
// cid Cell ID. If unknown, set to: UINT32_MAX uint32_t
var CellularStatus = /** @class */ (function (_super) {
    __extends(CellularStatus, _super);
    function CellularStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 334;
        _this._message_name = 'CELLULAR_STATUS';
        _this._crc_extra = 135;
        _this._message_fields = [
            ['cid', 'uint32_t', false],
            ['status', 'uint16_t', false],
            ['mcc', 'uint16_t', false],
            ['mnc', 'uint16_t', false],
            ['lac', 'uint16_t', false],
            ['type', 'uint8_t', false],
            ['quality', 'uint8_t', false],
        ];
        return _this;
    }
    return CellularStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.CellularStatus = CellularStatus;
//# sourceMappingURL=cellular-status.js.map