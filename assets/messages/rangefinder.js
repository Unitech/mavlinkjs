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
exports.Rangefinder = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Rangefinder reporting.
*/
// distance Distance. float
// voltage Raw voltage if available, zero otherwise. float
var Rangefinder = /** @class */ (function (_super) {
    __extends(Rangefinder, _super);
    function Rangefinder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 173;
        _this._message_name = 'RANGEFINDER';
        _this._crc_extra = 83;
        _this._message_fields = [
            ['distance', 'float', false],
            ['voltage', 'float', false],
        ];
        return _this;
    }
    return Rangefinder;
}(node_mavlink_1.MAVLinkMessage));
exports.Rangefinder = Rangefinder;
//# sourceMappingURL=rangefinder.js.map