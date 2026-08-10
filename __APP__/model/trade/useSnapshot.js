require("../../app.js");
var e = require("../../service/aegis/utils.js"),
  o = require("../../common/vendor.js");
exports.useSnapshot = function () {
  var t = o.ref({}),
    r = o.ref(""),
    l = o.ref(""),
    n = o.ref(""),
    a = o.ref(""),
    u = o.ref(""),
    i = o.ref("");
  return {
    code: r,
    market: l,
    name: n,
    stockCls: a,
    holder: u,
    matchType: i,
    order: t,
    takeSnapshot: function (o) {
      var s, c, v, d, y, f, m, p;
      try {
        var h = o.stockOrder,
          T = o.stock,
          g = o.accountTradeInfo,
          k = o.accountTradeAuth;
        (t.value = {
          price: h.price,
          amount: h.amount,
          action: h.action,
          manualMoney: h.manualMoney,
          strategy: h.strategy,
          totalMoney: h.totalMoney,
          strategyText: h.strategyText,
          strategyShortText: h.strategyShortText,
          isBuyAction: h.isBuyAction,
          isSellAction: h.isSellAction,
          orderType: h.orderType,
        }),
          (r.value =
            null ==
            (c = null == (s = null == T ? void 0 : T.quote) ? void 0 : s.info)
              ? void 0
              : c.secu_code),
          (l.value =
            null ==
            (d = null == (v = null == T ? void 0 : T.quote) ? void 0 : v.info)
              ? void 0
              : d.market),
          (n.value =
            null ==
            (f = null == (y = null == T ? void 0 : T.quote) ? void 0 : y.info)
              ? void 0
              : f.name),
          (a.value =
            null ==
            (p = null == (m = null == T ? void 0 : T.quote) ? void 0 : m.info)
              ? void 0
              : p.class),
          (u.value = null == g ? void 0 : g.stockholder_code),
          (i.value = null == k ? void 0 : k.matchType);
      } catch (T) {
        e.reportEventSafely("mon_trade_snapshot_fail", { ext3: T });
      }
    },
  };
};
