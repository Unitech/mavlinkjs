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
exports.AttPosMocap = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Motion capture attitude and position
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// q Attitude quaternion (w, x, y, z order, zero-rotation is 1, 0, 0, 0) float
// x X position (NED) float
// y Y position (NED) float
// z Z position (NED) float
// covariance Row-major representation of a pose 6x6 cross-covariance matrix upper right triangle (states: x, y, z, roll, pitch, yaw; first six entries are the first ROW, next five entries are the second ROW, etc.). If unknown, assign NaN value to first element in the array. float
var AttPosMocap = /** @class */ (function (_super) {
    __extends(AttPosMocap, _super);
    function AttPosMocap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 138;
        _this._message_name = 'ATT_POS_MOCAP';
        _this._crc_extra = 109;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['q', 'float', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['covariance', 'float', true],
        ];
        return _this;
    }
    return AttPosMocap;
}(node_mavlink_1.MAVLinkMessage));
exports.AttPosMocap = AttPosMocap;
//# sourceMappingURL=att-pos-mocap.js.map