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
exports.Ahrs3 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of third AHRS filter if available. This is for ANU research group (Ali and Sean).
*/
// roll Roll angle. float
// pitch Pitch angle. float
// yaw Yaw angle. float
// altitude Altitude (MSL). float
// lat Latitude. int32_t
// lng Longitude. int32_t
// v1 Test variable1. float
// v2 Test variable2. float
// v3 Test variable3. float
// v4 Test variable4. float
var Ahrs3 = /** @class */ (function (_super) {
    __extends(Ahrs3, _super);
    function Ahrs3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 182;
        _this._message_name = 'AHRS3';
        _this._crc_extra = 229;
        _this._message_fields = [
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['altitude', 'float', false],
            ['lat', 'int32_t', false],
            ['lng', 'int32_t', false],
            ['v1', 'float', false],
            ['v2', 'float', false],
            ['v3', 'float', false],
            ['v4', 'float', false],
        ];
        return _this;
    }
    return Ahrs3;
}(node_mavlink_1.MAVLinkMessage));
exports.Ahrs3 = Ahrs3;
//# sourceMappingURL=ahrs3.js.map