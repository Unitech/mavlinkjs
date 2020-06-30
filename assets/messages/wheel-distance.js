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
exports.WheelDistance = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Cumulative distance traveled for each reported wheel.
*/
// time_usec Timestamp (synced to UNIX time or since system boot). uint64_t
// count Number of wheels reported. uint8_t
// distance Distance reported by individual wheel encoders. Forward rotations increase values, reverse rotations decrease them. Not all wheels will necessarily have wheel encoders; the mapping of encoders to wheel positions must be agreed/understood by the endpoints. double
var WheelDistance = /** @class */ (function (_super) {
    __extends(WheelDistance, _super);
    function WheelDistance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 9000;
        _this._message_name = 'WHEEL_DISTANCE';
        _this._crc_extra = 113;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['distance', 'double', false],
            ['count', 'uint8_t', false],
        ];
        return _this;
    }
    return WheelDistance;
}(node_mavlink_1.MAVLinkMessage));
exports.WheelDistance = WheelDistance;
//# sourceMappingURL=wheel-distance.js.map