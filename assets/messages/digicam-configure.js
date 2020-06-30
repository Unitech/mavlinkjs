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
exports.DigicamConfigure = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Configure on-board Camera Control System.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// mode Mode enumeration from 1 to N //P, TV, AV, M, etc. (0 means ignore). uint8_t
// shutter_speed Divisor number //e.g. 1000 means 1/1000 (0 means ignore). uint16_t
// aperture F stop number x 10 //e.g. 28 means 2.8 (0 means ignore). uint8_t
// iso ISO enumeration from 1 to N //e.g. 80, 100, 200, Etc (0 means ignore). uint8_t
// exposure_type Exposure type enumeration from 1 to N (0 means ignore). uint8_t
// command_id Command Identity (incremental loop: 0 to 255). //A command sent multiple times will be executed or pooled just once. uint8_t
// engine_cut_off Main engine cut-off time before camera trigger (0 means no cut-off). uint8_t
// extra_param Extra parameters enumeration (0 means ignore). uint8_t
// extra_value Correspondent value to given extra_param. float
var DigicamConfigure = /** @class */ (function (_super) {
    __extends(DigicamConfigure, _super);
    function DigicamConfigure() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 154;
        _this._message_name = 'DIGICAM_CONFIGURE';
        _this._crc_extra = 84;
        _this._message_fields = [
            ['extra_value', 'float', false],
            ['shutter_speed', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['mode', 'uint8_t', false],
            ['aperture', 'uint8_t', false],
            ['iso', 'uint8_t', false],
            ['exposure_type', 'uint8_t', false],
            ['command_id', 'uint8_t', false],
            ['engine_cut_off', 'uint8_t', false],
            ['extra_param', 'uint8_t', false],
        ];
        return _this;
    }
    return DigicamConfigure;
}(node_mavlink_1.MAVLinkMessage));
exports.DigicamConfigure = DigicamConfigure;
//# sourceMappingURL=digicam-configure.js.map