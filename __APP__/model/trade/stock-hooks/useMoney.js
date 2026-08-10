require("../../../app.js");
var e = require("../../../utils/market.js"),
  n = require("../../../common/vendor.js"),
  t = require("../../../utils/getPlatform.js"),
  o = require("../../../service/stat/mp-weixin.js");
require("../../../service/sdk/lib/api.js");
var a = require("../../../service/sdk/platform/mp-weixin.js"),
  u = require("../../../filters/money.js"),
  i = require("../../../service/aegis/utils.js");
exports.useMoney = function (l) {
  var r,
    c = n.inject("trade"),
    v = c.order,
    m = c.tradeAccount,
    s = c.stock,
    d = n.inject("embeddedMode"),
    y = n.computed(function () {
      return g(m.least_manual_money);
    }),
    _ = n.computed(function () {
      return m.all_manual_money &&
        !isNaN(+m.all_manual_money) &&
        +m.all_manual_money
        ? g(m.all_manual_money)
        : m.least_manual_money;
    }),
    f = n.computed(function () {
      return y.value && isNaN(+y.value)
        ? ""
        : "最低买入".concat(u.formatNoUnit(y.value), "元");
    }),
    p = n.ref(""),
    k = n.computed(function () {
      return [
        {
          key: "allmoney",
          text: "全额买入",
          statKey: "allmoney",
          val: _.value,
        },
        {
          key: "minmoney",
          text: "最低买入",
          statKey: "minmoney",
          val: y.value,
        },
      ];
    });
  function x() {
    r && clearTimeout(r),
      p.value &&
        (r = setTimeout(function () {
          p.value = "";
        }, 3e3));
  }
  function g(e) {
    var n = (function (e) {
      return String(e).replace(/[^0-9.]/g, "");
    })(e);
    return ("" === n ? 0 : +n).toFixed(2);
  }
  function M(e) {
    var t,
      o,
      a,
      u,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      c = r.resetPopoverText,
      m = void 0 === c || c,
      d = r.forceUpdate,
      _ = void 0 !== d && d;
    if (v.price && s.value.minAmount && 0 != +v.price) {
      if ((m && (p.value = ""), _ || !e || e !== v.manualMoney)) {
        e &&
          !isNaN(+y.value) &&
          +e < +y.value &&
          (p.value = ""
            .concat(s.value.minAmount, "股对应最低买入金额")
            .concat(y.value, "元")),
          (v.manualMoney = String(e));
        var f = Math.floor(n.__CJS__export_div__(+e, v.price)),
          k = s.value.floorAmountByUnit(f);
        l(k);
      }
    } else
      (null == (t = null == s ? void 0 : s.value) ? void 0 : t.isNewStock) ||
        i.reportEventSafely("mon_trade_calc_amount_fail", {
          ext3: "".concat(v.price, "_").concat(s.value.minAmount),
          ext4:
            null ==
            (u =
              null ==
              (a =
                null == (o = null == s ? void 0 : s.value) ? void 0 : o.quote)
                ? void 0
                : a.info)
              ? void 0
              : u.secu_code,
        });
  }
  return (
    n.watch(function () {
      return v.manualMoney;
    }, x),
    {
      moneyPopoverText: p,
      moneyLevels: k,
      moneyInputPlaceholder: f,
      onMoneyInputChange: M,
      onMoneyInputFocus: function (n) {
        var u = t.getPlatform().isPCWeixin;
        (null == d ? void 0 : d.value) &&
          !u &&
          a.sdk.setContainerHeight({ height: n || 1080 }),
          o.stat.click(
            "trade.trade.moneyinput.write",
            void 0,
            void 0,
            e.getStatStockId(s.value)
          );
      },
      onMoneyInputBlur: function (e, n) {
        var t = e.detail,
          o = (void 0 === t ? { value: "" } : t).value;
        (null == d ? void 0 : d.value) &&
          a.sdk.setContainerHeight({ height: n || 576 });
        var u = o;
        o && (u = g(o)), M(u);
      },
      onClickQuickMoneyItem: function (n) {
        var t = { allmoney: _.value, minmoney: y.value }[n.key];
        t &&
          !isNaN(+t) &&
          (o.stat.click(
            "trade.trade.quickmoney.".concat(n.statKey),
            void 0,
            void 0,
            e.getStatStockId(s.value)
          ),
          (p.value =
            "allmoney" === n.key && +m.max_buy_qty > 0
              ? "可用资金能购买的最大金额(含手续费)"
              : "100 股对应的最低买入金额(含手续费)"),
          x(),
          M(g(t), { resetPopoverText: !1 }));
      },
      onClickMaxCanUseMoney: function () {
        m.max_buy_money && !isNaN(+m.max_buy_money) && M(g(m.max_buy_money));
      },
      onMoneyInputClear: function () {
        o.stat.click(
          "trade.trade.moneyinput.clear",
          void 0,
          void 0,
          e.getStatStockId(s.value)
        ),
          M("");
      },
    }
  );
};
