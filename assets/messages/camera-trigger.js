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
exports.CameraTrigger = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Camera-IMU triggering and synchronisation message.
*/
// time_usec Timestamp for image frame (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// seq Image frame sequence uint32_t
var CameraTrigger = /** @class */ (function (_super) {
    __extends(CameraTrigger, _super);
    function CameraTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 112;
        _this._message_name = 'CAMERA_TRIGGER';
        _this._crc_extra = 174;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['seq', 'uint32_t', false],
        ];
        return _this;
    }
    return CameraTrigger;
}(node_mavlink_1.MAVLinkMessage));
exports.CameraTrigger = CameraTrigger;
//# sourceMappingURL=camera-trigger.js.map