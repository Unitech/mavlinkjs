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
exports.UavcanNodeStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
General status information of an UAVCAN node. Please refer to the definition of the UAVCAN message "uavcan.protocol.NodeStatus" for the background information. The UAVCAN specification is available at http://uavcan.org.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// uptime_sec Time since the start-up of the node. uint32_t
// health Generalized node health status. uint8_t
// mode Generalized operating mode. uint8_t
// sub_mode Not used currently. uint8_t
// vendor_specific_status_code Vendor-specific status information. uint16_t
var UavcanNodeStatus = /** @class */ (function (_super) {
    __extends(UavcanNodeStatus, _super);
    function UavcanNodeStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 310;
        _this._message_name = 'UAVCAN_NODE_STATUS';
        _this._crc_extra = 28;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['uptime_sec', 'uint32_t', false],
            ['vendor_specific_status_code', 'uint16_t', false],
            ['health', 'uint8_t', false],
            ['mode', 'uint8_t', false],
            ['sub_mode', 'uint8_t', false],
        ];
        return _this;
    }
    return UavcanNodeStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.UavcanNodeStatus = UavcanNodeStatus;
//# sourceMappingURL=uavcan-node-status.js.map