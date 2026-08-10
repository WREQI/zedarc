var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  a = require("../../../../model/trade/useDetai.js"),
  r = require("../../../../config/enum.js"),
  o = require("../../../../filters/date.js");
require("../../../../service/broker.js");
var i = require("../../../../model/trade/utils.js"),
  n = require("../../../../stores/user/useUserinfo.js"),
  s = require("../../../../filters/money.js");
require("../../../../service/aegis/platform/not-wujie.js");
var l = require("../../../../config/broker/11100/index.js"),
  u = r.TRADE_STATE[r.TARGET.STOCK],
  d = {
    components: {
      StSteps: function () {
        return "../../../../common/components/Steps/index.js";
      },
    },
    setup: function () {
      var d = t.getCurrentInstance().proxy,
        c = n.useUserinfoStore(),
        p = a.useDetail(),
        f = p.fetchWebsocket,
        m = p.data,
        T = p.unit,
        v = p.revokable,
        _ = p.revoking,
        h = p.hasRevokingFlag,
        E = p.onCancel,
        k = p.handleToQuote,
        D = p.buildStep,
        y = p.shouldDisplayFees,
        g = p.shouldDisplayMatchDetail,
        A = p.shouldDisplayOrderTotalMoney,
        b = p.shouldShowPriceUnit,
        C = p.typeDesc,
        x = p.fetchDetailTag,
        S = p.handleExplainAvgPrice,
        M = t.ref(0),
        O = t.computed(function () {
          var e = m.value,
            t = e.trade_time,
            a = void 0 === t ? "" : t,
            n = e.end_time,
            s = void 0 === n ? "" : n,
            l = e.cancel_time,
            d = void 0 === l ? "" : l,
            c = e.trade_type,
            p = e.trade_state,
            f = o.format(a, "YYYY-MM-DD HH:mm:ss"),
            T = o.format(s, "YYYY-MM-DD HH:mm:ss");
          o.format(d, "YYYY-MM-DD HH:mm:ss");
          var v = "委托".concat(r.ACTION_TEXT[r.TARGET.STOCK][c] || ""),
            _ = i.getFinalTradeState(m.value),
            h = m.value.isAfterTrade,
            E = "",
            k = [];
          switch (_) {
            case u.WIP:
              (k = D(
                [v, "交易", "全部成交"],
                [f, "", T],
                ["pen", "more", "tick"]
              )),
                (M.value = 1);
              break;
            case u.PROCESSED:
              (k = D(
                [v, "交易", "全部成交"],
                [f, "", T],
                ["pen", "more", "tick"]
              )),
                (M.value = 2);
              break;
            case u.NOTTRADEED:
              (k = D(
                [v, "交易", "未成交"],
                [f, "", T],
                ["pen", "more", "exclamation"]
              )),
                (M.value = 2);
              break;
            case u.PARTLY:
              (k = D(
                [v, "交易", "部分成交"],
                [f, "", T],
                ["pen", "more", "tick"]
              )),
                (M.value = 2);
              break;
            case u.FAILED:
              (k = D(
                [v, "交易", "委托无效"],
                [f, "", T],
                ["pen", "more", "exclamation"]
              )),
                (M.value = 2);
              break;
            case u.REVOKING:
              (k = D(
                [v, "撤单", "撤单成功"],
                [f, "", ""],
                ["pen", "more", "tick"]
              )),
                (M.value = 1);
              break;
            case u.REVOKED:
              (k = D(
                [v, "撤单", "撤单成功"],
                [f, "", T],
                ["pen", "more", "tick"]
              )),
                (M.value = 2);
              break;
            case u.REVOKINGPARTLY:
              (k = D(
                [v, "撤单", "部成部撤"],
                [f, "", ""],
                ["pen", "more", "tick"]
              )),
                (M.value = 1);
              break;
            case u.REVOKEDPARTLY:
              (k = D(
                [v, "撤单", "部成部撤"],
                [f, "", T],
                ["pen", "more", "tick"]
              )),
                (M.value = 2);
              break;
            case u.WATITING:
              (E = "等待开市"),
                h && p === u.WATITING && (E = "待盘后交易"),
                (k = D(
                  [v, E, "全部成交"],
                  [f, "", T],
                  ["pen", "more", "tick"]
                )),
                (M.value = 1);
              break;
            default:
              M.value = 0;
          }
          return (
            h &&
              (k[0].text = ""
                .concat(
                  k[0].text,
                  '<span class="after-trade-label" data-action="'
                )
                .concat(c, '">盘后</span>')),
            k
          );
        }),
        G = t.computed(function () {
          return (
            (m.value.order_price &&
              m.value.order_num &&
              t
                .__CJS__export_mul__(m.value.order_price, m.value.order_num)
                .toFixed(2)) ||
            ""
          );
        }),
        $ = t.computed(function () {
          return m.value.isBuyAction;
        }),
        U = t.computed(function () {
          return m.value.trade_state === u.FAILED;
        }),
        R = t.computed(function () {
          return m.value.isAfterTrade;
        }),
        F = t.storeToRefs(c).userinfo,
        I = t.computed(function () {
          var e;
          return (
            (null == (e = l.brokerConfig.trade.commissionTip)
              ? void 0
              : e[m.value.market]) || l.brokerConfig.trade.commissionTip
          );
        }),
        w = t.computed(function () {
          var e;
          return (
            (null == (e = I.value) ? void 0 : e.tip) ||
            "根据开户佣金费率万分之2.5估算，单笔交易最低5元"
          );
        }),
        N = t.computed(function () {
          var e;
          return (
            (null == (e = I.value) ? void 0 : e.replenishTip) ||
            "若有佣金调整，实际费用以对账单为准"
          );
        }),
        Y = t.computed(function () {
          var e, t, a;
          return (
            (null == (e = l.brokerConfig.trade.commissionTip)
              ? void 0
              : e.show) &&
            m.value.stock_type !== r.TARGET.BOND &&
            (null == (t = F.value) ? void 0 : t.userstate) ===
              r.USERSTATE.HASACCOUNT &&
            (m.value.market !== r.MARKET.HK ||
              !!(null == (a = l.brokerConfig.trade.commissionTip)
                ? void 0
                : a[r.MARKET.HK]))
          );
        }),
        L = t.computed(function () {
          var e,
            t,
            a,
            o,
            i =
              null ==
              (t = null == (e = l.brokerConfig.dictionary) ? void 0 : e.Enties)
                ? void 0
                : t.charge,
            n = !!i && !i.hidden;
          return "10800" ===
            String(null == (a = l.brokerConfig.base) ? void 0 : a.code) && n
            ? (null == (o = F.value) ? void 0 : o.userstate) ===
                r.USERSTATE.HASACCOUNT
            : !j.value;
        }),
        j = t.computed(function () {
          return m.value.market === r.MARKET.HK;
        }),
        H = t.computed(function () {
          var t;
          return ((t = {}),
          e(t, r.ACTION.AUO_BUY, "竞价限价盘"),
          e(t, r.ACTION.AUO_SELL, "竞价限价盘"),
          e(t, r.ACTION.ELO_BUY, "增强限价盘"),
          e(t, r.ACTION.ELO_SELL, "增强限价盘"),
          e(t, r.ACTION.ODD_LOT_ELO_BUY, "碎股单"),
          e(t, r.ACTION.ODD_LOT_ELO_SELL, "碎股单"),
          t)[m.value.trade_type];
        }),
        P = t.computed(function () {
          return j.value ? "港元" : "元";
        }),
        q = t.computed(function () {
          return i.formatGGTStockHolderMarket(m.value.stockholder_code);
        }),
        K = t.computed(function () {
          return !t.isEmpty(m.value);
        });
      function B() {
        var e = d.$route.query,
          t = e.id,
          a = e.no,
          r = e.time;
        f({ id: t, no: a, time: r }), x({ no: a, time: r });
      }
      var W = null;
      return (
        t.onMounted(function () {
          W = setTimeout(function () {
            B();
          }, 100);
        }),
        t.onBeforeUnmount(function () {
          W && (clearTimeout(W), (W = null));
        }),
        {
          data: m,
          unit: T,
          stepFlowData: O,
          stepCurrent: M,
          shouldDisplayMatchDetail: g,
          shouldDisplayFees: y,
          shouldDisplayOrderTotalMoney: A,
          shouldShowPriceUnit: b,
          orderTotalMoney: G,
          isBuy: $,
          shouldShowFailTip: U,
          afterTrade: R,
          broker: l.brokerConfig,
          revokable: v,
          revoking: _,
          hasRevokingFlag: h,
          commissionTip: w,
          TARGET: r.TARGET,
          USERSTATE: r.USERSTATE,
          showCommissionTip: Y,
          FEE_MODE: r.FEE_MODE,
          onCancel: E,
          handleToQuote: k,
          fetchWebsocket: f,
          handleExplain: function () {
            var e,
              t,
              a =
                null ==
                (t =
                  null == (e = l.brokerConfig.dictionary) ? void 0 : e.Enties)
                  ? void 0
                  : t.charge;
            !a || a.hidden
              ? d.$router.push({ name: "TradeDetailTip" })
              : d.$router.push({ name: "AccountCharge" });
          },
          formatNoUnit: s.formatNoUnit,
          fetchData: B,
          isShowExplain: L,
          replenishTip: N,
          typeDesc: C,
          handleExplainAvgPrice: S,
          orderTypeText: H,
          isGGT: j,
          priceUnit: P,
          stockHolderMarket: q,
          canJump: K,
        }
      );
    },
  };
