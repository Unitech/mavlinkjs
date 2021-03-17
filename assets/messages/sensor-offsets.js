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
exports.SensorOffsets = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Offsets and calibrations values for hardware sensors. This makes it easier to debug the calibration process.
*/
// mag_ofs_x Magnetometer X offset. int16_t
// mag_ofs_y Magnetometer Y offset. int16_t
// mag_ofs_z Magnetometer Z offset. int16_t
// mag_declination Magnetic declination. float
// raw_press Raw pressure from barometer. int32_t
// raw_temp Raw temperature from barometer. int32_t
// gyro_cal_x Gyro X calibration. float
// gyro_cal_y Gyro Y calibration. float
// gyro_cal_z Gyro Z calibration. float
// accel_cal_x Accel X calibration. float
// accel_cal_y Accel Y calibration. float
// accel_cal_z Accel Z calibration. float
var SensorOffsets = /** @class */ (function (_super) {
    __extends(SensorOffsets, _super);
    function SensorOffsets() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 150;
        _this._message_name = 'SENSOR_OFFSETS';
        _this._crc_extra = 134;
        _this._message_fields = [
            ['mag_declination', 'float', false],
            ['raw_press', 'int32_t', false],
            ['raw_temp', 'int32_t', false],
            ['gyro_cal_x', 'float', false],
            ['gyro_cal_y', 'float', false],
            ['gyro_cal_z', 'float', false],
            ['accel_cal_x', 'float', false],
            ['accel_cal_y', 'float', false],
            ['accel_cal_z', 'float', false],
            ['mag_ofs_x', 'int16_t', false],
            ['mag_ofs_y', 'int16_t', false],
            ['mag_ofs_z', 'int16_t', false],
        ];
        return _this;
    }
    return SensorOffsets;
}(node_mavlink_1.MAVLinkMessage));
exports.SensorOffsets = SensorOffsets;
//# sourceMappingURL=sensor-offsets.js.map