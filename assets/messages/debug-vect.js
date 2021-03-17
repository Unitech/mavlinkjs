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
exports.DebugVect = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
To debug something using a named 3D vector.
*/
// name Name char
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// x x float
// y y float
// z z float
var DebugVect = /** @class */ (function (_super) {
    __extends(DebugVect, _super);
    function DebugVect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 250;
        _this._message_name = 'DEBUG_VECT';
        _this._crc_extra = 49;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['x', 'float', false],
            ['y', 'float', false],
            ['z', 'float', false],
            ['name', 'char', false],
        ];
        return _this;
    }
    return DebugVect;
}(node_mavlink_1.MAVLinkMessage));
exports.DebugVect = DebugVect;
//# sourceMappingURL=debug-vect.js.map