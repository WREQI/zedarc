var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../utils/market.js"),
  i = require("../../../common/vendor.js"),
  n = require("../../../domain/applications/trade-stock/pre-check.js"),
  a = require("./useCheck.js"),
  u = require("../../../filters/money.js"),
  c = require("../../../utils/getPlatform.js"),
  o = require("../../../domain/applications/trade-stock/types.js"),
  s = require("../../../config/enum.js"),
  l = require("../../../service/aegis/utils.js");
exports.usePrice = function (p) {
  var v,
    d,
    f = null == (v = i.getCurrentInstance()) ? void 0 : v.proxy,
    h = i.inject("embeddedMode"),
    k = i.inject("trade"),
    m = k.order,
    g = k.orderCheckService,
    q = k.stock,
    T = !1,
    b = i.ref(""),
    S = i.ref("popover-tips-bg");
  function j(e, r) {
    (b.value = e), (S.value = "popover-".concat(r, "-bg"));
  }
  function C(e) {
    return P.apply(this, arguments);
  }
  function P() {
    return (P = r(
      e().mark(function r(t) {
        var i, u, c, v, d, f, h, b;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.prev = 0), j("", "tips"), !(+t <= 0) || T)) {
                    e.next = 5;
                    break;
                  }
                  p(t),
                    j("价格不能为0", "error"),
                    setTimeout(function () {
                      var e, r;
                      j("", "tips"),
                        (null ==
                        (r = null == (e = q.value) ? void 0 : e.secu_quote)
                          ? void 0
                          : r.dqj) && p(q.value.secu_quote.dqj);
                    }),
                    (e.next = 16);
                  break;
                case 5:
                  if (
                    !(
                      (String(t).split(".")[1] || "").length > q.value.spreadAcc
                    )
                  ) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt("return");
                case 7:
                  if ((p(t), !String(t).endsWith("."))) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return");
                case 9:
                  return (
                    (v = a.useCheck({
                      order: m,
                      checkScene: o.CheckScene.userInput,
                      tradeStockStore: k,
                    })),
                    (d = v.errorTips),
                    (f = v.checkPriceValidHandler),
                    (h = v.checkPriceHandler),
                    (b = null == (i = g.order) ? void 0 : i.action),
                    (null == (u = g.order) ? void 0 : u.strategy) ===
                      s.STRATEGY.AFTER_CLOSED &&
                      b === s.ACTION.BUY &&
                      (b = s.ACTION.AFTER_BUY),
                    (null == (c = g.order) ? void 0 : c.strategy) ===
                      s.STRATEGY.AFTER_CLOSED &&
                      b === s.ACTION.SELL &&
                      (b = s.ACTION.AFTER_SELL),
                    (e.next = 15),
                    n.checkPrice({
                      checkPriceValidHandler: f,
                      checkPriceHandler: h,
                      options: { specifiedAction: b },
                    })(g)
                  );
                case 15:
                  d &&
                    d.value &&
                    d.value.length > 0 &&
                    (j(d.value[0] ? d.value[0] : "", "error"), (d.value = []));
                case 16:
                  e.next = 21;
                  break;
                case 18:
                  (e.prev = 18),
                    (e.t0 = e.catch(0)),
                    l.reportEventSafely("mon_trade_priceinput_fail", {
                      ext3: e.t0,
                    });
                case 21:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[0, 18]]
        );
      })
    )).apply(this, arguments);
  }
  return (
    i.watch(
      function () {
        return m.price;
      },
      function (e, r) {
        if ("" === b.value || b.value.endsWith("%")) {
          var t = (function (e) {
            var r = (q.value.secu_quote || {}).dqj;
            return r && 0 != +r ? u.prefix(((+e - r) / r) * 100) : 0;
          })(e);
          j(
            0 === Number(t)
              ? ""
              : "".concat(
                  (function (e) {
                    var r = parseFloat(e);
                    if (isNaN(r)) return "";
                    var t = u.formatNoUnit(Math.abs(r));
                    return r < 0
                      ? "低于现价".concat(t, "%")
                      : r > 0
                      ? "高于现价".concat(t, "%")
                      : "";
                  })(t)
                ),
            "tips"
          );
        }
        clearTimeout(d),
          (d = setTimeout(function () {
            j("", "tips");
          }, 3e3));
      }
    ),
    {
      pricePopoverText: b,
      pricePopoverClass: S,
      onPriceInput: C,
      onPriceFocus: function (e) {
        var r = c.getPlatform().isPCWeixin;
        (null == h ? void 0 : h.value) &&
          !r &&
          f.$sdk.setContainerHeight({ height: e || 1080 }),
          (T = !0),
          null == f ||
            f.$stat.click(
              "trade.trade.entrust.write",
              void 0,
              void 0,
              t.getStatStockId(q.value)
            );
      },
      onPriceBlur: function (e, r) {
        var t = e.value;
        (null == h ? void 0 : h.value) &&
          f.$sdk.setContainerHeight({ height: r || 576 }),
          (T = !1),
          C(t);
      },
    }
  );
};
