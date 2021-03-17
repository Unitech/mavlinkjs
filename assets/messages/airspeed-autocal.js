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
exports.AirspeedAutocal = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Airspeed auto-calibration.
*/
// vx GPS velocity north. float
// vy GPS velocity east. float
// vz GPS velocity down. float
// diff_pressure Differential pressure. float
// EAS2TAS Estimated to true airspeed ratio. float
// ratio Airspeed ratio. float
// state_x EKF state x. float
// state_y EKF state y. float
// state_z EKF state z. float
// Pax EKF Pax. float
// Pby EKF Pby. float
// Pcz EKF Pcz. float
var AirspeedAutocal = /** @class */ (function (_super) {
    __extends(AirspeedAutocal, _super);
    function AirspeedAutocal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 174;
        _this._message_name = 'AIRSPEED_AUTOCAL';
        _this._crc_extra = 167;
        _this._message_fields = [
            ['vx', 'float', false],
            ['vy', 'float', false],
            ['vz', 'float', false],
            ['diff_pressure', 'float', false],
            ['EAS2TAS', 'float', false],
            ['ratio', 'float', false],
            ['state_x', 'float', false],
            ['state_y', 'float', false],
            ['state_z', 'float', false],
            ['Pax', 'float', false],
            ['Pby', 'float', false],
            ['Pcz', 'float', false],
        ];
        return _this;
    }
    return AirspeedAutocal;
}(node_mavlink_1.MAVLinkMessage));
exports.AirspeedAutocal = AirspeedAutocal;
//# sourceMappingURL=airspeed-autocal.js.map