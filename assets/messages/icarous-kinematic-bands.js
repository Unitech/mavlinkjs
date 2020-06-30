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
exports.IcarousKinematicBands = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Kinematic multi bands (track) output from Daidalus
*/
// numBands Number of track bands int8_t
// type1 See the TRACK_BAND_TYPES enum. uint8_t
// min1 min angle (degrees) float
// max1 max angle (degrees) float
// type2 See the TRACK_BAND_TYPES enum. uint8_t
// min2 min angle (degrees) float
// max2 max angle (degrees) float
// type3 See the TRACK_BAND_TYPES enum. uint8_t
// min3 min angle (degrees) float
// max3 max angle (degrees) float
// type4 See the TRACK_BAND_TYPES enum. uint8_t
// min4 min angle (degrees) float
// max4 max angle (degrees) float
// type5 See the TRACK_BAND_TYPES enum. uint8_t
// min5 min angle (degrees) float
// max5 max angle (degrees) float
var IcarousKinematicBands = /** @class */ (function (_super) {
    __extends(IcarousKinematicBands, _super);
    function IcarousKinematicBands() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 42001;
        _this._message_name = 'ICAROUS_KINEMATIC_BANDS';
        _this._crc_extra = 239;
        _this._message_fields = [
            ['min1', 'float', false],
            ['max1', 'float', false],
            ['min2', 'float', false],
            ['max2', 'float', false],
            ['min3', 'float', false],
            ['max3', 'float', false],
            ['min4', 'float', false],
            ['max4', 'float', false],
            ['min5', 'float', false],
            ['max5', 'float', false],
            ['numBands', 'int8_t', false],
            ['type1', 'uint8_t', false],
            ['type2', 'uint8_t', false],
            ['type3', 'uint8_t', false],
            ['type4', 'uint8_t', false],
            ['type5', 'uint8_t', false],
        ];
        return _this;
    }
    return IcarousKinematicBands;
}(node_mavlink_1.MAVLinkMessage));
exports.IcarousKinematicBands = IcarousKinematicBands;
//# sourceMappingURL=icarous-kinematic-bands.js.map