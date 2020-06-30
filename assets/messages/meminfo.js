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
exports.Meminfo = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
State of APM memory.
*/
// brkval Heap top. uint16_t
// freemem Free memory. uint16_t
// freemem32 Free memory (32 bit). uint32_t
var Meminfo = /** @class */ (function (_super) {
    __extends(Meminfo, _super);
    function Meminfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 152;
        _this._message_name = 'MEMINFO';
        _this._crc_extra = 208;
        _this._message_fields = [
            ['brkval', 'uint16_t', false],
            ['freemem', 'uint16_t', false],
            ['freemem32', 'uint32_t', true],
        ];
        return _this;
    }
    return Meminfo;
}(node_mavlink_1.MAVLinkMessage));
exports.Meminfo = Meminfo;
//# sourceMappingURL=meminfo.js.map