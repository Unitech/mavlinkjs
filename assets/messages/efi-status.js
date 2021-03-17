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
exports.EfiStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
EFI status output
*/
// health EFI health status uint8_t
// ecu_index ECU index float
// rpm RPM float
// fuel_consumed Fuel consumed float
// fuel_flow Fuel flow rate float
// engine_load Engine load float
// throttle_position Throttle position float
// spark_dwell_time Spark dwell time float
// barometric_pressure Barometric pressure float
// intake_manifold_pressure Intake manifold pressure( float
// intake_manifold_temperature Intake manifold temperature float
// cylinder_head_temperature Cylinder head temperature float
// ignition_timing Ignition timing (Crank angle degrees) float
// injection_time Injection time float
// exhaust_gas_temperature Exhaust gas temperature float
// throttle_out Output throttle float
// pt_compensation Pressure/temperature compensation float
var EfiStatus = /** @class */ (function (_super) {
    __extends(EfiStatus, _super);
    function EfiStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 225;
        _this._message_name = 'EFI_STATUS';
        _this._crc_extra = 208;
        _this._message_fields = [
            ['ecu_index', 'float', false],
            ['rpm', 'float', false],
            ['fuel_consumed', 'float', false],
            ['fuel_flow', 'float', false],
            ['engine_load', 'float', false],
            ['throttle_position', 'float', false],
            ['spark_dwell_time', 'float', false],
            ['barometric_pressure', 'float', false],
            ['intake_manifold_pressure', 'float', false],
            ['intake_manifold_temperature', 'float', false],
            ['cylinder_head_temperature', 'float', false],
            ['ignition_timing', 'float', false],
            ['injection_time', 'float', false],
            ['exhaust_gas_temperature', 'float', false],
            ['throttle_out', 'float', false],
            ['pt_compensation', 'float', false],
            ['health', 'uint8_t', false],
        ];
        return _this;
    }
    return EfiStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.EfiStatus = EfiStatus;
//# sourceMappingURL=efi-status.js.map