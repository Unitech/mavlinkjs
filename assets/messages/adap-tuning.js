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
exports.AdapTuning = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Adaptive Controller tuning information.
*/
// axis Axis. uint8_t
// desired Desired rate. float
// achieved Achieved rate. float
// error Error between model and vehicle. float
// theta Theta estimated state predictor. float
// omega Omega estimated state predictor. float
// sigma Sigma estimated state predictor. float
// theta_dot Theta derivative. float
// omega_dot Omega derivative. float
// sigma_dot Sigma derivative. float
// f Projection operator value. float
// f_dot Projection operator derivative. float
// u u adaptive controlled output command. float
var AdapTuning = /** @class */ (function (_super) {
    __extends(AdapTuning, _super);
    function AdapTuning() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11010;
        _this._message_name = 'ADAP_TUNING';
        _this._crc_extra = 46;
        _this._message_fields = [
            ['desired', 'float', false],
            ['achieved', 'float', false],
            ['error', 'float', false],
            ['theta', 'float', false],
            ['omega', 'float', false],
            ['sigma', 'float', false],
            ['theta_dot', 'float', false],
            ['omega_dot', 'float', false],
            ['sigma_dot', 'float', false],
            ['f', 'float', false],
            ['f_dot', 'float', false],
            ['u', 'float', false],
            ['axis', 'uint8_t', false],
        ];
        return _this;
    }
    return AdapTuning;
}(node_mavlink_1.MAVLinkMessage));
exports.AdapTuning = AdapTuning;
//# sourceMappingURL=adap-tuning.js.map