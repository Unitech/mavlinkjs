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
exports.Deepstall = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Deepstall path planning.
*/
// landing_lat Landing latitude. int32_t
// landing_lon Landing longitude. int32_t
// path_lat Final heading start point, latitude. int32_t
// path_lon Final heading start point, longitude. int32_t
// arc_entry_lat Arc entry point, latitude. int32_t
// arc_entry_lon Arc entry point, longitude. int32_t
// altitude Altitude. float
// expected_travel_distance Distance the aircraft expects to travel during the deepstall. float
// cross_track_error Deepstall cross track error (only valid when in DEEPSTALL_STAGE_LAND). float
// stage Deepstall stage. uint8_t
var Deepstall = /** @class */ (function (_super) {
    __extends(Deepstall, _super);
    function Deepstall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 195;
        _this._message_name = 'DEEPSTALL';
        _this._crc_extra = 120;
        _this._message_fields = [
            ['landing_lat', 'int32_t', false],
            ['landing_lon', 'int32_t', false],
            ['path_lat', 'int32_t', false],
            ['path_lon', 'int32_t', false],
            ['arc_entry_lat', 'int32_t', false],
            ['arc_entry_lon', 'int32_t', false],
            ['altitude', 'float', false],
            ['expected_travel_distance', 'float', false],
            ['cross_track_error', 'float', false],
            ['stage', 'uint8_t', false],
        ];
        return _this;
    }
    return Deepstall;
}(node_mavlink_1.MAVLinkMessage));
exports.Deepstall = Deepstall;
//# sourceMappingURL=deepstall.js.map