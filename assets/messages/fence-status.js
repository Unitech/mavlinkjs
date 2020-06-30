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
exports.FenceStatus = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Status of geo-fencing. Sent in extended status stream when fencing enabled.
*/
// breach_status Breach status (0 if currently inside fence, 1 if outside). uint8_t
// breach_count Number of fence breaches. uint16_t
// breach_type Last breach type. uint8_t
// breach_time Time (since boot) of last breach. uint32_t
// breach_mitigation Active action to prevent fence breach uint8_t
var FenceStatus = /** @class */ (function (_super) {
    __extends(FenceStatus, _super);
    function FenceStatus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 162;
        _this._message_name = 'FENCE_STATUS';
        _this._crc_extra = 189;
        _this._message_fields = [
            ['breach_time', 'uint32_t', false],
            ['breach_count', 'uint16_t', false],
            ['breach_status', 'uint8_t', false],
            ['breach_type', 'uint8_t', false],
            ['breach_mitigation', 'uint8_t', true],
        ];
        return _this;
    }
    return FenceStatus;
}(node_mavlink_1.MAVLinkMessage));
exports.FenceStatus = FenceStatus;
//# sourceMappingURL=fence-status.js.map