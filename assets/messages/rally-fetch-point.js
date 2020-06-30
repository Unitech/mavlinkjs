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
exports.RallyFetchPoint = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Request a current rally point from MAV. MAV should respond with a RALLY_POINT message. MAV should not respond if the request is invalid.
*/
// target_system System ID. uint8_t
// target_component Component ID. uint8_t
// idx Point index (first point is 0). uint8_t
var RallyFetchPoint = /** @class */ (function (_super) {
    __extends(RallyFetchPoint, _super);
    function RallyFetchPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 176;
        _this._message_name = 'RALLY_FETCH_POINT';
        _this._crc_extra = 234;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['idx', 'uint8_t', false],
        ];
        return _this;
    }
    return RallyFetchPoint;
}(node_mavlink_1.MAVLinkMessage));
exports.RallyFetchPoint = RallyFetchPoint;
//# sourceMappingURL=rally-fetch-point.js.map