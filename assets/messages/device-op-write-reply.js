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
exports.DeviceOpWriteReply = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Write registers reply.
*/
// request_id Request ID - copied from request. uint32_t
// result 0 for success, anything else is failure code. uint8_t
var DeviceOpWriteReply = /** @class */ (function (_super) {
    __extends(DeviceOpWriteReply, _super);
    function DeviceOpWriteReply() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 11003;
        _this._message_name = 'DEVICE_OP_WRITE_REPLY';
        _this._crc_extra = 64;
        _this._message_fields = [
            ['request_id', 'uint32_t', false],
            ['result', 'uint8_t', false],
        ];
        return _this;
    }
    return DeviceOpWriteReply;
}(node_mavlink_1.MAVLinkMessage));
exports.DeviceOpWriteReply = DeviceOpWriteReply;
//# sourceMappingURL=device-op-write-reply.js.map