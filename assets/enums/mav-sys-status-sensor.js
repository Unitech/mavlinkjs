"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MavSysStatusSensor = void 0;
var MavSysStatusSensor;
(function (MavSysStatusSensor) {
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_3D_GYRO"] = 1] = "MAV_SYS_STATUS_SENSOR_3D_GYRO";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_3D_ACCEL"] = 2] = "MAV_SYS_STATUS_SENSOR_3D_ACCEL";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_3D_MAG"] = 4] = "MAV_SYS_STATUS_SENSOR_3D_MAG";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_ABSOLUTE_PRESSURE"] = 8] = "MAV_SYS_STATUS_SENSOR_ABSOLUTE_PRESSURE";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_DIFFERENTIAL_PRESSURE"] = 16] = "MAV_SYS_STATUS_SENSOR_DIFFERENTIAL_PRESSURE";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_GPS"] = 32] = "MAV_SYS_STATUS_SENSOR_GPS";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_OPTICAL_FLOW"] = 64] = "MAV_SYS_STATUS_SENSOR_OPTICAL_FLOW";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_VISION_POSITION"] = 128] = "MAV_SYS_STATUS_SENSOR_VISION_POSITION";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_LASER_POSITION"] = 256] = "MAV_SYS_STATUS_SENSOR_LASER_POSITION";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_EXTERNAL_GROUND_TRUTH"] = 512] = "MAV_SYS_STATUS_SENSOR_EXTERNAL_GROUND_TRUTH";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_ANGULAR_RATE_CONTROL"] = 1024] = "MAV_SYS_STATUS_SENSOR_ANGULAR_RATE_CONTROL";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_ATTITUDE_STABILIZATION"] = 2048] = "MAV_SYS_STATUS_SENSOR_ATTITUDE_STABILIZATION";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_YAW_POSITION"] = 4096] = "MAV_SYS_STATUS_SENSOR_YAW_POSITION";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_Z_ALTITUDE_CONTROL"] = 8192] = "MAV_SYS_STATUS_SENSOR_Z_ALTITUDE_CONTROL";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_XY_POSITION_CONTROL"] = 16384] = "MAV_SYS_STATUS_SENSOR_XY_POSITION_CONTROL";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_MOTOR_OUTPUTS"] = 32768] = "MAV_SYS_STATUS_SENSOR_MOTOR_OUTPUTS";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_RC_RECEIVER"] = 65536] = "MAV_SYS_STATUS_SENSOR_RC_RECEIVER";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_3D_GYRO2"] = 131072] = "MAV_SYS_STATUS_SENSOR_3D_GYRO2";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_3D_ACCEL2"] = 262144] = "MAV_SYS_STATUS_SENSOR_3D_ACCEL2";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_3D_MAG2"] = 524288] = "MAV_SYS_STATUS_SENSOR_3D_MAG2";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_GEOFENCE"] = 1048576] = "MAV_SYS_STATUS_GEOFENCE";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_AHRS"] = 2097152] = "MAV_SYS_STATUS_AHRS";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_TERRAIN"] = 4194304] = "MAV_SYS_STATUS_TERRAIN";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_REVERSE_MOTOR"] = 8388608] = "MAV_SYS_STATUS_REVERSE_MOTOR";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_LOGGING"] = 16777216] = "MAV_SYS_STATUS_LOGGING";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_BATTERY"] = 33554432] = "MAV_SYS_STATUS_SENSOR_BATTERY";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_PROXIMITY"] = 67108864] = "MAV_SYS_STATUS_SENSOR_PROXIMITY";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_SATCOM"] = 134217728] = "MAV_SYS_STATUS_SENSOR_SATCOM";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_PREARM_CHECK"] = 268435456] = "MAV_SYS_STATUS_PREARM_CHECK";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_OBSTACLE_AVOIDANCE"] = 536870912] = "MAV_SYS_STATUS_OBSTACLE_AVOIDANCE";
    MavSysStatusSensor[MavSysStatusSensor["MAV_SYS_STATUS_SENSOR_ENUM_END"] = 536870913] = "MAV_SYS_STATUS_SENSOR_ENUM_END";
})(MavSysStatusSensor = exports.MavSysStatusSensor || (exports.MavSysStatusSensor = {}));
//# sourceMappingURL=mav-sys-status-sensor.js.map