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
exports.Debug = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Send a debug value. The index is used to discriminate between values. These values show up in the plot of QGroundControl as DEBUG N.
*/
// time_boot_ms Timestamp (time since system boot). uint32_t
// ind index of debug variable uint8_t
// value DEBUG value float
var Debug = /** @class */ (function (_super) {
    __extends(Debug, _super);
    function Debug() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 254;
        _this._message_name = 'DEBUG';
        _this._crc_extra = 46;
        _this._message_fields = [
            ['time_boot_ms', 'uint32_t', false],
            ['value', 'float', false],
            ['ind', 'uint8_t', false],
        ];
        return _this;
    }
    return Debug;
}(node_mavlink_1.MAVLinkMessage));
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map