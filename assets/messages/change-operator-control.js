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
exports.ChangeOperatorControl = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request to control this MAV
*/
// target_system System the GCS requests control for uint8_t
// control_request 0: request control of this MAV, 1: Release control of this MAV uint8_t
// version 0: key as plaintext, 1-255: future, different hashing/encryption variants. The GCS should in general use the safest mode possible initially and then gradually move down the encryption level if it gets a NACK message indicating an encryption mismatch. uint8_t
// passkey Password / Key, depending on version plaintext or encrypted. 25 or less characters, NULL terminated. The characters may involve A-Z, a-z, 0-9, and "!?,.-" char
var ChangeOperatorControl = /** @class */ (function (_super) {
    __extends(ChangeOperatorControl, _super);
    function ChangeOperatorControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 5;
        _this._message_name = 'CHANGE_OPERATOR_CONTROL';
        _this._crc_extra = 217;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['control_request', 'uint8_t', false],
            ['version', 'uint8_t', false],
            ['passkey', 'char', false],
        ];
        return _this;
    }
    return ChangeOperatorControl;
}(node_mavlink_1.MAVLinkMessage));
exports.ChangeOperatorControl = ChangeOperatorControl;
//# sourceMappingURL=change-operator-control.js.map