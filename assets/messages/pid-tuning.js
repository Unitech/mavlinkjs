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
exports.PidTuning = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
PID tuning information.
*/
// axis Axis. uint8_t
// desired Desired rate. float
// achieved Achieved rate. float
// FF FF component. float
// P P component. float
// I I component. float
// D D component. float
var PidTuning = /** @class */ (function (_super) {
    __extends(PidTuning, _super);
    function PidTuning() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 194;
        _this._message_name = 'PID_TUNING';
        _this._crc_extra = 98;
        _this._message_fields = [
            ['desired', 'float', false],
            ['achieved', 'float', false],
            ['FF', 'float', false],
            ['P', 'float', false],
            ['I', 'float', false],
            ['D', 'float', false],
            ['axis', 'uint8_t', false],
        ];
        return _this;
    }
    return PidTuning;
}(node_mavlink_1.MAVLinkMessage));
exports.PidTuning = PidTuning;
//# sourceMappingURL=pid-tuning.js.map