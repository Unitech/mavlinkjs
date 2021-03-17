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
exports.ChangeOperatorControlAck = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Accept / deny control of this MAV
*/
// gcs_system_id ID of the GCS this message uint8_t
// control_request 0: request control of this MAV, 1: Release control of this MAV uint8_t
// ack 0: ACK, 1: NACK: Wrong passkey, 2: NACK: Unsupported passkey encryption method, 3: NACK: Already under control uint8_t
var ChangeOperatorControlAck = /** @class */ (function (_super) {
    __extends(ChangeOperatorControlAck, _super);
    function ChangeOperatorControlAck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 6;
        _this._message_name = 'CHANGE_OPERATOR_CONTROL_ACK';
        _this._crc_extra = 104;
        _this._message_fields = [
            ['gcs_system_id', 'uint8_t', false],
            ['control_request', 'uint8_t', false],
            ['ack', 'uint8_t', false],
        ];
        return _this;
    }
    return ChangeOperatorControlAck;
}(node_mavlink_1.MAVLinkMessage));
exports.ChangeOperatorControlAck = ChangeOperatorControlAck;
//# sourceMappingURL=change-operator-control-ack.js.map