Array || t.resolveComponent("st-steps")();
var c = t._export_sfc(d, [
  [
    "render",
    function (e, a, r, o, i, n) {
      return t.e(
        { a: o.canJump },
        o.canJump
          ? t.e(
              {
                b: t.t(o.data.name || ""),
                c: t.n((o.data.name || "").length > 10 ? "fs-24" : "fs-32"),
                d: t.t(o.data.code || ""),
                e: t.t(e.$filters.marketId(o.data.market, ".")),
                f: o.typeDesc,
              },
              o.typeDesc ? { g: t.t(o.typeDesc) } : {},
              {
                h: t.o(function () {
                  return o.handleToQuote && o.handleToQuote.apply(o, arguments);
                }),
              }
            )
          : {},
        {
          i: t.p({ current: o.stepCurrent, steps: o.stepFlowData }),
          j: t.n(o.shouldDisplayMatchDetail ? "bottom-line" : "border-bottom"),
          k: o.isGGT,
        },
        o.isGGT
          ? {
              l: t.t(o.stockHolderMarket),
              m: t.t(o.data.stockholder_code),
              n: t.n(o.shouldDisplayMatchDetail ? "fs-22" : "fs-28"),
              o: t.n(o.shouldDisplayMatchDetail ? "border-right" : ""),
              p: t.t(o.orderTypeText),
              q: t.n(o.shouldDisplayMatchDetail ? "flex" : "single"),
            }
          : {},
        {
          r: t.t(
            e.$filters.postfix(
              e.$filters.defaults(o.data.order_price),
              o.shouldShowPriceUnit ? o.priceUnit + "/" + o.unit : o.priceUnit
            )
          ),
          s: t.t(
            e.$filters.postfix(o.formatNoUnit(o.data.order_num, !1, 0), o.unit)
          ),
          t: t.n(o.shouldDisplayMatchDetail ? "border-right" : ""),
          v: o.shouldDisplayMatchDetail,
        },
        o.shouldDisplayMatchDetail
          ? {
              w: t.o(function () {
                return (
                  o.handleExplainAvgPrice &&
                  o.handleExplainAvgPrice.apply(o, arguments)
                );
              }),
              x: t.t(
                e.$filters.postfix(
                  e.$filters.defaults(o.data.trade_avg_price),
                  o.shouldShowPriceUnit
                    ? o.priceUnit + "/" + o.unit
                    : o.priceUnit
                )
              ),
              y: t.t(
                e.$filters.postfix(
                  o.formatNoUnit(o.data.match_num, !1, 0),
                  o.unit
                )
              ),
            }
          : {},
        { z: o.shouldDisplayOrderTotalMoney },
        o.shouldDisplayOrderTotalMoney
          ? t.e(
              { A: !o.isGGT },
              o.isGGT
                ? {
                    C: t.t(
                      e.$filters.postfix(
                        e.$filters.format.toCurrency(
                          e.$filters.defaults(o.orderTotalMoney)
                        ),
                        o.priceUnit
                      )
                    ),
                  }
                : {
                    B: t.t(
                      e.$filters.prefix(
                        e.$filters.format.toCurrency(
                          e.$filters.defaults(o.orderTotalMoney)
                        ),
                        "￥"
                      )
                    ),
                  }
            )
          : {},
        { D: o.shouldDisplayFees },
        o.shouldDisplayFees
          ? t.e(
              {
                E:
                  o.data.estimate_fee !== o.FEE_MODE.ESTIMATE &&
                  o.data.trade_total_amount,
              },
              o.data.estimate_fee !== o.FEE_MODE.ESTIMATE &&
                o.data.trade_total_amount
                ? {
                    F: t.t(
                      e.$filters.prefix(
                        e.$filters.format.toCurrency(
                          e.$filters.defaults(o.data.trade_total_amount)
                        ),
                        "￥"
                      )
                    ),
                  }
                : {},
              { G: o.data.total_agree },
              o.data.total_agree
                ? {
                    H: t.t(
                      e.$filters.postfix(
                        e.$filters.format.toCurrency(o.data.total_agree),
                        "元"
                      )
                    ),
                  }
                : {},
              {
                I: t.t(
                  o.data.estimate_fee === o.FEE_MODE.ESTIMATE ? "（估算）" : ""
                ),
                J: o.isShowExplain,
              },
              o.isShowExplain
                ? {
                    K: t.o(function () {
                      return (
                        o.handleExplain && o.handleExplain.apply(o, arguments)
                      );
                    }),
                  }
                : {},
              { L: o.data.trade_total_fee },
              o.data.trade_total_fee
                ? {
                    M: t.t(
                      e.$filters.postfix(
                        e.$filters.prefix(
                          e.$filters.format.toCurrency(o.data.trade_total_fee),
                          o.isBuy ? "" : "-"
                        ),
                        "元"
                      )
                    ),
                  }
                : {},
              { N: o.data.trade_brokerage },
              o.data.trade_brokerage
                ? {
                    O: t.t(
                      e.$filters.postfix(
                        e.$filters.prefix(
                          e.$filters.format.toCurrency(o.data.trade_brokerage),
                          o.isBuy ? "" : "-"
                        ),
                        "元"
                      )
                    ),
                  }
                : {},
              { P: o.showCommissionTip },
              o.showCommissionTip
                ? { Q: t.t(o.commissionTip), R: t.t(o.replenishTip) }
                : {},
              { S: o.data.trade_tax },
              o.data.trade_tax
                ? {
                    T: t.t(
                      e.$filters.postfix(
                        e.$filters.prefix(
                          e.$filters.format.toCurrency(o.data.trade_tax),
                          o.isBuy ? "" : "-"
                        ),
                        "元"
                      )
                    ),
                  }
                : {},
              { U: o.data.trade_cost },
              o.data.trade_cost
                ? {
                    V: t.t(
                      e.$filters.postfix(
                        e.$filters.prefix(
                          e.$filters.format.toCurrency(o.data.trade_cost),
                          o.isBuy ? "" : "-"
                        ),
                        "元"
                      )
                    ),
                  }
                : {},
              { W: o.isGGT },
              o.isGGT
                ? t.e(
                    {
                      X: t.t(o.data.trade_sett_rate ? "结算" : "参考"),
                      Y: o.data.trade_sett_rate,
                    },
                    o.data.trade_sett_rate
                      ? { Z: t.t(o.data.trade_sett_rate) }
                      : { aa: t.t(o.data.trade_today_rate) }
                  )
                : {}
            )
          : {},
        {
          ab:
            o.shouldDisplayFees &&
            (o.data.estimate_fee === o.FEE_MODE.ESTIMATE ||
              !o.data.trade_total_amount),
        },
        !o.shouldDisplayFees ||
          (o.data.estimate_fee !== o.FEE_MODE.ESTIMATE &&
            o.data.trade_total_amount)
          ? {}
          : t.e({ ac: !o.isGGT }, (o.isGGT, {})),
        { ad: o.revokable || o.revoking },
        o.revokable || o.revoking
          ? t.e(
              { ae: o.revokable || o.revoking },
              o.revokable || o.revoking
                ? {
                    af: t.t(
                      o.hasRevokingFlag || o.revoking ? "撤单中" : "撤单"
                    ),
                    ag: o.hasRevokingFlag || o.revoking,
                    ah: t.o(function () {
                      return o.onCancel && o.onCancel.apply(o, arguments);
                    }),
                  }
                : {}
            )
          : {},
        { ai: o.shouldShowFailTip },
        o.shouldShowFailTip
          ? t.e(
              { aj: !o.isGGT },
              o.isGGT
                ? { al: t.t(o.broker.base.tel) }
                : { ak: t.t(o.broker.base.tel) }
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(c);
