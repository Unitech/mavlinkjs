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
exports.OrbitExecutionStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Vehicle status report that is sent out while orbit execution is in progress (see MAV_CMD_DO_ORBIT).
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// radius Radius of the orbit circle. Positive values orbit clockwise, negative values orbit counter-clockwise. float
// frame The coordinate system of the fields: x, y, z. uint8_t
// x X coordinate of center point. Coordinate system depends on frame field: local = x position in meters * 1e4, global = latitude in degrees * 1e7. int32_t
// y Y coordinate of center point.  Coordinate system depends on frame field: local = x position in meters * 1e4, global = latitude in degrees * 1e7. int32_t
// z Altitude of center point. Coordinate system depends on frame field. float
var OrbitExecutionStatus = /** @class */ (function (_super) {
    __extends(OrbitExecutionStatus, _super);
    function OrbitExecutionStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 360;
        _this._message_name = 'ORBIT_EXECUTION_STATUS';
        _this._crc_extra = 11;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['radius', 'float', false],
            ['x', 'int32_t', false],
            ['y', 'int32_t', false],
            ['z', 'float', false],
            ['frame', 'uint8_t', false],
        ];
        return _this;
    }
    return OrbitExecutionStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.OrbitExecutionStatus = OrbitExecutionStatus;
//# sourceMappingURL=orbit-execution-status.js.map