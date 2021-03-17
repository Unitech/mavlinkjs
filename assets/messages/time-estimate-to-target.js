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
exports.TimeEstimateToTarget = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Time/duration estimates for various events and actions given the current vehicle state and position.
*/
// safe_return Estimated time to complete the vehicle's configured "safe return" action from its current position (e.g. RTL, Smart RTL, etc.). -1 indicates that the vehicle is landed, or that no time estimate available. int32_t
// land Estimated time for vehicle to complete the LAND action from its current position. -1 indicates that the vehicle is landed, or that no time estimate available. int32_t
// mission_next_item Estimated time for reaching/completing the currently active mission item. -1 means no time estimate available. int32_t
// mission_end Estimated time for completing the current mission. -1 means no mission active and/or no estimate available. int32_t
// commanded_action Estimated time for completing the current commanded action (i.e. Go To, Takeoff, Land, etc.). -1 means no action active and/or no estimate available. int32_t
var TimeEstimateToTarget = /** @class */ (function (_super) {
    __extends(TimeEstimateToTarget, _super);
    function TimeEstimateToTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 380;
        _this._message_name = 'TIME_ESTIMATE_TO_TARGET';
        _this._crc_extra = 232;
        _this._message_fields = [
            ['safe_return', 'int32_t', false],
            ['land', 'int32_t', false],
            ['mission_next_item', 'int32_t', false],
            ['mission_end', 'int32_t', false],
            ['commanded_action', 'int32_t', false],
        ];
        return _this;
    }
    return TimeEstimateToTarget;
}(node_mavlink_1.MAVLinkMessage));
exports.TimeEstimateToTarget = TimeEstimateToTarget;
//# sourceMappingURL=time-estimate-to-target.js.map