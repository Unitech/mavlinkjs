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
exports.Rpm = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
RPM sensor output.
*/
// rpm1 RPM Sensor1. float
// rpm2 RPM Sensor2. float
var Rpm = /** @class */ (function (_super) {
    __extends(Rpm, _super);
    function Rpm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 226;
        _this._message_name = 'RPM';
        _this._crc_extra = 207;
        _this._message_fields = [
            ['rpm1', 'float', false],
            ['rpm2', 'float', false],
        ];
        return _this;
    }
    return Rpm;
}(node_mavlink_1.MAVLinkMessage));
exports.Rpm = Rpm;
//# sourceMappingURL=rpm.js.map