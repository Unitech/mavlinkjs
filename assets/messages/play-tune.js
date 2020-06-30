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
exports.PlayTune = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Control vehicle tone generation (buzzer).
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// tune tune in board specific format char
// tune2 tune extension (appended to tune) char
var PlayTune = /** @class */ (function (_super) {
    __extends(PlayTune, _super);
    function PlayTune() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 258;
        _this._message_name = 'PLAY_TUNE';
        _this._crc_extra = 187;
        _this._message_fields = [
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['tune', 'char', false],
            ['tune2', 'char', true],
        ];
        return _this;
    }
    return PlayTune;
}(node_mavlink_1.MAVLinkMessage));
exports.PlayTune = PlayTune;
//# sourceMappingURL=play-tune.js.map