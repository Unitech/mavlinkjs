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
exports.TerrainRequest = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request for terrain data and terrain status
*/
// lat Latitude of SW corner of first grid int32_t
// lon Longitude of SW corner of first grid int32_t
// grid_spacing Grid spacing uint16_t
// mask Bitmask of requested 4x4 grids (row major 8x7 array of grids, 56 bits) uint64_t
var TerrainRequest = /** @class */ (function (_super) {
    __extends(TerrainRequest, _super);
    function TerrainRequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 133;
        _this._message_name = 'TERRAIN_REQUEST';
        _this._crc_extra = 6;
        _this._message_fields = [
            ['mask', 'uint64_t', false],
            ['lat', 'int32_t', false],
            ['lon', 'int32_t', false],
            ['grid_spacing', 'uint16_t', false],
        ];
        return _this;
    }
    return TerrainRequest;
}(node_mavlink_1.MAVLinkMessage));
exports.TerrainRequest = TerrainRequest;
//# sourceMappingURL=terrain-request.js.map