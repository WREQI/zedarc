var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  i = require("../../../config/enum.js"),
  r = require("../../../config/errcode.js"),
  c = require("../../../config/enum/condition.js"),
  a = require("../../../components/SubmitResult/enum.js");
require("../../../service/broker.js");
var u = require("../../../utils/getPlatform.js"),
  s = require("../../../service/stat/mp-weixin.js"),
  l = require("../../../service/aegis/platform/not-wujie.js"),
  d = require("../../../model/trade/conditions/useLimitUpCondition.js"),
  m = require("../../../model/trade/conditions/useAutoScrollIntoView.js"),
  p = require("../../../model/trade/conditions/useCommonBottomSelector.js"),
  h = require("../../../model/trade/useSearch.js"),
  f = require("../../../model/trade/conditions/useSearchResult.js"),
  S = require("../../../model/trade/conditions/useConditionErrorHandle.js"),
  g = require("../../../model/trade/conditions/useSettingCheck.js"),
  C = require("../../../model/trade/conditions/useEntrustText.js"),
  v = require("../../../model/trade/conditions/useLimitUpConfirm.js"),
  A = require("../../../model/common/useVisibleControl.js"),
  T = require("../../../model/trade/stock-hooks/useStepPure.js"),
  _ = require("../../../mixin/platforms/index.js"),
  k = require("../../../config/broker/11100/index.js"),
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
      ConditionNumOrAmountPopup: function () {
        return "../components/condition/InvestConditionNumOrAmountPopup.js";
      },
      CondResult: function () {
        return "../../../components/SubmitResult/ActionSheetResult.js";
      },
    },
    mixins: [_.pluginMixins],
    setup: function () {
      var _ = n.getCurrentInstance().proxy,
        P = u.getPlatform().isMiniProgram,
        b = n.ref(0),
        I = m.useAutoScrollIntoView({
          onScroll: function (e) {
            P
              ? n.index.pageScrollTo({ scrollTop: e, duration: 100 })
              : (b.value = e || 0);
          },
        }).setPageTop,
        O = k.brokerConfig.trade.condRiskTips || [],
        M = d.useLimitUpCondition(),
        x = M.stockInfo,
        y = M.quoteInfo,
        w = M.handleRefresh,
        L = M.clearWss,
        R = M.switchStock,
        U = M.initTradeService,
        j = M.updateSignStatus,
        q = M.orderPreCheck,
        B = M.submitOrder,
        N = M.initLimitUpCondition,
        D = M.conditionOrder,
        E = M.tradeAccount,
        F = M.weakHint,
        V = M.requiredFieldTips,
        Q = M.clearRequiredFieldTips,
        H = M.isSubmitLoading,
        Y = h.useSearch();
      n.provide("searchWithHold", Y);
      var W = f.useSearchResult({
          clickCallback: function (e) {
            P
              ? R(e)
              : (window && (window.limitUpSwitchFlag = !0),
                _.$router.replace({
                  type: "redirectTo",
                  name: "LimitUpCondition",
                  query: { code: e.code, market: e.market, name: e.name },
                }));
          },
        }),
        G = W.searching,
        X = W.showSearch,
        $ = W.handleSearchStateChange,
        z = W.handleSearchResultClick,
        J = v.useLimitUpConfirm({ conditionOrder: D, stockInfo: x }),
        K = J.confirmData,
        Z = J.confirmVisible,
        ee = J.showConfirm,
        te = J.hideConfirm,
        oe = g.useSettingCheck("limit-up-condition-precheck"),
        ne = oe.startSettingCheck,
        ie = oe.checkSetting,
        re = oe.clearCheckTimer,
        ce = n.debounce(
          o(
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          ne(),
                          s.stat.click("trade.limitupcond.setting"),
                          (e.prev = 1),
                          (e.next = 4),
                          q()
                        );
                      case 4:
                        ee(), (e.next = 10);
                        break;
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(1)),
                          e.abrupt(
                            "return",
                            (s.stat.click(
                              "trade.limitupcond.".concat(
                                (null == e.t0 ? void 0 : e.t0.retcode) ||
                                  "checkfail"
                              )
                            ),
                            void l.aegisReporter.reportEvent(
                              "TRADE-LIMIT_UP-CHECK-FAIL",
                              { ext3: JSON.stringify(e.t0) }
                            ))
                          )
                        );
                      case 10:
                        return (e.prev = 10), ie(), e.finish(10);
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
        ae = S.useConditionErrorHandle(),
        ue = ae.setLastRetcode,
        se = ae.getErrorBtnText;
      function le(e) {
        var t, o;
        null ==
          (o =
            null == (t = _.$refs.condResult)
              ? void 0
              : t.$refs.simleAnimResult) || o.changeStatus(e);
      }
      var de = g.useSettingCheck("limit-up-condition-confirmcheck"),
        me = de.startSettingCheck,
        pe = de.checkSetting,
        he = de.clearCheckTimer,
        fe = A.useVisibleControl(),
        Se = fe.visible,
        ge = fe.show,
        Ce = fe.hide,
        ve = n.debounce(
          o(
            t().mark(function e() {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        me(),
                        (e.next = 3),
                        B({
                          onCancel: function () {
                            te(), pe();
                          },
                          onCheckPwd: function () {
                            pe();
                          },
                          onLoading: function () {
                            te(),
                              ge(),
                              le({
                                status: a.SimpleAnimStatus.Loading,
                                statusTitle: "涨停买入条件单提交中",
                              }),
                              s.stat.click("trade.limitupcond.loading");
                          },
                          onFail: function (e) {
                            ue(e.retcode),
                              e && +e.retcode === r.UPDATE_END_CONDITION
                                ? le({
                                    status: a.SimpleAnimStatus.Fail,
                                    statusTitle: "涨停买入条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "一个标的只能创建一个涨停买入条件单",
                                    buttonText: "返回",
                                  })
                                : le({
                                    status: a.SimpleAnimStatus.Fail,
                                    statusTitle: "涨停买入条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "网络原因导致提交失败，稍后重新提交",
                                    buttonText: se(),
                                  }),
                              s.stat.click("trade.limitup.fail"),
                              pe();
                          },
                          onSuccess: function () {
                            ue(0),
                              le({
                                status: a.SimpleAnimStatus.Success,
                                statusTitle: "涨停买入条件单设置成功",
                                buttonText: "查看条件单",
                              }),
                              s.stat.click("trade.limitupcond.succ"),
                              pe();
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
        Ae = n.ref(""),
        Te = n.ref(!1),
        _e = C.useEntrustText({ order: D, stock: x, type: "limitUp" }),
        ke = _e.condAmountPopoverText,
        Pe = _e.condQuantityPopoverText,
        be = _e.condLowerLimitPopoverText,
        Ie = _e.condHandleAmountInput,
        Oe = _e.condHandleQuantityInputWithCheck,
        Me = n.ref(!0);
      n.watch(G, function (e) {
        Me.value = !e;
      });
      var xe = p.useCommonBottomSelector(
          D,
          e({}, c.PRICE_VALIDDAY_CONFIG.id, c.PRICE_VALIDDAY_CONFIG)
        ),
        ye = xe.bottomSelectedVal,
        we = xe.bottomSelectorConfig,
        Le = xe.bottomSelectState,
        Re = xe.hideBottomSelector,
        Ue = xe.showBottomSelector,
        je = xe.handleBottomSelectorChange,
        qe = T.useStepPure({
          order: D,
          stockInfo: x,
          amountKey: "investQuantity",
        }).amountStep;
      return (
        n.onBeforeMount(function () {
          N();
        }),
        n.onBeforeUnmount(function () {
          re(), he();
        }),
        {
          pageScrollTop: b,
          handleScroll: function (e) {
            (b.value = e.detail.scrollTop || 0), I({ scrollTop: b.value });
          },
          handleRefresh: w,
          conditionOrder: D,
          tradeAccount: E,
          searching: G,
          handleSearchStateChange: $,
          handleSearchResultClick: z,
          otherCondRiskTips: O,
          quoteInfo: y,
          showSearch: function () {
            var e, t;
            X(),
              s.stat.click("trade.limitupcond.searchicon"),
              null ==
                (t =
                  null == (e = _.$refs.realSearchBar)
                    ? void 0
                    : e.handleFocus) || t.call(e);
          },
          statNameClick: function () {
            s.stat.click("trade.limitupcond.tohq");
          },
          getPopoverTextLong: function (e) {
            return (null == e ? void 0 : e.length) >= 18 ? "long" : "";
          },
          currentFocus: Ae,
          stockInfo: x,
          ORDER_VALIDATE_DAYS: i.ORDER_VALIDATE_DAYS,
          showBottomSelector: Ue,
          PRICE_VALIDDAY_CONFIG: c.PRICE_VALIDDAY_CONFIG,
          startSettingDebounce: ce,
          bottomSelectorConfig: we,
          bottomSelectState: Le,
          bottomSelectedVal: ye,
          handleBottomSelectorChange: je,
          hideBottomSelector: Re,
          handleConfirmDebounce: ve,
          initTradeService: U,
          updateSignStatus: j,
          clearWss: L,
          setPageTop: I,
          handleFocus: function (e) {
            (Ae.value = e), (Me.value = !1);
          },
          handleBlur: function () {
            (Ae.value = ""), (Me.value = !0);
          },
          showBottomBtn: Me,
          isMiniProgram: P,
          weakHint: F,
          isShowNumOrAmountPopup: Te,
          onNumorAmountChange: function (e) {
            var t, o, n;
            0 == +e
              ? ((D.isAmountMode = !0),
                "" !== D.investQuantity && (D.investQuantity = ""))
              : (D.isAmountMode &&
                  ((D.isAmountMode = !1),
                  (D.investQuantity =
                    null !==
                      (t =
                        null ==
                        (n = null == (o = x.value) ? void 0 : o.minAmount)
                          ? void 0
                          : n.toString()) && void 0 !== t
                      ? t
                      : "100")),
                (D.maxAmount = "")),
              (Te.value = !1);
          },
          condAmountPopoverText: ke,
          condQuantityPopoverText: Pe,
          condLowerLimitPopoverText: be,
          condHandleAmountInput: function () {
            Ie.apply(void 0, arguments), Q("entrust");
          },
          condHandleQuantityInput: function () {
            Oe.apply(void 0, arguments), Q("entrust");
          },
          confirmData: K,
          confirmVisible: Z,
          hideConfirm: te,
          CondTypesBackEnd: c.CondTypesBackEnd,
          requiredFieldTips: V,
          clearRequiredFieldTips: Q,
          toCurrency: n.__CJS__export_toCurrency__,
          confirmResultVisible: Se,
          hideConfirmResult: Ce,
          toLimitUpInfo: function () {
            _.$router.push({ name: "LimitUpConditionGuide" });
          },
          handleMaxBuyClick: function () {
            if (
              D.isAmountMode &&
              n.isNumber(+(null == E ? void 0 : E.max_buy_money))
            ) {
              var e = Math.floor(+(null == E ? void 0 : E.max_buy_money));
              e > c.LIMIT_UP_MAX_MONEY_AMOUNT &&
                (e = c.LIMIT_UP_MAX_MONEY_AMOUNT),
                D.setMaxAmount(e + "");
            } else if (n.isNumber(+(null == E ? void 0 : E.max_buy_qty))) {
              var t = Math.floor(+(null == E ? void 0 : E.max_buy_qty));
              t > c.LIMIT_UP_MAX_AMOUNT && (t = c.LIMIT_UP_MAX_AMOUNT),
                D.setInvestQuantity(t + "");
            }
          },
          amountStep: qe,
          LIMIT_UP_MAX_MONEY_AMOUNT: c.LIMIT_UP_MAX_MONEY_AMOUNT,
          LIMIT_UP_MAX_AMOUNT: c.LIMIT_UP_MAX_AMOUNT,
          isSubmitLoading: H,
        }
      );
    },
    onShow: function () {
      try {
        (null == window ? void 0 : window.limitUpSwitchFlag)
          ? (window.limitUpSwitchFlag = !1)
          : s.stat.page("/trade/condition/limit-up"),
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
    n.resolveComponent("FormWrap") +
    n.resolveComponent("Stepper") +
    n.resolveComponent("PopOver") +
    n.resolveComponent("BottomSelectorTrigger") +
    n.resolveComponent("BottomSelector") +
    n.resolveComponent("ConditionProtocol") +
    n.resolveComponent("ConditionConfirm") +
    n.resolveComponent("CondResult") +
    n.resolveComponent("conditionNumOrAmountPopup") +
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
var b = n._export_sfc(P, [
  [
    "render",
    function (e, t, o, i, r, c) {
      return n.e(
        {
          a: e.rootFontSize,
          b: n.sr("realSearchBar", "33565ade-1,33565ade-0"),
          c: n.o(i.handleSearchStateChange),
          d: n.p({ searching: i.searching }),
          e: !i.conditionOrder.isStockSet || i.searching,
          f: i.searching,
          g: n.o(i.handleSearchResultClick),
          h: i.conditionOrder.isStockSet,
        },
        i.conditionOrder.isStockSet
          ? {
              i: n.o(i.showSearch),
              j: n.o(i.statNameClick),
              k: n.p({
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
          m: n.t(
            i.conditionOrder.isAmountMode ? "买入金额(元)" : "买入数量(股)"
          ),
          n: n.o(function (e) {
            return (i.isShowNumOrAmountPopup = !0);
          }),
          o: i.conditionOrder.isAmountMode,
        },
        i.conditionOrder.isAmountMode
          ? {
              p: n.o(i.condHandleAmountInput),
              q: n.o(function (e) {
                return i.handleFocus("maxAmount");
              }),
              r: n.o(i.handleBlur),
              s: n.p({
                "decimal-length": 0,
                disabled: !i.conditionOrder.isStockSet,
                value: i.conditionOrder.maxAmount,
                integer: !0,
                step: 1e3,
                max: i.LIMIT_UP_MAX_MONEY_AMOUNT,
                min: 100,
                "max-length": 7,
                focus: "maxAmount" === i.currentFocus,
                "simple-mode": !0,
                placeholder: "请输入",
              }),
              t: n.n(i.requiredFieldTips.entrust ? "need-fill-color" : ""),
              v: n.n(i.getPopoverTextLong(i.condAmountPopoverText)),
              w: n.p({ text: i.condAmountPopoverText }),
            }
          : {
              x: n.o(i.condHandleQuantityInput),
              y: n.o(function (e) {
                return i.handleFocus("investQuantity");
              }),
              z: n.o(i.handleBlur),
              A: n.p({
                disabled: !i.conditionOrder.isStockSet,
                value: i.conditionOrder.investQuantity,
                integer: !0,
                "decimal-length": 0,
                max: i.LIMIT_UP_MAX_AMOUNT,
                "max-length": 7,
                step: i.amountStep,
                focus: "investQuantity" === i.currentFocus,
                "simple-mode": !0,
                placeholder: "请输入",
              }),
              B: n.n(i.getPopoverTextLong(i.condQuantityPopoverText)),
              C: n.p({ text: i.condQuantityPopoverText }),
            },
        { D: i.conditionOrder.isAmountMode },
        i.conditionOrder.isAmountMode
          ? {
              E: n.t(
                e.$filters.money.formatNoUnit(
                  e.$filters.defaults(i.tradeAccount.max_buy_money)
                )
              ),
              F: n.n(i.tradeAccount.max_buy_money > 999999 ? "fs-22" : ""),
              G: n.o(function () {
                return (
                  i.handleMaxBuyClick && i.handleMaxBuyClick.apply(i, arguments)
                );
              }),
            }
          : {
              H: n.t(i.toCurrency(i.tradeAccount.max_buy_qty, 0)),
              I: n.t(i.stockInfo.quantityUnit),
              J: n.o(function () {
                return (
                  i.handleMaxBuyClick && i.handleMaxBuyClick.apply(i, arguments)
                );
              }),
            },
        {
          K: n.o(function (e) {
            return i.showBottomSelector(e, i.PRICE_VALIDDAY_CONFIG.id);
          }),
          L: n.p({
            "selected-val": i.conditionOrder.validDayEnum,
            "select-range": i.ORDER_VALIDATE_DAYS,
          }),
          M: n.t(
            i.conditionOrder.timeText
              ? "".concat(i.conditionOrder.timeText, "过期")
              : "--"
          ),
          N: n.o(function () {
            return i.toLimitUpInfo && i.toLimitUpInfo.apply(i, arguments);
          }),
          O: n.f(i.otherCondRiskTips, function (e, t, o) {
            return { a: n.t(e), b: t };
          }),
          P: !i.searching,
          Q: n.n(i.conditionOrder.isStockSet ? "is-set" : ""),
          R: i.isMiniProgram ? 1 : "",
          S: i.stockInfo.disabled || !i.conditionOrder.isStockSet,
          T: n.o(function () {
            return (
              i.startSettingDebounce &&
              i.startSettingDebounce.apply(i, arguments)
            );
          }),
          U: i.showBottomBtn,
          V: n.o(i.handleBottomSelectorChange),
          W: n.o(i.hideBottomSelector),
          X: n.p({
            title: i.bottomSelectorConfig.title,
            value: i.bottomSelectState,
            "selected-val": i.bottomSelectedVal,
            "select-range": i.bottomSelectorConfig.range,
          }),
          Y: n.sr("condProtocol", "33565ade-14,33565ade-0"),
          Z: i.confirmVisible,
        },
        i.confirmVisible
          ? {
              aa: n.o(i.hideConfirm),
              ab: n.o(i.handleConfirmDebounce),
              ac: n.p({
                "week-hint": i.weakHint,
                data: i.confirmData,
                type: i.CondTypesBackEnd.LIMIT_UP,
              }),
            }
          : {},
        {
          ad: n.sr("condResult", "33565ade-16,33565ade-0"),
          ae: n.o(i.hideConfirmResult),
          af: n.p({
            "hide-close-icon": i.isSubmitLoading,
            visible: i.confirmResultVisible,
          }),
          ag: n.o(function (e) {
            return (i.isShowNumOrAmountPopup = e);
          }),
          ah: n.o(function (e) {
            return (i.isShowNumOrAmountPopup = !1);
          }),
          ai: n.o(i.onNumorAmountChange),
          aj: n.p({
            value: i.isShowNumOrAmountPopup,
            "selected-val": i.conditionOrder.isAmountMode ? "0" : "1",
          }),
          ak: n.p({ id: "mp-dialog" }),
          al: n.sr("#global-wrap", "33565ade-0"),
          am: n.p({
            id: "global-wrap",
            filePath: "/trade/condition/limit-up",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-33565ade"],
]);
wx.createPage(b);
