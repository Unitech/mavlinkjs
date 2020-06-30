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
exports.TerrainCheck = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request that the vehicle report terrain height at the given location. Used by GCS to check if vehicle has all terrain data needed for a mission.
*/
// lat Latitude int32_t
// lon Longitude int32_t
var TerrainCheck = /** @class */ (function (_super) {
    __extends(TerrainCheck, _super);
    function TerrainCheck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 135;
        _this._message_name = 'TERRAIN_CHECK';
        _this._crc_extra = 203;
        _this._message_fields = [
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
        ];
        return _this;
    }
    return TerrainCheck;
}(node_mavlink_1.MAVLinkMessage));
exports.TerrainCheck = TerrainCheck;
//# sourceMappingURL=terrain-check.js.map