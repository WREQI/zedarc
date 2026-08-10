require("../../../app.js");
var e = require("../../../utils/market.js"),
  t = require("../../../common/vendor.js"),
  n = require("../../../config/enum.js"),
  u = require("../../../utils/getPlatform.js"),
  a = require("../../../service/aegis/utils.js");
exports.useAmount = function (i) {
  var o,
    l,
    r = null == (o = t.getCurrentInstance()) ? void 0 : o.proxy,
    c = t.inject("trade"),
    v = c.order,
    m = c.tradeAccount,
    s = c.stock,
    d = t.inject("embeddedMode"),
    f = !0,
    A = !1,
    g = t.ref(""),
    T = t.ref("");
  function p(e) {
    T.value = e;
  }
  function h(e) {
    var t, u;
    try {
      +e - +v.amount != 0 && p(""), (g.value = "");
      var o;
      if (
        ((o =
          null == (u = (t = s.value).getMinAmountTips) ? void 0 : u.call(t)),
        +e <= 0 && !A)
      )
        i(e),
          null == r ||
            r.$nextTick(function () {
              return i("".concat(s.value.minAmount || 100));
            }),
          (g.value = o);
      else if (s.value.isGem) {
        var l = v.strategy === n.STRATEGY.AFTER_CLOSED ? 1e6 : 3e5;
        +e > l
          ? (i(e),
            (g.value = "单笔买卖数量不能超过".concat(l / 1e4, "万股")),
            (e = "".concat(l)),
            null == r ||
              r.$nextTick(function () {
                return i(e);
              }))
          : i(e);
      } else
        s.value.isGGT
          ? (s.value.calcOddLot(e) > 0 &&
              v.orderType !== n.ORDER_TYPES.OLO &&
              (g.value = s.value.AmountMinLimitRetMsg),
            i(e))
          : i(e);
    } catch (e) {
      a.reportEventSafely("mon_trade_amountinput_fail", { ext3: e });
    }
  }
  function q(e, t) {
    var n = e.value;
    (null == d ? void 0 : d.value) &&
      r.$sdk.setContainerHeight({ height: t || 576 }),
      (A = !1),
      h(n);
  }
  return (
    t.watch(
      function () {
        return v.amount;
      },
      function (e, t) {
        f
          ? (f = !1)
          : (clearTimeout(l),
            (l = setTimeout(function () {
              g.value = "";
            }, 2e3)));
      }
    ),
    {
      manualAmountInputPlaceholder: t.computed(function () {
        return "--" === m.max_sell_qty
          ? ""
          : "最大可卖"
              .concat(m.max_sell_qty)
              .concat(s.value.quantityUnit || "");
      }),
      activeAmountLevel: T,
      amountPopoverText: g,
      setActiveAmountLevel: p,
      onAmountInput: h,
      onAmountFocus: function (t) {
        var n = u.getPlatform().isPCWeixin;
        (null == d ? void 0 : d.value) &&
          !n &&
          r.$sdk.setContainerHeight({ height: t || 1080 }),
          (A = !0),
          null == r ||
            r.$stat.click(
              "trade.trade.number.write",
              void 0,
              void 0,
              e.getStatStockId(s.value)
            );
      },
      onAmountBlur: q,
      onAmountOverlimit: function (e) {
        var t, n;
        if ("minus" === e) {
          g.value = "";
          var u;
          (u =
            null == (n = (t = s.value).getMinAmountTips) ? void 0 : n.call(t)),
            (g.value = u);
        }
        clearTimeout(l),
          (l = setTimeout(function () {
            g.value = "";
          }, 2e3));
      },
      onManualAmountInputBlur: function (e, t) {
        var n = e.detail;
        (n.value = String(+n.value)), q(n, t);
      },
    }
  );
};
