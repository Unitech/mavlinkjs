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
exports.ScaledImu2 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The RAW IMU readings for secondary 9DOF sensor setup. This message should contain the scaled values to the described units
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// xacc X acceleration int16_t
// yacc Y acceleration int16_t
// zacc Z acceleration int16_t
// xgyro Angular speed around X axis int16_t
// ygyro Angular speed around Y axis int16_t
// zgyro Angular speed around Z axis int16_t
// xmag X Magnetic field int16_t
// ymag Y Magnetic field int16_t
// zmag Z Magnetic field int16_t
// temperature Temperature, 0: IMU does not provide temperature values. If the IMU is at 0C it must send 1 (0.01C). int16_t
var ScaledImu2 = /** @class */ (function (_super) {
    __extends(ScaledImu2, _super);
    function ScaledImu2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 116;
        _this._message_name = 'SCALED_IMU2';
        _this._crc_extra = 76;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['xacc', 'int16_t', false],
            ['yacc', 'int16_t', false],
            ['zacc', 'int16_t', false],
            ['xgyro', 'int16_t', false],
            ['ygyro', 'int16_t', false],
            ['zgyro', 'int16_t', false],
            ['xmag', 'int16_t', false],
            ['ymag', 'int16_t', false],
            ['zmag', 'int16_t', false],
            ['temperature', 'int16_t', true],
        ];
        return _this;
    }
    return ScaledImu2;
}(node_mavlink_1.MAVLinkMessage));
exports.ScaledImu2 = ScaledImu2;
//# sourceMappingURL=scaled-imu2.js.map