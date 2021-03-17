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
exports.SetMode = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Set the system mode, as defined by enum MAV_MODE. There is no target component id as the mode is by definition for the overall aircraft, not only for one component.
*/
// target_system The system setting the mode uint8_t
// base_mode The new base mode. uint8_t
// custom_mode The new autopilot-specific mode. This field can be ignored by an autopilot. uint32_t
var SetMode = /** @class */ (function (_super) {
    __extends(SetMode, _super);
    function SetMode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11;
        _this._message_name = 'SET_MODE';
        _this._crc_extra = 89;
        _this._message_fields = [
            ['custom_mode', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['base_mode', 'uint8_t', false],
        ];
        return _this;
    }
    return SetMode;
}(node_mavlink_1.MAVLinkMessage));
exports.SetMode = SetMode;
//# sourceMappingURL=set-mode.js.map