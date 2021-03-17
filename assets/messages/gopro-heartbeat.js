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
exports.GoproHeartbeat = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Heartbeat from a HeroBus attached GoPro.
*/
// status Status. uint8_t
// capture_mode Current capture mode. uint8_t
// flags Additional status bits. uint8_t
var GoproHeartbeat = /** @class */ (function (_super) {
    __extends(GoproHeartbeat, _super);
    function GoproHeartbeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 215;
        _this._message_name = 'GOPRO_HEARTBEAT';
        _this._crc_extra = 101;
        _this._message_fields = [
            ['status', 'uint8_t', false],
            ['capture_mode', 'uint8_t', false],
            ['flags', 'uint8_t', false],
        ];
        return _this;
    }
    return GoproHeartbeat;
}(node_mavlink_1.MAVLinkMessage));
exports.GoproHeartbeat = GoproHeartbeat;
//# sourceMappingURL=gopro-heartbeat.js.map