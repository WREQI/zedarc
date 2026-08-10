require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../common/vendor.js"),
  r = require("../../../config/enum.js"),
  u = require("../../../utils/index.js"),
  i = require("../../../stores/app/useMode.js"),
  a = require("../../../model/trade/stock-hooks/useStep.js"),
  l = require("../../../model/trade/stock-hooks/usePrice.js"),
  c = require("../../../model/trade/stock-hooks/useMoney.js"),
  s = require("../../../model/trade/stock-hooks/useAmount.js"),
  d = require("../../../utils/market.js"),
  v = require("../../../utils/getPlatform.js"),
  p = require("../../../config/key.js"),
  f = require("../../../service/stat/mp-weixin.js"),
  m = require("../../../utils/system.js"),
  T = require("../../../service/aegis/platform/not-wujie.js"),
  y = require("../../../common/components/Dialog/index.js");
function S(e) {
  try {
    [r.ORDER_TYPES.ELO, r.ORDER_TYPES.ALO, r.ORDER_TYPES.OLO].includes(
      e.orderType
    ) ||
      T.aegisReporter.reportEvent("mon_trade_ggt_invalid_ordertype", {
        ext3: "orderType: ".concat(e.orderType),
      });
  } catch (e) {}
}
exports.createTradeForm = function () {
  return {
    emits: ["showConfirmDialog", "setPrice", "setAmount"],
    props: {
      focusHeight: { type: Number, default: 1080 },
      blurHeight: { type: Number, default: 576 },
      isClassicTradeSplitMode: { type: Boolean, default: !1 },
      tradeMode: { type: String, default: r.TRADE_MODE.STANDARD },
    },
    setup: function (k, A) {
      var g = A.emit,
        h = n.getCurrentInstance().proxy,
        E = n.inject("trade"),
        C = E.market,
        O = E.action,
        R = E.price,
        x = E.amount,
        _ = E.isStockSet,
        M = E.isAfterTradeStock,
        I = E.strategy,
        b = E.setPriceByStrategy,
        D = E.proceedTransactions,
        P = E.tradeAccount,
        w = E.order,
        N = E.tradeAuth,
        L = E.quickAmount,
        $ = E.getQuickAmountValue,
        q = E.stock,
        j = E.snapshot,
        B = E.currentCheckReject,
        G = n.inject("curPageContext"),
        F = n.inject("minChart").showMinChart,
        Y = n.inject("embeddedMode"),
        H = n.inject("pageScrollTop"),
        K = v.getPlatform(),
        U = K.isPCWeixin,
        Q = (K.isInIframe, K.isMpPlugin),
        W = a.useStep({ order: w }),
        z = W.amountStep,
        J = W.priceStep,
        V = l.usePrice(function (e) {
          g("setPrice", String(e));
        }),
        X = V.pricePopoverText,
        Z = V.pricePopoverClass,
        ee = V.onPriceInput,
        te = V.onPriceFocus,
        oe = V.onPriceBlur,
        ne = s.useAmount(je),
        re = ne.manualAmountInputPlaceholder,
        ue = ne.activeAmountLevel,
        ie = ne.setActiveAmountLevel,
        ae = ne.amountPopoverText,
        le = ne.onAmountInput,
        ce = ne.onAmountFocus,
        se = ne.onAmountBlur,
        de = ne.onAmountOverlimit,
        ve = ne.onManualAmountInputBlur,
        pe = c.useMoney(je),
        fe = pe.moneyPopoverText,
        me = pe.moneyLevels,
        Te = pe.moneyInputPlaceholder,
        ye = pe.onMoneyInputChange,
        Se = pe.onMoneyInputFocus,
        ke = pe.onMoneyInputBlur,
        Ae = pe.onClickQuickMoneyItem,
        ge = pe.onClickMaxCanUseMoney,
        he = pe.onMoneyInputClear,
        Ee = n.computed(function () {
          return "undefined" === String(R.value) ? 4 : String(R.value).length;
        }),
        Ce = n.computed(function () {
          return String(x || "").length;
        }),
        Oe = n.ref(""),
        Re = n.ref(!1),
        xe = n.ref({ top: 0, left: 0 }),
        _e = n.ref({ top: 0, left: 0 }),
        Me = n.ref(!1),
        Ie = n.ref(!1),
        be = n.ref({ top: 0, left: 0 }),
        De = n.computed(function () {
          return C.value === r.MARKET.HK;
        }),
        Pe = n.ref(!1),
        we = n.ref([
          { key: "1", text: "全仓", statKey: "one" },
          { key: "1/2", text: "1/2", statKey: "half" },
          { key: "1/3", text: "1/3", statKey: "onethird" },
          { key: "1/4", text: "1/4", statKey: "onefour" },
        ]),
        Ne = n.computed(function () {
          var e,
            t,
            o = [
              { key: "1", text: "全仓", statKey: "one" },
              { key: "1/2", text: "1/2仓", statKey: "half" },
              { key: "1/3", text: "1/3仓", statKey: "onethird" },
              { key: "1/4", text: "1/4仓", statKey: "onefour" },
            ];
          return (
            (null == (t = Object.keys(null == (e = L.value) ? void 0 : e.buy))
              ? void 0
              : t.length) > o.length &&
              o.push({ key: "more", text: "更多", statKey: "more" }),
            o
          );
        }),
        Le = n.inject("prevStrategy"),
        $e = i.useModeStore(),
        qe = n.storeToRefs($e).simpleMode;
      function je(e) {
        g("setAmount", e);
      }
      function Be(e) {
        e &&
          n.index
            .createSelectorQuery()
            .in(h)
            .select(".".concat(e))
            .boundingClientRect(function (t) {
              Y.value && Ze.value
                ? (_e.value = {
                    top: t.top + 44,
                    left: t.left - (e.endsWith("r") ? 80 : 0),
                  })
                : (_e.value = { top: t.top, left: t.left - 80 });
            })
            .exec(),
          (Me.value = !0),
          h.$stat.click("trade.trade.number.".concat(e));
      }
      function Ge(e) {
        return Fe.apply(this, arguments);
      }
      function Fe() {
        return (Fe = o(
          t().mark(function o(n) {
            var i, a, l, c, s, v, p, f, m, S;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        ze(),
                        (We = !1),
                        (Qe = setTimeout(function () {
                          var e, t, o, r, u, i, a, l, c, s, d, v, p;
                          if (Qe) {
                            We = !0;
                            var f =
                                null == (e = q.value)
                                  ? void 0
                                  : e.isConvertibleBonds,
                              m =
                                null == (o = (t = y.Dialog).isShow)
                                  ? void 0
                                  : o.call(t, { context: G }),
                              S =
                                null ==
                                (l =
                                  null ==
                                  (a =
                                    null ==
                                    (i =
                                      null ==
                                      (u =
                                        null ==
                                        (r = null == G ? void 0 : G.$refs)
                                          ? void 0
                                          : r.kzzRiskDialog)
                                        ? void 0
                                        : u.selectComponent)
                                      ? void 0
                                      : i.call(u, "#trade-kzz-risk-dialog"))
                                    ? void 0
                                    : a.isShow)
                                  ? void 0
                                  : l.call(a),
                              A = f ? !(!S && !m) : m;
                            T.aegisReporter.reportEvent(
                              "mon_trade_transactions_timeout",
                              {
                                ext3:
                                  null ==
                                  (d =
                                    null ==
                                    (s =
                                      null == (c = q.value) ? void 0 : c.quote)
                                      ? void 0
                                      : s.info)
                                    ? void 0
                                    : d.secu_code,
                                ext4: C.value,
                                ext5: JSON.stringify({
                                  action: n,
                                  tradeMode: k.tradeMode,
                                  msg:
                                    null == (p = (v = y.Dialog).getMessage)
                                      ? void 0
                                      : p.call(v, { context: G }),
                                }),
                                ext6: A,
                              }
                            );
                          }
                        }, 6e3)),
                        (t.prev = 1),
                        (Oe.value = ""),
                        n === r.ACTION.AFTER_BUY || n === r.ACTION.BUY
                          ? h.$stat.click(
                              "trade.trade.buy",
                              void 0,
                              void 0,
                              e(
                                e({}, d.getStatStockId(q.value) || {}),
                                {},
                                {
                                  trade_mode:
                                    null ==
                                    (i = k.tradeMode || r.TRADE_MODE.STANDARD)
                                      ? void 0
                                      : i.toLowerCase(),
                                }
                              )
                            )
                          : h.$stat.click(
                              "trade.trade.sell",
                              void 0,
                              void 0,
                              e(
                                e({}, d.getStatStockId(q.value) || {}),
                                {},
                                {
                                  trade_mode:
                                    null ==
                                    (a = k.tradeMode || r.TRADE_MODE.STANDARD)
                                      ? void 0
                                      : a.toLowerCase(),
                                }
                              )
                            ),
                        (null == (l = q.value) ? void 0 : l.isGGT) &&
                          [
                            r.MARKET_STATE.MORNING_OPENED,
                            r.MARKET_STATE.SIESTA,
                            r.MARKET_STATE.AFTERNOON_OPENED,
                            r.MARKET_STATE.NOT_OPEN,
                            r.MARKET_STATE.CLOSED,
                          ].includes(
                            null == (c = q.value) ? void 0 : c.market_state
                          ) &&
                          w.orderType === r.ORDER_TYPES.ALO &&
                          T.aegisReporter.reportEvent("GGT_ORDER_TYPE_UNMATCH"),
                        (t.next = 5),
                        u.sleep(100)
                      );
                    case 5:
                      return (
                        (S = new Promise(function (e, t) {
                          (B.value = t), D(n).then(e).catch(t);
                        })),
                        (t.next = 8),
                        S
                      );
                    case 8:
                      if (((t.t0 = t.sent), !t.t0)) {
                        t.next = 11;
                        break;
                      }
                      j.takeSnapshot({
                        stockOrder: w,
                        stock: q.value,
                        accountTradeInfo: P,
                        accountTradeAuth: N,
                      }),
                        (Ie.value = !0),
                        h.$stat.click(
                          "trade.trade.".concat(
                            w.isBuyAction ? "buy" : "sell",
                            "confirmdialog.show"
                          ),
                          void 0,
                          void 0,
                          e(
                            e(
                              {
                                stock_cls:
                                  null == (s = q.value.quote)
                                    ? void 0
                                    : s.stock_cls,
                              },
                              d.getStatStockId(q.value)
                            ),
                            {},
                            {
                              trade_mode:
                                null ==
                                (v = k.tradeMode || r.TRADE_MODE.STANDARD)
                                  ? void 0
                                  : v.toLowerCase(),
                            }
                          )
                        );
                    case 11:
                      t.next = 17;
                      break;
                    case 13:
                      if (
                        ((t.prev = 13),
                        (t.t1 = t.catch(1)),
                        "due to close pannel" ===
                          (null == t.t1 ? void 0 : t.t1.message))
                      ) {
                        t.next = 17;
                        break;
                      }
                      throw t.t1;
                    case 17:
                      return (
                        (t.prev = 17),
                        (B.value = null),
                        ze(),
                        We &&
                          T.aegisReporter.reportEvent(
                            "mon_trade_transactions_recovered",
                            {
                              ext3:
                                null ==
                                (m =
                                  null ==
                                  (f = null == (p = q.value) ? void 0 : p.quote)
                                    ? void 0
                                    : f.info)
                                  ? void 0
                                  : m.secu_code,
                              ext4: C.value,
                              ext5: JSON.stringify({
                                action: n,
                                tradeMode: k.tradeMode,
                              }),
                            }
                          ),
                        t.finish(17)
                      );
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              null,
              [[1, 13, 17, 20]]
            );
          })
        )).apply(this, arguments);
      }
      function Ye(e, t) {
        var o = e.key,
          n = $(o, t);
        "--" !== n && le(n),
          h.$stat.click(
            "trade.trade.number.".concat(t).concat(e.statKey),
            void 0,
            void 0,
            d.getStatStockId(q.value)
          ),
          ie(o);
      }
      function He(e, t) {
        "minus" === e
          ? null == h ||
            h.$stat.click(
              "trade.trade.entrust.".concat(t ? "long" : "", "cut"),
              void 0,
              void 0,
              d.getStatStockId(q.value)
            )
          : null == h ||
            h.$stat.click(
              "trade.trade.entrust.".concat(t ? "long" : "", "add"),
              void 0,
              void 0,
              d.getStatStockId(q.value)
            );
      }
      function Ke(e, t) {
        "minus" === e
          ? null == h ||
            h.$stat.click(
              "trade.trade.number.".concat(t ? "long" : "", "cut"),
              void 0,
              void 0,
              d.getStatStockId(q.value)
            )
          : null == h ||
            h.$stat.click(
              "trade.trade.number.".concat(t ? "long" : "", "add"),
              void 0,
              void 0,
              d.getStatStockId(q.value)
            );
      }
      n.watch(
        function () {
          return Ie.value;
        },
        function (e) {
          g("showConfirmDialog", e);
        }
      ),
        n.watch(
          function () {
            return O.value;
          },
          function () {
            ie("");
          }
        ),
        n.watch(
          function () {
            return w.price;
          },
          function () {
            w.manualMoney &&
              k.tradeMode !== r.TRADE_MODE.STANDARD &&
              ye(w.manualMoney, { forceUpdate: !0 });
          }
        );
      var Ue = n.ref(!1),
        Qe = null,
        We = !1;
      function ze() {
        Qe && (clearTimeout(Qe), (Qe = null));
      }
      var Je,
        Ve,
        Xe = n.computed(function () {
          return q.disabled || (!Y.value && !_);
        }),
        Ze = n.computed(function () {
          return Y.value && !qe.value && !k.isClassicTradeSplitMode;
        });
      function et() {
        return tt.apply(this, arguments);
      }
      function tt() {
        return (tt = o(
          t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.prev = 0), Y.value || U)) {
                        e.next = 8;
                        break;
                      }
                      if (((e.t0 = Je), e.t0)) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (e.next = 6),
                        new Promise(function (e) {
                          var t = ".st-number-keyboard";
                          Q && (t = ".stepper-wrapper >>> .st-number-keyboard"),
                            n.nextTick$1(function () {
                              n.index
                                .createSelectorQuery()
                                .in(h)
                                .select(t)
                                .boundingClientRect(function (t) {
                                  e((null == t ? void 0 : t.height) || 0);
                                })
                                .exec();
                            });
                        })
                      );
                    case 6:
                      Je = e.sent;
                    case 7:
                      n.index
                        .createSelectorQuery()
                        .in(h)
                        .select(".tradeform-btns-js")
                        .boundingClientRect(function (e) {
                          if (e && e.top) {
                            var t = m.getWindowInfoCompact().windowHeight,
                              o = e.top - (t - Je);
                            n.isNumber(o) &&
                              Math.abs(o) > 2 &&
                              n.index.pageScrollTo({
                                scrollTop: o + H.value,
                                duration: 0,
                              });
                          }
                        })
                        .exec();
                    case 8:
                      e.next = 13;
                      break;
                    case 10:
                      (e.prev = 10),
                        (e.t1 = e.catch(0)),
                        T.aegisReporter.reportEvent(
                          "MONITOR-TRADEFORM-INPUTFOCUS-ERROR",
                          { ext3: JSON.stringify(e.t1) }
                        );
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      return (
        n.onBeforeUnmount(function () {
          ze();
        }),
        {
          ACTION: r.ACTION,
          action: O,
          price: R,
          amount: x,
          isStockSet: _,
          isAfterTradeStock: M,
          strategy: I,
          setPriceByStrategy: b,
          showMinChart: F,
          embeddedMode: Y,
          isPCWeixin: U,
          tradeAccount: P,
          order: w,
          quickAmount: L,
          stockInfo: q,
          amountStep: z,
          priceStep: J,
          pricePopoverText: X,
          pricePopoverClass: Z,
          activeAmountLevel: ue,
          amountPopoverText: ae,
          onAmountInput: le,
          priceLen: Ee,
          amountLen: Ce,
          inputBoxFocus: Oe,
          showPriceStrategyPopup: Re,
          priceStrategyPos: xe,
          amountPos: _e,
          showAmountPopup: Me,
          showConfirmDialog: Ie,
          shareHolderCardPos: be,
          showShareHolderCard: De,
          showShareHolderCardSelector: Pe,
          amountLevels: we,
          simpleMode: qe,
          amountLevelsFilterFixed: Ne,
          onPriceInput:
            ((Ve = o(
              t().mark(function e(o) {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (I.value !== (null == Le ? void 0 : Le.value)) {
                          I.value =
                            (null == Le ? void 0 : Le.value) ||
                            r.STRATEGY.MANUAL;
                          try {
                            n.index.setStorageSync(
                              p.LAST_TRADE_PRICE_STRATEGY,
                              { lastPriceStrategy: I.value }
                            );
                          } catch (e) {}
                        }
                        ee(o);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return Ve.apply(this, arguments);
            }),
          onOverLimit: function (e) {
            _.value && de(e);
          },
          onClickMaxBuy: function () {
            le(P.max_buy_qty), h.$stat.click("trade.trade.buynumber");
          },
          onClickMaxSell: function () {
            le(P.max_sell_qty), h.$stat.click("trade.trade.sellnumber");
          },
          onInputFocus: function (e, t) {
            et(),
              (Oe.value = t),
              "money" === t
                ? Se(k.focusHeight)
                : "price" === t
                ? te(k.focusHeight)
                : ce(k.focusHeight),
              g("inputFocus");
          },
          onInputBlur: function (e, t) {
            (Oe.value = ""),
              "money" === t
                ? ke(e, k.blurHeight)
                : "price" === t
                ? oe(e, k.blurHeight)
                : k.tradeMode === r.TRADE_MODE.STANDARD
                ? se(e, k.blurHeight)
                : ve(e, k.blurHeight),
              g("inputBlur");
          },
          onClickShowPriceStrategy: function (e, t) {
            e &&
              n.index
                .createSelectorQuery()
                .in(h)
                .select(".".concat(e))
                .boundingClientRect(function (t) {
                  var o = t.top + 44;
                  Y.value && !Ze.value
                    ? (o = t.top + t.height + 10)
                    : Y.value || (o = t.top + t.height + 10),
                    (xe.value = {
                      top: o,
                      left: t.left - (e.endsWith("r") ? 80 : 0),
                    });
                })
                .exec(),
              (Re.value = t),
              h.$stat.click("trade.trade.trustmode.".concat(e));
          },
          onClickShowAmountPopup: Be,
          onClickShowStockHolderCardSelector: function (e) {
            n.index
              .createSelectorQuery()
              .in(h)
              .select(".".concat(e))
              .boundingClientRect(function (t) {
                be.value = {
                  top: t.top + 214,
                  left: t.left - (e.endsWith("r") ? 80 : 0),
                };
              })
              .exec(),
              (Pe.value = !0),
              h.$stat.click("trade.trade.stockholdercard.".concat(e));
          },
          onBuy: function () {
            if (
              (Y.value ||
                h.$stat.click(
                  "trade.number-keyboard.pressbuy",
                  void 0,
                  void 0,
                  d.getStatStockId(q.value)
                ),
              I.value === r.STRATEGY.AFTER_CLOSED)
            )
              Ge(r.ACTION.AFTER_BUY);
            else {
              var e = r.ACTION.BUY;
              q.value.isGGT &&
                (w.orderType === r.ORDER_TYPES.ALO
                  ? (e = r.ACTION.AUO_BUY)
                  : w.orderType === r.ORDER_TYPES.OLO &&
                    (e = r.ACTION.ODD_LOT_ELO_BUY)),
                Ge(e);
            }
            q.value.isGGT && S(w);
          },
          onSell: function () {
            if (I.value === r.STRATEGY.AFTER_CLOSED) Ge(r.ACTION.AFTER_SELL);
            else {
              var e = r.ACTION.SELL;
              q.value.isGGT &&
                (w.orderType === r.ORDER_TYPES.ALO
                  ? (e = r.ACTION.AUO_SELL)
                  : w.orderType === r.ORDER_TYPES.OLO &&
                    (e = r.ACTION.ODD_LOT_ELO_SELL)),
                Ge(e);
            }
            q.value.isGGT && S(w);
          },
          toNewStock: function () {
            h.$router.push({ name: "NewStock" });
          },
          onClickQuickAmountItem: Ye,
          onNextInput: function () {
            var e, t, o, n, r, u, i, a, l, c;
            null ==
              (r =
                null ==
                (n =
                  null ==
                  (o =
                    null ==
                    (t = null == (e = h.$refs) ? void 0 : e.priceStepper)
                      ? void 0
                      : t.$refs)
                    ? void 0
                    : o.input)
                  ? void 0
                  : n.onClose) || r.call(n),
              null ==
                (c =
                  null ==
                  (l =
                    null ==
                    (a =
                      null ==
                      (i = null == (u = h.$refs) ? void 0 : u.amountStepper)
                        ? void 0
                        : i.$refs)
                      ? void 0
                      : a.input)
                    ? void 0
                    : l.focus) || c.call(l);
          },
          allInputBlur: function () {
            var e, t, o, n, r, u, i, a, l, c, s, d, v, p, f, m;
            "money" === Oe.value
              ? null ==
                  (o =
                    null == (t = null == (e = h.$refs) ? void 0 : e.moneyInput)
                      ? void 0
                      : t.onClose) || o.call(t)
              : "price" === Oe.value
              ? null ==
                  (a =
                    null ==
                    (i =
                      null ==
                      (u =
                        null ==
                        (r = null == (n = h.$refs) ? void 0 : n.priceStepper)
                          ? void 0
                          : r.$refs)
                        ? void 0
                        : u.input)
                      ? void 0
                      : i.onClose) || a.call(i)
              : (null ==
                  (v =
                    null ==
                    (d =
                      null ==
                      (s =
                        null ==
                        (c = null == (l = h.$refs) ? void 0 : l.amountStepper)
                          ? void 0
                          : c.$refs)
                        ? void 0
                        : s.input)
                      ? void 0
                      : d.onClose) || v.call(d),
                null ==
                  (m =
                    null == (f = null == (p = h.$refs) ? void 0 : p.amountInput)
                      ? void 0
                      : f.onClose) || m.call(f));
          },
          statTapPrice: function (e, t) {
            t || He(e);
          },
          statPrice: He,
          statTapAmount: function (e, t) {
            t || Ke(e);
          },
          statAmount: Ke,
          onOrderTypeChange: function (e) {
            g("orderTypeChange", e);
          },
          onOrderTipIconClick: function () {
            g("showOrderTip");
          },
          onGGTShareHolderChange: function (e) {
            g("stockHolderChange", e);
          },
          onClickQuickAmountItemEmbedded: function (e, t) {
            if ("more" === e.key)
              return (
                Be(t),
                void h.$stat.click(
                  "trade.trade.number.".concat(
                    w.isBuyAction ? "buy" : "sell",
                    "more"
                  ),
                  void 0,
                  void 0,
                  d.getStatStockId(q.value)
                )
              );
            Ye(e, w.isBuyAction ? "buy" : "sell");
          },
          manualAmountInputPlaceholder: re,
          moneyPopoverText: fe,
          moneyLevels: me,
          moneyInputPlaceholder: Te,
          onMoneyInput: function (e) {
            var t,
              o = (e.detail || {}).value,
              n = void 0 === o ? "" : o;
            if (-1 !== String(n).indexOf(".")) {
              var r = String(n).split(".");
              try {
                if (r[1].length > 2) {
                  var u = r[0] + "." + r[1].slice(0, 2);
                  return void (U
                    ? null == (t = h.$refs.moneyInput) ||
                      t.$triggerInput({ value: u })
                    : ye(u));
                }
              } catch (e) {}
            }
            ye(n);
          },
          onMoneyInputFocus: Se,
          onMoneyInputBlur: ke,
          onClickQuickMoneyItem: Ae,
          onClickMaxCanUseMoney: ge,
          showOrderMoneyExplain: Ue,
          onClickOrderMoneyExplain: function () {
            f.stat.click("trade.trade.order_money_explain"), (Ue.value = !0);
          },
          toTradeRule: function () {
            f.stat.click("trade.trade.goto_trade_rule"),
              setTimeout(function () {
                h.$router.push({
                  name: "TradeRule",
                  query: { tab: w.isBuyAction ? "buy" : "sell" },
                });
              }, 200);
          },
          TRADE_MODE: r.TRADE_MODE,
          disableTradeSubmit: Xe,
          onManualAmountInput: function (e) {
            var t = (e.detail || {}).value;
            le(void 0 === t ? "" : t);
          },
          onMoneyInputClear: he,
          onAmountInputClear: function () {
            le(""),
              f.stat.click(
                "trade.trade.amountinput.clear",
                void 0,
                void 0,
                d.getStatStockId(q.value)
              );
          },
          isClassicEmbeddedNotSpiltMode: Ze,
          scrollFormToView: et,
        }
      );
    },
  };
};
