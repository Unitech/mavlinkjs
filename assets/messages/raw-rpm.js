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
exports.RawRpm = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
RPM sensor data message.
*/
// index Index of this RPM sensor (0-indexed) uint8_t
// frequency Indicated rate float
var RawRpm = /** @class */ (function (_super) {
    __extends(RawRpm, _super);
    function RawRpm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 339;
        _this._message_name = 'RAW_RPM';
        _this._crc_extra = 199;
        _this._message_fields = [
            ['frequency', 'float', false],
            ['index', 'uint8_t', false],
        ];
        return _this;
    }
    return RawRpm;
}(node_mavlink_1.MAVLinkMessage));
exports.RawRpm = RawRpm;
//# sourceMappingURL=raw-rpm.js.map