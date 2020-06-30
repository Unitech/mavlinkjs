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
exports.OpenDroneIdSystem = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
/*
Data for filling the OpenDroneID System message. The System Message contains general system information including the operator location and possible aircraft group information.
*/
// target_system System ID (0 for broadcast). uint8_t
// target_component Component ID (0 for broadcast). uint8_t
// id_or_mac Only used for drone ID data received from other UAs. See detailed description at https://mavlink.io/en/services/opendroneid.html. uint8_t
// operator_location_type Specifies the operator location type. uint8_t
// classification_type Specifies the classification type of the UA. uint8_t
// operator_latitude Latitude of the operator. If unknown: 0 (both Lat/Lon). int32_t
// operator_longitude Longitude of the operator. If unknown: 0 (both Lat/Lon). int32_t
// area_count Number of aircraft in the area, group or formation (default 1). uint16_t
// area_radius Radius of the cylindrical area of the group or formation (default 0). uint16_t
// area_ceiling Area Operations Ceiling relative to WGS84. If unknown: -1000 m. float
// area_floor Area Operations Floor relative to WGS84. If unknown: -1000 m. float
// category_eu When classification_type is MAV_ODID_CLASSIFICATION_TYPE_EU, specifies the category of the UA. uint8_t
// class_eu When classification_type is MAV_ODID_CLASSIFICATION_TYPE_EU, specifies the class of the UA. uint8_t
var OpenDroneIdSystem = /** @class */ (function (_super) {
    __extends(OpenDroneIdSystem, _super);
    function OpenDroneIdSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._message_id = 12904;
        _this._message_name = 'OPEN_DRONE_ID_SYSTEM';
        _this._crc_extra = 203;
        _this._message_fields = [
            ['operator_latitude', 'int32_t', false],
            ['operator_longitude', 'int32_t', false],
            ['area_ceiling', 'float', false],
            ['area_floor', 'float', false],
            ['area_count', 'uint16_t', false],
            ['area_radius', 'uint16_t', false],
            ['target_system', 'uint8_t', false],
            ['target_component', 'uint8_t', false],
            ['id_or_mac', 'uint8_t', false],
            ['operator_location_type', 'uint8_t', false],
            ['classification_type', 'uint8_t', false],
            ['category_eu', 'uint8_t', false],
            ['class_eu', 'uint8_t', false],
        ];
        return _this;
    }
    return OpenDroneIdSystem;
}(node_mavlink_1.MAVLinkMessage));
exports.OpenDroneIdSystem = OpenDroneIdSystem;
//# sourceMappingURL=open-drone-id-system.js.map