var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  r = require("../../../config/enum.js"),
  i = require("../../../config/errcode.js"),
  c = require("../../../config/enum/condition.js"),
  a = require("../../../components/SubmitResult/enum.js");
require("../../../service/broker.js");
var s = require("../../../utils/getPlatform.js"),
  u = require("../../../service/stat/mp-weixin.js"),
  l = require("../../../service/aegis/platform/not-wujie.js"),
  d = require("../../../model/trade/conditions/usePriceCondition.js"),
  p = require("../../../model/trade/conditions/useAutoScrollIntoView.js"),
  m = require("../../../model/trade/conditions/useCommonBottomSelector.js"),
  f = require("../../../model/trade/conditions/useFormAmount.js"),
  S = require("../../../model/trade/stock-hooks/useStepPure.js"),
  h = require("../../../model/trade/conditions/useFormPrice.js"),
  g = require("../../../model/trade/conditions/useCondPrice.js"),
  C = require("../../../stores/app/useMode.js"),
  k = require("../../../model/trade/useSearch.js"),
  v = require("../../../model/trade/conditions/useSearchResult.js"),
  P = require("../../../model/trade/conditions/useConditionErrorHandle.js"),
  T = require("../../../model/trade/conditions/useSettingCheck.js"),
  x = require("../../../mixin/platforms/index.js"),
  I = require("../../../config/broker/11100/index.js"),
  A = {
    components: {
      PopOver: function () {
        return "../../../components/PopOver/PopOver.js";
      },
      BottomSelectorTrigger: function () {
        return "../components/condition/BottomSelectorTrigger.js";
      },
      BottomSelector: function () {
        return "../components/condition/BottomSelector.js";
      },
      PullAndPagination: function () {
        return "../../../components/PullAndPagination/mp/index.js";
      },
      SearchBar: function () {
        return "../../../bizs/trade/SearchBar.js";
      },
      SearchResult: function () {
        return "../../../bizs/trade/SearchResult.js";
      },
      ConditionQuote: function () {
        return "../components/condition/ConditionQuote.js";
      },
      FormWrap: function () {
        return "../components/condition/FormWrap.js";
      },
      Stepper: function () {
        return "../../../common/components/Stepper/index.js";
      },
      ConditionConfirm: function () {
        return "../components/condition/ConditionConfirm.js";
      },
      ConditionProtocol: function () {
        return "../components/condition/ConditionProtocol.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
    },
    mixins: [x.pluginMixins],
    setup: function () {
      var x = n.getCurrentInstance().proxy,
        A = s.getPlatform().isMiniProgram,
        O = n.ref(0),
        b = p.useAutoScrollIntoView({
          onScroll: function (e) {
            A
              ? n.index.pageScrollTo({ scrollTop: e, duration: 100 })
              : (O.value = e || 0);
          },
        }).setPageTop,
        y = C.useModeStore(),
        w = n.storeToRefs(y).simpleMode,
        B = I.brokerConfig.trade.condRiskTips,
        R = d.usePriceCondition(),
        q = R.stockInfo,
        j = R.quoteInfo,
        D = R.tradeAccount,
        L = R.getQuickAmountValue,
        N = R.handleRefresh,
        _ = R.clearWss,
        F = R.switchStock,
        E = R.initTradeService,
        V = R.updateSignStatus,
        M = R.pricePreCheck,
        Y = R.submitPrice,
        $ = R.pricePrecision,
        U = R.initPriceCondition,
        W = R.conditionOrder,
        H = R.orderCheckService,
        G = R.triggerValZdf,
        Q = R.triggerValDiff,
        K = R.weakHint,
        z = R.isSubmitLoading,
        Z = k.useSearch();
      n.provide("searchWithHold", Z);
      var J = v.useSearchResult({
          clickCallback: function (e) {
            A
              ? (F(e), Be(""))
              : (window && (window.priceSwitchFlag = !0),
                x.$router.replace({
                  type: "redirectTo",
                  name: "PriceCondition",
                  query: { code: e.code, market: e.market, name: e.name },
                }));
          },
        }),
        X = J.searching,
        ee = J.showSearch,
        te = J.handleSearchStateChange,
        oe = J.handleSearchResultClick,
        ne = n.ref(!1),
        re = T.useSettingCheck("price-condition-precheck"),
        ie = re.startSettingCheck,
        ce = re.checkSetting,
        ae = re.clearCheckTimer,
        se = n.debounce(
          o(
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          ie(),
                          W.tradeType === r.ACTION.BUY
                            ? u.stat.click("trade.trade.cond.buy")
                            : u.stat.click("trade.trade.cond.sell"),
                          (e.prev = 1),
                          (e.next = 4),
                          M()
                        );
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        return (
                          (e.prev = 6),
                          (e.t0 = e.catch(1)),
                          e.abrupt(
                            "return",
                            (u.stat.click(
                              "trade.pricecond.".concat(
                                (null == e.t0 ? void 0 : e.t0.retcode) ||
                                  "checkfail"
                              )
                            ),
                            void l.aegisReporter.reportEvent(
                              "TRADE-PRICE-CHECK-FAIL",
                              { ext3: JSON.stringify(e.t0) }
                            ))
                          )
                        );
                      case 9:
                        return (e.prev = 9), ce(), e.finish(9);
                      case 12:
                        ne.value = !0;
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 6, 9, 12]]
              );
            })
          ),
          1500,
          { leading: !0, trailing: !1 }
        ),
        ue = P.useConditionErrorHandle(),
        le = ue.setLastRetcode,
        de = ue.getErrorBtnText;
      function pe(e) {
        var t, o, n;
        null ==
          (n =
            null ==
            (o =
              null == (t = x.$refs.condConfirm) ? void 0 : t.$refs.condResult)
              ? void 0
              : o.$refs.simleAnimResult) || n.changeStatus(e);
      }
      var me = T.useSettingCheck("price-condition-confirmcheck"),
        fe = me.startSettingCheck,
        Se = me.checkSetting,
        he = me.clearCheckTimer,
        ge = n.debounce(
          o(
            t().mark(function e() {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        fe(),
                        (e.next = 3),
                        Y({
                          onCancel: function () {
                            (ne.value = !1), Se();
                          },
                          onCheckPwd: function () {
                            Se();
                          },
                          onLoading: function () {
                            n.index.$emit("condition.result.show"),
                              pe({
                                status: a.SimpleAnimStatus.Loading,
                                action: r.ACTION.BUY,
                                statusTitle: "价格条件单提交中",
                              }),
                              u.stat.click("trade.pricecond.loading");
                          },
                          onFail: function (e) {
                            le(e.retcode),
                              e && +e.retcode === i.UPDATE_END_CONDITION
                                ? pe({
                                    status: a.SimpleAnimStatus.Fail,
                                    statusTitle: "价格条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "一个标的只能创建一个价格条件单",
                                    buttonText: "返回",
                                  })
                                : pe({
                                    status: a.SimpleAnimStatus.Fail,
                                    statusTitle: "价格条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "网络原因导致提交失败，稍后重新提交",
                                    buttonText: de(),
                                  }),
                              u.stat.click("trade.price.fail"),
                              Se();
                          },
                          onSuccess: function () {
                            le(0),
                              pe({
                                status: a.SimpleAnimStatus.Success,
                                statusTitle: "价格条件单设置成功",
                                buttonText: "查看条件单",
                              }),
                              u.stat.click("trade.pricecond.succ"),
                              Se();
                          },
                        })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          1500,
          { leading: !0, trailing: !1 }
        ),
        Ce = n.ref(""),
        ke = n.ref(""),
        ve = S.useStepPure({ order: W, stockInfo: q }),
        Pe = ve.priceStep,
        Te = ve.amountStep,
        xe = n.ref(!0);
      n.watch(X, function (e) {
        xe.value = !e;
      });
      var Ie = f.useFormAmount({ order: W, stockInfo: q }),
        Ae = Ie.amountPopoverText,
        Oe = Ie.activeAmountLevel,
        be = Ie.handleAmountInput,
        ye = Ie.onAmountFocus,
        we = Ie.onAmountBlur,
        Be = Ie.setActiveAmountLevel;
      function Re(e) {
        W.isStockSet && be(e);
      }
      var qe = h.useFormPrice({ order: W, stock: q, checkService: H }),
        je = qe.pricePopoverText,
        De = qe.handlePriceInput,
        Le = g.useCondPrice({ order: W, stock: q, checkService: H }),
        Ne = Le.pricePopoverText,
        _e = Le.handlePriceInput,
        Fe = Le.clearPricePopoverText,
        Ee = n.ref([
          { key: "1", text: "全仓", statKey: "one" },
          { key: "1/2", text: "1/2", statKey: "half" },
          { key: "1/3", text: "1/3", statKey: "onethird" },
          { key: "1/4", text: "1/4", statKey: "onefour" },
        ]),
        Ve = m.useCommonBottomSelector(
          W,
          e({}, c.PRICE_VALIDDAY_CONFIG.id, c.PRICE_VALIDDAY_CONFIG)
        ),
        Me = Ve.bottomSelectedVal,
        Ye = Ve.bottomSelectorConfig,
        $e = Ve.bottomSelectState,
        Ue = Ve.hideBottomSelector,
        We = Ve.showBottomSelector,
        He = Ve.handleBottomSelectorChange;
      return (
        n.onBeforeMount(function () {
          U();
        }),
        n.onBeforeUnmount(function () {
          ae(), he();
        }),
        {
          pageScrollTop: O,
          handleScroll: function (e) {
            (O.value = e.detail.scrollTop || 0), b({ scrollTop: O.value });
          },
          handleRefresh: N,
          conditionOrder: W,
          searching: X,
          handleSearchStateChange: te,
          handleSearchResultClick: oe,
          condRiskTips: B,
          quoteInfo: j,
          showSearch: function () {
            var e, t;
            ee(),
              u.stat.click("trade.pricecond.searchicon"),
              null ==
                (t =
                  null == (e = x.$refs.realSearchBar)
                    ? void 0
                    : e.handleFocus) || t.call(e);
          },
          statNameClick: function () {
            u.stat.click("trade.pricecond.tohq");
          },
          onClickPriceCeiling: function () {
            var e = q.value.secu_quote.dqj;
            "--" !== e &&
              "" !== e &&
              ((W.condPrice = e), u.stat.click("trade.trade.harden"));
          },
          condPricePopoverText: Ne,
          getPopoverTextLong: function (e) {
            return (null == e ? void 0 : e.length) >= 18 ? "long" : "";
          },
          amountStep: Te,
          currentFocus: Ce,
          simpleMode: w,
          handleAmountInput: Re,
          handleAmountFocus: function () {
            (Ce.value = "amount"), (xe.value = !1), ye();
          },
          handleAmountBlur: function (e) {
            (xe.value = !0), W.isStockSet && ((Ce.value = ""), we(e));
          },
          stockInfo: q,
          onClickMaxBuy: function () {
            Re(D.max_buy_qty);
          },
          tradeAccount: D,
          amountLevels: Ee,
          activeAmountLevel: Oe,
          onClickQuickAmountItem: function (e, t) {
            var o = e.key,
              n = L(o, t);
            "--" !== n && Re(n), Be(o);
          },
          ORDER_VALIDATE_DAYS: r.ORDER_VALIDATE_DAYS,
          showBottomSelector: We,
          PRICE_VALIDDAY_CONFIG: c.PRICE_VALIDDAY_CONFIG,
          startSettingDebounce: se,
          bottomSelectorConfig: Ye,
          bottomSelectState: $e,
          bottomSelectedVal: Me,
          handleBottomSelectorChange: He,
          hideBottomSelector: Ue,
          showConditionConfirm: ne,
          handleConfirmDebounce: ge,
          initTradeService: E,
          updateSignStatus: V,
          clearWss: _,
          setPageTop: b,
          pricePrecision: $,
          triggerValZdf: G,
          triggerValDiff: Q,
          priceStep: Pe,
          amountPopoverText: Ae,
          pricePopoverText: je,
          handlePriceInput: function (e) {
            W.isStockSet && De(e);
          },
          condHandlePriceInput: _e,
          handleFocus: function (e) {
            (Ce.value = e),
              (xe.value = !1),
              ["price", "condPrice"].indexOf(e) > -1 && (ke.value = e),
              "price" === e &&
                0 === Number(W.price) &&
                x.$refs.priceStepperRef.forceSetCurrentValue("");
          },
          handleBlur: function () {
            (Ce.value = ""), (xe.value = !0);
          },
          onTriggerPriceNextInput: function () {
            x.$refs.triggerPriceStepperRef.$refs.input.onClose(),
              n.nextTick$1(function () {
                x.$refs.priceStepperRef.$refs.input.focus();
              });
          },
          onPriceNextInput: function () {
            x.$refs.priceStepperRef.$refs.input.onClose(),
              n.nextTick$1(function () {
                x.$refs.amountStepperRef.$refs.input.focus();
              });
          },
          onClickMaxSell: function () {
            Re(D.max_sell_qty);
          },
          onClickWay: function (e) {
            W.isStockSet && ((W.tradeType = e), Fe());
          },
          diffPrefix: function (e) {
            if (isNaN(e)) return "";
            var t = "";
            return (e = +e) < 0 ? (t = "跌幅") : e > 0 && (t = "涨幅"), t;
          },
          ACTION: r.ACTION,
          showBottomBtn: xe,
          isMiniProgram: A,
          weakHint: K,
          isSubmitLoading: z,
        }
      );
    },
    onShow: function () {
      try {
        (null == window ? void 0 : window.priceSwitchFlag)
          ? (window.priceSwitchFlag = !1)
          : u.stat.page("/trade/condition/price"),
          this.conditionOrder.isStockSet && this.initTradeService(),
          this.updateSignStatus();
      } catch (e) {}
    },
    onHide: function () {
      this.clearWss();
    },
    onUnload: function () {
      this.clearWss();
    },
    onPullDownRefresh: function () {
      this.handleRefresh();
    },
    onPageScroll: function (e) {
      this.setPageTop(e);
    },
  };
Array ||
  (
    n.resolveComponent("SearchBar") +
    n.resolveComponent("SearchResult") +
    n.resolveComponent("ConditionQuote") +
    n.resolveComponent("Stepper") +
    n.resolveComponent("PopOver") +
    n.resolveComponent("FormWrap") +
    n.resolveComponent("BottomSelectorTrigger") +
    n.resolveComponent("BottomSelector") +
    n.resolveComponent("ConditionProtocol") +
    n.resolveComponent("ConditionConfirm") +
    n.resolveComponent("MpDialog") +
    n.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../../components/PopOver/PopOver.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var O = n._export_sfc(A, [
  [
    "render",
    function (e, t, o, r, i, c) {
      var a, s, u;
      return n.e(
        {
          a: e.rootFontSize,
          b: n.sr("realSearchBar", "3036c67f-1,3036c67f-0"),
          c: n.o(r.handleSearchStateChange),
          d: n.p({ searching: r.searching }),
          e: !r.conditionOrder.isStockSet || r.searching,
          f: r.searching,
          g: n.o(r.handleSearchResultClick),
          h: r.conditionOrder.isStockSet,
        },
        r.conditionOrder.isStockSet
          ? {
              i: n.o(r.showSearch),
              j: n.o(r.statNameClick),
              k: n.o(r.onClickPriceCeiling),
              l: n.p({
                name: r.conditionOrder.name,
                code: r.conditionOrder.code,
                market: r.conditionOrder.market,
                "quote-info": r.quoteInfo,
                "show-search": !r.conditionOrder.isUpdate,
              }),
            }
          : {},
        {
          m: r.isMiniProgram ? 1 : "",
          n: n.sr("triggerPriceStepperRef", "3036c67f-6,3036c67f-5"),
          o: n.o(r.condHandlePriceInput),
          p: n.o(function (e) {
            return r.handleFocus("condPrice");
          }),
          q: n.o(r.handleBlur),
          r: n.o(r.onTriggerPriceNextInput),
          s: n.p({
            "decimal-length": r.pricePrecision,
            disabled: !r.conditionOrder.isStockSet,
            value: r.conditionOrder.condPrice,
            step: r.priceStep,
            max: 9999,
            "max-length": 9,
            focus: "condPrice" === r.currentFocus,
            "confirm-type": "next",
            "simple-mode": !0,
          }),
          t: n.n(r.getPopoverTextLong(r.condPricePopoverText)),
          v: n.p({ text: r.condPricePopoverText }),
          w: n.t(r.diffPrefix(r.triggerValDiff)),
          x: n.t(r.triggerValZdf),
          y: n.n(
            r.conditionOrder.tradeType !== r.ACTION.BUY &&
              r.conditionOrder.isStockSet
              ? ""
              : "active"
          ),
          z: n.n(r.simpleMode ? "" : "classic-mode"),
          A: n.o(function (e) {
            return r.onClickWay(r.ACTION.BUY);
          }),
          B: n.n(r.conditionOrder.tradeType === r.ACTION.SELL ? "active" : ""),
          C: n.n(r.simpleMode ? "" : "classic-mode"),
          D: n.o(function (e) {
            return r.onClickWay(r.ACTION.SELL);
          }),
          E: n.sr("priceStepperRef", "3036c67f-10,3036c67f-9"),
          F: n.o(r.handlePriceInput),
          G: n.o(function (e) {
            return r.handleFocus("price");
          }),
          H: n.o(r.handleBlur),
          I: n.o(r.onPriceNextInput),
          J: n.p({
            "decimal-length": r.pricePrecision,
            disabled: !r.conditionOrder.isStockSet,
            value: r.conditionOrder.price,
            step: r.priceStep,
            max: 9999,
            "max-length": 9,
            focus: "price" === r.currentFocus,
            "simple-mode": !0,
            "confirm-type": "next",
          }),
          K: n.n(r.getPopoverTextLong(r.pricePopoverText)),
          L: n.p({ text: r.pricePopoverText }),
          M: n.sr("amountStepperRef", "3036c67f-13,3036c67f-12"),
          N: n.o(r.handleAmountInput),
          O: n.o(r.handleAmountFocus),
          P: n.o(r.handleAmountBlur),
          Q: n.p({
            disabled: !r.conditionOrder.isStockSet,
            value: r.conditionOrder.amount,
            integer: !0,
            max: 1e6,
            "max-length": 7,
            step: r.amountStep,
            focus: "amount" === r.currentFocus,
            "simple-mode": !0,
            "extra-key": "00",
          }),
          R: n.n(r.getPopoverTextLong(r.amountPopoverText)),
          S: n.p({ text: r.amountPopoverText }),
          T: r.conditionOrder.isStockSet,
        },
        r.conditionOrder.isStockSet
          ? n.e(
              { U: r.conditionOrder.tradeType === r.ACTION.BUY },
              r.conditionOrder.tradeType === r.ACTION.BUY
                ? n.e(
                    { V: !r.stockInfo.secu_info },
                    r.stockInfo.secu_info
                      ? {
                          W: n.t(r.tradeAccount.max_buy_qty),
                          X: n.t(r.stockInfo.quantityUnit),
                          Y: n.o(function () {
                            return (
                              r.onClickMaxBuy &&
                              r.onClickMaxBuy.apply(r, arguments)
                            );
                          }),
                        }
                      : {},
                    {
                      Z: n.f(r.amountLevels, function (e, t, o) {
                        return {
                          a: n.t(e.text),
                          b: e.key,
                          c: n.n(r.activeAmountLevel === e.key ? "active" : ""),
                          d: n.o(function (t) {
                            return r.onClickQuickAmountItem(e, "buy");
                          }, e.key),
                        };
                      }),
                    }
                  )
                : {},
              { aa: r.conditionOrder.tradeType === r.ACTION.SELL },
              r.conditionOrder.tradeType === r.ACTION.SELL
                ? n.e(
                    { ab: !r.stockInfo.secu_info },
                    r.stockInfo.secu_info
                      ? {
                          ac: n.t(r.tradeAccount.max_sell_qty),
                          ad: n.t(r.stockInfo.quantityUnit),
                          ae: n.o(function () {
                            return (
                              r.onClickMaxSell &&
                              r.onClickMaxSell.apply(r, arguments)
                            );
                          }),
                        }
                      : {},
                    {
                      af: n.f(r.amountLevels, function (e, t, o) {
                        return {
                          a: n.t(e.text),
                          b: e.key,
                          c: n.n(r.activeAmountLevel === e.key ? "active" : ""),
                          d: n.o(function (t) {
                            return r.onClickQuickAmountItem(e, "sell");
                          }, e.key),
                        };
                      }),
                    }
                  )
                : {}
            )
          : {},
        {
          ag: n.o(function (e) {
            return r.showBottomSelector(e, r.PRICE_VALIDDAY_CONFIG.id);
          }),
          ah: n.p({
            "selected-val": r.conditionOrder.validDayEnum,
            "select-range": r.ORDER_VALIDATE_DAYS,
          }),
          ai: n.t(
            r.conditionOrder.timeText
              ? "".concat(r.conditionOrder.timeText, "过期")
              : "--"
          ),
          aj: (null == (a = r.condRiskTips) ? void 0 : a.length) > 0,
        },
        (null == (s = r.condRiskTips) ? void 0 : s.length) > 0
          ? {
              ak: n.f(r.condRiskTips, function (e, t, o) {
                return { a: n.t(e), b: t };
              }),
            }
          : {},
        {
          al: !r.searching,
          am: n.n(r.conditionOrder.isStockSet ? "is-set" : ""),
          an: n.n(
            (null == (u = r.condRiskTips) ? void 0 : u.length) > 0
              ? "has-tips"
              : ""
          ),
          ao: r.conditionOrder.tradeType === r.ACTION.BUY,
        },
        r.conditionOrder.tradeType === r.ACTION.BUY
          ? {
              ap: r.stockInfo.disabled || !r.conditionOrder.isStockSet,
              aq: n.o(function () {
                return (
                  r.startSettingDebounce &&
                  r.startSettingDebounce.apply(r, arguments)
                );
              }),
            }
          : r.conditionOrder.tradeType === r.ACTION.SELL
          ? {
              as: r.stockInfo.disabled || !r.conditionOrder.isStockSet,
              at: n.o(function () {
                return (
                  r.startSettingDebounce &&
                  r.startSettingDebounce.apply(r, arguments)
                );
              }),
            }
          : {},
        {
          ar: r.conditionOrder.tradeType === r.ACTION.SELL,
          av: r.showBottomBtn,
          aw: n.o(r.handleBottomSelectorChange),
          ax: n.o(r.hideBottomSelector),
          ay: n.p({
            title: r.bottomSelectorConfig.title,
            value: r.bottomSelectState,
            "selected-val": r.bottomSelectedVal,
            "select-range": r.bottomSelectorConfig.range,
          }),
          az: n.sr("condProtocol", "3036c67f-17,3036c67f-0"),
          aA: r.showConditionConfirm,
        },
        r.showConditionConfirm
          ? {
              aB: n.sr("condConfirm", "3036c67f-18,3036c67f-0"),
              aC: n.o(r.handleConfirmDebounce),
              aD: n.o(function (e) {
                return (r.showConditionConfirm = !1);
              }),
              aE: n.p({
                "weak-hint": r.weakHint,
                conditionOrder: r.conditionOrder,
                stockInfo: r.stockInfo,
                "hide-close-icon": r.isSubmitLoading,
              }),
            }
          : {},
        {
          aF: n.p({ id: "mp-dialog" }),
          aG: n.sr("#global-wrap", "3036c67f-0"),
          aH: n.p({
            id: "global-wrap",
            filePath: "/trade/condition/price",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3036c67f"],
]);
wx.createPage(O);
