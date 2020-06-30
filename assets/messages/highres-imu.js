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
exports.HighresImu = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The IMU readings in SI units in NED body frame
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// xacc X acceleration float
// yacc Y acceleration float
// zacc Z acceleration float
// xgyro Angular speed around X axis float
// ygyro Angular speed around Y axis float
// zgyro Angular speed around Z axis float
// xmag X Magnetic field float
// ymag Y Magnetic field float
// zmag Z Magnetic field float
// abs_pressure Absolute pressure float
// diff_pressure Differential pressure float
// pressure_alt Altitude calculated from pressure float
// temperature Temperature float
// fields_updated Bitmap for fields that have updated since last message, bit 0 = xacc, bit 12: temperature uint16_t
// id Id. Ids are numbered from 0 and map to IMUs numbered from 1 (e.g. IMU1 will have a message with id=0) uint8_t
var HighresImu = /** @class */ (function (_super) {
    __extends(HighresImu, _super);
    function HighresImu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 105;
        _this._message_name = 'HIGHRES_IMU';
        _this._crc_extra = 93;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['xacc', 'float', false],
            ['yacc', 'float', false],
            ['zacc', 'float', false],
            ['xgyro', 'float', false],
            ['ygyro', 'float', false],
            ['zgyro', 'float', false],
            ['xmag', 'float', false],
            ['ymag', 'float', false],
            ['zmag', 'float', false],
            ['abs_pressure', 'float', false],
            ['diff_pressure', 'float', false],
            ['pressure_alt', 'float', false],
            ['temperature', 'float', false],
            ['fields_updated', 'uint16_t', false],
            ['id', 'uint8_t', true],
        ];
        return _this;
    }
    return HighresImu;
}(node_mavlink_1.MAVLinkMessage));
exports.HighresImu = HighresImu;
//# sourceMappingURL=highres-imu.js.map