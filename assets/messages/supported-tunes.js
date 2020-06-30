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
exports.SupportedTunes = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Tune formats supported by vehicle. This should be emitted as response to MAV_CMD_REQUEST_MESSAGE.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// format Bitfield of supported tune formats. uint32_t
var SupportedTunes = /** @class */ (function (_super) {
    __extends(SupportedTunes, _super);
    function SupportedTunes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 401;
        _this._message_name = 'SUPPORTED_TUNES';
        _this._crc_extra = 183;
        _this._message_fields = [
            ['format', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return SupportedTunes;
}(node_mavlink_1.MAVLinkMessage));
exports.SupportedTunes = SupportedTunes;
//# sourceMappingURL=supported-tunes.js.map