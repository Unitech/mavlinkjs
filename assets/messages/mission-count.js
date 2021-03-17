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
exports.MissionCount = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
This message is emitted as response to MISSION_REQUEST_LIST by the MAV and to initiate a write transaction. The GCS can then request the individual mission item based on the knowledge of the total number of waypoints.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// count Number of mission items in the sequence uint16_t
// mission_type Mission type. uint8_t
var MissionCount = /** @class */ (function (_super) {
    __extends(MissionCount, _super);
    function MissionCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 44;
        _this._message_name = 'MISSION_COUNT';
        _this._crc_extra = 221;
        _this._message_fields = [
            ['count', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['mission_type', 'uint8_t', true],
        ];
        return _this;
    }
    return MissionCount;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionCount = MissionCount;
//# sourceMappingURL=mission-count.js.map