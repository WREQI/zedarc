var e,
  r = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  i = require("../../../../model/trade/useDetai.js"),
  s = require("../../../../config/enum.js"),
  l = require("../../../../filters/date.js"),
  u = require("../../../../service/log/index.js"),
  c = require("../../../../common/components/Dialog/index.js"),
  d = require("../../../../model/trade/utils.js"),
  p = require("../../../../cgi/trade.js"),
  f = require("../../../../filters/money.js"),
  v = new u.Log(),
  m = s.TRADE_STATE[s.TARGET.ALLOT],
  g =
    (o((e = { DEFAULT: ["根据", ""] }), s.MARKET.SA, ["深交所", "深市"]),
    o(e, s.MARKET.HA, ["上交所", "沪市"]),
    e),
  h = {
    components: {
      StSteps: function () {
        return "../../../../common/components/Steps/index.js";
      },
    },
    setup: function () {
      var e,
        o = n.inject("curPageContext"),
        s = n.getCurrentInstance().proxy,
        u = i.useDetail(),
        h = u.fetchWebsocket,
        k = u.data,
        _ = u.unit,
        T = u.revokable,
        D = u.revoking,
        y = u.hasRevokingFlag,
        M = u.onCancel,
        b = u.handleToQuote,
        x = u.buildStep,
        A = u.shouldDisplayMatchDetail,
        C = u.shouldDisplayFees,
        E = u.shouldDisplayOrderTotalMoney,
        O = u.handleExplainAvgPrice,
        $ = n.ref(0),
        q = n.computed(function () {
          var e = k.value,
            r = e.pg_order_date,
            t = void 0 === r ? "" : r,
            a = e.pg_confirm_date,
            o = void 0 === a ? "" : a,
            n = t ? l.format(t, "YYYY-MM-DD HH:mm:ss") : " ",
            i = o ? l.format(o, "YYYY-MM-DD HH:mm:ss") : " ",
            s = [];
          switch (d.getFinalTradeState(k.value)) {
            case m.NO_COMMIT:
              (s = x(
                ["配股申购", "券商确认", "申购成功"],
                [n, "", ""],
                ["pen", "more", "tick"]
              )),
                ($.value = 0);
              break;
            case m.COMMITED:
              (s = x(
                ["配股申购", "券商确认", "申购成功"],
                [n, "", ""],
                ["pen", "more", "tick"]
              )),
                ($.value = 1);
              break;
            case m.COMFIRMED:
              (s = x(
                ["配股申购", "撤单中", "申购成功"],
                [n, "", i],
                ["pen", "more", "tick"]
              )),
                ($.value = 2);
              break;
            case m.COMMITED_NOT_DRAWN:
              (s = x(
                ["配股申购", "券商确认", "申购成功"],
                [n, "", ""],
                ["pen", "more", "tick"]
              )),
                ($.value = 1);
              break;
            case m.WITHDRAW_COMMITTING:
              (s = x(
                ["配股申购", "撤单中", "全部撤单"],
                [n, "", ""],
                ["pen", "more", "revoke"]
              )),
                ($.value = 1);
              break;
            case m.WITHDRAW_FINISHED:
              (s = x(
                ["配股申购", "撤单中", "全部撤单"],
                [n, "", ""],
                ["pen", "more", "revoke"]
              )),
                ($.value = 2);
              break;
            default:
              (s = x(
                ["配股申购", "", ""],
                [n, "", ""],
                ["pen", "more", "tick"]
              )),
                ($.value = 0);
          }
          return s;
        }),
        R = n.computed(function () {
          return (
            (k.value.order_price &&
              k.value.order_num &&
              n
                .__CJS__export_mul__(k.value.order_price, k.value.order_num)
                .toFixed(2)) ||
            ""
          );
        });
      function F() {
        var e = s.$route.query,
          r = e.id,
          t = e.no,
          a = e.time;
        setTimeout(function () {
          h({ id: r, no: t, time: a });
        }, 100);
      }
      return (
        n.watch(
          function () {
            return k.value.code;
          },
          (function () {
            var e = a(
              t().mark(function e(r) {
                var a;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          p.tradeCgi.getPgStock({ code: r, action: "1" })
                        );
                      case 2:
                        (a = e.sent).pgstock &&
                          a.pgstock.length > 0 &&
                          ((k.value.pg_order_date = a.pgstock[0].pg_order_date),
                          (k.value.pg_confirm_date =
                            a.pgstock[0].pg_confirm_date));
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })()
        ),
        n.onMounted(function () {
          F();
        }),
        {
          STATE: m,
          data: k,
          unit: _,
          stepFlowData: q,
          stepCurrent: $,
          shouldDisplayMatchDetail: A,
          shouldDisplayFees: C,
          shouldDisplayOrderTotalMoney: E,
          orderTotalMoney: R,
          revokable: T,
          revoking: D,
          hasRevokingFlag: y,
          handleCancel:
            ((e = a(
              t().mark(function e() {
                var a, n, i, s, l, u;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = k.value),
                            (n = a.trade_state),
                            (i = a.market),
                            n !== m.COMMITED_NOT_DRAWN)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (
                            (s = r(g[i], 2)),
                            (l = s[0]),
                            (u = s[1]),
                            e.abrupt(
                              "return",
                              (v.warn(
                                "ignored[order is now unrevokable state]"
                              ),
                              void c.Dialog({
                                context: o,
                                message: ""
                                  .concat(l, "规定：")
                                  .concat(u, "配股一经申请，无法撤单"),
                              }))
                            )
                          );
                        case 4:
                          return (e.prev = 4), (e.next = 7), M();
                        case 7:
                          e.next = 11;
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(4));
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 9]]
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            }),
          handleToQuote: b,
          fetchWebsocket: h,
          formatNoUnit: f.formatNoUnit,
          fetchData: F,
          handleExplainAvgPrice: O,
        }
      );
    },
  };
