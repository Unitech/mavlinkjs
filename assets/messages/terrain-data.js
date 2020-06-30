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
exports.TerrainData = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Terrain data sent from GCS. The lat/lon and grid_spacing must be the same as a lat/lon from a TERRAIN_REQUEST
*/
// lat Latitude of SW corner of first grid int32_t
// lon Longitude of SW corner of first grid int32_t
// grid_spacing Grid spacing uint16_t
// gridbit bit within the terrain request mask uint8_t
// data Terrain data MSL int16_t
var TerrainData = /** @class */ (function (_super) {
    __extends(TerrainData, _super);
    function TerrainData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 134;
        _this._message_name = 'TERRAIN_DATA';
        _this._crc_extra = 229;
        _this._message_fields = [
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['grid_spacing', 'uint16_t', false],
            ['data', 'int16_t', false],
            ['gridbit', 'uint8_t', false],
        ];
        return _this;
    }
    return TerrainData;
}(node_mavlink_1.MAVLinkMessage));
exports.TerrainData = TerrainData;
//# sourceMappingURL=terrain-data.js.map