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
exports.Simstate = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of simulation environment, if used.
*/
// roll Roll angle. float
// pitch Pitch angle. float
// yaw Yaw angle. float
// xacc X acceleration. float
// yacc Y acceleration. float
// zacc Z acceleration. float
// xgyro Angular speed around X axis. float
// ygyro Angular speed around Y axis. float
// zgyro Angular speed around Z axis. float
// lat Latitude. int32_t
// lng Longitude. int32_t
var Simstate = /** @class */ (function (_super) {
    __extends(Simstate, _super);
    function Simstate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 164;
        _this._message_name = 'SIMSTATE';
        _this._crc_extra = 154;
        _this._message_fields = [
            ['roll', 'float', false],
            ['pitch', 'float', false],
            ['yaw', 'float', false],
            ['xacc', 'float', false],
            ['yacc', 'float', false],
            ['zacc', 'float', false],
            ['xgyro', 'float', false],
            ['ygyro', 'float', false],
            ['zgyro', 'float', false],
            ['lat', 'int32_t', false],
            ['lng', 'int32_t', false],
        ];
        return _this;
    }
    return Simstate;
}(node_mavlink_1.MAVLinkMessage));
exports.Simstate = Simstate;
//# sourceMappingURL=simstate.js.map