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
exports.WifiConfigAp = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Configure WiFi AP SSID, password, and mode. This message is re-emitted as an acknowledgement by the AP. The message may also be explicitly requested using MAV_CMD_REQUEST_MESSAGE
*/
// ssid Name of Wi-Fi network (SSID). Blank to leave it unchanged when setting. Current SSID when sent back as a response. char
// password Password. Blank for an open AP. MD5 hash when message is sent back as a response. char
// mode WiFi Mode. int8_t
// response Message acceptance response (sent back to GS). int8_t
var WifiConfigAp = /** @class */ (function (_super) {
    __extends(WifiConfigAp, _super);
    function WifiConfigAp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 299;
        _this._message_name = 'WIFI_CONFIG_AP';
        _this._crc_extra = 19;
        _this._message_fields = [
            ['ssid', 'char', false],
            ['password', 'char', false],
            ['mode', 'int8_t', true],
            ['response', 'int8_t', true],
        ];
        return _this;
    }
    return WifiConfigAp;
}(node_mavlink_1.MAVLinkMessage));
exports.WifiConfigAp = WifiConfigAp;
//# sourceMappingURL=wifi-config-ap.js.map