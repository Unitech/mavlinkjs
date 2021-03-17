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
exports.DeviceOpWrite = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Write registers for a device.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// request_id Request ID - copied to reply. uint32_t
// bustype The bus type. uint8_t
// bus Bus number. uint8_t
// address Bus address. uint8_t
// busname Name of device on bus (for SPI). char
// regstart First register to write. uint8_t
// count Count of registers to write. uint8_t
// data Write data. uint8_t
var DeviceOpWrite = /** @class */ (function (_super) {
    __extends(DeviceOpWrite, _super);
    function DeviceOpWrite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11002;
        _this._message_name = 'DEVICE_OP_WRITE';
        _this._crc_extra = 234;
        _this._message_fields = [
            ['request_id', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['bustype', 'uint8_t', false],
            ['bus', 'uint8_t', false],
            ['address', 'uint8_t', false],
            ['busname', 'char', false],
            ['regstart', 'uint8_t', false],
            ['count', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return DeviceOpWrite;
}(node_mavlink_1.MAVLinkMessage));
exports.DeviceOpWrite = DeviceOpWrite;
//# sourceMappingURL=device-op-write.js.map