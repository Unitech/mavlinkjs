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
exports.TerrainReport = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Response from a TERRAIN_CHECK request
*/
// lat Latitude int32_t
// lon Longitude int32_t
// spacing grid spacing (zero if terrain at this location unavailable) uint16_t
// terrain_height Terrain height MSL float
// current_height Current vehicle height above lat/lon terrain height float
// pending Number of 4x4 terrain blocks waiting to be received or read from disk uint16_t
// loaded Number of 4x4 terrain blocks in memory uint16_t
var TerrainReport = /** @class */ (function (_super) {
    __extends(TerrainReport, _super);
    function TerrainReport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 136;
        _this._message_name = 'TERRAIN_REPORT';
        _this._crc_extra = 1;
        _this._message_fields = [
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['terrain_height', 'float', false],
            ['current_height', 'float', false],
            ['spacing', 'uint16_t', false],
            ['pending', 'uint16_t', false],
            ['loaded', 'uint16_t', false],
        ];
        return _this;
    }
    return TerrainReport;
}(node_mavlink_1.MAVLinkMessage));
exports.TerrainReport = TerrainReport;
//# sourceMappingURL=terrain-report.js.map