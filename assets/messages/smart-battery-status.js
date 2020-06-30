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
exports.SmartBatteryStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Smart Battery information (dynamic). Use for updates from: smart battery to flight stack, flight stack to GCS. Use instead of BATTERY_STATUS for smart batteries.
*/
// id Battery ID uint16_t
// capacity_remaining Remaining battery energy. Values: [0-100], -1: field not provided. int16_t
// current Battery current (through all cells/loads). Positive if discharging, negative if charging. UINT16_MAX: field not provided. int16_t
// temperature Battery temperature. -1: field not provided. int16_t
// fault_bitmask Fault/health indications. int32_t
// time_remaining Estimated remaining battery time. -1: field not provided. int32_t
// cell_offset The cell number of the first index in the 'voltages' array field. Using this field allows you to specify cell voltages for batteries with more than 16 cells. uint16_t
// voltages Individual cell voltages. Batteries with more 16 cells can use the cell_offset field to specify the cell offset for the array specified in the current message . Index values above the valid cell count for this battery should have the UINT16_MAX value. uint16_t
var SmartBatteryStatus = /** @class */ (function (_super) {
    __extends(SmartBatteryStatus, _super);
    function SmartBatteryStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 371;
        _this._message_name = 'SMART_BATTERY_STATUS';
        _this._crc_extra = 161;
        _this._message_fields = [
            ['fault_bitmask', 'int32_t', false],
            ['time_remaining', 'int32_t', false],
            ['id', 'uint16_t', false],
            ['capacity_remaining', 'int16_t', false],
            ['current', 'int16_t', false],
            ['temperature', 'int16_t', false],
            ['cell_offset', 'uint16_t', false],
            ['voltages', 'uint16_t', false],
        ];
        return _this;
    }
    return SmartBatteryStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.SmartBatteryStatus = SmartBatteryStatus;
//# sourceMappingURL=smart-battery-status.js.map