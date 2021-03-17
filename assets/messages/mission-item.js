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
exports.MissionItem = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message encoding a mission item. This message is emitted to announce
                the presence of a mission item and to set a mission item on the system. The mission item can be either in x, y, z meters (type: LOCAL) or x:lat, y:lon, z:altitude. Local frame is Z-down, right handed (NED), global frame is Z-up, right handed (ENU). NaN may be used to indicate an optional/default value (e.g. to use the system's current latitude or yaw rather than a specific value). See also https://mavlink.io/en/services/mission.html.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// seq Sequence uint16_t
// frame The coordinate system of the waypoint. uint8_t
// command The scheduled action for the waypoint. uint16_t
// current false:0, true:1 uint8_t
// autocontinue Autocontinue to next waypoint uint8_t
// param1 PARAM1, see MAV_CMD enum float
// param2 PARAM2, see MAV_CMD enum float
// param3 PARAM3, see MAV_CMD enum float
// param4 PARAM4, see MAV_CMD enum float
// x PARAM5 / local: X coordinate, global: latitude float
// y PARAM6 / local: Y coordinate, global: longitude float
// z PARAM7 / local: Z coordinate, global: altitude (relative or absolute, depending on frame). float
// mission_type Mission type. uint8_t
var MissionItem = /** @class */ (function (_super) {
    __extends(MissionItem, _super);
    function MissionItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 39;
        _this._message_name = 'MISSION_ITEM';
        _this._crc_extra = 254;
        _this._message_fields = [
            ['param1', 'float', false],
            ['param2', 'float', false],
            ['param3', 'float', false],
            ['param4', 'float', false],
            ['x', 'float', false],
            ['y', 'float', false],
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
    return MissionItem;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionItem = MissionItem;
//# sourceMappingURL=mission-item.js.map