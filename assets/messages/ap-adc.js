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
exports.ApAdc = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Raw ADC output.
*/
// adc1 ADC output 1. uint16_t
// adc2 ADC output 2. uint16_t
// adc3 ADC output 3. uint16_t
// adc4 ADC output 4. uint16_t
// adc5 ADC output 5. uint16_t
// adc6 ADC output 6. uint16_t
var ApAdc = /** @class */ (function (_super) {
    __extends(ApAdc, _super);
    function ApAdc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 153;
        _this._message_name = 'AP_ADC';
        _this._crc_extra = 188;
        _this._message_fields = [
            ['adc1', 'uint16_t', false],
            ['adc2', 'uint16_t', false],
            ['adc3', 'uint16_t', false],
            ['adc4', 'uint16_t', false],
            ['adc5', 'uint16_t', false],
            ['adc6', 'uint16_t', false],
        ];
        return _this;
    }
    return ApAdc;
}(node_mavlink_1.MAVLinkMessage));
exports.ApAdc = ApAdc;
//# sourceMappingURL=ap-adc.js.map