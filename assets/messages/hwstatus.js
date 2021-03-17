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
exports.Hwstatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of key hardware.
*/
// Vcc Board voltage. uint16_t
// I2Cerr I2C error count. uint8_t
var Hwstatus = /** @class */ (function (_super) {
    __extends(Hwstatus, _super);
    function Hwstatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 165;
        _this._message_name = 'HWSTATUS';
        _this._crc_extra = 21;
        _this._message_fields = [
            ['Vcc', 'uint16_t', false],
            ['I2Cerr', 'uint8_t', false],
        ];
        return _this;
    }
    return Hwstatus;
}(node_mavlink_1.MAVLinkMessage));
exports.Hwstatus = Hwstatus;
//# sourceMappingURL=hwstatus.js.map