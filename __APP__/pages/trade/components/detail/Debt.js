require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  a = require("../../../../model/trade/useDetai.js"),
  t = require("../../../../config/enum.js"),
  o = require("../../../../filters/date.js"),
  r = require("../../../../model/trade/utils.js"),
  i = require("../../../../filters/money.js"),
  s = t.TRADE_STATE[t.TARGET.DEBT],
  n = {
    components: {
      StSteps: function () {
        return "../../../../common/components/Steps/index.js";
      },
    },
    setup: function () {
      var n = e.getCurrentInstance().proxy,
        l = a.useDetail(),
        c = l.fetchWebsocket,
        u = l.data,
        m = l.unit,
        d = l.revokable,
        p = l.revoking,
        f = l.hasRevokingFlag,
        v = l.onCancel,
        D = l.buildStep,
        h = l.shouldDisplayOrderTotalMoney,
        k = l.shouldDisplayMatchDetail,
        _ = l.shouldDisplayFees,
        y = l.fetchDetail,
        T = l.typeDesc,
        E = l.fetchDetailTag,
        x = e.ref(0),
        Y = e.computed(function () {
          var e = u.value,
            a = e.trade_time,
            i = void 0 === a ? "" : a,
            l = e.end_time,
            c = void 0 === l ? "" : l,
            m = e.cancel_time,
            d = void 0 === m ? "" : m,
            p = e.has_cashin,
            f = e.cashin_time,
            v = o.format(i, "YYYY-MM-DD HH:mm:ss"),
            h = o.format(c, "YYYY-MM-DD HH:mm:ss"),
            k = o.format(d, "YYYY-MM-DD HH:mm:ss"),
            _ = o.format(1e3 * f, "YYYY-MM-DD HH:mm:ss"),
            y = r.getFinalTradeState(u.value),
            T = [],
            E = n.$route.query.balance_status;
          if (E && E > -1)
            switch (E) {
              case t.BALANCE_STATE.INTERST_RECEIVED:
                (T = D(
                  ["委托下单", "交易中", "本息到账"],
                  [v, "", _],
                  ["pen", "more", "tick"]
                )),
                  (x.value = 2);
                break;
              case t.BALANCE_STATE.LIVE:
                (T = D(
                  ["委托下单", "生息中", "本息到账"],
                  [v, "", ""],
                  ["pen", "more", "tick"]
                )),
                  (x.value = 1);
                break;
              case t.BALANCE_STATE.RECEIVE_TODAY:
                (T = D(
                  ["委托下单", "今日到账", "本息到账"],
                  [v, "", ""],
                  ["pen", "more", "tick"]
                )),
                  (x.value = 1);
            }
          else
            switch (y) {
              case s.WIP:
                (T = D(
                  ["委托下单", "交易中", "全部成交"],
                  [v, "", h],
                  ["pen", "more", "tick"]
                )),
                  (x.value = 1);
                break;
              case s.PROCESSED:
                (T =
                  "1" === p
                    ? D(
                        ["委托下单", "交易中", "本息到账"],
                        [v, "", _],
                        ["pen", "more", "tick"]
                      )
                    : D(
                        ["委托下单", "交易中", "全部成交"],
                        [v, "", h],
                        ["pen", "more", "tick"]
                      )),
                  (x.value = 2);
                break;
              case s.NOTTRADEED:
                (T = D(
                  ["委托下单", "交易中", "未成交"],
                  [v, "", h],
                  ["pen", "more", "exclamation"]
                )),
                  (x.value = 2);
                break;
              case s.PARTLY:
                (T =
                  "1" === p
                    ? D(
                        ["委托下单", "交易中", "本息到账"],
                        [v, "", _],
                        ["pen", "more", "tick"]
                      )
                    : D(
                        ["委托下单", "交易中", "部分成交"],
                        [v, "", h],
                        ["pen", "more", "tick"]
                      )),
                  (x.value = 2);
                break;
              case s.FAILED:
                (T = D(
                  ["委托下单", "交易中", "委托无效"],
                  [v, "", h],
                  ["pen", "more", "exclamation"]
                )),
                  (x.value = 2);
                break;
              case s.REVOKING:
                (T = D(
                  ["委托下单", "撤单", "完成撤单"],
                  [v, k, ""],
                  ["pen", "more", "revoke"]
                )),
                  (x.value = 1);
                break;
              case s.REVOKED:
                (T = D(
                  ["委托下单", "撤单", "完成撤单"],
                  [v, k, h],
                  ["pen", "more", "revoke"]
                )),
                  (x.value = 2);
                break;
              case s.REVOKINGPARTLY:
                (T = D(
                  ["委托下单", "撤单", "部成部撤"],
                  [v, k, ""],
                  ["pen", "more", "revoke"]
                )),
                  (x.value = 1);
                break;
              case s.REVOKEDPARTLY:
                (T = D(
                  ["委托下单", "撤单", "部成部撤"],
                  [v, k, h],
                  ["pen", "more", "revoke"]
                )),
                  (x.value = 2);
                break;
              case s.WATITING:
                (T = D(
                  ["委托下单", "等待开市", "全部成交"],
                  [v, "", h],
                  ["pen", "more", "tick"]
                )),
                  (x.value = 1);
                break;
              default:
                x.value = 0;
            }
          return T;
        }),
        M = e.computed(function () {
          return u.value.trade_state === s.FAILED;
        }),
        b = e.computed(function () {
          return isNaN(u.value.expect_income) || isNaN(u.value.commis_fee)
            ? "--"
            : e.__CJS__export_reduce__(
                u.value.expect_income,
                u.value.commis_fee
              );
        }),
        g = e.computed(function () {
          return !e.isEmpty(u.value);
        });
      function A() {
        var a,
          t,
          o = n.$route.query,
          r = o.no,
          i = o.from,
          s = n.$route.query,
          l = s.id,
          c = s.time;
        "msg" === i &&
          (null == (t = null == (a = e.dayjs.unix(c)) ? void 0 : a.isValid)
            ? void 0
            : t.call(a)) &&
          ((l = r), (c = e.dayjs.unix(c).format("YYYY-MM-DD HH:mm"))),
          y({ id: l, no: r, time: c }),
          E({ no: r, time: c });
      }
      return (
        e.onMounted(function () {
          A();
        }),
        {
          data: u,
          unit: m,
          stepFlowData: Y,
          stepCurrent: x,
          shouldDisplayMatchDetail: k,
          shouldDisplayFees: _,
          shouldDisplayOrderTotalMoney: h,
          shouldShowFailTip: M,
          revokable: d,
          revoking: p,
          hasRevokingFlag: f,
          netExpectedIncome: b,
          fetchWebsocket: c,
          onCancel: v,
          handleToQuote: function () {
            g.value && e.index.navToQuote(u.value);
          },
          formatBalanceMoney: i.formatBalanceMoney,
          fetchData: A,
          typeDesc: T,
          canJump: g,
        }
      );
    },
  };
