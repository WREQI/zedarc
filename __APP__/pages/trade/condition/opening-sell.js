var e = require("../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  i = require("../../../config/enum.js"),
  r = require("../../../config/errcode.js"),
  l = require("../../../config/enum/condition.js"),
  c = require("../../../components/SubmitResult/enum.js");
require("../../../service/broker.js");
var a = require("../../../utils/getPlatform.js"),
  s = require("../../../service/stat/mp-weixin.js"),
  u = require("../../../service/aegis/platform/not-wujie.js"),
  d = require("../../../model/trade/conditions/useOpeningSellCondition.js"),
  p = require("../../../model/trade/conditions/useAutoScrollIntoView.js"),
  S = require("../../../model/trade/conditions/useCommonBottomSelector.js"),
  m = require("../../../model/trade/stock-hooks/useStepPure.js"),
  g = require("../../../model/trade/useSearch.js"),
  f = require("../../../model/trade/conditions/useSearchResult.js"),
  h = require("../../../model/trade/conditions/useConditionErrorHandle.js"),
  T = require("../../../model/trade/conditions/useSettingCheck.js"),
  C = require("../../../model/trade/conditions/useOpeningSellConfirm.js"),
  _ = require("../../../model/common/useVisibleControl.js"),
  E = require("../../../mixin/platforms/index.js"),
  O = require("../../../config/broker/11100/index.js"),
  P = {
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
        return "../components/condition/newCondConfirm.js";
      },
      ConditionProtocol: function () {
        return "../components/condition/ConditionProtocol.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      SelectorPopup: function () {
        return "../components/condition/InvestConditionNumOrAmountPopup.js";
      },
      CondResult: function () {
        return "../../../components/SubmitResult/ActionSheetResult.js";
      },
    },
    mixins: [E.pluginMixins],
    setup: function () {
      var E,
        P = t.getCurrentInstance().proxy,
        w = a.getPlatform().isMiniProgram,
        v = t.ref(0),
        N = p.useAutoScrollIntoView({
          onScroll: function (e) {
            w
              ? t.index.pageScrollTo({ scrollTop: e, duration: 100 })
              : (v.value = e || 0);
          },
        }).setPageTop,
        I = O.brokerConfig.trade.condRiskTips || [],
        R = O.brokerConfig.trade.openingSellCondRiskTips || "",
        L = d.useOpeningSellCondition(),
        y = L.stockInfo,
        k = L.quoteInfo,
        b = L.handleRefresh,
        G = L.clearWss,
        D = L.switchStock,
        A = L.initTradeService,
        q = L.updateSignStatus,
        x = L.orderPreCheck,
        B = L.submitOrder,
        j = L.initOpeningSellCondition,
        F = L.conditionOrder,
        V = L.tradeAccount,
        Y = L.weakHint,
        M = L.requiredFieldTips,
        U = L.clearRequiredFieldTips,
        W = L.isSubmitLoading,
        $ = g.useSearch();
      t.provide("searchWithHold", $);
      var H = f.useSearchResult({
          clickCallback: function (e) {
            w
              ? D(e)
              : (window && (window.OpeningSellSwitchFlag = !0),
                P.$router.replace({
                  type: "redirectTo",
                  name: "OpeningSellCondition",
                  query: { code: e.code, market: e.market, name: e.name },
                }));
          },
        }),
        Q = H.searching,
        X = H.showSearch,
        z = H.handleSearchStateChange,
        J = H.handleSearchResultClick,
        K = C.useOpeningSellConfirm({ conditionOrder: F, stockInfo: y }),
        Z = K.confirmData,
        ee = K.confirmVisible,
        ne = K.showConfirm,
        oe = K.hideConfirm,
        te = T.useSettingCheck("opening-sell-condition-precheck"),
        ie = te.startSettingCheck,
        re = te.checkSetting,
        le = te.clearCheckTimer,
        ce = t.debounce(
          o(
            n().mark(function e() {
              return n().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          ie(),
                          s.stat.click("trade.openingsellcond.setting"),
                          (e.prev = 1),
                          (e.next = 4),
                          x()
                        );
                      case 4:
                        ne(), (e.next = 10);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          e.abrupt(
                            "return",
                            (s.stat.click(
                              "trade.openingsellcond.".concat(
                                (null == e.t0 ? void 0 : e.t0.retcode) ||
                                  "checkfail"
                              )
                            ),
                            void u.aegisReporter.reportEvent(
                              "TRADE-OPENING_SELL-CHECK-FAIL",
                              { ext3: JSON.stringify(e.t0) }
                            ))
                          )
                        );
                      case 10:
                        return (e.prev = 10), re(), e.finish(10);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 7, 10, 13]]
              );
            })
          ),
          1500,
          { leading: !0, trailing: !1 }
        ),
        ae = h.useConditionErrorHandle(),
        se = ae.setLastRetcode,
        ue = ae.getErrorBtnText;
      function de(e) {
        var n, o;
        null ==
          (o =
            null == (n = P.$refs.condResult)
              ? void 0
              : n.$refs.simleAnimResult) || o.changeStatus(e);
      }
      var pe = T.useSettingCheck("opening-sell-condition-confirmcheck"),
        Se = pe.startSettingCheck,
        me = pe.checkSetting,
        ge = pe.clearCheckTimer,
        fe = _.useVisibleControl(),
        he = fe.visible,
        Te = fe.show,
        Ce = fe.hide,
        _e = t.debounce(
          o(
            n().mark(function e() {
              return n().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        Se(),
                        (e.next = 3),
                        B({
                          onCancel: function () {
                            oe(), me();
                          },
                          onCheckPwd: function () {
                            me();
                          },
                          onLoading: function () {
                            oe(),
                              Te(),
                              de({
                                status: c.SimpleAnimStatus.Loading,
                                statusTitle: "开板卖出条件单提交中",
                              }),
                              s.stat.click("trade.openingsellcond.loading");
                          },
                          onFail: function (e) {
                            se(e.retcode),
                              e && +e.retcode === r.UPDATE_END_CONDITION
                                ? de({
                                    status: c.SimpleAnimStatus.Fail,
                                    statusTitle: "开板卖出条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "一个标的只能创建一个开板卖出条件单",
                                    buttonText: "返回",
                                  })
                                : de({
                                    status: c.SimpleAnimStatus.Fail,
                                    statusTitle: "开板卖出条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "网络原因导致提交失败，稍后重新提交",
                                    buttonText: ue(),
                                  }),
                              s.stat.click("trade.openingsell.fail"),
                              me();
                          },
                          onSuccess: function () {
                            se(0),
                              de({
                                status: c.SimpleAnimStatus.Success,
                                statusTitle: "开板卖出条件单设置成功",
                                buttonText: "查看条件单",
                              }),
                              s.stat.click("trade.openingsellcond.succ"),
                              me();
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
        Ee = t.ref(""),
        Oe = t.ref(!1),
        Pe = t.ref(!0);
      t.watch(Q, function (e) {
        Pe.value = !e;
      });
      var we = S.useCommonBottomSelector(
          F,
          (e((E = {}), l.PRICE_VALIDDAY_CONFIG.id, l.PRICE_VALIDDAY_CONFIG),
          e(
            E,
            l.OPENING_SELL_BUY_PRICE_SELECT_CONFIG.id,
            l.OPENING_SELL_BUY_PRICE_SELECT_CONFIG
          ),
          E)
        ),
        ve = we.bottomSelectedVal,
        Ne = we.bottomSelectorConfig,
        Ie = we.bottomSelectState,
        Re = we.hideBottomSelector,
        Le = we.showBottomSelector,
        ye = we.handleBottomSelectorChange,
        ke = [
          {
            title: "开板即触发",
            desc: "开板立即触发委托",
            val: l.OPENING_SELL_TRIGGER_TYPE.immediately,
          },
          {
            title: "开板后回落",
            desc: "以当日涨停价为基准，达到回落目标后再触发委托",
            val: l.OPENING_SELL_TRIGGER_TYPE.downTo,
          },
        ],
        be = t.ref(!1),
        Ge = [
          {
            title: "按回落幅度",
            desc: "以当日涨停价为基准，达到回落百分比时触发",
            val: l.OPENING_SELL_DOWNTO_TYPE.percent,
          },
          {
            title: "按回落金额",
            desc: "以当日涨停价为基准，达到回落金额时触发",
            val: l.OPENING_SELL_DOWNTO_TYPE.absolute,
          },
        ],
        De = t.computed(function () {
          return F.downType === l.OPENING_SELL_DOWNTO_TYPE.percent
            ? {
                title: "回落幅度",
                spreadAcc: 2,
                spread: 1,
                max: 100,
                maxLength: 5,
              }
            : {
                title: "回落金额",
                spreadAcc: y.value.spreadAcc || 2,
                spread: y.value.spread || 0.01,
                max: 9999,
                maxLength: 8,
              };
        }),
        Ae = t.computed(function () {
          return F.downValue &&
            F.downType === l.OPENING_SELL_DOWNTO_TYPE.percent
            ? "-"
            : "";
        }),
        qe = t.computed(function () {
          return F.downValue &&
            F.downType === l.OPENING_SELL_DOWNTO_TYPE.percent
            ? "%"
            : "";
        }),
        xe = t.computed(function () {
          return F.downValue &&
            F.downValue > 0 &&
            F.downType === l.OPENING_SELL_DOWNTO_TYPE.percent
            ? "cond-noequal"
            : "";
        }),
        Be = t.computed(function () {
          var e;
          return (null == (e = y.value) ? void 0 : e.minAmount) || "100";
        }),
        je = m.useStepPure({
          order: F,
          stockInfo: y,
          amountKey: "quantity",
        }).amountStep;
      return (
        t.onBeforeMount(function () {
          j();
        }),
        t.onBeforeUnmount(function () {
          le(), ge();
        }),
        {
          pageScrollTop: v,
          handleScroll: function (e) {
            (v.value = e.detail.scrollTop || 0), N({ scrollTop: v.value });
          },
          handleRefresh: b,
          conditionOrder: F,
          tradeAccount: V,
          searching: Q,
          handleSearchStateChange: z,
          handleSearchResultClick: J,
          condRiskTips: I,
          openingSellCondRiskTips: R,
          quoteInfo: k,
          showSearch: function () {
            var e, n;
            X(),
              s.stat.click("trade.openingsellcond.searchicon"),
              null ==
                (n =
                  null == (e = P.$refs.realSearchBar)
                    ? void 0
                    : e.handleFocus) || n.call(e);
          },
          statNameClick: function () {
            s.stat.click("trade.openingsellcond.tohq");
          },
          getPopoverTextLong: function (e) {
            return (null == e ? void 0 : e.length) >= 18 ? "long" : "";
          },
          currentFocus: Ee,
          stockInfo: y,
          ORDER_VALIDATE_DAYS: i.ORDER_VALIDATE_DAYS,
          showBottomSelector: function (e, n) {
            "triggerType" === n
              ? ((Oe.value = !0),
                F.setDownType(l.OPENING_SELL_DOWNTO_TYPE.percent))
              : Le(e, n);
          },
          PRICE_VALIDDAY_CONFIG: l.PRICE_VALIDDAY_CONFIG,
          startSettingDebounce: ce,
          bottomSelectorConfig: Ne,
          bottomSelectState: Ie,
          bottomSelectedVal: ve,
          handleBottomSelectorChange: ye,
          hideBottomSelector: Re,
          handleConfirmDebounce: _e,
          initTradeService: A,
          updateSignStatus: q,
          clearWss: G,
          setPageTop: N,
          handleFocus: function (e) {
            (Ee.value = e), (Pe.value = !1);
          },
          handleBlur: function () {
            (Ee.value = ""), (Pe.value = !0);
          },
          showBottomBtn: Pe,
          isMiniProgram: w,
          weakHint: Y,
          isShowTriggerTypePopup: Oe,
          onTriggerTypeChange: function (e) {
            F.setTriggerType(e), (Oe.value = !1);
          },
          handleQuantityInput: function (e) {
            F.setQuantity(e), U("quantity");
          },
          confirmData: Z,
          confirmVisible: ee,
          hideConfirm: oe,
          CondTypesBackEnd: l.CondTypesBackEnd,
          requiredFieldTips: M,
          toCurrency: t.__CJS__export_toCurrency__,
          confirmResultVisible: he,
          hideConfirmResult: Ce,
          OPENING_SELL_TRIGGER_TYPE_SELECTOR_RANGE:
            l.OPENING_SELL_TRIGGER_TYPE_SELECTOR_RANGE,
          OPENING_SELL_TRIGGER_TYPE: l.OPENING_SELL_TRIGGER_TYPE,
          TRIGGER_TYPE_POPUP_CONFIG: ke,
          downTypeStepperConfig: De,
          changeDownToValue: function (e) {
            U("downToInfo"), F.setDownValue(e);
          },
          isShowDownTypePopup: be,
          DOWN_TO_POPUP_CONFIG: Ge,
          onDownTypeChange: function (e) {
            F.setDownType(e), (be.value = !1), F.setDownValue("");
          },
          downTypeStepperPrefix: Ae,
          downTypeStepperAfter: qe,
          amountStep: je,
          handleMaxSellClick: function () {
            var e = Math.floor(+(null == V ? void 0 : V.max_sell_qty));
            e > l.OPENING_SELL_MAX_AMOUNT && (e = l.OPENING_SELL_MAX_AMOUNT),
              F.setQuantity(e + "");
          },
          toCondInfo: function () {
            P.$router.push({ name: "OpeningSellConditionGuide" });
          },
          handleDownValueNext: function () {
            var e, n, o, i, r;
            null ==
              (r =
                null ==
                (i =
                  null ==
                  (o =
                    null ==
                    (n = null == (e = P.$refs) ? void 0 : e.downToStepStepper)
                      ? void 0
                      : n.$refs)
                    ? void 0
                    : o.input)
                  ? void 0
                  : i.onClose) || r.call(i),
              t.nextTick$1(function () {
                var e, n, o, t, i;
                null ==
                  (i =
                    null ==
                    (t =
                      null ==
                      (o =
                        null ==
                        (n =
                          null == (e = P.$refs)
                            ? void 0
                            : e.quantityStepStepper)
                          ? void 0
                          : n.$refs)
                        ? void 0
                        : o.input)
                      ? void 0
                      : t.focus) || i.call(t);
              });
          },
          PriceTypeRange: l.PriceTypeRange,
          OPENING_SELL_BUY_PRICE_SELECT_CONFIG:
            l.OPENING_SELL_BUY_PRICE_SELECT_CONFIG,
          minSellAmount: Be,
          downTypeStepperCls: xe,
          OPENING_SELL_MAX_AMOUNT: l.OPENING_SELL_MAX_AMOUNT,
          isSubmitLoading: W,
        }
      );
    },
    onShow: function () {
      try {
        (null == window ? void 0 : window.OpeningSellSwitchFlag)
          ? (window.OpeningSellSwitchFlag = !1)
          : s.stat.page("/trade/condition/opening-sell"),
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
    t.resolveComponent("SearchBar") +
    t.resolveComponent("SearchResult") +
    t.resolveComponent("ConditionQuote") +
    t.resolveComponent("BottomSelectorTrigger") +
    t.resolveComponent("FormWrap") +
    t.resolveComponent("Stepper") +
    t.resolveComponent("BottomSelector") +
    t.resolveComponent("ConditionProtocol") +
    t.resolveComponent("ConditionConfirm") +
    t.resolveComponent("CondResult") +
    t.resolveComponent("SelectorPopup") +
    t.resolveComponent("MpDialog") +
    t.resolveComponent("GlobalWrap")
  )(),
  Math;
var w = t._export_sfc(P, [
  [
    "render",
    function (e, n, o, i, r, l) {
      return t.e(
        {
          a: e.rootFontSize,
          b: t.sr("realSearchBar", "61e92ebe-1,61e92ebe-0"),
          c: t.o(i.handleSearchStateChange),
          d: t.p({ searching: i.searching }),
          e: !i.conditionOrder.isStockSet || i.searching,
          f: i.searching,
          g: t.o(i.handleSearchResultClick),
          h: i.conditionOrder.isStockSet,
        },
        i.conditionOrder.isStockSet
          ? {
              i: t.o(i.showSearch),
              j: t.o(i.statNameClick),
              k: t.p({
                name: i.conditionOrder.name,
                code: i.conditionOrder.code,
                market: i.conditionOrder.market,
                "quote-info": i.quoteInfo,
                "show-search": !i.conditionOrder.isUpdate,
              }),
            }
          : {},
        {
          l: i.isMiniProgram ? 1 : "",
          m: t.o(function (e) {
            return i.showBottomSelector(e, "triggerType");
          }),
          n: t.p({
            "selected-val": i.conditionOrder.triggerType,
            "select-range": i.OPENING_SELL_TRIGGER_TYPE_SELECTOR_RANGE,
          }),
          o:
            i.conditionOrder.triggerType === i.OPENING_SELL_TRIGGER_TYPE.downTo,
        },
        i.conditionOrder.triggerType === i.OPENING_SELL_TRIGGER_TYPE.downTo
          ? {
              p: t.t(i.downTypeStepperConfig.title),
              q: t.o(function (e) {
                return (i.isShowDownTypePopup = !0);
              }),
              r: t.sr("downToStepStepper", "61e92ebe-7,61e92ebe-6"),
              s: t.o(i.changeDownToValue),
              t: t.o(function (e) {
                return i.handleFocus("downValue");
              }),
              v: t.o(i.handleBlur),
              w: t.o(function (e) {
                return i.handleDownValueNext();
              }),
              x: t.p({
                "simple-mode": !0,
                "confirm-type": "next",
                "is-filter-negativ-sign": !0,
                "support-empty": !0,
                placeholder: "请输入",
                value: i.conditionOrder.downValue,
                "decimal-length": i.downTypeStepperConfig.spreadAcc,
                step: i.downTypeStepperConfig.spread,
                max: i.downTypeStepperConfig.max,
                min: 0,
                "max-length": i.downTypeStepperConfig.maxLength,
                "value-prefix": i.downTypeStepperPrefix,
                "value-after": i.downTypeStepperAfter,
              }),
              y: t.n(i.requiredFieldTips.downToInfo ? "need-fill-color" : ""),
              z: t.n(i.downTypeStepperCls),
            }
          : {},
        {
          A: t.o(function (e) {
            return i.showBottomSelector(
              e,
              i.OPENING_SELL_BUY_PRICE_SELECT_CONFIG.id
            );
          }),
          B: t.p({
            "selected-val": i.conditionOrder.orderPriceType,
            "select-range": i.PriceTypeRange,
          }),
          C: t.sr("quantityStepStepper", "61e92ebe-11,61e92ebe-10"),
          D: t.o(i.handleQuantityInput),
          E: t.o(function (e) {
            return i.handleFocus("quantity");
          }),
          F: t.o(i.handleBlur),
          G: t.p({
            "decimal-length": 0,
            disabled: !i.conditionOrder.isStockSet,
            value: i.conditionOrder.quantity,
            integer: !0,
            step: i.amountStep,
            max: i.OPENING_SELL_MAX_AMOUNT,
            min: i.minSellAmount,
            "max-length": 7,
            focus: "quantity" === i.currentFocus,
            "simple-mode": !0,
            placeholder: "请输入",
          }),
          H: t.n(i.requiredFieldTips.quantity ? "need-fill-color" : ""),
          I: t.t(i.toCurrency(i.tradeAccount.max_sell_qty, 0)),
          J: t.t(i.stockInfo.quantityUnit),
          K: t.o(function () {
            return (
              i.handleMaxSellClick && i.handleMaxSellClick.apply(i, arguments)
            );
          }),
          L: t.o(function (e) {
            return i.showBottomSelector(e, i.PRICE_VALIDDAY_CONFIG.id);
          }),
          M: t.p({
            "selected-val": i.conditionOrder.validDayEnum,
            "select-range": i.ORDER_VALIDATE_DAYS,
          }),
          N: t.t(
            i.conditionOrder.timeText
              ? "".concat(i.conditionOrder.timeText, "过期")
              : "--"
          ),
          O: t.o(function () {
            return i.toCondInfo && i.toCondInfo.apply(i, arguments);
          }),
          P: i.condRiskTips.length > 0,
        },
        i.condRiskTips.length > 0
          ? t.e(
              { Q: i.openingSellCondRiskTips },
              i.openingSellCondRiskTips
                ? { R: t.t(i.openingSellCondRiskTips) }
                : {},
              {
                S: t.f(i.condRiskTips, function (e, n, o) {
                  return { a: t.t(e), b: n };
                }),
              }
            )
          : {},
        {
          T: !i.searching,
          U: t.n(i.conditionOrder.isStockSet ? "is-set" : ""),
          V: i.isMiniProgram ? 1 : "",
          W: i.stockInfo.disabled || !i.conditionOrder.isStockSet,
          X: t.o(function () {
            return (
              i.startSettingDebounce &&
              i.startSettingDebounce.apply(i, arguments)
            );
          }),
          Y: i.showBottomBtn,
          Z: t.o(i.handleBottomSelectorChange),
          aa: t.o(i.hideBottomSelector),
          ab: t.p({
            title: i.bottomSelectorConfig.title,
            value: i.bottomSelectState,
            "selected-val": i.bottomSelectedVal,
            "select-range": i.bottomSelectorConfig.range,
          }),
          ac: t.sr("condProtocol", "61e92ebe-15,61e92ebe-0"),
          ad: i.confirmVisible,
        },
        i.confirmVisible
          ? {
              ae: t.o(i.hideConfirm),
              af: t.o(i.handleConfirmDebounce),
              ag: t.p({
                "week-hint": i.weakHint,
                data: i.confirmData,
                type: i.CondTypesBackEnd.OPENING_SELL,
              }),
            }
          : {},
        {
          ah: t.sr("condResult", "61e92ebe-17,61e92ebe-0"),
          ai: t.o(i.hideConfirmResult),
          aj: t.p({
            "hide-close-icon": i.isSubmitLoading,
            visible: i.confirmResultVisible,
          }),
          ak: t.o(function (e) {
            return (i.isShowTriggerTypePopup = e);
          }),
          al: t.o(function (e) {
            return (i.isShowTriggerTypePopup = !1);
          }),
          am: t.o(i.onTriggerTypeChange),
          an: t.p({
            list: i.TRIGGER_TYPE_POPUP_CONFIG,
            value: i.isShowTriggerTypePopup,
            "selected-val": i.conditionOrder.triggerType,
          }),
          ao: t.o(function (e) {
            return (i.isShowDownTypePopup = e);
          }),
          ap: t.o(function (e) {
            return (i.isShowDownTypePopup = !1);
          }),
          aq: t.o(i.onDownTypeChange),
          ar: t.p({
            list: i.DOWN_TO_POPUP_CONFIG,
            value: i.isShowDownTypePopup,
            "selected-val": i.conditionOrder.downType,
          }),
          as: t.p({ id: "mp-dialog" }),
          at: t.sr("#global-wrap", "61e92ebe-0"),
          av: t.p({
            id: "global-wrap",
            filePath: "/trade/condition/opening-sell",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-61e92ebe"],
]);
wx.createPage(w);
