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
exports.FencePoint = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
A fence point. Used to set a point when from GCS -> MAV. Also used to return a point from MAV -> GCS.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// idx Point index (first point is 1, 0 is for return point). uint8_t
// count Total number of points (for sanity checking). uint8_t
// lat Latitude of point. float
// lng Longitude of point. float
var FencePoint = /** @class */ (function (_super) {
    __extends(FencePoint, _super);
    function FencePoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 160;
        _this._message_name = 'FENCE_POINT';
        _this._crc_extra = 78;
        _this._message_fields = [
            ['lat', 'float', false],
            ['lng', 'float', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['idx', 'uint8_t', false],
            ['count', 'uint8_t', false],
        ];
        return _this;
    }
    return FencePoint;
}(node_mavlink_1.MAVLinkMessage));
exports.FencePoint = FencePoint;
//# sourceMappingURL=fence-point.js.map