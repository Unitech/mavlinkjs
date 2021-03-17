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
exports.VisionPositionDelta = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Camera vision based attitude and position deltas.
*/
// time_usec Timestamp (synced to UNIX time or since system boot). uint64_t
// time_delta_usec Time since the last reported camera frame. uint64_t
// angle_delta Defines a rotation vector in body frame that rotates the vehicle from the previous to the current orientation. float
// position_delta Change in position from previous to current frame rotated into body frame (0=forward, 1=right, 2=down). float
// confidence Normalised confidence value from 0 to 100. float
var VisionPositionDelta = /** @class */ (function (_super) {
    __extends(VisionPositionDelta, _super);
    function VisionPositionDelta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11011;
        _this._message_name = 'VISION_POSITION_DELTA';
        _this._crc_extra = 106;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['time_delta_usec', 'uint64_t', false],
            ['angle_delta', 'float', false],
            ['position_delta', 'float', false],
            ['confidence', 'float', false],
        ];
        return _this;
    }
    return VisionPositionDelta;
}(node_mavlink_1.MAVLinkMessage));
exports.VisionPositionDelta = VisionPositionDelta;
//# sourceMappingURL=vision-position-delta.js.map