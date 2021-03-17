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
exports.Timesync = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Time synchronization message.
*/
// tc1 Time sync timestamp 1 int64_t
// ts1 Time sync timestamp 2 int64_t
var Timesync = /** @class */ (function (_super) {
    __extends(Timesync, _super);
    function Timesync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 111;
        _this._message_name = 'TIMESYNC';
        _this._crc_extra = 34;
        _this._message_fields = [
            ['tc1', 'int64_t', false],
            ['ts1', 'int64_t', false],
        ];
        return _this;
    }
    return Timesync;
}(node_mavlink_1.MAVLinkMessage));
exports.Timesync = Timesync;
//# sourceMappingURL=timesync.js.map