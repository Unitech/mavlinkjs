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
exports.DeviceOpReadReply = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Read registers reply.
*/
// request_id Request ID - copied from request. uint32_t
// result 0 for success, anything else is failure code. uint8_t
// regstart Starting register. uint8_t
// count Count of bytes read. uint8_t
// data Reply data. uint8_t
var DeviceOpReadReply = /** @class */ (function (_super) {
    __extends(DeviceOpReadReply, _super);
    function DeviceOpReadReply() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11001;
        _this._message_name = 'DEVICE_OP_READ_REPLY';
        _this._crc_extra = 15;
        _this._message_fields = [
            ['request_id', 'uint32_t', false],
            ['result', 'uint8_t', false],
            ['regstart', 'uint8_t', false],
            ['count', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return DeviceOpReadReply;
}(node_mavlink_1.MAVLinkMessage));
exports.DeviceOpReadReply = DeviceOpReadReply;
//# sourceMappingURL=device-op-read-reply.js.map