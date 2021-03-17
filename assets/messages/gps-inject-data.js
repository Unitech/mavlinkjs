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
exports.GpsInjectData = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data for injecting into the onboard GPS (used for DGPS)
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// len Data length uint8_t
// data Raw data (110 is enough for 12 satellites of RTCMv2) uint8_t
var GpsInjectData = /** @class */ (function (_super) {
    __extends(GpsInjectData, _super);
    function GpsInjectData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 123;
        _this._message_name = 'GPS_INJECT_DATA';
        _this._crc_extra = 250;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['len', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return GpsInjectData;
}(node_mavlink_1.MAVLinkMessage));
exports.GpsInjectData = GpsInjectData;
//# sourceMappingURL=gps-inject-data.js.map