"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstimatorStatusFlags = void 0;
var EstimatorStatusFlags;
(function (EstimatorStatusFlags) {
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_ATTITUDE"] = 1] = "ESTIMATOR_ATTITUDE";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_VELOCITY_HORIZ"] = 2] = "ESTIMATOR_VELOCITY_HORIZ";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_VELOCITY_VERT"] = 4] = "ESTIMATOR_VELOCITY_VERT";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_POS_HORIZ_REL"] = 8] = "ESTIMATOR_POS_HORIZ_REL";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_POS_HORIZ_ABS"] = 16] = "ESTIMATOR_POS_HORIZ_ABS";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_POS_VERT_ABS"] = 32] = "ESTIMATOR_POS_VERT_ABS";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_POS_VERT_AGL"] = 64] = "ESTIMATOR_POS_VERT_AGL";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_CONST_POS_MODE"] = 128] = "ESTIMATOR_CONST_POS_MODE";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_PRED_POS_HORIZ_REL"] = 256] = "ESTIMATOR_PRED_POS_HORIZ_REL";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_PRED_POS_HORIZ_ABS"] = 512] = "ESTIMATOR_PRED_POS_HORIZ_ABS";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_GPS_GLITCH"] = 1024] = "ESTIMATOR_GPS_GLITCH";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_ACCEL_ERROR"] = 2048] = "ESTIMATOR_ACCEL_ERROR";
    EstimatorStatusFlags[EstimatorStatusFlags["ESTIMATOR_STATUS_FLAGS_ENUM_END"] = 2049] = "ESTIMATOR_STATUS_FLAGS_ENUM_END";
})(EstimatorStatusFlags = exports.EstimatorStatusFlags || (exports.EstimatorStatusFlags = {}));
//# sourceMappingURL=estimator-status-flags.js.map