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
exports.SystemTime = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
The system time is the time of the master clock, typically the computer clock of the main onboard computer.
*/
// time_unix_usec Timestamp (UNIX epoch time). uint64_t
// time_boot_ms Timestamp (time since system boot). uint32_t
var SystemTime = /** @class */ (function (_super) {
    __extends(SystemTime, _super);
    function SystemTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 2;
        _this._message_name = 'SYSTEM_TIME';
        _this._crc_extra = 137;
        _this._message_fields = [
            ['time_unix_usec', 'uint64_t', false],
            ['time_boot_ms', 'uint32_t', false],
        ];
        return _this;
    }
    return SystemTime;
}(node_mavlink_1.MAVLinkMessage));
exports.SystemTime = SystemTime;
//# sourceMappingURL=system-time.js.map