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
exports.UavionixAdsbTransceiverHealthReport = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Transceiver heartbeat with health report (updated every 10s)
*/
// rfHealth ADS-B transponder messages uint8_t
var UavionixAdsbTransceiverHealthReport = /** @class */ (function (_super) {
    __extends(UavionixAdsbTransceiverHealthReport, _super);
    function UavionixAdsbTransceiverHealthReport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 10003;
        _this._message_name = 'UAVIONIX_ADSB_TRANSCEIVER_HEALTH_REPORT';
        _this._crc_extra = 4;
        _this._message_fields = [
            ['rfHealth', 'uint8_t', false],
        ];
        return _this;
    }
    return UavionixAdsbTransceiverHealthReport;
}(node_mavlink_1.MAVLinkMessage));
exports.UavionixAdsbTransceiverHealthReport = UavionixAdsbTransceiverHealthReport;
//# sourceMappingURL=uavionix-adsb-transceiver-health-report.js.map