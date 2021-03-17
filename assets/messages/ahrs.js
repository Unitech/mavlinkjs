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
exports.Ahrs = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of DCM attitude estimator.
*/
// omegaIx X gyro drift estimate. float
// omegaIy Y gyro drift estimate. float
// omegaIz Z gyro drift estimate. float
// accel_weight Average accel_weight. float
// renorm_val Average renormalisation value. float
// error_rp Average error_roll_pitch value. float
// error_yaw Average error_yaw value. float
var Ahrs = /** @class */ (function (_super) {
    __extends(Ahrs, _super);
    function Ahrs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 163;
        _this._message_name = 'AHRS';
        _this._crc_extra = 127;
        _this._message_fields = [
            ['omegaIx', 'float', false],
            ['omegaIy', 'float', false],
            ['omegaIz', 'float', false],
            ['accel_weight', 'float', false],
            ['renorm_val', 'float', false],
            ['error_rp', 'float', false],
            ['error_yaw', 'float', false],
        ];
        return _this;
    }
    return Ahrs;
}(node_mavlink_1.MAVLinkMessage));
exports.Ahrs = Ahrs;
//# sourceMappingURL=ahrs.js.map