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
exports.Collision = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Information about a potential collision
*/
// src Collision data source uint8_t
// id Unique identifier, domain based on src field uint32_t
// action Action that is being taken to avoid this collision uint8_t
// threat_level How concerned the aircraft is about this collision uint8_t
// time_to_minimum_delta Estimated time until collision occurs float
// altitude_minimum_delta Closest vertical distance between vehicle and object float
// horizontal_minimum_delta Closest horizontal distance between vehicle and object float
var Collision = /** @class */ (function (_super) {
    __extends(Collision, _super);
    function Collision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 247;
        _this._message_name = 'COLLISION';
        _this._crc_extra = 81;
        _this._message_fields = [
            ['id', 'uint32_t', false],
            ['time_to_minimum_delta', 'float', false],
            ['altitude_minimum_delta', 'float', false],
            ['horizontal_minimum_delta', 'float', false],
            ['src', 'uint8_t', false],
            ['action', 'uint8_t', false],
            ['threat_level', 'uint8_t', false],
        ];
        return _this;
    }
    return Collision;
}(node_mavlink_1.MAVLinkMessage));
exports.Collision = Collision;
//# sourceMappingURL=collision.js.map