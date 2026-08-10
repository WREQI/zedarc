var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../config/enum.js"),
  o = require("../../../common/vendor.js"),
  r = require("../../../service/stat/mp-weixin.js"),
  a = require("../../../utils/getPlatform.js"),
  u = require("../../../stores/app/useMode.js"),
  c = require("../../../config/enum/getTmplIds.js"),
  i = require("../../../utils/market.js");
require("../../../service/broker.js");
var l = require("../../../model/trade/utils.js"),
  s = require("../../../common/components/Dialog/index.js"),
  d = require("../../../service/aegis/platform/not-wujie.js"),
  v = require("../../../service/aegis/utils.js"),
  m = require("../../../config/broker/11100/index.js");
exports.createTradeConfirmDialog = function () {
  return {
    emits: ["input", "close"],
    props: {
      value: { type: Boolean, default: !1 },
      fundaccount: { type: String, default: "" },
      showEmbeddedHeader: { type: Boolean, default: !1 },
      tradeMode: { type: String, default: n.TRADE_MODE.STANDARD },
    },
    setup: function (p, f) {
      var k,
        g,
        T,
        _ = f.emit,
        h = a.getPlatform().isMpPlugin,
        b = o.inject("trade"),
        y = b.code,
        E = b.market,
        x = b.action,
        S = b.amount,
        A = b.isKCB,
        C = b.checkTradeRequest,
        q = b.isTrading,
        D = b.showConfirmation,
        M = b.errorTips,
        j = b.tradeAuth,
        R = (b.order, b.stock),
        w = b.snapshot,
        B = w.order,
        I = w.name,
        P = w.code,
        G = w.market,
        H = w.holder,
        L = w.matchType;
      try {
        o.isEmpty(B.value) &&
          (null ==
            (T =
              null == (g = null == (k = d.aegisReporter) ? void 0 : k.sdk)
                ? void 0
                : g.error) ||
            T.call(g, "mon_trade_snapshot_empty"));
      } catch (e) {}
      var Y = o.computed(function () {
          return B.value.price;
        }),
        N = o.computed(function () {
          return B.value.amount;
        }),
        O = o.computed(function () {
          return B.value.strategy;
        }),
        K = o.inject("embeddedMode"),
        F = c.getTmplIds(),
        U = o.ref(!1),
        z = o.computed(function () {
          return B.value.isBuyAction ? "买入" : "卖出";
        }),
        J = o.computed(function () {
          var e;
          if (!R.value.isGGT) return z.value;
          var t =
              null == (e = j.ggtShareHolderCardList)
                ? void 0
                : e.find(function (e) {
                    return e.stockholder_code === H.value;
                  }),
            o = n.ORDER_DESC_LABEL[B.value.orderType],
            r = z.value;
          return (
            o && (r = "".concat(o, "-").concat(z.value)),
            t &&
              (r = ""
                .concat(
                  l.formatGGTStockHolderMarket(
                    null == t ? void 0 : t.stockholder_code
                  ),
                  "-"
                )
                .concat(r)),
            r
          );
        }),
        Q = o.computed(function () {
          return U.value
            ? "正在".concat(z.value, "...")
            : "确认".concat(z.value);
        }),
        V = o.computed(function () {
          return U.value
            ? "正在".concat(z.value, "...")
            : M.value.length || (null == K ? void 0 : K.value)
            ? "确认".concat(z.value)
            : z.value;
        }),
        W = o.computed(function () {
          return !(!M.value || !M.value.length);
        }),
        X = o.computed(function () {
          return o.get(R.value.quote || {}, "stock_cls", "");
        }),
        Z = u.useModeStore(),
        $ = o.storeToRefs(Z).simpleMode;
      function ee() {
        (q.value = !1), (M.value = []), _("input", !1);
      }
      function te() {
        return ne.apply(this, arguments);
      }
      function ne() {
        return (ne = t(
          e().mark(function t() {
            var o, a, u, c, l, d, m;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        +y.value == +P.value && +E.value == +G.value)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (
                        v.reportEventSafely("mon_trade_snapshot_stock_change", {
                          ext3: "".concat(y.value, "-").concat(P.value),
                          ext4: "".concat(E.value, "-").concat(G.value),
                        }),
                        (e.next = 5),
                        new Promise(function (e) {
                          s.Dialog({
                            message: "检测到当前股票有变化，请重新提交",
                            showCancelButton: !0,
                            cancelButtonText: "继续提交",
                            confirmButtonText: "我知道了",
                            onCancel: function () {
                              e(!0);
                            },
                            onConfirm: function () {
                              e(!1);
                            },
                          });
                        })
                      );
                    case 5:
                      if (e.sent) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      +x.value != +B.value.action &&
                        v.reportEventSafely(
                          "mon_trade_snapshot_action_change",
                          {
                            ext3: ""
                              .concat(x.value, "-")
                              .concat(B.value.action),
                          }
                        ),
                        +S.value != +B.value.amount &&
                          v.reportEventSafely(
                            "mon_trade_snapshot_amount_change",
                            {
                              ext3: ""
                                .concat(S.value, "-")
                                .concat(B.value.amount),
                            }
                          ),
                        r.stat.click(
                          "trade.trade.".concat(
                            B.value.isBuyAction ? "buy" : "sell",
                            "confirmdialog.confirm"
                          ),
                          void 0,
                          void 0,
                          {
                            stock_cls: X.value,
                            stockid:
                              null == (o = i.getStatStockId(R.value))
                                ? void 0
                                : o.stockid,
                            trade_mode:
                              null == (a = p.tradeMode || n.TRADE_MODE.STANDARD)
                                ? void 0
                                : a.toLowerCase(),
                          }
                        ),
                        (e.next = 12);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0));
                    case 12:
                      if (
                        ($.value && !K.value && _("input", !1),
                        q.value || (q.value = !0),
                        !U.value)
                      ) {
                        e.next = 16;
                        break;
                      }
                      v.reportEventSafely("mon_trade_btnlaoding_disable_fail", {
                        ext3: y.value,
                      }),
                        (e.next = 25);
                      break;
                    case 16:
                      if (((U.value = !0), h))
                        try {
                          (d =
                            (null ==
                            (l =
                              null ==
                              (c =
                                null == (u = requireMiniProgram())
                                  ? void 0
                                  : u.main2Plugin)
                                ? void 0
                                : c.call(u))
                              ? void 0
                              : l.subscribe()) || {}),
                            (0, d.requestSubscribe)({
                              tmplIds: [F.TRADE_SUCESS, F.TRADE_FAIL],
                            });
                        } catch (e) {}
                      return (e.prev = 17), (e.next = 20), C();
                    case 20:
                      "pwd_oncancel" ===
                        (null == (m = e.sent) ? void 0 : m.retcode) &&
                        K.value &&
                        !h &&
                        _("input", !1),
                        K.value ||
                          ("pwd_oncancel" ===
                            (null == m ? void 0 : m.retcode) &&
                            _("cancelTrade"));
                    case 22:
                      return (e.prev = 22), (U.value = !1), e.finish(22);
                    case 25:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [
                [0, 10],
                [17, , 22, 25],
              ]
            );
          })
        )).apply(this, arguments);
      }
      return (
        o.watch(
          function () {
            return q.value;
          },
          function (e) {
            !1 === e && (U.value = !1);
          }
        ),
        {
          STRATEGY: n.STRATEGY,
          TRADE_MATCH_TYPE: n.TRADE_MATCH_TYPE,
          broker: m.brokerConfig,
          stockName: I,
          stockCode: P,
          stockMarket: G,
          price: Y,
          amount: N,
          strategy: O,
          isKCB: A,
          errorTips: M,
          authInfo: j,
          order: B,
          stockInfo: R,
          embeddedMode: K,
          loading: U,
          actionText: z,
          orderDesc: J,
          emeddedConfirmButtonText: Q,
          buttonText: V,
          isErrorTips: W,
          simpleMode: $,
          onClose: ee,
          onClickMatchType: function () {
            _("input", !1), (q.value = !1), (D.value = !0);
          },
          onConfirm: te,
          beforeClose: function (e, t) {
            var n;
            "confirm" === e
              ? K.value
                ? te().then(function () {
                    t();
                  })
                : (t(), te())
              : (r.stat.click(
                  "trade.trade.".concat(
                    B.value.isBuyAction ? "buy" : "sell",
                    "confirmdialog.cancel"
                  ),
                  void 0,
                  void 0,
                  {
                    stock_cls: X.value,
                    stockid:
                      null == (n = i.getStatStockId(R.value))
                        ? void 0
                        : n.stockid,
                  }
                ),
                t());
          },
          backAndClose: function () {
            ee(), _("close");
          },
          matchType: L,
        }
      );
    },
  };
};
