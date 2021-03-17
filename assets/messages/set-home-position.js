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
exports.SetHomePosition = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The position the system will return to and land on. The position is set automatically by the system during the takeoff in case it was not explicitly set by the operator before or after. The global and local positions encode the position in the respective coordinate frames, while the q parameter encodes the orientation of the surface. Under normal conditions it describes the heading and terrain slope, which can be used by the aircraft to adjust the approach. The approach 3D vector describes the point to which the system should fly in normal flight mode and then perform a landing sequence along the vector.
*/
// target_system System ID. uint8_t
// latitude Latitude (WGS84) int32_t
// longitude Longitude (WGS84) int32_t
// altitude Altitude (MSL). Positive for up. int32_t
// x Local X position of this position in the local coordinate frame float
// y Local Y position of this position in the local coordinate frame float
// z Local Z position of this position in the local coordinate frame float
// q World to surface normal and heading transformation of the takeoff position. Used to indicate the heading and slope of the ground float
// approach_x Local X position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone. float
// approach_y Local Y position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone. float
// approach_z Local Z position of the end of the approach vector. Multicopters should set this position based on their takeoff path. Grass-landing fixed wing aircraft should set it the same way as multicopters. Runway-landing fixed wing aircraft should set it to the opposite direction of the takeoff, assuming the takeoff happened from the threshold / touchdown zone. float
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
var SetHomePosition = /** @class */ (function (_super) {
    __extends(SetHomePosition, _super);
    function SetHomePosition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 243;
        _this._message_name = 'SET_HOME_POSITION';
        _this._crc_extra = 85;
        _this._message_fields = [
            ['latitude', 'int32_t', false],
            ['longitude', 'int32_t', false],
            ['altitude', 'int32_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['q', 'float', false],
            ['approach_x', 'float', false],
            ['approach_y', 'float', false],
            ['approach_z', 'float', false],
            ['target_system', 'uint8_t', false],
            ['time_usec', 'uint64_t', true],
        ];
        return _this;
    }
    return SetHomePosition;
}(node_mavlink_1.MAVLinkMessage));
exports.SetHomePosition = SetHomePosition;
//# sourceMappingURL=set-home-position.js.map