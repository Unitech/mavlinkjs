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
exports.Data16 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data packet, size 16.
*/
// type Data type. uint8_t
// len Data length. uint8_t
// data Raw data. uint8_t
var Data16 = /** @class */ (function (_super) {
    __extends(Data16, _super);
    function Data16() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 169;
        _this._message_name = 'DATA16';
        _this._crc_extra = 234;
        _this._message_fields = [
            ['type', 'uint8_t', false],
            ['len', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return Data16;
}(node_mavlink_1.MAVLinkMessage));
exports.Data16 = Data16;
//# sourceMappingURL=data16.js.map