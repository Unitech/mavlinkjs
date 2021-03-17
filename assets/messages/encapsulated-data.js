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
exports.EncapsulatedData = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data packet for images sent using the Image Transmission Protocol: https://mavlink.io/en/services/image_transmission.html.
*/
// seqnr sequence number (starting with 0 on every transmission) uint16_t
// data image data bytes uint8_t
var EncapsulatedData = /** @class */ (function (_super) {
    __extends(EncapsulatedData, _super);
    function EncapsulatedData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 131;
        _this._message_name = 'ENCAPSULATED_DATA';
        _this._crc_extra = 223;
        _this._message_fields = [
            ['seqnr', 'uint16_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return EncapsulatedData;
}(node_mavlink_1.MAVLinkMessage));
exports.EncapsulatedData = EncapsulatedData;
//# sourceMappingURL=encapsulated-data.js.map