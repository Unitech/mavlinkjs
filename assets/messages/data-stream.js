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
exports.DataStream = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data stream status information.
*/
// stream_id The ID of the requested data stream uint8_t
// message_rate The message rate uint16_t
// on_off 1 stream is enabled, 0 stream is stopped. uint8_t
var DataStream = /** @class */ (function (_super) {
    __extends(DataStream, _super);
    function DataStream() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 67;
        _this._message_name = 'DATA_STREAM';
        _this._crc_extra = 21;
        _this._message_fields = [
            ['message_rate', 'uint16_t', false],
            ['stream_id', 'uint8_t', false],
            ['on_off', 'uint8_t', false],
        ];
        return _this;
    }
    return DataStream;
}(node_mavlink_1.MAVLinkMessage));
exports.DataStream = DataStream;
//# sourceMappingURL=data-stream.js.map