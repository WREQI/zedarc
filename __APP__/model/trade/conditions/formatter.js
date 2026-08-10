require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = require("../../../utils/market.js"),
  r = require("../../../config/enum/condition.js"),
  n = require("../../../utils/system.js");
function o(e) {
  return e ? t.dayjs(1e3 * +e).format("YYYY-MM-DD") : "";
}
function a(t) {
  return e.defaultMarketUtils.isTransferableDebt(t) ||
    e.defaultMarketUtils.isSpecialGovernmentDebt(t)
    ? "张"
    : "股";
}
function i(e) {
  return e ? t.dayjs(1e3 * +e).format("YYYY-MM-DD HH:mm") : "";
}
(exports.invalidTimeFormatter = i),
  (exports.orderPriceFormatter = function (t) {
    return r.PriceTypeObject[t] ? r.PriceTypeObject[t].text : "";
  }),
  (exports.orderStateFormatter = function (t) {
    return "" === t
      ? r.CondOrderStatus.UnKnow
      : 0 == +t
      ? r.CondOrderStatus.Success
      : r.CondOrderStatus.Fail;
  }),
  (exports.priceFormatter = function (t) {
    return t ? "".concat(t, "元") : "";
  }),
  (exports.quantityFormatter = function (e, r) {
    if (!e) return "";
    var n = a(r);
    return ""
      .concat(t.__CJS__export_default__.toCurrency(e, 0))
      .concat(n || "");
  }),
  (exports.sleepReasonFormatter = function (t) {
    var e = t.sellSleepStatus,
      o = t.buySleepStatus,
      a = "",
      i = "";
    if (
      (e &&
        e !== r.SleepStatus.NotSleep &&
        (a = "卖出时".concat(r.SleepStatusText[e])),
      o &&
        o !== r.SleepStatus.NotSleep &&
        (i = "买入时".concat(r.SleepStatusText[o])),
      !a && !i)
    )
      return [];
    var u = "当前条件单因".concat(
        [a, i]
          .filter(function (t) {
            return !!t;
          })
          .join("、"),
        "，已休眠"
      ),
      s = 20;
    try {
      n.getWindowInfoCompact().windowWidth > 540 && (s = 30);
    } catch (t) {}
    for (var c = Math.ceil(u.length / s), m = [], l = 0; l < c; l++)
      m.push(u.substring(l * s, (l + 1) * s));
    return m;
  }),
  (exports.timeFormatter = o),
  (exports.timeRorRenderFormatter = function (t) {
    return +t.status === r.CondStatus.INVALID
      ? { label: "失效时间", time: i(t.invalid_time) }
      : { label: "有效期至", time: o(t.invalid_time || t.end_time) };
  }),
  (exports.triggeredTimeFormatter = function (e) {
    return e ? t.dayjs(1e3 * +e).format("YYYY-MM-DD HH:mm:ss") : "";
  }),
  (exports.unitFormatter = a);
