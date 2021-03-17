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
exports.MissionCurrent = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Message that announces the sequence number of the current active mission item. The MAV will fly towards this mission item.
*/
// seq Sequence uint16_t
var MissionCurrent = /** @class */ (function (_super) {
    __extends(MissionCurrent, _super);
    function MissionCurrent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 42;
        _this._message_name = 'MISSION_CURRENT';
        _this._crc_extra = 28;
        _this._message_fields = [
            ['seq', 'uint16_t', false],
        ];
        return _this;
    }
    return MissionCurrent;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionCurrent = MissionCurrent;
//# sourceMappingURL=mission-current.js.map