Array || n.resolveComponent("st-steps")();
var k = n._export_sfc(h, [
  [
    "render",
    function (e, r, t, a, o, i) {
      return n.e(
        {
          a: n.t(a.data.name || ""),
          b: n.t(a.data.code || ""),
          c: n.t(e.$filters.marketId(a.data.market, ".")),
          d: n.o(function () {
            return a.handleToQuote && a.handleToQuote.apply(a, arguments);
          }),
          e: n.p({ current: a.stepCurrent, steps: a.stepFlowData }),
          f: n.t(
            e.$filters.postfix(
              e.$filters.defaults(a.data.order_price),
              "元/" + a.unit
            )
          ),
          g: n.t(
            e.$filters.postfix(a.formatNoUnit(a.data.order_num, !1, 0), a.unit)
          ),
          h: n.n(a.shouldDisplayMatchDetail ? "border-right" : ""),
          i: a.shouldDisplayMatchDetail,
        },
        a.shouldDisplayMatchDetail
          ? {
              j: n.o(function () {
                return (
                  a.handleExplainAvgPrice &&
                  a.handleExplainAvgPrice.apply(a, arguments)
                );
              }),
              k: n.t(
                e.$filters.postfix(
                  e.$filters.defaults(a.data.order_price),
                  "元/" + a.unit
                )
              ),
              l: n.t(
                e.$filters.postfix(
                  a.formatNoUnit(a.data.order_num, !1, 0),
                  a.unit
                )
              ),
            }
          : {},
        { m: a.shouldDisplayOrderTotalMoney },
        a.shouldDisplayOrderTotalMoney
          ? {
              n: n.t(
                e.$filters.prefix(
                  e.$filters.format.toCurrency(
                    e.$filters.defaults(a.orderTotalMoney)
                  ),
                  "￥"
                )
              ),
            }
          : {},
        { o: a.shouldDisplayFees },
        a.shouldDisplayFees
          ? n.e(
              {
                p: n.t(
                  e.$filters.prefix(
                    e.$filters.format.toCurrency(
                      e.$filters.defaults(a.orderTotalMoney)
                    ),
                    "￥"
                  )
                ),
                q: n.t(
                  e.$filters.postfix(
                    e.$filters.format.toCurrency(
                      e.$filters.defaults(a.orderTotalMoney)
                    ),
                    "元"
                  )
                ),
                r: a.data.trade_brokerage,
              },
              (a.data.trade_brokerage, {})
            )
          : {},
        { s: a.revokable || a.revoking },
        a.revokable || a.revoking
          ? n.e(
              {
                t:
                  a.revokable ||
                  a.revoking ||
                  a.data.trade_state === a.STATE.COMMITED_NOT_DRAWN,
              },
              a.revokable ||
                a.revoking ||
                a.data.trade_state === a.STATE.COMMITED_NOT_DRAWN
                ? {
                    v: n.t(a.hasRevokingFlag || a.revoking ? "撤单中" : "撤单"),
                    w: a.hasRevokingFlag || a.revoking,
                    x: n.o(function () {
                      return (
                        a.handleCancel && a.handleCancel.apply(a, arguments)
                      );
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(k);
