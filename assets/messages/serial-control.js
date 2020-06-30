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
exports.SerialControl = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Control a serial port. This can be used for raw access to an onboard serial peripheral such as a GPS or telemetry radio. It is designed to make it possible to update the devices firmware via MAVLink messages or change the devices settings. A message with zero bytes can be used to change just the baudrate.
*/
// device Serial control device type. uint8_t
// flags Bitmap of serial control flags. uint8_t
// timeout Timeout for reply data uint16_t
// baudrate Baudrate of transfer. Zero means no change. uint32_t
// count how many bytes in this transfer uint8_t
// data serial data uint8_t
var SerialControl = /** @class */ (function (_super) {
    __extends(SerialControl, _super);
    function SerialControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 126;
        _this._message_name = 'SERIAL_CONTROL';
        _this._crc_extra = 220;
        _this._message_fields = [
            ['baudrate', 'uint32_t', false],
            ['timeout', 'uint16_t', false],
            ['device', 'uint8_t', false],
            ['flags', 'uint8_t', false],
            ['count', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return SerialControl;
}(node_mavlink_1.MAVLinkMessage));
exports.SerialControl = SerialControl;
//# sourceMappingURL=serial-control.js.map