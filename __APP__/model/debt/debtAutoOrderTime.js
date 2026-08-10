var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("../../common/vendor.js");
require("../../service/broker.js");
var t = require("../../stores/user/useUserinfo.js"),
  o = require("../../config/broker/11100/index.js"),
  n = "promotional_msg";
function i() {
  var e;
  return (
    !!o.brokerConfig.trade.debtAutoOrderNeedSetTime ||
    "1" ===
      (null ==
      (e = t
        .useUserinfoStore()
        .getGreyConfigWithName("is_repo_cond_update_gray"))
        ? void 0
        : e.is_grey)
  );
}
function u(e) {
  return "11100" === String(o.brokerConfig.base.code)
    ? "1"
    : "0" === e || "1" === e
    ? e
    : "0";
}
function s() {
  var e =
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date();
  return r.dayjs(e).isAfter("2026-10-30", "day");
}
function a(e) {
  var r = Math.floor(e / 60),
    t = e % 60;
  return ""
    .concat(String(r).padStart(2, "0"), ":")
    .concat(String(t).padStart(2, "0"));
}
function d(e) {
  return !!i() && !s() && "1" !== u(e);
}
function f(e) {
  return !!i() && "1" !== u(e);
}
(exports.getDebtAutoOrderRouteQuery = function (r) {
  var t = r.extraQuery,
    o = void 0 === t ? {} : t,
    n = r.invest_time_set_flag,
    i = r.isRunning,
    s = void 0 !== i && i;
  return (function (e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !!r && f(e.invest_time_set_flag);
  })({ isRepoCond: !0, invest_time_set_flag: u(n) }, s)
    ? e(e({}, o), {}, { forceSetting: "1" })
    : e({}, o);
}),
  (exports.getDefaultInvestTime = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      r =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : new Date();
    return e === n
      ? (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Date(),
            r = 60 * e.getHours() + e.getMinutes();
          if (r > 920) return "15:15";
          if (r < 915) return "15:15";
          var t = r + 2;
          return t > 920 ? "15:20" : a(t);
        })(r)
      : a(900 + (Math.floor(14 * Math.random()) + 2));
  }),
  (exports.isDebtAutoOrderNeedSetTime = i),
  (exports.isDebtAutoOrderTimePromoExpired = s),
  (exports.normalizeInvestTimeSetFlag = u),
  (exports.shouldConfigureDebtAutoOrderTime = f),
  (exports.shouldShowDebtAutoOrderTimeGuide = function (e) {
    return (
      Boolean(null == e ? void 0 : e.isRepoCond) &&
      d(null == e ? void 0 : e.invest_time_set_flag)
    );
  }),
  (exports.shouldShowDebtAutoOrderTimePromo = d);
