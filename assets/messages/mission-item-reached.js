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
exports.MissionItemReached = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
A certain mission item has been reached. The system will either hold this position (or circle on the orbit) or (if the autocontinue on the WP was set) continue to the next waypoint.
*/
// seq Sequence uint16_t
var MissionItemReached = /** @class */ (function (_super) {
    __extends(MissionItemReached, _super);
    function MissionItemReached() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 46;
        _this._message_name = 'MISSION_ITEM_REACHED';
        _this._crc_extra = 11;
        _this._message_fields = [
            ['seq', 'uint16_t', false],
        ];
        return _this;
    }
    return MissionItemReached;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionItemReached = MissionItemReached;
//# sourceMappingURL=mission-item-reached.js.map