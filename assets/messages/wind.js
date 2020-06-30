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
exports.Wind = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Wind estimation.
*/
// direction Wind direction (that wind is coming from). float
// speed Wind speed in ground plane. float
// speed_z Vertical wind speed. float
var Wind = /** @class */ (function (_super) {
    __extends(Wind, _super);
    function Wind() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 168;
        _this._message_name = 'WIND';
        _this._crc_extra = 1;
        _this._message_fields = [
            ['direction', 'float', false],
            ['speed', 'float', false],
            ['speed_z', 'float', false],
        ];
        return _this;
    }
    return Wind;
}(node_mavlink_1.MAVLinkMessage));
exports.Wind = Wind;
//# sourceMappingURL=wind.js.map