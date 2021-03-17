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
exports.Ping = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
A ping message either requesting or responding to a ping. This allows to measure the system latencies, including serial port, radio modem and UDP connections. The ping microservice is documented at https://mavlink.io/en/services/ping.html
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// seq PING sequence uint32_t
// target_system 0: request ping from all receiving systems. If greater than 0: message is a ping response and number is the system id of the requesting system uint8_t
// target_component 0: request ping from all receiving components. If greater than 0: message is a ping response and number is the component id of the requesting component. uint8_t
var Ping = /** @class */ (function (_super) {
    __extends(Ping, _super);
    function Ping() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 4;
        _this._message_name = 'PING';
        _this._crc_extra = 237;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['seq', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
        ];
        return _this;
    }
    return Ping;
}(node_mavlink_1.MAVLinkMessage));
exports.Ping = Ping;
//# sourceMappingURL=ping.js.map