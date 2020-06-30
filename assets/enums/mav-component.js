"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MavComponent = void 0;
var MavComponent;
(function (MavComponent) {
    MavComponent[MavComponent["MAV_COMP_ID_ALL"] = 0] = "MAV_COMP_ID_ALL";
    MavComponent[MavComponent["MAV_COMP_ID_AUTOPILOT1"] = 1] = "MAV_COMP_ID_AUTOPILOT1";
    MavComponent[MavComponent["MAV_COMP_ID_USER1"] = 25] = "MAV_COMP_ID_USER1";
    MavComponent[MavComponent["MAV_COMP_ID_USER2"] = 26] = "MAV_COMP_ID_USER2";
    MavComponent[MavComponent["MAV_COMP_ID_USER3"] = 27] = "MAV_COMP_ID_USER3";
    MavComponent[MavComponent["MAV_COMP_ID_USER4"] = 28] = "MAV_COMP_ID_USER4";
    MavComponent[MavComponent["MAV_COMP_ID_USER5"] = 29] = "MAV_COMP_ID_USER5";
    MavComponent[MavComponent["MAV_COMP_ID_USER6"] = 30] = "MAV_COMP_ID_USER6";
    MavComponent[MavComponent["MAV_COMP_ID_USER7"] = 31] = "MAV_COMP_ID_USER7";
    MavComponent[MavComponent["MAV_COMP_ID_USER8"] = 32] = "MAV_COMP_ID_USER8";
    MavComponent[MavComponent["MAV_COMP_ID_USER9"] = 33] = "MAV_COMP_ID_USER9";
    MavComponent[MavComponent["MAV_COMP_ID_USER10"] = 34] = "MAV_COMP_ID_USER10";
    MavComponent[MavComponent["MAV_COMP_ID_USER11"] = 35] = "MAV_COMP_ID_USER11";
    MavComponent[MavComponent["MAV_COMP_ID_USER12"] = 36] = "MAV_COMP_ID_USER12";
    MavComponent[MavComponent["MAV_COMP_ID_USER13"] = 37] = "MAV_COMP_ID_USER13";
    MavComponent[MavComponent["MAV_COMP_ID_USER14"] = 38] = "MAV_COMP_ID_USER14";
    MavComponent[MavComponent["MAV_COMP_ID_USER15"] = 39] = "MAV_COMP_ID_USER15";
    MavComponent[MavComponent["MAV_COMP_ID_USER16"] = 40] = "MAV_COMP_ID_USER16";
    MavComponent[MavComponent["MAV_COMP_ID_USER17"] = 41] = "MAV_COMP_ID_USER17";
    MavComponent[MavComponent["MAV_COMP_ID_USER18"] = 42] = "MAV_COMP_ID_USER18";
    MavComponent[MavComponent["MAV_COMP_ID_USER19"] = 43] = "MAV_COMP_ID_USER19";
    MavComponent[MavComponent["MAV_COMP_ID_USER20"] = 44] = "MAV_COMP_ID_USER20";
    MavComponent[MavComponent["MAV_COMP_ID_USER21"] = 45] = "MAV_COMP_ID_USER21";
    MavComponent[MavComponent["MAV_COMP_ID_USER22"] = 46] = "MAV_COMP_ID_USER22";
    MavComponent[MavComponent["MAV_COMP_ID_USER23"] = 47] = "MAV_COMP_ID_USER23";
    MavComponent[MavComponent["MAV_COMP_ID_USER24"] = 48] = "MAV_COMP_ID_USER24";
    MavComponent[MavComponent["MAV_COMP_ID_USER25"] = 49] = "MAV_COMP_ID_USER25";
    MavComponent[MavComponent["MAV_COMP_ID_USER26"] = 50] = "MAV_COMP_ID_USER26";
    MavComponent[MavComponent["MAV_COMP_ID_USER27"] = 51] = "MAV_COMP_ID_USER27";
    MavComponent[MavComponent["MAV_COMP_ID_USER28"] = 52] = "MAV_COMP_ID_USER28";
    MavComponent[MavComponent["MAV_COMP_ID_USER29"] = 53] = "MAV_COMP_ID_USER29";
    MavComponent[MavComponent["MAV_COMP_ID_USER30"] = 54] = "MAV_COMP_ID_USER30";
    MavComponent[MavComponent["MAV_COMP_ID_USER31"] = 55] = "MAV_COMP_ID_USER31";
    MavComponent[MavComponent["MAV_COMP_ID_USER32"] = 56] = "MAV_COMP_ID_USER32";
    MavComponent[MavComponent["MAV_COMP_ID_USER33"] = 57] = "MAV_COMP_ID_USER33";
    MavComponent[MavComponent["MAV_COMP_ID_USER34"] = 58] = "MAV_COMP_ID_USER34";
    MavComponent[MavComponent["MAV_COMP_ID_USER35"] = 59] = "MAV_COMP_ID_USER35";
    MavComponent[MavComponent["MAV_COMP_ID_USER36"] = 60] = "MAV_COMP_ID_USER36";
    MavComponent[MavComponent["MAV_COMP_ID_USER37"] = 61] = "MAV_COMP_ID_USER37";
    MavComponent[MavComponent["MAV_COMP_ID_USER38"] = 62] = "MAV_COMP_ID_USER38";
    MavComponent[MavComponent["MAV_COMP_ID_USER39"] = 63] = "MAV_COMP_ID_USER39";
    MavComponent[MavComponent["MAV_COMP_ID_USER40"] = 64] = "MAV_COMP_ID_USER40";
    MavComponent[MavComponent["MAV_COMP_ID_USER41"] = 65] = "MAV_COMP_ID_USER41";
    MavComponent[MavComponent["MAV_COMP_ID_USER42"] = 66] = "MAV_COMP_ID_USER42";
    MavComponent[MavComponent["MAV_COMP_ID_USER43"] = 67] = "MAV_COMP_ID_USER43";
    MavComponent[MavComponent["MAV_COMP_ID_TELEMETRY_RADIO"] = 68] = "MAV_COMP_ID_TELEMETRY_RADIO";
    MavComponent[MavComponent["MAV_COMP_ID_USER45"] = 69] = "MAV_COMP_ID_USER45";
    MavComponent[MavComponent["MAV_COMP_ID_USER46"] = 70] = "MAV_COMP_ID_USER46";
    MavComponent[MavComponent["MAV_COMP_ID_USER47"] = 71] = "MAV_COMP_ID_USER47";
    MavComponent[MavComponent["MAV_COMP_ID_USER48"] = 72] = "MAV_COMP_ID_USER48";
    MavComponent[MavComponent["MAV_COMP_ID_USER49"] = 73] = "MAV_COMP_ID_USER49";
    MavComponent[MavComponent["MAV_COMP_ID_USER50"] = 74] = "MAV_COMP_ID_USER50";
    MavComponent[MavComponent["MAV_COMP_ID_USER51"] = 75] = "MAV_COMP_ID_USER51";
    MavComponent[MavComponent["MAV_COMP_ID_USER52"] = 76] = "MAV_COMP_ID_USER52";
    MavComponent[MavComponent["MAV_COMP_ID_USER53"] = 77] = "MAV_COMP_ID_USER53";
    MavComponent[MavComponent["MAV_COMP_ID_USER54"] = 78] = "MAV_COMP_ID_USER54";
    MavComponent[MavComponent["MAV_COMP_ID_USER55"] = 79] = "MAV_COMP_ID_USER55";
    MavComponent[MavComponent["MAV_COMP_ID_USER56"] = 80] = "MAV_COMP_ID_USER56";
    MavComponent[MavComponent["MAV_COMP_ID_USER57"] = 81] = "MAV_COMP_ID_USER57";
    MavComponent[MavComponent["MAV_COMP_ID_USER58"] = 82] = "MAV_COMP_ID_USER58";
    MavComponent[MavComponent["MAV_COMP_ID_USER59"] = 83] = "MAV_COMP_ID_USER59";
    MavComponent[MavComponent["MAV_COMP_ID_USER60"] = 84] = "MAV_COMP_ID_USER60";
    MavComponent[MavComponent["MAV_COMP_ID_USER61"] = 85] = "MAV_COMP_ID_USER61";
    MavComponent[MavComponent["MAV_COMP_ID_USER62"] = 86] = "MAV_COMP_ID_USER62";
    MavComponent[MavComponent["MAV_COMP_ID_USER63"] = 87] = "MAV_COMP_ID_USER63";
    MavComponent[MavComponent["MAV_COMP_ID_USER64"] = 88] = "MAV_COMP_ID_USER64";
    MavComponent[MavComponent["MAV_COMP_ID_USER65"] = 89] = "MAV_COMP_ID_USER65";
    MavComponent[MavComponent["MAV_COMP_ID_USER66"] = 90] = "MAV_COMP_ID_USER66";
    MavComponent[MavComponent["MAV_COMP_ID_USER67"] = 91] = "MAV_COMP_ID_USER67";
    MavComponent[MavComponent["MAV_COMP_ID_USER68"] = 92] = "MAV_COMP_ID_USER68";
    MavComponent[MavComponent["MAV_COMP_ID_USER69"] = 93] = "MAV_COMP_ID_USER69";
    MavComponent[MavComponent["MAV_COMP_ID_USER70"] = 94] = "MAV_COMP_ID_USER70";
    MavComponent[MavComponent["MAV_COMP_ID_USER71"] = 95] = "MAV_COMP_ID_USER71";
    MavComponent[MavComponent["MAV_COMP_ID_USER72"] = 96] = "MAV_COMP_ID_USER72";
    MavComponent[MavComponent["MAV_COMP_ID_USER73"] = 97] = "MAV_COMP_ID_USER73";
    MavComponent[MavComponent["MAV_COMP_ID_USER74"] = 98] = "MAV_COMP_ID_USER74";
    MavComponent[MavComponent["MAV_COMP_ID_USER75"] = 99] = "MAV_COMP_ID_USER75";
    MavComponent[MavComponent["MAV_COMP_ID_CAMERA"] = 100] = "MAV_COMP_ID_CAMERA";
    MavComponent[MavComponent["MAV_COMP_ID_CAMERA2"] = 101] = "MAV_COMP_ID_CAMERA2";
    MavComponent[MavComponent["MAV_COMP_ID_CAMERA3"] = 102] = "MAV_COMP_ID_CAMERA3";
    MavComponent[MavComponent["MAV_COMP_ID_CAMERA4"] = 103] = "MAV_COMP_ID_CAMERA4";
    MavComponent[MavComponent["MAV_COMP_ID_CAMERA5"] = 104] = "MAV_COMP_ID_CAMERA5";
    MavComponent[MavComponent["MAV_COMP_ID_CAMERA6"] = 105] = "MAV_COMP_ID_CAMERA6";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO1"] = 140] = "MAV_COMP_ID_SERVO1";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO2"] = 141] = "MAV_COMP_ID_SERVO2";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO3"] = 142] = "MAV_COMP_ID_SERVO3";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO4"] = 143] = "MAV_COMP_ID_SERVO4";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO5"] = 144] = "MAV_COMP_ID_SERVO5";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO6"] = 145] = "MAV_COMP_ID_SERVO6";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO7"] = 146] = "MAV_COMP_ID_SERVO7";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO8"] = 147] = "MAV_COMP_ID_SERVO8";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO9"] = 148] = "MAV_COMP_ID_SERVO9";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO10"] = 149] = "MAV_COMP_ID_SERVO10";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO11"] = 150] = "MAV_COMP_ID_SERVO11";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO12"] = 151] = "MAV_COMP_ID_SERVO12";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO13"] = 152] = "MAV_COMP_ID_SERVO13";
    MavComponent[MavComponent["MAV_COMP_ID_SERVO14"] = 153] = "MAV_COMP_ID_SERVO14";
    MavComponent[MavComponent["MAV_COMP_ID_GIMBAL"] = 154] = "MAV_COMP_ID_GIMBAL";
    MavComponent[MavComponent["MAV_COMP_ID_LOG"] = 155] = "MAV_COMP_ID_LOG";
    MavComponent[MavComponent["MAV_COMP_ID_ADSB"] = 156] = "MAV_COMP_ID_ADSB";
    MavComponent[MavComponent["MAV_COMP_ID_OSD"] = 157] = "MAV_COMP_ID_OSD";
    MavComponent[MavComponent["MAV_COMP_ID_PERIPHERAL"] = 158] = "MAV_COMP_ID_PERIPHERAL";
    MavComponent[MavComponent["MAV_COMP_ID_QX1_GIMBAL"] = 159] = "MAV_COMP_ID_QX1_GIMBAL";
    MavComponent[MavComponent["MAV_COMP_ID_FLARM"] = 160] = "MAV_COMP_ID_FLARM";
    MavComponent[MavComponent["MAV_COMP_ID_GIMBAL2"] = 171] = "MAV_COMP_ID_GIMBAL2";
    MavComponent[MavComponent["MAV_COMP_ID_GIMBAL3"] = 172] = "MAV_COMP_ID_GIMBAL3";
    MavComponent[MavComponent["MAV_COMP_ID_GIMBAL4"] = 173] = "MAV_COMP_ID_GIMBAL4";
    MavComponent[MavComponent["MAV_COMP_ID_GIMBAL5"] = 174] = "MAV_COMP_ID_GIMBAL5";
    MavComponent[MavComponent["MAV_COMP_ID_GIMBAL6"] = 175] = "MAV_COMP_ID_GIMBAL6";
    MavComponent[MavComponent["MAV_COMP_ID_MISSIONPLANNER"] = 190] = "MAV_COMP_ID_MISSIONPLANNER";
    MavComponent[MavComponent["MAV_COMP_ID_PATHPLANNER"] = 195] = "MAV_COMP_ID_PATHPLANNER";
    MavComponent[MavComponent["MAV_COMP_ID_OBSTACLE_AVOIDANCE"] = 196] = "MAV_COMP_ID_OBSTACLE_AVOIDANCE";
    MavComponent[MavComponent["MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY"] = 197] = "MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY";
    MavComponent[MavComponent["MAV_COMP_ID_PAIRING_MANAGER"] = 198] = "MAV_COMP_ID_PAIRING_MANAGER";
    MavComponent[MavComponent["MAV_COMP_ID_IMU"] = 200] = "MAV_COMP_ID_IMU";
    MavComponent[MavComponent["MAV_COMP_ID_IMU_2"] = 201] = "MAV_COMP_ID_IMU_2";
    MavComponent[MavComponent["MAV_COMP_ID_IMU_3"] = 202] = "MAV_COMP_ID_IMU_3";
    MavComponent[MavComponent["MAV_COMP_ID_GPS"] = 220] = "MAV_COMP_ID_GPS";
    MavComponent[MavComponent["MAV_COMP_ID_GPS2"] = 221] = "MAV_COMP_ID_GPS2";
    MavComponent[MavComponent["MAV_COMP_ID_ODID_TXRX_1"] = 236] = "MAV_COMP_ID_ODID_TXRX_1";
    MavComponent[MavComponent["MAV_COMP_ID_ODID_TXRX_2"] = 237] = "MAV_COMP_ID_ODID_TXRX_2";
    MavComponent[MavComponent["MAV_COMP_ID_ODID_TXRX_3"] = 238] = "MAV_COMP_ID_ODID_TXRX_3";
    MavComponent[MavComponent["MAV_COMP_ID_UDP_BRIDGE"] = 240] = "MAV_COMP_ID_UDP_BRIDGE";
    MavComponent[MavComponent["MAV_COMP_ID_UART_BRIDGE"] = 241] = "MAV_COMP_ID_UART_BRIDGE";
    MavComponent[MavComponent["MAV_COMP_ID_TUNNEL_NODE"] = 242] = "MAV_COMP_ID_TUNNEL_NODE";
    MavComponent[MavComponent["MAV_COMP_ID_SYSTEM_CONTROL"] = 250] = "MAV_COMP_ID_SYSTEM_CONTROL";
    MavComponent[MavComponent["MAV_COMPONENT_ENUM_END"] = 251] = "MAV_COMPONENT_ENUM_END";
})(MavComponent = exports.MavComponent || (exports.MavComponent = {}));
//# sourceMappingURL=mav-component.js.map