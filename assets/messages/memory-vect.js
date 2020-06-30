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
exports.MemoryVect = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Send raw controller memory. The use of this message is discouraged for normal packets, but a quite efficient way for testing new messages and getting experimental debug output.
*/
// address Starting address of the debug variables uint16_t
// ver Version code of the type variable. 0=unknown, type ignored and assumed int16_t. 1=as below uint8_t
// type Type code of the memory variables. for ver = 1: 0=16 x int16_t, 1=16 x uint16_t, 2=16 x Q15, 3=16 x 1Q14 uint8_t
// value Memory contents at specified address int8_t
var MemoryVect = /** @class */ (function (_super) {
    __extends(MemoryVect, _super);
    function MemoryVect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 249;
        _this._message_name = 'MEMORY_VECT';
        _this._crc_extra = 204;
        _this._message_fields = [
            ['address', 'uint16_t', false],
            ['ver', 'uint8_t', false],
            ['type', 'uint8_t', false],
            ['value', 'int8_t', false],
        ];
        return _this;
    }
    return MemoryVect;
}(node_mavlink_1.MAVLinkMessage));
exports.MemoryVect = MemoryVect;
//# sourceMappingURL=memory-vect.js.map