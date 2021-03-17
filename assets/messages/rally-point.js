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
exports.RallyPoint = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
A rally point. Used to set a point when from GCS -> MAV. Also used to return a point from MAV -> GCS.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// idx Point index (first point is 0). uint8_t
// count Total number of points (for sanity checking). uint8_t
// lat Latitude of point. int32_t
// lng Longitude of point. int32_t
// alt Transit / loiter altitude relative to home. int16_t
// break_alt Break altitude relative to home. int16_t
// land_dir Heading to aim for when landing. uint16_t
// flags Configuration flags. uint8_t
var RallyPoint = /** @class */ (function (_super) {
    __extends(RallyPoint, _super);
    function RallyPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 175;
        _this._message_name = 'RALLY_POINT';
        _this._crc_extra = 138;
        _this._message_fields = [
            ['lat', 'int32_t', false],
            ['lng', 'int32_t', false],
            ['alt', 'int16_t', false],
            ['break_alt', 'int16_t', false],
            ['land_dir', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['idx', 'uint8_t', false],
            ['count', 'uint8_t', false],
            ['flags', 'uint8_t', false],
        ];
        return _this;
    }
    return RallyPoint;
}(node_mavlink_1.MAVLinkMessage));
exports.RallyPoint = RallyPoint;
//# sourceMappingURL=rally-point.js.map