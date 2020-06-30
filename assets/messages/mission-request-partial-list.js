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
exports.MissionRequestPartialList = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request a partial list of mission items from the system/component. https://mavlink.io/en/services/mission.html. If start and end index are the same, just send one waypoint.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// start_index Start index int16_t
// end_index End index, -1 by default (-1: send list to end). Else a valid index of the list int16_t
// mission_type Mission type. uint8_t
var MissionRequestPartialList = /** @class */ (function (_super) {
    __extends(MissionRequestPartialList, _super);
    function MissionRequestPartialList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 37;
        _this._message_name = 'MISSION_REQUEST_PARTIAL_LIST';
        _this._crc_extra = 212;
        _this._message_fields = [
            ['start_index', 'int16_t', false],
            ['end_index', 'int16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['mission_type', 'uint8_t', true],
        ];
        return _this;
    }
    return MissionRequestPartialList;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionRequestPartialList = MissionRequestPartialList;
//# sourceMappingURL=mission-request-partial-list.js.map