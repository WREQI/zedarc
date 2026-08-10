var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("../../common/vendor.js"),
  t = require("../../config/key.js");
exports.useAssetActivity = function () {
  return {
    isShowETFRaceRedPoint: function () {
      try {
        var i = r.index.getStorageSync(t.ETF_RACE_ETF_ICON_REDPOINT) || {},
          a = i.isClicked,
          n = void 0 !== a && a,
          o = i.browDate,
          s = void 0 === o ? "" : o;
        if (n) return !1;
        var c = r.dayjs().format("YYYYMMDD");
        return (
          !(s && r.dayjs(c).diff(r.dayjs(s), "days") >= 1) &&
          (r.index.setStorageSync(
            t.ETF_RACE_ETF_ICON_REDPOINT,
            e(e({}, i), {}, { browDate: c })
          ),
          !0)
        );
      } catch (i) {
        return !1;
      }
    },
  };
};
