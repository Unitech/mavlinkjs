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
exports.MissionWritePartialList = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
This message is sent to the MAV to write a partial list. If start index == end index, only one item will be transmitted / updated. If the start index is NOT 0 and above the current list size, this request should be REJECTED!
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// start_index Start index. Must be smaller / equal to the largest index of the current onboard list. int16_t
// end_index End index, equal or greater than start index. int16_t
// mission_type Mission type. uint8_t
var MissionWritePartialList = /** @class */ (function (_super) {
    __extends(MissionWritePartialList, _super);
    function MissionWritePartialList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 38;
        _this._message_name = 'MISSION_WRITE_PARTIAL_LIST';
        _this._crc_extra = 9;
        _this._message_fields = [
            ['start_index', 'int16_t', false],
            ['end_index', 'int16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['mission_type', 'uint8_t', true],
        ];
        return _this;
    }
    return MissionWritePartialList;
}(node_mavlink_1.MAVLinkMessage));
exports.MissionWritePartialList = MissionWritePartialList;
//# sourceMappingURL=mission-write-partial-list.js.map