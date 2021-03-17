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
exports.PlayTuneV2 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Play vehicle tone/tune (buzzer). Supersedes message PLAY_TUNE.
*/
// target_system System ID uint8_t
// target_component Component ID uint8_t
// format Tune format uint32_t
// tune Tune definition as a NULL-terminated string. char
var PlayTuneV2 = /** @class */ (function (_super) {
    __extends(PlayTuneV2, _super);
    function PlayTuneV2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 400;
        _this._message_name = 'PLAY_TUNE_V2';
        _this._crc_extra = 110;
        _this._message_fields = [
            ['format', 'uint32_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['tune', 'char', false],
        ];
        return _this;
    }
    return PlayTuneV2;
}(node_mavlink_1.MAVLinkMessage));
exports.PlayTuneV2 = PlayTuneV2;
//# sourceMappingURL=play-tune-v2.js.map