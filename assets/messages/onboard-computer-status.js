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
exports.OnboardComputerStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Hardware status sent by an onboard computer.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// uptime Time since system boot. uint32_t
// type Type of the onboard computer: 0: Mission computer primary, 1: Mission computer backup 1, 2: Mission computer backup 2, 3: Compute node, 4-5: Compute spares, 6-9: Payload computers. uint8_t
// cpu_cores CPU usage on the component in percent (100 - idle). A value of UINT8_MAX implies the field is unused. uint8_t
// cpu_combined Combined CPU usage as the last 10 slices of 100 MS (a histogram). This allows to identify spikes in load that max out the system, but only for a short amount of time. A value of UINT8_MAX implies the field is unused. uint8_t
// gpu_cores GPU usage on the component in percent (100 - idle). A value of UINT8_MAX implies the field is unused. uint8_t
// gpu_combined Combined GPU usage as the last 10 slices of 100 MS (a histogram). This allows to identify spikes in load that max out the system, but only for a short amount of time. A value of UINT8_MAX implies the field is unused. uint8_t
// temperature_board Temperature of the board. A value of INT8_MAX implies the field is unused. int8_t
// temperature_core Temperature of the CPU core. A value of INT8_MAX implies the field is unused. int8_t
// fan_speed Fan speeds. A value of INT16_MAX implies the field is unused. int16_t
// ram_usage Amount of used RAM on the component system. A value of UINT32_MAX implies the field is unused. uint32_t
// ram_total Total amount of RAM on the component system. A value of UINT32_MAX implies the field is unused. uint32_t
// storage_type Storage type: 0: HDD, 1: SSD, 2: EMMC, 3: SD card (non-removable), 4: SD card (removable). A value of UINT32_MAX implies the field is unused. uint32_t
// storage_usage Amount of used storage space on the component system. A value of UINT32_MAX implies the field is unused. uint32_t
// storage_total Total amount of storage space on the component system. A value of UINT32_MAX implies the field is unused. uint32_t
// link_type Link type: 0-9: UART, 10-19: Wired network, 20-29: Wifi, 30-39: Point-to-point proprietary, 40-49: Mesh proprietary uint32_t
// link_tx_rate Network traffic from the component system. A value of UINT32_MAX implies the field is unused. uint32_t
// link_rx_rate Network traffic to the component system. A value of UINT32_MAX implies the field is unused. uint32_t
// link_tx_max Network capacity from the component system. A value of UINT32_MAX implies the field is unused. uint32_t
// link_rx_max Network capacity to the component system. A value of UINT32_MAX implies the field is unused. uint32_t
var OnboardComputerStatus = /** @class */ (function (_super) {
    __extends(OnboardComputerStatus, _super);
    function OnboardComputerStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 390;
        _this._message_name = 'ONBOARD_COMPUTER_STATUS';
        _this._crc_extra = 156;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['uptime', 'uint32_t', false],
            ['ram_usage', 'uint32_t', false],
            ['ram_total', 'uint32_t', false],
            ['storage_type', 'uint32_t', false],
            ['storage_usage', 'uint32_t', false],
            ['storage_total', 'uint32_t', false],
            ['link_type', 'uint32_t', false],
            ['link_tx_rate', 'uint32_t', false],
            ['link_rx_rate', 'uint32_t', false],
            ['link_tx_max', 'uint32_t', false],
            ['link_rx_max', 'uint32_t', false],
            ['fan_speed', 'int16_t', false],
            ['type', 'uint8_t', false],
            ['cpu_cores', 'uint8_t', false],
            ['cpu_combined', 'uint8_t', false],
            ['gpu_cores', 'uint8_t', false],
            ['gpu_combined', 'uint8_t', false],
            ['temperature_board', 'int8_t', false],
            ['temperature_core', 'int8_t', false],
        ];
        return _this;
    }
    return OnboardComputerStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.OnboardComputerStatus = OnboardComputerStatus;
//# sourceMappingURL=onboard-computer-status.js.map