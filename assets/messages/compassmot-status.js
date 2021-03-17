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
exports.CompassmotStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of compassmot calibration.
*/
// throttle Throttle. uint16_t
// current Current. float
// interference Interference. uint16_t
// CompensationX Motor Compensation X. float
// CompensationY Motor Compensation Y. float
// CompensationZ Motor Compensation Z. float
var CompassmotStatus = /** @class */ (function (_super) {
    __extends(CompassmotStatus, _super);
    function CompassmotStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 177;
        _this._message_name = 'COMPASSMOT_STATUS';
        _this._crc_extra = 240;
        _this._message_fields = [
            ['current', 'float', false],
            ['CompensationX', 'float', false],
            ['CompensationY', 'float', false],
            ['CompensationZ', 'float', false],
            ['throttle', 'uint16_t', false],
            ['interference', 'uint16_t', false],
        ];
        return _this;
    }
    return CompassmotStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.CompassmotStatus = CompassmotStatus;
//# sourceMappingURL=compassmot-status.js.map