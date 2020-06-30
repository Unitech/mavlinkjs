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
exports.MissionChanged = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
A broadcast message to notify any ground station or SDK if a mission, geofence or safe points have changed on the vehicle.
*/
// start_index Start index for partial mission change (-1 for all items). int16_t
// end_index End index of a partial mission change. -1 is a synonym for the last mission item (i.e. selects all items from start_index). Ignore field if start_index=-1. int16_t
// origin_sysid System ID of the author of the new mission. uint8_t
// origin_compid Compnent ID of the author of the new mission. uint8_t
// mission_type Mission type. uint8_t
var MissionChanged = /** @class */ (function (_super) {
    __extends(MissionChanged, _super);
    function MissionChanged() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 52;
        _this._message_name = 'MISSION_CHANGED';
        _this._crc_extra = 132;
        _this._message_fields = [
            ['start_index', 'int16_t', false],
            ['end_index', 'int16_t', false],
            ['origin_sysid', 'uint8_t', false],
            ['origin_compid', 'uint8_t', false],
            ['mission_type', 'uint8_t', false],
        ];
        return _this;
    }
    return MissionChanged;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionChanged = MissionChanged;
//# sourceMappingURL=mission-changed.js.map