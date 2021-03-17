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
exports.SetupSigning = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Setup a MAVLink2 signing key. If called with secret_key of all zero and zero initial_timestamp will disable signing
*/
// target_system system id of the target uint8_t
// target_component component ID of the target uint8_t
// secret_key signing key uint8_t
// initial_timestamp initial timestamp uint64_t
var SetupSigning = /** @class */ (function (_super) {
    __extends(SetupSigning, _super);
    function SetupSigning() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 256;
        _this._message_name = 'SETUP_SIGNING';
        _this._crc_extra = 71;
        _this._message_fields = [
            ['initial_timestamp', 'uint64_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['secret_key', 'uint8_t', false],
        ];
        return _this;
    }
    return SetupSigning;
}(node_mavlink_1.MAVLinkMessage));
exports.SetupSigning = SetupSigning;
//# sourceMappingURL=setup-signing.js.map