Array || e.resolveComponent("st-steps")();
var l = e._export_sfc(n, [
  [
    "render",
    function (a, t, o, r, i, s) {
      return e.e(
        {
          a: e.t(r.data.name || ""),
          b: e.t(r.data.code || ""),
          c: e.t(a.$filters.marketId(r.data.market, ".")),
          d: r.typeDesc,
        },
        r.typeDesc ? { e: e.t(r.typeDesc) } : {},
        { f: r.canJump },
        (r.canJump, {}),
        {
          g: e.o(function () {
            return r.handleToQuote && r.handleToQuote.apply(r, arguments);
          }),
          h: e.p({ current: r.stepCurrent, steps: r.stepFlowData }),
          i: r.shouldDisplayFees,
        },
        r.shouldDisplayFees
          ? e.e(
              {
                j: e.t(r.formatBalanceMoney(r.data.order_amount)),
                k: e.t(
                  a.$filters.postfix(
                    a.$filters.defaults(r.data.order_price),
                    "%"
                  )
                ),
                l: e.n(r.shouldDisplayMatchDetail ? "border-right" : ""),
                m: r.shouldDisplayMatchDetail,
              },
              r.shouldDisplayMatchDetail
                ? {
                    n: e.t(r.formatBalanceMoney(r.data.matched_amount)),
                    o: e.t(
                      a.$filters.postfix(
                        a.$filters.defaults(r.data.trade_avg_price),
                        "%"
                      )
                    ),
                  }
                : {}
            )
          : {},
        { p: r.shouldDisplayOrderTotalMoney },
        r.shouldDisplayOrderTotalMoney
          ? {
              q: e.t(
                a.$filters.prefix(
                  a.$filters.format.toCurrency(
                    a.$filters.defaults(r.data.order_amount)
                  ),
                  "￥"
                )
              ),
            }
          : {},
        { r: r.shouldDisplayFees },
        r.shouldDisplayFees
          ? e.e(
              { s: "1" === r.data.has_cashin },
              "1" === r.data.has_cashin
                ? {
                    t: e.t(
                      a.$filters.prefix(
                        a.$filters.format.toCurrency(
                          a.$filters.defaults(r.data.cashin_amount)
                        ),
                        "￥"
                      )
                    ),
                  }
                : r.data.cashin_time
                ? {
                    w: e.t(
                      a.$filters.time.format(
                        1e3 * r.data.cashin_time,
                        "YYYY年MM月DD日到账"
                      )
                    ),
                  }
                : {},
              { v: !r.data.cashin_time, x: r.data.expect_income },
              r.data.expect_income
                ? {
                    y: e.t(
                      a.$filters.postfix(
                        a.$filters.format.toCurrency(r.data.expect_income),
                        "元"
                      )
                    ),
                  }
                : {},
              { z: r.data.commis_fee },
              r.data.commis_fee
                ? {
                    A: e.t(
                      a.$filters.postfix(
                        a.$filters.prefix(
                          a.$filters.format.toCurrency(r.data.commis_fee),
                          "-"
                        ),
                        "元"
                      )
                    ),
                  }
                : {},
              { B: r.data.expect_income && r.data.commis_fee },
              r.data.expect_income && r.data.commis_fee
                ? {
                    C: e.t(
                      a.$filters.postfix(
                        a.$filters.format.toCurrency(r.netExpectedIncome),
                        "元"
                      )
                    ),
                  }
                : {}
            )
          : {},
        { D: r.revokable || r.revoking },
        r.revokable || r.revoking
          ? e.e(
              { E: r.revokable || r.revoking },
              r.revokable || r.revoking
                ? {
                    F: e.t(r.hasRevokingFlag || r.revoking ? "撤单中" : "撤单"),
                    G: r.hasRevokingFlag || r.revoking,
                    H: e.o(function () {
                      return r.onCancel && r.onCancel.apply(r, arguments);
                    }),
                  }
                : {}
            )
          : {},
        { I: r.shouldShowFailTip },
        (r.shouldShowFailTip, {})
      );
    },
  ],
]);
wx.createComponent(l);
