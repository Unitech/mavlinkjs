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
exports.RequestDataStream = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request a data stream.
*/
// target_system The target requested to send the message stream. uint8_t
// target_component The target requested to send the message stream. uint8_t
// req_stream_id The ID of the requested data stream uint8_t
// req_message_rate The requested message rate uint16_t
// start_stop 1 to start sending, 0 to stop sending. uint8_t
var RequestDataStream = /** @class */ (function (_super) {
    __extends(RequestDataStream, _super);
    function RequestDataStream() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 66;
        _this._message_name = 'REQUEST_DATA_STREAM';
        _this._crc_extra = 148;
        _this._message_fields = [
            ['req_message_rate', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['req_stream_id', 'uint8_t', false],
            ['start_stop', 'uint8_t', false],
        ];
        return _this;
    }
    return RequestDataStream;
}(node_mavlink_1.MAVLinkMessage));
exports.RequestDataStream = RequestDataStream;
//# sourceMappingURL=request-data-stream.js.map