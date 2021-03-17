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
exports.OpenDroneIdOperatorId = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data for filling the OpenDroneID Operator ID message, which contains the CAA (Civil Aviation Authority) issued operator ID.
*/
// target_system System ID (0 for broadcast). uint8_t
// target_component Component ID (0 for broadcast). uint8_t
// id_or_mac Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html. uint8_t
// operator_id_type Indicates the type of the operator_id field. uint8_t
// operator_id Text description or numeric value expressed as ASCII characters. Shall be filled with nulls in the unused portion of the field. char
var OpenDroneIdOperatorId = /** @class */ (function (_super) {
    __extends(OpenDroneIdOperatorId, _super);
    function OpenDroneIdOperatorId() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 12905;
        _this._message_name = 'OPEN_DRONE_ID_OPERATOR_ID';
        _this._crc_extra = 49;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['id_or_mac', 'uint8_t', false],
            ['operator_id_type', 'uint8_t', false],
            ['operator_id', 'char', false],
        ];
        return _this;
    }
    return OpenDroneIdOperatorId;
}(node_mavlink_1.MAVLinkMessage));
exports.OpenDroneIdOperatorId = OpenDroneIdOperatorId;
//# sourceMappingURL=open-drone-id-operator-id.js.map