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
exports.SmartBatteryInfo = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Smart Battery information (static/infrequent update). Use for updates from: smart battery to flight stack, flight stack to GCS. Use instead of BATTERY_STATUS for smart batteries.
*/
// id Battery ID uint8_t
// capacity_full_specification Capacity when full according to manufacturer, -1: field not provided. int32_t
// capacity_full Capacity when full (accounting for battery degradation), -1: field not provided. int32_t
// cycle_count Charge/discharge cycle count. -1: field not provided. uint16_t
// serial_number Serial number. -1: field not provided. int32_t
// device_name Static device name. Encode as manufacturer and product names separated using an underscore. char
// weight Battery weight. 0: field not provided. uint16_t
// discharge_minimum_voltage Minimum per-cell voltage when discharging. If not supplied set to UINT16_MAX value. uint16_t
// charging_minimum_voltage Minimum per-cell voltage when charging. If not supplied set to UINT16_MAX value. uint16_t
// resting_minimum_voltage Minimum per-cell voltage when resting. If not supplied set to UINT16_MAX value. uint16_t
var SmartBatteryInfo = /** @class */ (function (_super) {
    __extends(SmartBatteryInfo, _super);
    function SmartBatteryInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 370;
        _this._message_name = 'SMART_BATTERY_INFO';
        _this._crc_extra = 98;
        _this._message_fields = [
            ['capacity_full_specification', 'int32_t', false],
            ['capacity_full', 'int32_t', false],
            ['serial_number', 'int32_t', false],
            ['cycle_count', 'uint16_t', false],
            ['weight', 'uint16_t', false],
            ['discharge_minimum_voltage', 'uint16_t', false],
            ['charging_minimum_voltage', 'uint16_t', false],
            ['resting_minimum_voltage', 'uint16_t', false],
            ['id', 'uint8_t', false],
            ['device_name', 'char', false],
        ];
        return _this;
    }
    return SmartBatteryInfo;
}(node_mavlink_1.MAVLinkMessage));
exports.SmartBatteryInfo = SmartBatteryInfo;
//# sourceMappingURL=smart-battery-info.js.map