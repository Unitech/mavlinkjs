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
exports.GeneratorStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Telemetry of power generation system. Alternator or mechanical generator.
*/
// status Status flags. uint64_t
// generator_speed Speed of electrical generator or alternator. UINT16_MAX: field not provided. uint16_t
// battery_current Current into/out of battery. Positive for out. Negative for in. NaN: field not provided. float
// load_current Current going to the UAV. If battery current not available this is the DC current from the generator. Positive for out. Negative for in. NaN: field not provided float
// power_generated The power being generated. NaN: field not provided float
// bus_voltage Voltage of the bus seen at the generator, or battery bus if battery bus is controlled by generator and at a different voltage to main bus. float
// rectifier_temperature The temperature of the rectifier or power converter. INT16_MAX: field not provided. int16_t
// bat_current_setpoint The target battery current. Positive for out. Negative for in. NaN: field not provided float
// generator_temperature The temperature of the mechanical motor, fuel cell core or generator. INT16_MAX: field not provided. int16_t
var GeneratorStatus = /** @class */ (function (_super) {
    __extends(GeneratorStatus, _super);
    function GeneratorStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 373;
        _this._message_name = 'GENERATOR_STATUS';
        _this._crc_extra = 192;
        _this._message_fields = [
            ['status', 'uint64_t', false],
            ['battery_current', 'float', false],
            ['load_current', 'float', false],
            ['power_generated', 'float', false],
            ['bus_voltage', 'float', false],
            ['bat_current_setpoint', 'float', false],
            ['generator_speed', 'uint16_t', false],
            ['rectifier_temperature', 'int16_t', false],
            ['generator_temperature', 'int16_t', false],
        ];
        return _this;
    }
    return GeneratorStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.GeneratorStatus = GeneratorStatus;
//# sourceMappingURL=generator-status.js.map