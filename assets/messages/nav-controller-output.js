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
exports.NavControllerOutput = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The state of the fixed wing navigation and position controller.
*/
// nav_roll Current desired roll float
// nav_pitch Current desired pitch float
// nav_bearing Current desired heading int16_t
// target_bearing Bearing to current waypoint/target int16_t
// wp_dist Distance to active waypoint uint16_t
// alt_error Current altitude error float
// aspd_error Current airspeed error float
// xtrack_error Current crosstrack error on x-y plane float
var NavControllerOutput = /** @class */ (function (_super) {
    __extends(NavControllerOutput, _super);
    function NavControllerOutput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 62;
        _this._message_name = 'NAV_CONTROLLER_OUTPUT';
        _this._crc_extra = 183;
        _this._message_fields = [
            ['nav_roll', 'float', false],
            ['nav_pitch', 'float', false],
            ['alt_error', 'float', false],
            ['aspd_error', 'float', false],
            ['xtrack_error', 'float', false],
            ['nav_bearing', 'int16_t', false],
            ['target_bearing', 'int16_t', false],
            ['wp_dist', 'uint16_t', false],
        ];
        return _this;
    }
    return NavControllerOutput;
}(node_mavlink_1.MAVLinkMessage));
exports.NavControllerOutput = NavControllerOutput;
//# sourceMappingURL=nav-controller-output.js.map