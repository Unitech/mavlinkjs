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
exports.MissionAck = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Acknowledgment message during waypoint handling. The type field states if this message is a positive ack (type=0) or if an error happened (type=non-zero).
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// type Mission result. uint8_t
// mission_type Mission type. uint8_t
var MissionAck = /** @class */ (function (_super) {
    __extends(MissionAck, _super);
    function MissionAck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 47;
        _this._message_name = 'MISSION_ACK';
        _this._crc_extra = 153;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['type', 'uint8_t', false],
            ['mission_type', 'uint8_t', true],
        ];
        return _this;
    }
    return MissionAck;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionAck = MissionAck;
//# sourceMappingURL=mission-ack.js.map