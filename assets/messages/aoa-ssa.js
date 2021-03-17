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
exports.AoaSsa = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Angle of Attack and Side Slip Angle.
*/
// time_usec Timestamp (since boot or Unix epoch). uint64_t
// AOA Angle of Attack. float
// SSA Side Slip Angle. float
var AoaSsa = /** @class */ (function (_super) {
    __extends(AoaSsa, _super);
    function AoaSsa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11020;
        _this._message_name = 'AOA_SSA';
        _this._crc_extra = 205;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['AOA', 'float', false],
            ['SSA', 'float', false],
        ];
        return _this;
    }
    return AoaSsa;
}(node_mavlink_1.MAVLinkMessage));
exports.AoaSsa = AoaSsa;
//# sourceMappingURL=aoa-ssa.js.map