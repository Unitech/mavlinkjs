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
exports.AuthKey = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Emit an encrypted signature / key identifying this system. PLEASE NOTE: This protocol has been kept simple, so transmitting the key requires an encrypted channel for true safety.
*/
// key key char
var AuthKey = /** @class */ (function (_super) {
    __extends(AuthKey, _super);
    function AuthKey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 7;
        _this._message_name = 'AUTH_KEY';
        _this._crc_extra = 119;
        _this._message_fields = [
            ['key', 'char', false],
        ];
        return _this;
    }
    return AuthKey;
}(node_mavlink_1.MAVLinkMessage));
exports.AuthKey = AuthKey;
//# sourceMappingURL=auth-key.js.map