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
exports.DigicamControl = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Control on-board Camera Control System to take shots.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// session 0: stop, 1: start or keep it up //Session control e.g. show/hide lens. uint8_t
// zoom_pos 1 to N //Zoom's absolute position (0 means ignore). uint8_t
// zoom_step -100 to 100 //Zooming step value to offset zoom from the current position. int8_t
// focus_lock 0: unlock focus or keep unlocked, 1: lock focus or keep locked, 3: re-lock focus. uint8_t
// shot 0: ignore, 1: shot or start filming. uint8_t
// command_id Command Identity (incremental loop: 0 to 255)//A command sent multiple times will be executed or pooled just once. uint8_t
// extra_param Extra parameters enumeration (0 means ignore). uint8_t
// extra_value Correspondent value to given extra_param. float
var DigicamControl = /** @class */ (function (_super) {
    __extends(DigicamControl, _super);
    function DigicamControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 155;
        _this._message_name = 'DIGICAM_CONTROL';
        _this._crc_extra = 22;
        _this._message_fields = [
            ['extra_value', 'float', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['session', 'uint8_t', false],
            ['zoom_pos', 'uint8_t', false],
            ['zoom_step', 'int8_t', false],
            ['focus_lock', 'uint8_t', false],
            ['shot', 'uint8_t', false],
            ['command_id', 'uint8_t', false],
            ['extra_param', 'uint8_t', false],
        ];
        return _this;
    }
    return DigicamControl;
}(node_mavlink_1.MAVLinkMessage));
exports.DigicamControl = DigicamControl;
//# sourceMappingURL=digicam-control.js.map