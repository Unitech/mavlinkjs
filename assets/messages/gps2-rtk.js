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
exports.Gps2Rtk = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
RTK GPS data. Gives information on the relative baseline calculation the GPS is reporting
*/
// time_last_baseline_ms Time since boot of last baseline message received. uint32_t
// rtk_receiver_id Identification of connected RTK receiver. uint8_t
// wn GPS Week Number of last baseline uint16_t
// tow GPS Time of Week of last baseline uint32_t
// rtk_health GPS-specific health report for RTK data. uint8_t
// rtk_rate Rate of baseline messages being received by GPS uint8_t
// nsats Current number of sats used for RTK calculation. uint8_t
// baseline_coords_type Coordinate system of baseline uint8_t
// baseline_a_mm Current baseline in ECEF x or NED north component. int32_t
// baseline_b_mm Current baseline in ECEF y or NED east component. int32_t
// baseline_c_mm Current baseline in ECEF z or NED down component. int32_t
// accuracy Current estimate of baseline accuracy. uint32_t
// iar_num_hypotheses Current number of integer ambiguity hypotheses. int32_t
var Gps2Rtk = /** @class */ (function (_super) {
    __extends(Gps2Rtk, _super);
    function Gps2Rtk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 128;
        _this._message_name = 'GPS2_RTK';
        _this._crc_extra = 226;
        _this._message_fields = [
            ['time_last_baseline_ms', 'uint32_t', false],
            ['tow', 'uint32_t', false],
            ['baseline_a_mm', 'int32_t', false],
            ['baseline_b_mm', 'int32_t', false],
            ['baseline_c_mm', 'int32_t', false],
            ['accuracy', 'uint32_t', false],
            ['iar_num_hypotheses', 'int32_t', false],
            ['wn', 'uint16_t', false],
            ['rtk_receiver_id', 'uint8_t', false],
            ['rtk_health', 'uint8_t', false],
            ['rtk_rate', 'uint8_t', false],
            ['nsats', 'uint8_t', false],
            ['baseline_coords_type', 'uint8_t', false],
        ];
        return _this;
    }
    return Gps2Rtk;
}(node_mavlink_1.MAVLinkMessage));
exports.Gps2Rtk = Gps2Rtk;
//# sourceMappingURL=gps2-rtk.js.map