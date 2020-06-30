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
exports.IcarousHeartbeat = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
ICAROUS heartbeat
*/
// status See the FMS_STATE enum. uint8_t
var IcarousHeartbeat = /** @class */ (function (_super) {
    __extends(IcarousHeartbeat, _super);
    function IcarousHeartbeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 42000;
        _this._message_name = 'ICAROUS_HEARTBEAT';
        _this._crc_extra = 227;
        _this._message_fields = [
            ['status', 'uint8_t', false],
        ];
        return _this;
    }
    return IcarousHeartbeat;
}(node_mavlink_1.MAVLinkMessage));
exports.IcarousHeartbeat = IcarousHeartbeat;
//# sourceMappingURL=icarous-heartbeat.js.map