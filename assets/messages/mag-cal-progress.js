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
exports.MagCalProgress = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Reports progress of compass calibration.
*/
// compass_id Compass being calibrated. uint8_t
// cal_mask Bitmask of compasses being calibrated. uint8_t
// cal_status Calibration Status. uint8_t
// attempt Attempt number. uint8_t
// completion_pct Completion percentage. uint8_t
// completion_mask Bitmask of sphere sections (see http://en.wikipedia.org/wiki/Geodesic_grid). uint8_t
// direction_x Body frame direction vector for display. float
// direction_y Body frame direction vector for display. float
// direction_z Body frame direction vector for display. float
var MagCalProgress = /** @class */ (function (_super) {
    __extends(MagCalProgress, _super);
    function MagCalProgress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 191;
        _this._message_name = 'MAG_CAL_PROGRESS';
        _this._crc_extra = 92;
        _this._message_fields = [
            ['direction_x', 'float', false],
            ['direction_y', 'float', false],
            ['direction_z', 'float', false],
            ['compass_id', 'uint8_t', false],
            ['cal_mask', 'uint8_t', false],
            ['cal_status', 'uint8_t', false],
            ['attempt', 'uint8_t', false],
            ['completion_pct', 'uint8_t', false],
            ['completion_mask', 'uint8_t', false],
        ];
        return _this;
    }
    return MagCalProgress;
}(node_mavlink_1.MAVLinkMessage));
exports.MagCalProgress = MagCalProgress;
//# sourceMappingURL=mag-cal-progress.js.map