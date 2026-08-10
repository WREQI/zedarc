require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../config/enum.js"),
  t = require("../../../config/enum/condition.js"),
  r = require("./formatter.js");
function _(n, t) {
  var r;
  return (
    void 0 !== t[n] && (r = e.dayjs().add(t[n], "day").valueOf()),
    r ? Math.floor(r / 1e3) : 0
  );
}
(exports.calcCondItemHeight = function (e) {
  if (Number(e.cond_status_type) === Number(t.CondStatus.COMPLETE))
    return t.COND_ITEM_HEIGHT.COMPLETE;
  if (Number(e.cond_status_type) === Number(t.CondStatus.INVALID))
    return (e.cond_type === t.CondTypesBackEnd.GRID || e.isRepoCond) &&
      e.run_day &&
      0 != +e.run_day
      ? t.COND_ITEM_HEIGHT.INVALID_WITH_RUN_DAY
      : t.COND_ITEM_HEIGHT.INVALID_DEFAULT;
  var n = t.COND_ITEM_HEIGHT.NORMAL_BASE;
  if (
    (e.isRepoCond &&
      e.run_day &&
      0 != +e.run_day &&
      (n += t.COND_ITEM_HEIGHT.REPO_INCREASE),
    e.cond_type === t.CondTypesBackEnd.GRID)
  ) {
    var _ = t.COND_ITEM_HEIGHT.GRID_BASE,
      u = r.sleepReasonFormatter({
        sellSleepStatus: e.sell_sleep_status,
        buySleepStatus: e.buy_sleep_status,
      });
    return (
      u &&
        u.length &&
        ((_ = t.COND_ITEM_HEIGHT.GRID_SLEEP),
        2 === u.length
          ? (_ += t.COND_ITEM_HEIGHT.SLEEP_REASON_SINGLE)
          : u.length > 2 && (_ += t.COND_ITEM_HEIGHT.SLEEP_REASON_MULTIPLE)),
      e.run_day && 0 != +e.run_day && (_ += t.COND_ITEM_HEIGHT.REPO_INCREASE),
      _
    );
  }
  return e.cond_type === t.CondTypesBackEnd.TPSL ? t.COND_ITEM_HEIGHT.TPSL : n;
}),
  (exports.calcExpireDay = function (t) {
    return (function (n, t) {
      var r = "";
      return (
        void 0 !== t[n] &&
          (r = e.dayjs().add(t[n], "day").format("YYYY-MM-DD")),
        r
      );
    })(t, n.ORDER_VALIDATES_NUM);
  }),
  (exports.calcExpireTime = function (e) {
    return _(e, n.ORDER_VALIDATES_NUM);
  }),
  (exports.calcInvestExpireTime = function (e) {
    return _(e, n.INVEST_ORDER_VALIDATES_NUM);
  }),
  (exports.useNavigateToQuote = function (n, t, r, _) {
    var u = null;
    return (
      e.onBeforeUnmount(function () {
        u && clearTimeout(u);
      }),
      {
        toHq: function () {
          _ && _("nameClick"),
            u && clearTimeout(u),
            (u = setTimeout(function () {
              e.index.navToQuote({ market: n, code: t, name: r }), (u = null);
            }, 100));
        },
      }
    );
  });
