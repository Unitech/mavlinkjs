"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EkfStatusFlags = void 0;
var EkfStatusFlags;
(function (EkfStatusFlags) {
    EkfStatusFlags[EkfStatusFlags["EKF_ATTITUDE"] = 1] = "EKF_ATTITUDE";
    EkfStatusFlags[EkfStatusFlags["EKF_VELOCITY_HORIZ"] = 2] = "EKF_VELOCITY_HORIZ";
    EkfStatusFlags[EkfStatusFlags["EKF_VELOCITY_VERT"] = 4] = "EKF_VELOCITY_VERT";
    EkfStatusFlags[EkfStatusFlags["EKF_POS_HORIZ_REL"] = 8] = "EKF_POS_HORIZ_REL";
    EkfStatusFlags[EkfStatusFlags["EKF_POS_HORIZ_ABS"] = 16] = "EKF_POS_HORIZ_ABS";
    EkfStatusFlags[EkfStatusFlags["EKF_POS_VERT_ABS"] = 32] = "EKF_POS_VERT_ABS";
    EkfStatusFlags[EkfStatusFlags["EKF_POS_VERT_AGL"] = 64] = "EKF_POS_VERT_AGL";
    EkfStatusFlags[EkfStatusFlags["EKF_CONST_POS_MODE"] = 128] = "EKF_CONST_POS_MODE";
    EkfStatusFlags[EkfStatusFlags["EKF_PRED_POS_HORIZ_REL"] = 256] = "EKF_PRED_POS_HORIZ_REL";
    EkfStatusFlags[EkfStatusFlags["EKF_PRED_POS_HORIZ_ABS"] = 512] = "EKF_PRED_POS_HORIZ_ABS";
    EkfStatusFlags[EkfStatusFlags["EKF_UNINITIALIZED"] = 1024] = "EKF_UNINITIALIZED";
    EkfStatusFlags[EkfStatusFlags["EKF_STATUS_FLAGS_ENUM_END"] = 1025] = "EKF_STATUS_FLAGS_ENUM_END";
})(EkfStatusFlags = exports.EkfStatusFlags || (exports.EkfStatusFlags = {}));
//# sourceMappingURL=ekf-status-flags.js.map