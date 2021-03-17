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
exports.VfrHud = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Metrics typically displayed on a HUD for fixed wing aircraft.
*/
// airspeed Vehicle speed in form appropriate for vehicle type. For standard aircraft this is typically calibrated airspeed (CAS) or indicated airspeed (IAS) - either of which can be used by a pilot to estimate stall speed. float
// groundspeed Current ground speed. float
// heading Current heading in compass units (0-360, 0=north). int16_t
// throttle Current throttle setting (0 to 100). uint16_t
// alt Current altitude (MSL). float
// climb Current climb rate. float
var VfrHud = /** @class */ (function (_super) {
    __extends(VfrHud, _super);
    function VfrHud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 74;
        _this._message_name = 'VFR_HUD';
        _this._crc_extra = 20;
        _this._message_fields = [
            ['airspeed', 'float', false],
            ['groundspeed', 'float', false],
            ['alt', 'float', false],
            ['climb', 'float', false],
            ['heading', 'int16_t', false],
            ['throttle', 'uint16_t', false],
        ];
        return _this;
    }
    return VfrHud;
}(node_mavlink_1.MAVLinkMessage));
exports.VfrHud = VfrHud;
//# sourceMappingURL=vfr-hud.js.map