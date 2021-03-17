"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagCalStatus = void 0;
var MagCalStatus;
(function (MagCalStatus) {
    MagCalStatus[MagCalStatus["MAG_CAL_NOT_STARTED"] = 0] = "MAG_CAL_NOT_STARTED";
    MagCalStatus[MagCalStatus["MAG_CAL_WAITING_TO_START"] = 1] = "MAG_CAL_WAITING_TO_START";
    MagCalStatus[MagCalStatus["MAG_CAL_RUNNING_STEP_ONE"] = 2] = "MAG_CAL_RUNNING_STEP_ONE";
    MagCalStatus[MagCalStatus["MAG_CAL_RUNNING_STEP_TWO"] = 3] = "MAG_CAL_RUNNING_STEP_TWO";
    MagCalStatus[MagCalStatus["MAG_CAL_SUCCESS"] = 4] = "MAG_CAL_SUCCESS";
    MagCalStatus[MagCalStatus["MAG_CAL_FAILED"] = 5] = "MAG_CAL_FAILED";
    MagCalStatus[MagCalStatus["MAG_CAL_BAD_ORIENTATION"] = 6] = "MAG_CAL_BAD_ORIENTATION";
    MagCalStatus[MagCalStatus["MAG_CAL_BAD_RADIUS"] = 7] = "MAG_CAL_BAD_RADIUS";
    MagCalStatus[MagCalStatus["MAG_CAL_STATUS_ENUM_END"] = 8] = "MAG_CAL_STATUS_ENUM_END";
})(MagCalStatus = exports.MagCalStatus || (exports.MagCalStatus = {}));
//# sourceMappingURL=mag-cal-status.js.map