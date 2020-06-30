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
exports.MissionSetCurrent = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Set the mission item with sequence number seq as current item. This means that the MAV will continue to this mission item on the shortest path (not following the mission items in-between).
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// seq Sequence uint16_t
var MissionSetCurrent = /** @class */ (function (_super) {
    __extends(MissionSetCurrent, _super);
    function MissionSetCurrent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 41;
        _this._message_name = 'MISSION_SET_CURRENT';
        _this._crc_extra = 28;
        _this._message_fields = [
            ['seq', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return MissionSetCurrent;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionSetCurrent = MissionSetCurrent;
//# sourceMappingURL=mission-set-current.js.map