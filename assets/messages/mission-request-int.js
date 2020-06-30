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
exports.MissionRequestInt = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request the information of the mission item with the sequence number seq. The response of the system to this message should be a MISSION_ITEM_INT message. https://mavlink.io/en/services/mission.html
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// seq Sequence uint16_t
// mission_type Mission type. uint8_t
var MissionRequestInt = /** @class */ (function (_super) {
    __extends(MissionRequestInt, _super);
    function MissionRequestInt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 51;
        _this._message_name = 'MISSION_REQUEST_INT';
        _this._crc_extra = 196;
        _this._message_fields = [
            ['seq', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['mission_type', 'uint8_t', true],
        ];
        return _this;
    }
    return MissionRequestInt;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionRequestInt = MissionRequestInt;
//# sourceMappingURL=mission-request-int.js.map