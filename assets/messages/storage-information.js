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
exports.StorageInformation = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about a storage medium. This message is sent in response to a request with MAV_CMD_REQUEST_MESSAGE and whenever the status of the storage changes (STORAGE_STATUS). Use MAV_CMD_REQUEST_MESSAGE.param2 to indicate the index/id of requested storage: 0 for all, 1 for first, 2 for second, etc.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// storage_id Storage ID (1 for first, 2 for second, etc.) uint8_t
// storage_count Number of storage devices uint8_t
// status Status of storage uint8_t
// total_capacity Total capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored. float
// used_capacity Used capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored. float
// available_capacity Available storage capacity. If storage is not ready (STORAGE_STATUS_READY) value will be ignored. float
// read_speed Read speed. float
// write_speed Write speed. float
var StorageInformation = /** @class */ (function (_super) {
    __extends(StorageInformation, _super);
    function StorageInformation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 261;
        _this._message_name = 'STORAGE_INFORMATION';
        _this._crc_extra = 179;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['total_capacity', 'float', false],
            ['used_capacity', 'float', false],
            ['available_capacity', 'float', false],
            ['read_speed', 'float', false],
            ['write_speed', 'float', false],
            ['storage_id', 'uint8_t', false],
            ['storage_count', 'uint8_t', false],
            ['status', 'uint8_t', false],
        ];
        return _this;
    }
    return StorageInformation;
}(node_mavlink_1.MAVLinkMessage));
exports.StorageInformation = StorageInformation;
//# sourceMappingURL=storage-information.js.map