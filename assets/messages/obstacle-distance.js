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
exports.ObstacleDistance = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Obstacle distances in front of the sensor, starting from the left in increment degrees to the right
*/
// time_usec Timestamp (UNIX Epoch time or time since system boot). The receiving end can infer timestamp format (since 1.1.1970 or since system boot) by checking for the magnitude of the number. uint64_t
// sensor_type Class id of the distance sensor type. uint8_t
// distances Distance of obstacles around the vehicle with index 0 corresponding to north + angle_offset, unless otherwise specified in the frame. A value of 0 is valid and means that the obstacle is practically touching the sensor. A value of max_distance +1 means no obstacle is present. A value of UINT16_MAX for unknown/not used. In a array element, one unit corresponds to 1cm. uint16_t
// increment Angular width in degrees of each array element. Increment direction is clockwise. This field is ignored if increment_f is non-zero. uint8_t
// min_distance Minimum distance the sensor can measure. uint16_t
// max_distance Maximum distance the sensor can measure. uint16_t
// increment_f Angular width in degrees of each array element as a float. If non-zero then this value is used instead of the uint8_t increment field. Positive is clockwise direction, negative is counter-clockwise. float
// angle_offset Relative angle offset of the 0-index element in the distances array. Value of 0 corresponds to forward. Positive is clockwise direction, negative is counter-clockwise. float
// frame Coordinate frame of reference for the yaw rotation and offset of the sensor data. Defaults to MAV_FRAME_GLOBAL, which is north aligned. For body-mounted sensors use MAV_FRAME_BODY_FRD, which is vehicle front aligned. uint8_t
var ObstacleDistance = /** @class */ (function (_super) {
    __extends(ObstacleDistance, _super);
    function ObstacleDistance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 330;
        _this._message_name = 'OBSTACLE_DISTANCE';
        _this._crc_extra = 23;
        _this._message_fields = [
            ['time_usec', 'uint64_t', false],
            ['distances', 'uint16_t', false],
            ['min_distance', 'uint16_t', false],
            ['max_distance', 'uint16_t', false],
            ['sensor_type', 'uint8_t', false],
            ['increment', 'uint8_t', false],
            ['increment_f', 'float', true],
            ['angle_offset', 'float', true],
            ['frame', 'uint8_t', true],
        ];
        return _this;
    }
    return ObstacleDistance;
}(node_mavlink_1.MAVLinkMessage));
exports.ObstacleDistance = ObstacleDistance;
//# sourceMappingURL=obstacle-distance.js.map