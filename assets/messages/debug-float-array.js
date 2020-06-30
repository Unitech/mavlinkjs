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
exports.DebugFloatArray = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Large debug/prototyping array. The message uses the maximum available payload for data. The array_id and name fields are used to discriminate between messages in code and in user interfaces (respectively). Do not use in production code.
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// name Name, for human-friendly display in a Ground Control Station char
// array_id Unique ID used to discriminate between arrays uint16_t
// data data float
var DebugFloatArray = /** @class */ (function (_super) {
    __extends(DebugFloatArray, _super);
    function DebugFloatArray() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 350;
        _this._message_name = 'DEBUG_FLOAT_ARRAY';
        _this._crc_extra = 232;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['array_id', 'uint16_t', false],
            ['name', 'char', false],
            ['data', 'float', true],
        ];
        return _this;
    }
    return DebugFloatArray;
}(node_mavlink_1.MAVLinkMessage));
exports.DebugFloatArray = DebugFloatArray;
//# sourceMappingURL=debug-float-array.js.map