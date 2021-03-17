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
exports.EscTelemetry9To12 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
ESC Telemetry Data for ESCs 9 to 12, matching data sent by BLHeli ESCs.
*/
// temperature Temperature. uint8_t
// voltage Voltage. uint16_t
// current Current. uint16_t
// totalcurrent Total current. uint16_t
// rpm RPM (eRPM). uint16_t
// count count of telemetry packets received (wraps at 65535). uint16_t
var EscTelemetry9To12 = /** @class */ (function (_super) {
    __extends(EscTelemetry9To12, _super);
    function EscTelemetry9To12() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11032;
        _this._message_name = 'ESC_TELEMETRY_9_TO_12';
        _this._crc_extra = 85;
        _this._message_fields = [
            ['voltage', 'uint16_t', false],
            ['current', 'uint16_t', false],
            ['totalcurrent', 'uint16_t', false],
            ['rpm', 'uint16_t', false],
            ['count', 'uint16_t', false],
            ['temperature', 'uint8_t', false],
        ];
        return _this;
    }
    return EscTelemetry9To12;
}(node_mavlink_1.MAVLinkMessage));
exports.EscTelemetry9To12 = EscTelemetry9To12;
//# sourceMappingURL=esc-telemetry-9-to-12.js.map