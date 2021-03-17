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
exports.ExtendedSysState = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Provides state for additional features
*/
// vtol_state The VTOL state if applicable. Is set to MAV_VTOL_STATE_UNDEFINED if UAV is not in VTOL configuration. uint8_t
// landed_state The landed state. Is set to MAV_LANDED_STATE_UNDEFINED if landed state is unknown. uint8_t
var ExtendedSysState = /** @class */ (function (_super) {
    __extends(ExtendedSysState, _super);
    function ExtendedSysState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 245;
        _this._message_name = 'EXTENDED_SYS_STATE';
        _this._crc_extra = 130;
        _this._message_fields = [
            ['vtol_state', 'uint8_t', false],
            ['landed_state', 'uint8_t', false],
        ];
        return _this;
    }
    return ExtendedSysState;
}(node_mavlink_1.MAVLinkMessage));
exports.ExtendedSysState = ExtendedSysState;
//# sourceMappingURL=extended-sys-state.js.map