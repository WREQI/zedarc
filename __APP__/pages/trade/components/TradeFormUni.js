var o = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var e = require("./TradeForm.js"),
  t = require("../../../common/vendor.js"),
  n = o(
    {
      components: {
        Stepper: function () {
          return "../../../common/components/Stepper/index.js";
        },
        TradePriceStrategy: function () {
          return "./TradePriceStrategy.js";
        },
        TradeQuickAmount: function () {
          return "./TradeQuickAmount.js";
        },
        CustomInput: function () {
          return "../../../common/components/CustomInput/index.js";
        },
        MpDialog: function () {
          return "../../../common/components/Dialog/Dialog.js";
        },
        TradeGGTShareHolderSelector: function () {
          return "./TradeGGTShareHolderSelector.js";
        },
      },
    },
    e.createTradeForm()
  );
Array ||
  (
    t.resolveComponent("custom-input") +
    t.resolveComponent("mp-dialog") +
    t.resolveComponent("Stepper") +
    t.resolveComponent("TradeGGTShareHolderSelector") +
    t.resolveComponent("TradePriceStrategy") +
    t.resolveComponent("TradeQuickAmount")
  )();
var r = t._export_sfc(n, [
  [
    "render",
    function (o, e, n, r, u, a) {
      return t.e(
        { a: !o.isClassicEmbeddedNotSpiltMode },
        o.isClassicEmbeddedNotSpiltMode
          ? t.e(
              {
                ce: t.t(o.order.strategyShortText),
                cf: t.o(function (e) {
                  return o.onClickShowPriceStrategy("js-strategy-btn-l", !0);
                }),
                cg: t.sr("priceStepper", "0db40153-8"),
                ch: t.n("len-".concat(o.priceLen)),
                ci: t.o(o.onPriceInput),
                cj: t.o(o.statTapPrice),
                ck: t.o(function (e) {
                  return o.statPrice(e, !0);
                }),
                cl: t.o(function (e) {
                  return o.onInputFocus(e, "price");
                }),
                cm: t.o(function (e) {
                  return o.onInputBlur(e, "price");
                }),
                cn: t.o(o.onNextInput),
                co: t.p({
                  value: o.price,
                  "decimal-length": o.stockInfo.spreadAcc,
                  disabled: o.stockInfo.disabled || !o.isStockSet,
                  step: o.priceStep,
                  focus: "price" === o.inputBoxFocus,
                  max: 9999,
                  "max-length": 9,
                  "show-glass": !o.embeddedMode,
                  "confirm-type": "next",
                }),
                cp: t.o(function (e) {
                  return o.onClickShowPriceStrategy("js-strategy-btn-r", !0);
                }),
                cq: o.pricePopoverText,
              },
              o.pricePopoverText
                ? { cr: t.t(o.pricePopoverText), cs: t.n(o.pricePopoverClass) }
                : {},
              {
                ct: t.o(function (e) {
                  return o.onClickShowAmountPopup("js-amount-btn-l");
                }),
                cv: t.sr("amountStepper", "0db40153-9"),
                cw: t.n("len-".concat(o.amountLen)),
                cx: t.o(o.statTapAmount),
                cy: t.o(function (e) {
                  return o.statAmount(e, !0);
                }),
                cz: t.o(o.onAmountInput),
                cA: t.o(function (e) {
                  return o.onInputFocus(e, "amount");
                }),
                cB: t.o(function (e) {
                  return o.onInputBlur(e, "amount");
                }),
                cC: t.o(o.onOverLimit),
                cD: t.p({
                  value: o.amount,
                  integer: !0,
                  step: o.amountStep,
                  disabled: o.stockInfo.disabled || !o.isStockSet,
                  focus: "amount" === o.inputBoxFocus,
                  max: 9999999999,
                  "max-length": 10,
                  "show-glass": !o.embeddedMode,
                  "extra-key": "00",
                  "confirm-type": "done",
                }),
                cE: t.o(function (e) {
                  return o.onClickShowAmountPopup("js-amount-btn-r");
                }),
                cF: o.amountPopoverText,
              },
              o.amountPopoverText ? { cG: t.t(o.amountPopoverText) } : {},
              { cH: !o.stockInfo.secu_info },
              o.stockInfo.secu_info
                ? {
                    cI: t.t(o.tradeAccount.max_buy_qty),
                    cJ: t.t(o.stockInfo.quantityUnit),
                    cK: t.n(o.tradeAccount.max_buy_qty > 0 ? "buy-color" : ""),
                    cL: t.n(
                      o.tradeAccount.max_buy_qty > 9999999 ? "fs-20" : ""
                    ),
                  }
                : {},
              {
                cM: t.o(function () {
                  return o.onClickMaxBuy && o.onClickMaxBuy.apply(o, arguments);
                }),
                cN: !o.stockInfo.secu_info,
              },
              o.stockInfo.secu_info
                ? {
                    cO: t.t(o.tradeAccount.max_sell_qty),
                    cP: t.t(o.stockInfo.quantityUnit),
                    cQ: t.n(
                      o.tradeAccount.max_sell_qty > 0 ? "sell-color" : ""
                    ),
                    cR: t.n(
                      o.tradeAccount.max_sell_qty > 9999999 ? "fs-20" : ""
                    ),
                  }
                : {},
              {
                cS: t.o(function () {
                  return (
                    o.onClickMaxSell && o.onClickMaxSell.apply(o, arguments)
                  );
                }),
                cT: t.t(
                  o.$filters.money.formatNoUnit(
                    o.$filters.defaults(o.order.totalMoney)
                  )
                ),
                cU: t.t(o.stockInfo.priceUnit),
                cV: t.n(
                  o.order.totalMoney > 999999999
                    ? "fs-18"
                    : o.order.totalMoney > 999999
                    ? "fs-22"
                    : ""
                ),
                cW: !o.stockInfo.isGGT,
              },
              o.stockInfo.isGGT
                ? {}
                : {
                    cX: t.t(
                      o.$filters.money.formatNoUnit(
                        o.$filters.defaults(o.tradeAccount.max_buy_money)
                      )
                    ),
                    cY: t.n(
                      o.tradeAccount.max_buy_money > 999999 ? "fs-22" : ""
                    ),
                  },
              { cZ: !o.stockInfo.isNewStock },
              o.stockInfo.isNewStock
                ? {
                    de: t.t(o.stockInfo.newstockStatusText),
                    df: t.o(function () {
                      return o.toNewStock && o.toNewStock.apply(o, arguments);
                    }),
                  }
                : {
                    da: o.stockInfo.disabled,
                    db: t.o(function () {
                      return o.onBuy && o.onBuy.apply(o, arguments);
                    }),
                    dc: o.stockInfo.disabled,
                    dd: t.o(function () {
                      return o.onSell && o.onSell.apply(o, arguments);
                    }),
                  },
              { dg: o.showPriceStrategyPopup },
              o.showPriceStrategyPopup
                ? {
                    dh: t.o(function (e) {
                      return (o.showPriceStrategyPopup = e);
                    }),
                    di: t.o(o.setPriceByStrategy),
                    dj: t.p({
                      value: o.showPriceStrategyPopup,
                      strategy: o.strategy,
                      "is-after-trade-stock": o.isAfterTradeStock,
                      isGGT: o.stockInfo.isGGT,
                      pos: o.priceStrategyPos,
                    }),
                  }
                : {},
              { dk: o.showAmountPopup },
              o.showAmountPopup
                ? {
                    dl: t.o(function (e) {
                      return (o.showAmountPopup = e);
                    }),
                    dm: t.o(o.onAmountInput),
                    dn: t.p({
                      value: o.showAmountPopup,
                      "quick-amount": o.quickAmount,
                      pos: o.amountPos,
                    }),
                  }
                : {},
              {
                dp: t.n(
                  o.inputBoxFocus && !o.isPCWeixin
                    ? "trade-form-container__input-focus"
                    : ""
                ),
              }
            )
          : t.e(
              { b: o.tradeMode === o.TRADE_MODE.QUICKTRADE },
              o.tradeMode === o.TRADE_MODE.QUICKTRADE
                ? t.e(
                    {
                      c: t.t(o.order.isBuyAction ? "买入金额" : "卖出数量"),
                      d: t.o(function () {
                        return (
                          o.toTradeRule && o.toTradeRule.apply(o, arguments)
                        );
                      }),
                      e: o.order.isBuyAction,
                    },
                    o.order.isBuyAction
                      ? t.e(
                          { f: o.isPCWeixin },
                          o.isPCWeixin
                            ? {
                                g: o.order.manualMoney,
                                h: !o.order.price || !o.stockInfo.minAmount,
                                i: o.moneyInputPlaceholder,
                                j: t.o(function () {
                                  return (
                                    o.onMoneyInput &&
                                    o.onMoneyInput.apply(o, arguments)
                                  );
                                }),
                                k: t.o(function (e) {
                                  return o.onInputFocus(e, "money");
                                }),
                                l: t.o(function (e) {
                                  return o.onInputBlur(e, "money");
                                }),
                              }
                            : {
                                m: t.sr("moneyInput", "0db40153-0"),
                                n: t.o(function (e) {
                                  return o.onInputFocus(e, "money");
                                }),
                                o: t.o(o.onMoneyInput),
                                p: t.o(function (e) {
                                  return o.onInputBlur(e, "money");
                                }),
                                q: t.o(o.onBuy),
                                r: t.p({
                                  "key-board-theme": "custom",
                                  "show-glass": !0,
                                  "simple-mode": !0,
                                  value: o.order.manualMoney,
                                  integer: !1,
                                  placeholder: o.moneyInputPlaceholder,
                                  "max-length": 9,
                                  "decimal-length": 2,
                                  disabled:
                                    !o.order.price || !o.stockInfo.minAmount,
                                  "confirm-type": "buy",
                                }),
                              },
                          {
                            s:
                              o.order.manualMoney &&
                              o.inputBoxFocus &&
                              !o.isPCWeixin,
                          },
                          o.order.manualMoney &&
                            o.inputBoxFocus &&
                            !o.isPCWeixin
                            ? {
                                t: t.o(function () {
                                  return (
                                    o.onMoneyInputClear &&
                                    o.onMoneyInputClear.apply(o, arguments)
                                  );
                                }),
                              }
                            : {},
                          { v: o.moneyPopoverText && o.order.manualMoney },
                          o.moneyPopoverText && o.order.manualMoney
                            ? { w: t.t(o.moneyPopoverText) }
                            : {}
                        )
                      : {},
                    { x: o.order.isSellAction },
                    o.order.isSellAction
                      ? t.e(
                          { y: o.isPCWeixin },
                          o.isPCWeixin
                            ? {
                                z: o.order.amount || "",
                                A: !o.order.price || !o.stockInfo.minAmount,
                                B: o.manualAmountInputPlaceholder,
                                C: t.o(function () {
                                  return (
                                    o.onManualAmountInput &&
                                    o.onManualAmountInput.apply(o, arguments)
                                  );
                                }),
                                D: t.o(function (e) {
                                  return o.onInputFocus(e, "amount");
                                }),
                                E: t.o(function (e) {
                                  return o.onInputBlur(e, "amount");
                                }),
                              }
                            : {
                                F: t.sr("amountInput", "0db40153-1"),
                                G: t.o(function (e) {
                                  return o.onInputFocus(e, "amount");
                                }),
                                H: t.o(o.onManualAmountInput),
                                I: t.o(function (e) {
                                  return o.onInputBlur(e, "amount");
                                }),
                                J: t.o(o.onSell),
                                K: t.p({
                                  "key-board-theme": "custom",
                                  "show-glass": !0,
                                  "simple-mode": !0,
                                  value: String(+o.order.amount || ""),
                                  integer: !0,
                                  placeholder: o.manualAmountInputPlaceholder,
                                  "max-length": 8,
                                  disabled:
                                    !o.order.price || !o.stockInfo.minAmount,
                                  "confirm-type": "sell",
                                  "extra-key": "00",
                                }),
                              },
                          { L: o.amount && o.inputBoxFocus && !o.isPCWeixin },
                          o.amount && o.inputBoxFocus && !o.isPCWeixin
                            ? {
                                M: t.o(function () {
                                  return (
                                    o.onAmountInputClear &&
                                    o.onAmountInputClear.apply(o, arguments)
                                  );
                                }),
                              }
                            : {},
                          { N: o.order.isSellAction },
                          o.order.isSellAction
                            ? { O: t.t(o.stockInfo.quantityUnit) }
                            : {},
                          { P: o.amountPopoverText },
                          o.amountPopoverText
                            ? { Q: t.t(o.amountPopoverText) }
                            : {}
                        )
                      : {},
                    { R: o.order.isBuyAction },
                    o.order.isBuyAction
                      ? t.e(
                          { S: !o.stockInfo.isGGT },
                          o.stockInfo.isGGT
                            ? {}
                            : t.e(
                                { T: !o.stockInfo.secu_info },
                                o.stockInfo.secu_info
                                  ? {
                                      U: t.t(
                                        o.$filters.money.formatNoUnit(
                                          o.$filters.defaults(
                                            o.tradeAccount.max_buy_money
                                          )
                                        )
                                      ),
                                      V: t.n(
                                        o.tradeAccount.max_buy_qty > 0
                                          ? "buy-color"
                                          : ""
                                      ),
                                      W: t.n(
                                        o.tradeAccount.max_buy_money > 999999
                                          ? "fs-22"
                                          : ""
                                      ),
                                      X: t.o(function () {
                                        return (
                                          o.onClickMaxCanUseMoney &&
                                          o.onClickMaxCanUseMoney.apply(
                                            o,
                                            arguments
                                          )
                                        );
                                      }),
                                    }
                                  : {},
                                {
                                  Y: t.n(
                                    o.simpleMode
                                      ? "border-radius-with-after-base"
                                      : "border-radius-with-after-sm"
                                  ),
                                }
                              ),
                          {
                            Z: t.f(o.moneyLevels, function (e, n, r) {
                              return {
                                a: t.t(e.text),
                                b: e.key,
                                c: t.o(function (t) {
                                  return o.onClickQuickMoneyItem(e);
                                }, e.key),
                              };
                            }),
                            aa: t.n(
                              o.simpleMode
                                ? "border-radius-with-after-base"
                                : "border-radius-with-after-sm"
                            ),
                          }
                        )
                      : {},
                    { ab: o.order.isSellAction },
                    o.order.isSellAction
                      ? t.e(
                          { ac: !o.stockInfo.secu_info },
                          o.stockInfo.secu_info
                            ? {
                                ad: t.t(o.tradeAccount.max_sell_qty),
                                ae: t.t(o.stockInfo.quantityUnit),
                                af: t.n(
                                  o.tradeAccount.max_sell_qty > 0
                                    ? "sell-color"
                                    : ""
                                ),
                                ag: t.n(
                                  o.tradeAccount.max_sell_qty > 999999
                                    ? "fs-22"
                                    : ""
                                ),
                                ah: t.o(function () {
                                  return (
                                    o.onClickMaxSell &&
                                    o.onClickMaxSell.apply(o, arguments)
                                  );
                                }),
                              }
                            : {},
                          {
                            ai: t.n(
                              o.simpleMode
                                ? "border-radius-with-after-base"
                                : "border-radius-with-after-sm"
                            ),
                            aj: t.f(
                              o.amountLevelsFilterFixed,
                              function (e, n, r) {
                                return t.e(
                                  { a: t.t(e.text), b: "more" === e.key },
                                  (e.key, {}),
                                  {
                                    c: e.key,
                                    d: t.n("more" === e.key ? "more" : ""),
                                    e: t.o(function (t) {
                                      return o.onClickQuickAmountItemEmbedded(
                                        e,
                                        "js-amount-btn-r"
                                      );
                                    }, e.key),
                                  }
                                );
                              }
                            ),
                            ak: t.n(
                              o.simpleMode
                                ? "border-radius-with-after-base"
                                : "border-radius-with-after-sm"
                            ),
                            al: t.n(
                              o.amountLevelsFilterFixed.length <= 4
                                ? "without-more"
                                : ""
                            ),
                          }
                        )
                      : {},
                    { am: o.order.isBuyAction },
                    o.order.isBuyAction
                      ? {
                          an: t.o(function () {
                            return (
                              o.onClickOrderMoneyExplain &&
                              o.onClickOrderMoneyExplain.apply(o, arguments)
                            );
                          }),
                        }
                      : {},
                    {
                      ao: t.t(o.order.price),
                      ap: t.n(o.order.amount > 0 ? "activtied" : ""),
                      aq: t.t(+o.order.amount || 0),
                      ar: t.n(o.order.amount > 0 ? "activtied" : ""),
                      as: t.t(
                        o.$filters.money.formatNoUnit(
                          o.$filters.defaults(o.order.totalMoney)
                        )
                      ),
                      at: t.t(o.stockInfo.priceUnit),
                      av: o.order.totalMoney >= 1e8 ? 1 : "",
                      aw:
                        o.order.totalMoney > 1e7 && o.order.totalMoney < 1e8
                          ? 1
                          : "",
                      ax:
                        o.order.totalMoney > 1e6 && o.order.totalMoney < 1e7
                          ? 1
                          : "",
                      ay:
                        o.order.totalMoney > 1e5 && o.order.totalMoney < 1e6
                          ? 1
                          : "",
                      az: t.o(function (e) {
                        return (o.showOrderMoneyExplain = !1);
                      }),
                      aA: t.p({
                        visible: o.showOrderMoneyExplain,
                        title: "订单金额与买入金额不一致?",
                      }),
                    }
                  )
                : t.e(
                    {
                      aB: t.t(o.order.strategyShortText),
                      aC: t.o(function (e) {
                        return o.onClickShowPriceStrategy(
                          "js-strategy-btn-l",
                          !0
                        );
                      }),
                      aD: t.sr("priceStepper", "0db40153-3"),
                      aE: t.n("len-".concat(o.priceLen)),
                      aF: t.o(o.onPriceInput),
                      aG: t.o(o.statTapPrice),
                      aH: t.o(function (e) {
                        return o.statPrice(e, !0);
                      }),
                      aI: t.o(function (e) {
                        return o.onInputFocus(e, "price");
                      }),
                      aJ: t.o(function (e) {
                        return o.onInputBlur(e, "price");
                      }),
                      aK: t.o(o.onNextInput),
                      aL: t.p({
                        lazyLoadKeyBoard: !0,
                        value: o.price,
                        "decimal-length": o.stockInfo.spreadAcc,
                        disabled: o.stockInfo.disabled || !o.isStockSet,
                        step: o.priceStep,
                        focus: "price" === o.inputBoxFocus,
                        max: 9999,
                        "max-length": 9,
                        "show-glass": !o.embeddedMode,
                        "simple-mode": o.simpleMode,
                        "confirm-type": "next",
                      }),
                      aM: o.pricePopoverText,
                    },
                    o.pricePopoverText
                      ? {
                          aN: t.t(o.pricePopoverText),
                          aO: t.n(o.pricePopoverClass),
                        }
                      : {},
                    {
                      aP: t.sr("amountStepper", "0db40153-4"),
                      aQ: t.n("len-".concat(o.amountLen)),
                      aR: t.o(o.statTapAmount),
                      aS: t.o(function (e) {
                        return o.statAmount(e, !0);
                      }),
                      aT: t.o(o.onAmountInput),
                      aU: t.o(function (e) {
                        return o.onInputFocus(e, "amount");
                      }),
                      aV: t.o(function (e) {
                        return o.onInputBlur(e, "amount");
                      }),
                      aW: t.o(o.onBuy),
                      aX: t.o(o.onSell),
                      aY: t.o(o.onOverLimit),
                      aZ: t.p({
                        lazyLoadKeyBoard: !0,
                        value: o.amount,
                        integer: !0,
                        step: o.amountStep,
                        disabled: o.stockInfo.disabled || !o.isStockSet,
                        focus: "amount" === o.inputBoxFocus,
                        max: 9999999999,
                        "max-length": 10,
                        "show-glass": !o.embeddedMode,
                        "extra-key": "00",
                        "confirm-type": o.order.isBuyAction ? "buy" : "sell",
                        "simple-mode": o.simpleMode,
                      }),
                      ba: o.amountPopoverText,
                    },
                    o.amountPopoverText ? { bb: t.t(o.amountPopoverText) } : {},
                    { bc: o.order.isBuyAction },
                    o.order.isBuyAction
                      ? t.e(
                          {
                            bd: t.n(
                              o.tradeAccount.max_buy_qty > 99999999
                                ? "fs-18"
                                : o.tradeAccount.max_buy_qty > 999999
                                ? "fs-20"
                                : ""
                            ),
                            be: !o.stockInfo.secu_info,
                          },
                          o.stockInfo.secu_info
                            ? {
                                bf: t.t(o.tradeAccount.max_buy_qty),
                                bg: t.t(o.stockInfo.quantityUnit),
                                bh: t.n(
                                  o.tradeAccount.max_buy_qty > 0
                                    ? "buy-color"
                                    : ""
                                ),
                                bi: t.n(
                                  o.tradeAccount.max_buy_qty > 99999999
                                    ? "fs-18"
                                    : o.tradeAccount.max_buy_qty > 999999
                                    ? "fs-20"
                                    : ""
                                ),
                              }
                            : {},
                          {
                            bj: t.n(
                              o.simpleMode
                                ? "border-radius-with-after-base"
                                : "border-radius-with-after-sm"
                            ),
                            bk: t.o(function () {
                              return (
                                o.onClickMaxBuy &&
                                o.onClickMaxBuy.apply(o, arguments)
                              );
                            }),
                          }
                        )
                      : {},
                    { bl: o.order.isSellAction },
                    o.order.isSellAction
                      ? t.e(
                          {
                            bm: t.n(
                              o.tradeAccount.max_sell_qty > 99999999
                                ? "fs-18"
                                : o.tradeAccount.max_sell_qty > 999999
                                ? "fs-20"
                                : ""
                            ),
                            bn: !o.stockInfo.secu_info,
                          },
                          o.stockInfo.secu_info
                            ? {
                                bo: t.t(o.tradeAccount.max_sell_qty),
                                bp: t.t(o.stockInfo.quantityUnit),
                                bq: t.n(
                                  o.tradeAccount.max_sell_qty > 0
                                    ? "sell-color"
                                    : ""
                                ),
                                br: t.n(
                                  o.tradeAccount.max_sell_qty > 99999999
                                    ? "fs-18"
                                    : o.tradeAccount.max_sell_qty > 999999
                                    ? "fs-20"
                                    : ""
                                ),
                              }
                            : {},
                          {
                            bs: t.n(
                              o.simpleMode
                                ? "border-radius-with-after-base"
                                : "border-radius-with-after-sm"
                            ),
                            bt: t.o(function () {
                              return (
                                o.onClickMaxSell &&
                                o.onClickMaxSell.apply(o, arguments)
                              );
                            }),
                          }
                        )
                      : {},
                    {
                      bv: t.f(o.amountLevelsFilterFixed, function (e, n, r) {
                        return t.e(
                          { a: t.t(e.text), b: "more" === e.key },
                          (e.key, {}),
                          {
                            c: e.key,
                            d: t.n("more" === e.key ? "more ^more" : ""),
                            e: t.o(function (t) {
                              return o.onClickQuickAmountItemEmbedded(
                                e,
                                "js-amount-btn-r"
                              );
                            }, e.key),
                          }
                        );
                      }),
                      bw: t.n(
                        o.simpleMode
                          ? "border-radius-with-after-base"
                          : "border-radius-with-after-sm"
                      ),
                      bx: t.n(
                        o.amountLevelsFilterFixed.length <= 4
                          ? "without-more ^without-more"
                          : ""
                      ),
                      by: o.order.isBuyAction && !o.stockInfo.isGGT,
                    },
                    o.order.isBuyAction && !o.stockInfo.isGGT
                      ? {
                          bz: t.t(
                            o.$filters.money.formatNoUnit(
                              o.$filters.defaults(o.tradeAccount.max_buy_money)
                            )
                          ),
                          bA: t.n(
                            o.tradeAccount.max_buy_money > 999999 ? "fs-22" : ""
                          ),
                        }
                      : {},
                    {
                      bB: t.t(
                        o.$filters.money.formatNoUnit(
                          o.$filters.defaults(o.order.totalMoney)
                        )
                      ),
                      bC: t.t(o.stockInfo.priceUnit || "元"),
                      bD: t.n(
                        o.order.totalMoney > 999999999
                          ? "fs-22"
                          : o.order.totalMoney > 999999
                          ? "fs-28"
                          : ""
                      ),
                    }
                  ),
              { bE: !(o.inputBoxFocus && !o.isPCWeixin && o.embeddedMode) },
              o.inputBoxFocus && !o.isPCWeixin && o.embeddedMode
                ? {}
                : t.e(
                    { bF: o.embeddedMode && o.showShareHolderCard },
                    o.embeddedMode && o.showShareHolderCard
                      ? {
                          bG: t.o(o.onGGTShareHolderChange),
                          bH: t.p({ inline: !0 }),
                          bI: t.n(o.simpleMode ? "simple" : ""),
                        }
                      : {},
                    { bJ: !o.stockInfo.isNewStock },
                    o.stockInfo.isNewStock
                      ? {
                          bQ: t.t(o.stockInfo.newstockStatusText),
                          bR: t.o(function () {
                            return (
                              o.toNewStock && o.toNewStock.apply(o, arguments)
                            );
                          }),
                        }
                      : t.e(
                          { bK: o.order.isBuyAction },
                          o.order.isBuyAction
                            ? {
                                bL: o.disableTradeSubmit,
                                bM: t.o(function () {
                                  return o.onBuy && o.onBuy.apply(o, arguments);
                                }),
                              }
                            : {},
                          { bN: o.order.isSellAction },
                          o.order.isSellAction
                            ? {
                                bO: o.disableTradeSubmit,
                                bP: t.o(function () {
                                  return (
                                    o.onSell && o.onSell.apply(o, arguments)
                                  );
                                }),
                              }
                            : {}
                        )
                  ),
              { bS: o.showPriceStrategyPopup },
              o.showPriceStrategyPopup
                ? {
                    bT: t.o(function (e) {
                      return (o.showPriceStrategyPopup = e);
                    }),
                    bU: t.o(o.setPriceByStrategy),
                    bV: t.p({
                      value: o.showPriceStrategyPopup,
                      strategy: o.strategy,
                      "is-after-trade-stock": o.isAfterTradeStock,
                      isGGT: o.stockInfo.isGGT,
                      pos: o.priceStrategyPos,
                    }),
                  }
                : {},
              { bW: o.showAmountPopup },
              o.showAmountPopup
                ? {
                    bX: t.n(o.inputBoxFocus ? "with-focus" : ""),
                    bY: t.o(function (e) {
                      return (o.showAmountPopup = e);
                    }),
                    bZ: t.o(o.onAmountInput),
                    ca: t.p({
                      value: o.showAmountPopup,
                      pos: o.amountPos,
                      "is-classic-trade-split-mode": !0,
                    }),
                  }
                : {},
              {
                cb: t.n(
                  o.simpleMode
                    ? "trade-form-container-simple"
                    : "trade-form-container-classic"
                ),
                cc: t.n(
                  o.tradeMode === o.TRADE_MODE.QUICKTRADE
                    ? "trade-form-container-quicktrade"
                    : ""
                ),
                cd: t.n(
                  o.inputBoxFocus && !o.isPCWeixin && o.embeddedMode
                    ? "trade-form-container__input-focus"
                    : ""
                ),
              }
            )
      );
    },
  ],
]);
wx.createComponent(r);
