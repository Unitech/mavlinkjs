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
exports.MissionItemInt = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message encoding a mission item. This message is emitted to announce
                the presence of a mission item and to set a mission item on the system. The mission item can be either in x, y, z meters (type: LOCAL) or x:lat, y:lon, z:altitude. Local frame is Z-down, right handed (NED), global frame is Z-up, right handed (ENU). NaN or INT32_MAX may be used in float/integer params (respectively) to indicate optional/default values (e.g. to use the component's current latitude, yaw rather than a specific value). See also https://mavlink.io/en/services/mission.html.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// seq Waypoint ID (sequence number). Starts at zero. Increases monotonically for each waypoint, no gaps in the sequence (0,1,2,3,4). uint16_t
// frame The coordinate system of the waypoint. uint8_t
// command The scheduled action for the waypoint. uint16_t
// current false:0, true:1 uint8_t
// autocontinue Autocontinue to next waypoint uint8_t
// param1 PARAM1, see MAV_CMD enum float
// param2 PARAM2, see MAV_CMD enum float
// param3 PARAM3, see MAV_CMD enum float
// param4 PARAM4, see MAV_CMD enum float
// x PARAM5 / local: x position in meters * 1e4, global: latitude in degrees * 10^7 int32_t
// y PARAM6 / y position: local: x position in meters * 1e4, global: longitude in degrees *10^7 int32_t
// z PARAM7 / z position: global: altitude in meters (relative or absolute, depending on frame. float
// mission_type Mission type. uint8_t
var MissionItemInt = /** @class */ (function (_super) {
    __extends(MissionItemInt, _super);
    function MissionItemInt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 73;
        _this._message_name = 'MISSION_ITEM_INT';
        _this._crc_extra = 38;
        _this._message_fields = [
            ['param1', 'float', false],
            ['param2', 'float', false],
            ['param3', 'float', false],
            ['param4', 'float', false],
            ['x', 'int32_t', false],
            ['y', 'int32_t', false],
            ['z', 'float', false],
            ['seq', 'uint16_t', false],
            ['command', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['frame', 'uint8_t', false],
            ['current', 'uint8_t', false],
            ['autocontinue', 'uint8_t', false],
            ['mission_type', 'uint8_t', true],
        ];
        return _this;
    }
    return MissionItemInt;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionItemInt = MissionItemInt;
//# sourceMappingURL=mission-item-int.js.map