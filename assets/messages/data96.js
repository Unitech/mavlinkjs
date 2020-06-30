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
exports.Data96 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data packet, size 96.
*/
// type Data type. uint8_t
// len Data length. uint8_t
// data Raw data. uint8_t
var Data96 = /** @class */ (function (_super) {
    __extends(Data96, _super);
    function Data96() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 172;
        _this._message_name = 'DATA96';
        _this._crc_extra = 22;
        _this._message_fields = [
            ['type', 'uint8_t', false],
            ['len', 'uint8_t', false],
            ['data', 'uint8_t', false],
        ];
        return _this;
    }
    return Data96;
}(node_mavlink_1.MAVLinkMessage));
exports.Data96 = Data96;
//# sourceMappingURL=data96.js.map