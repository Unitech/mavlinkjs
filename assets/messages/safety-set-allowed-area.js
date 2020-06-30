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
exports.SafetySetAllowedArea = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Set a safety zone (volume), which is defined by two corners of a cube. This message can be used to tell the MAV which setpoints/waypoints to accept and which to reject. Safety areas are often enforced by national or competition regulations.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// frame Coordinate frame. Can be either global, GPS, right-handed with Z axis up or local, right handed, Z axis down. uint8_t
// p1x x position 1 / Latitude 1 float
// p1y y position 1 / Longitude 1 float
// p1z z position 1 / Altitude 1 float
// p2x x position 2 / Latitude 2 float
// p2y y position 2 / Longitude 2 float
// p2z z position 2 / Altitude 2 float
var SafetySetAllowedArea = /** @class */ (function (_super) {
    __extends(SafetySetAllowedArea, _super);
    function SafetySetAllowedArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 54;
        _this._message_name = 'SAFETY_SET_ALLOWED_AREA';
        _this._crc_extra = 15;
        _this._message_fields = [
            ['p1x', 'float', false],
            ['p1y', 'float', false],
            ['p1z', 'float', false],
            ['p2x', 'float', false],
            ['p2y', 'float', false],
            ['p2z', 'float', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['frame', 'uint8_t', false],
        ];
        return _this;
    }
    return SafetySetAllowedArea;
}(node_mavlink_1.MAVLinkMessage));
exports.SafetySetAllowedArea = SafetySetAllowedArea;
//# sourceMappingURL=safety-set-allowed-area.js.map