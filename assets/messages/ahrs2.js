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
exports.Ahrs2 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of secondary AHRS filter if available.
*/
// roll Roll angle. float
// pitch Pitch angle. float
// yaw Yaw angle. float
// altitude Altitude (MSL). float
// lat Latitude. int32_t
// lng Longitude. int32_t
var Ahrs2 = /** @class */ (function (_super) {
    __extends(Ahrs2, _super);
    function Ahrs2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 178;
        _this._message_name = 'AHRS2';
        _this._crc_extra = 47;
        _this._message_fields = [
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['altitude', 'float', false],
            ['lat', 'int32_t', false],
            ['lng', 'int32_t', false],
        ];
        return _this;
    }
    return Ahrs2;
}(node_mavlink_1.MAVLinkMessage));
exports.Ahrs2 = Ahrs2;
//# sourceMappingURL=ahrs2.js.map