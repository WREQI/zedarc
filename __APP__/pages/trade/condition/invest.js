require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  i = require("../../../config/enum.js"),
  r = require("../../../config/enum/condition.js"),
  c = require("../../../components/SubmitResult/enum.js"),
  s = require("../../../config/errcode.js");
require("../../../service/broker.js");
var a = require("../../../utils/getPlatform.js"),
  d = require("../../../service/stat/mp-weixin.js"),
  u = require("../../../service/aegis/platform/not-wujie.js"),
  l = require("../../../model/trade/conditions/useInvestCondition.js"),
  p = require("../../../model/trade/conditions/useAutoScrollIntoView.js"),
  m = require("../../../model/trade/stock-hooks/useStepPure.js"),
  h = require("../../../stores/app/useMode.js"),
  v = require("../../../model/trade/conditions/useCommonBottomSelector.js"),
  S = require("../../../model/trade/useSearch.js"),
  g = require("../../../model/trade/conditions/useSearchResult.js"),
  f = require("../../../model/trade/conditions/useConditionErrorHandle.js"),
  I = require("../../../model/trade/conditions/useEntrustText.js"),
  C = require("../../../model/trade/stock-hooks/useStockComputed.js"),
  P = require("../../../model/trade/conditions/useSettingCheck.js"),
  T = require("../../../mixin/platforms/index.js"),
  O = require("../../../config/broker/11100/index.js"),
  E = {
    components: {
      FormWrap: function () {
        return "../components/condition/FormWrap.js";
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
      Stepper: function () {
        return "../../../common/components/Stepper/index.js";
      },
      PullAndPagination: function () {
        return "../../../components/PullAndPagination/mp/index.js";
      },
      PopOver: function () {
        return "../../../components/PopOver/PopOver.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      BottomSelectorTrigger: function () {
        return "../components/condition/BottomSelectorTrigger.js";
      },
      BottomSelector: function () {
        return "../components/condition/BottomSelector.js";
      },
      InvestConditionNumOrAmountPopup: function () {
        return "../components/condition/InvestConditionNumOrAmountPopup.js";
      },
      InvestConditionTimePopup: function () {
        return "../components/condition/InvestConditionTimePopup.js";
      },
      InvestConditionPeriodPopup: function () {
        return "../components/condition/InvestConditionPeriodPopup.js";
      },
      ConditionConfirm: function () {
        return "../components/condition/ConditionConfirm.js";
      },
      ConditionProtocol: function () {
        return "../components/condition/ConditionProtocol.js";
      },
    },
    mixins: [T.pluginMixins],
    setup: function () {
      var T,
        E = o.getCurrentInstance().proxy,
        k = a.getPlatform().isMiniProgram,
        w = o.ref(0),
        A = p.useAutoScrollIntoView({
          onScroll: function (e) {
            k
              ? o.index.pageScrollTo({ scrollTop: e, duration: 100 })
              : (w.value = e || 0);
          },
        }),
        R = A.setPageTop,
        D = A.execPageScroll,
        x = l.useInvestCondition(),
        _ = x.stockInfo,
        b = x.quoteInfo,
        L = x.tradeAccount,
        y = x.handleRefresh,
        N = x.switchStock,
        B = x.initTradeService,
        j = x.clearWss,
        V = x.investPreCheck,
        q = x.updateSignStatus,
        F = x.pricePrecision,
        H = x.initInvestCondition,
        M = x.conditionOrder,
        W = x.orderCheckService,
        Q = x.submitInvest,
        Y = x.isSubmitLoading,
        U = S.useSearch();
      o.provide("searchWithHold", U);
      var G = g.useSearchResult({
          clickCallback: function (e) {
            k
              ? N(e)
              : (window && (window.investSwitchFlag = !0),
                E.$router.replace({
                  type: "redirectTo",
                  name: "InvestCondition",
                  query: { code: e.code, market: e.market, name: e.name },
                }));
          },
        }),
        $ = G.searching,
        K = G.showSearch,
        z = G.handleSearchStateChange,
        J = G.handleSearchResultClick,
        X = o.ref(!1),
        Z = P.useSettingCheck("invest-condition-precheck"),
        ee = Z.startSettingCheck,
        te = Z.checkSetting,
        ne = Z.clearCheckTimer,
        oe = o.debounce(
          n(
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return ee(), (e.prev = 1), (e.next = 4), V();
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        return (
                          (e.prev = 6),
                          (e.t0 = e.catch(1)),
                          e.abrupt(
                            "return",
                            (d.stat.click(
                              "trade.investcond.".concat(
                                (null == e.t0 ? void 0 : e.t0.retcode) ||
                                  "checkfail"
                              )
                            ),
                            void u.aegisReporter.reportEvent(
                              "TRADE-INVEST-CHECK-FAIL",
                              { ext3: JSON.stringify(e.t0) }
                            ))
                          )
                        );
                      case 9:
                        return (e.prev = 9), te(), e.finish(9);
                      case 12:
                        X.value = !0;
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
        ie = f.useConditionErrorHandle(),
        re = ie.setLastRetcode,
        ce = ie.getErrorBtnText;
      function se(e) {
        var t, n, o;
        null ==
          (o =
            null ==
            (n =
              null == (t = E.$refs.condConfirm) ? void 0 : t.$refs.condResult)
              ? void 0
              : n.$refs.simleAnimResult) || o.changeStatus(e);
      }
      var ae = P.useSettingCheck("invest-condition-confirmcheck"),
        de = ae.startSettingCheck,
        ue = ae.checkSetting,
        le = ae.clearCheckTimer,
        pe = o.debounce(
          n(
            t().mark(function e() {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        de(),
                        (e.next = 3),
                        Q({
                          onCancel: function () {
                            (X.value = !1), ue();
                          },
                          onCheckPwd: function () {
                            ue();
                          },
                          onLoading: function () {
                            o.index.$emit("condition.result.show"),
                              se({
                                status: c.SimpleAnimStatus.Loading,
                                statusTitle: "定期定投条件单提交中",
                              }),
                              d.stat.click("trade.investcond.loading");
                          },
                          onFail: function (e) {
                            re(e.retcode),
                              e && +e.retcode === s.UPDATE_END_CONDITION
                                ? se({
                                    status: c.SimpleAnimStatus.Fail,
                                    statusTitle: "定期定投条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "一个标的只能创建一个定期定投条件单",
                                    buttonText: "返回",
                                  })
                                : se({
                                    status: c.SimpleAnimStatus.Fail,
                                    statusTitle: "定期定投条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "网络原因导致提交失败，稍后重新提交",
                                    buttonText: ce(),
                                  }),
                              d.stat.click("trade.invest.fail"),
                              ue();
                          },
                          onSuccess: function () {
                            re(0),
                              se({
                                status: c.SimpleAnimStatus.Success,
                                statusTitle: "定期定投条件单设置成功",
                                buttonText: "查看条件单",
                              }),
                              d.stat.click("trade.investcond.succ"),
                              ue();
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
        me = o.index.getSystemInfoSync();
      me.windowHeight, me.screenWidth;
      var he = o.ref(!0);
      o.watch($, function (e) {
        he.value = !e;
      });
      var ve = o.ref(""),
        Se = h.useModeStore(),
        ge = o.storeToRefs(Se).simpleMode,
        fe = O.brokerConfig.trade.condRiskTips;
      (null == fe ? void 0 : fe.length) > 0 &&
        ((fe = fe.map(function (e) {
          return e.replace("触发价", "委托价");
        })),
        "10500" == O.brokerConfig.base.code &&
          (fe = fe.filter(function (e) {
            return (
              "条件单截止时间内，如果标的发生除权、除息、已退市、退市整理、暂停上市等风险警示情况，系统对条件单统一做失效处理。" !==
              e
            );
          })));
      var Ie = m.useStepPure({
          order: M,
          stockInfo: _,
          amountKey: "investQuantity",
        }),
        Ce = Ie.priceStep,
        Pe = Ie.amountStep,
        Te = o.computed(function () {
          var e;
          return (null == (e = _.value) ? void 0 : e.minAmount) || "100";
        }),
        Oe = I.useEntrustText({ order: M, stock: _, checkService: W }),
        Ee = Oe.condAmountPopoverText,
        ke = Oe.condQuantityPopoverText,
        we = Oe.condLowerLimitPopoverText,
        Ae = Oe.condHandleAmountInput,
        Re = Oe.condHandleQuantityInputWithCheck,
        De = Oe.condHandleUpperLimitInput,
        xe = Oe.condHandleLowerLimitInput,
        _e = C.useUnit(_).tradeDisabled,
        be = o.ref(!1),
        Le = o.ref(!1),
        ye = o.ref(!1),
        Ne = o.computed(function () {
          return M.investPeriod
            ? i.INVEST_ORDER_PERIOD.TRADE_DAY === M.investPeriod
              ? M.investPeriod - 1 + " - 1"
              : [
                  i.INVEST_ORDER_PERIOD.WEEK,
                  i.INVEST_ORDER_PERIOD.DOUBLE_WEEK,
                ].includes(M.investPeriod)
              ? ""
                  .concat(M.investPeriod - 1, "-")
                  .concat(
                    "" !== M.investWeekday ? M.investWeekday - 1 : "0",
                    " "
                  )
              : i.INVEST_ORDER_PERIOD.MONTH === M.investPeriod
              ? ""
                  .concat(M.investPeriod - 1, "-")
                  .concat("" !== M.investDate ? M.investDate - 1 : "0", " ")
              : ""
            : "";
        });
      function Be() {
        (M.investPeriod = ""), (M.investWeekday = ""), (M.investDate = "");
      }
      var je,
        Ve = v.useCommonBottomSelector(
          M,
          (e((T = {}), r.INVEST_VALIDDAY_CONFIG.id, r.INVEST_VALIDDAY_CONFIG),
          e(T, r.BUY_PRICE_SELECT_CONFIG.id, r.BUY_PRICE_SELECT_CONFIG),
          T)
        ),
        qe = Ve.bottomSelectedVal,
        Fe = Ve.bottomSelectorConfig,
        He = Ve.bottomSelectState,
        Me = Ve.hideBottomSelector,
        We = Ve.showBottomSelector,
        Qe = Ve.handleBottomSelectorChange;
      return (
        o.onBeforeMount(function () {
          H();
        }),
        o.onBeforeUnmount(function () {
          ne(), le();
        }),
        {
          pageScrollTop: w,
          searching: $,
          showConditionConfirm: X,
          showBottomBtn: he,
          currentFocus: ve,
          isShowInvestTimePopup: be,
          isShowInvestPeriodPopup: Le,
          isShowInvestNumOrAmountPopup: ye,
          investPeriodVal: Ne,
          bottomSelectedVal: qe,
          bottomSelectorConfig: Fe,
          bottomSelectState: He,
          priceStep: Ce,
          condRiskTips: fe,
          condAmountPopoverText: Ee,
          condQuantityPopoverText: ke,
          condLowerLimitPopoverText: we,
          tradeDisabled: _e,
          handleScroll: function (e) {
            (w.value = e.detail.scrollTop || 0), R({ scrollTop: w.value });
          },
          showSearch: function () {
            var e, t;
            K(),
              d.stat.click("trade.investcond.searchicon"),
              null ==
                (t =
                  null == (e = E.$refs.realSearchBar)
                    ? void 0
                    : e.handleFocus) || t.call(e);
          },
          startSettingDebounce: oe,
          handleConfirmDebounce: pe,
          handleFocus:
            ((je = n(
              t().mark(function e(n) {
                var i;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (he.value = !1),
                          (ve.value = n),
                          o.index.createSelectorQuery().in(E),
                          (i = ""),
                          (e.t0 = n),
                          (e.next =
                            "maxAmount" === e.t0 || "investQuantity" === e.t0
                              ? 5
                              : "upperLimit" === e.t0
                              ? 7
                              : "lowerLimit" === e.t0
                              ? 9
                              : 10);
                        break;
                      case 5:
                        return (
                          (i = ".input-amount-or-invest"), e.abrupt("break", 10)
                        );
                      case 7:
                        return (
                          (i = ".input-upper-limit"), e.abrupt("break", 10)
                        );
                      case 9:
                        i = ".input-lower-limit";
                      case 10:
                        i && D(i, E);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return je.apply(this, arguments);
            }),
          handleBlur: function () {
            (ve.value = ""), (he.value = !0);
          },
          getPopoverTextLong: function (e) {
            return (null == e ? void 0 : e.length) >= 18 ? "long" : "";
          },
          handleHighSettingExpand: function () {
            M.highSettingExpanded = !M.highSettingExpanded;
          },
          handleHighSettingSwitch: function (e) {
            var t = e.detail.value;
            (M.highSettingChecked = t),
              t || ((M.upperLimit = ""), (M.lowerLimit = "")),
              E.$stat.click(
                "trade.conditon.high_setting_switch_" + (t ? "on" : "off")
              );
          },
          onInvestPeriodChange: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            if (((Le.value = !1), "" !== e)) {
              var t = e.split("-"),
                n = String(+t[0] + 1),
                o = String(t[1] ? +t[1] + 1 : "");
              if (1 !== t.length) {
                if (o)
                  return n === i.INVEST_ORDER_PERIOD.TRADE_DAY
                    ? ((M.investPeriod = i.INVEST_ORDER_PERIOD.TRADE_DAY),
                      (M.investWeekday = ""),
                      void (M.investDate = ""))
                    : [
                        i.INVEST_ORDER_PERIOD.WEEK,
                        i.INVEST_ORDER_PERIOD.DOUBLE_WEEK,
                      ].includes(n)
                    ? ((M.investPeriod = n),
                      (M.investWeekday = o),
                      void (M.investDate = ""))
                    : n === i.INVEST_ORDER_PERIOD.MONTH
                    ? ((M.investPeriod = n),
                      (M.investWeekday = ""),
                      void (M.investDate = o))
                    : void Be();
                Be();
              } else
                n === i.INVEST_ORDER_PERIOD.TRADE_DAY
                  ? ((M.investPeriod = i.INVEST_ORDER_PERIOD.TRADE_DAY),
                    (M.investWeekday = ""),
                    (M.investDate = ""))
                  : Be();
            } else Be();
          },
          onInvestTimeChange: function (e) {
            (M.investTime = e), (be.value = !1);
          },
          onInvestNumorAmountChange: function (e) {
            0 == +e
              ? ((M.isInvestAmountMode = !0),
                "" !== M.investQuantity && (M.investQuantity = ""))
              : (M.isInvestAmountMode &&
                  ((M.isInvestAmountMode = !1), (M.investQuantity = Te.value)),
                (M.maxAmount = "")),
              (ye.value = !1);
          },
          hideBottomSelector: Me,
          showBottomSelector: We,
          handleBottomSelectorChange: Qe,
          statNameClick: function () {
            d.stat.click("trade.investcond.tohq");
          },
          handleSearchStateChange: z,
          handleSearchResultClick: J,
          initTradeService: B,
          handleRefresh: y,
          setPageTop: R,
          updateSignStatus: q,
          clearWss: j,
          condHandleAmountInput: Ae,
          condHandleQuantityInput: Re,
          condHandleUpperLimitInput: De,
          condHandleLowerLimitInput: xe,
          conditionOrder: M,
          stockInfo: _,
          quoteInfo: b,
          tradeAccount: L,
          pricePrecision: F,
          simpleMode: ge,
          PriceTypeRange: r.PriceTypeRange,
          INVEST_ORDER_VALIDATE_DAYS: i.INVEST_ORDER_VALIDATE_DAYS,
          INVEST_VALIDDAY_CONFIG: r.INVEST_VALIDDAY_CONFIG,
          BUY_PRICE_SELECT_CONFIG: r.BUY_PRICE_SELECT_CONFIG,
          isMiniProgram: k,
          amountStep: Pe,
          minAmount: Te,
          isSubmitLoading: Y,
        }
      );
    },
    onShow: function () {
      (null == window ? void 0 : window.investSwitchFlag)
        ? (window.investSwitchFlag = !1)
        : d.stat.page("/trade/condition/invest"),
        this.conditionOrder.isStockSet && this.initTradeService(),
        this.updateSignStatus();
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
    o.resolveComponent("SearchBar") +
    o.resolveComponent("SearchResult") +
    o.resolveComponent("ConditionQuote") +
    o.resolveComponent("BottomSelectorTrigger") +
    o.resolveComponent("Stepper") +
    o.resolveComponent("PopOver") +
    o.resolveComponent("FormWrap") +
    o.resolveComponent("invest-condition-period-popup") +
    o.resolveComponent("invest-condition-time-popup") +
    o.resolveComponent("invest-condition-num-or-amount-popup") +
    o.resolveComponent("BottomSelector") +
    o.resolveComponent("ConditionProtocol") +
    o.resolveComponent("ConditionConfirm") +
    o.resolveComponent("MpDialog") +
    o.resolveComponent("GlobalWrap")
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
var k = o._export_sfc(E, [
  [
    "render",
    function (e, t, n, i, r, c) {
      var s, a, d;
      return o.e(
        {
          a: e.rootFontSize,
          b: o.sr("realSearchBar", "28083d2c-1,28083d2c-0"),
          c: o.o(i.handleSearchStateChange),
          d: o.p({ searching: i.searching }),
          e: !i.conditionOrder.isStockSet || i.searching,
          f: i.searching,
          g: o.o(i.handleSearchResultClick),
          h: i.conditionOrder.isStockSet,
        },
        i.conditionOrder.isStockSet
          ? {
              i: o.o(i.showSearch),
              j: o.o(i.statNameClick),
              k: o.p({
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
          m: o.t(i.conditionOrder.investPeriodText),
          n: o.o(function (e) {
            return (i.isShowInvestPeriodPopup = !0);
          }),
          o: o.t(i.conditionOrder.investPeriodCalText),
          p: o.t(i.conditionOrder.investTime),
          q: o.o(function (e) {
            return (i.isShowInvestTimePopup = !0);
          }),
          r: i.conditionOrder.isStockSet ? 1 : "",
          s: o.o(function (e) {
            return i.showBottomSelector(e, i.BUY_PRICE_SELECT_CONFIG.id);
          }),
          t: o.p({
            "selected-val": i.conditionOrder.buyPriceType,
            "select-range": i.PriceTypeRange,
          }),
          v: o.t(
            i.conditionOrder.isInvestAmountMode ? "委托金额(元)" : "委托数量"
          ),
          w: o.o(function (e) {
            return (i.isShowInvestNumOrAmountPopup = !0);
          }),
          x: i.conditionOrder.isInvestAmountMode,
        },
        i.conditionOrder.isInvestAmountMode
          ? {
              y: o.o(i.condHandleAmountInput),
              z: o.o(function (e) {
                return i.handleFocus("maxAmount");
              }),
              A: o.o(i.handleBlur),
              B: o.p({
                placeholder: "请输入",
                "decimal-length": 0,
                disabled: !i.conditionOrder.isStockSet,
                value: i.conditionOrder.maxAmount,
                integer: !0,
                step: 1e3,
                max: 999999,
                min: 100,
                "max-length": 6,
                focus: "maxAmount" === i.currentFocus,
                "simple-mode": !0,
              }),
              C: o.n(i.getPopoverTextLong(i.condAmountPopoverText)),
              D: o.p({ text: i.condAmountPopoverText }),
            }
          : {
              E: o.o(i.condHandleQuantityInput),
              F: o.o(function (e) {
                return i.handleFocus("investQuantity");
              }),
              G: o.o(i.handleBlur),
              H: o.p({
                disabled: !i.conditionOrder.isStockSet,
                value: i.conditionOrder.investQuantity,
                integer: !0,
                "decimal-length": 0,
                max: 1e6,
                "max-length": 7,
                min: i.minAmount,
                step: i.amountStep,
                focus: "investQuantity" === i.currentFocus,
                "simple-mode": !0,
              }),
              I: o.n(i.getPopoverTextLong(i.condQuantityPopoverText)),
              J: o.p({ text: i.condQuantityPopoverText }),
            },
        {
          K: o.sr("inputAmountOrInvestRef", "28083d2c-5,28083d2c-0"),
          L: i.conditionOrder.isInvestAmountMode,
        },
        i.conditionOrder.isInvestAmountMode
          ? {
              M: o.t(
                e.$filters.money.formatNoUnit(
                  e.$filters.defaults(i.tradeAccount.max_buy_money)
                )
              ),
              N: o.n(i.tradeAccount.max_buy_money > 999999 ? "fs-22" : ""),
            }
          : {},
        {
          O: o.o(function (e) {
            return i.showBottomSelector(e, i.INVEST_VALIDDAY_CONFIG.id);
          }),
          P: o.p({
            "selected-val": i.conditionOrder.validDayEnum,
            "select-range": i.INVEST_ORDER_VALIDATE_DAYS,
          }),
          Q: o.t(
            i.conditionOrder.timeText
              ? "".concat(i.conditionOrder.timeText, "过期")
              : "--"
          ),
          R: o.n(
            i.conditionOrder.highSettingExpanded
              ? "icon-arrow-up"
              : "icon-arrow-down"
          ),
          S: o.o(function () {
            return (
              i.handleHighSettingExpand &&
              i.handleHighSettingExpand.apply(i, arguments)
            );
          }),
          T: i.conditionOrder.highSettingChecked ? "" : 1,
          U: i.conditionOrder.highSettingChecked,
          V: i.simpleMode ? "#e63535" : "#3077ec",
          W: o.o(function () {
            return (
              i.handleHighSettingSwitch &&
              i.handleHighSettingSwitch.apply(i, arguments)
            );
          }),
          X: i.conditionOrder.highSettingChecked,
        },
        i.conditionOrder.highSettingChecked
          ? {
              Y: o.o(i.condHandleUpperLimitInput),
              Z: o.o(function (e) {
                return i.handleFocus("upperLimit");
              }),
              aa: o.o(i.handleBlur),
              ab: o.p({
                "decimal-length": i.pricePrecision,
                disabled: !i.conditionOrder.isStockSet,
                value: i.conditionOrder.upperLimit,
                step: i.priceStep,
                max: 999999999,
                "max-length": 9,
                focus: "upperLimit" === i.currentFocus,
                "simple-mode": !0,
                "blur-support-empty": !0,
              }),
              ac: o.sr("inputUpperLimitRef", "28083d2c-12,28083d2c-0"),
              ad: o.o(i.condHandleLowerLimitInput),
              ae: o.o(function (e) {
                return i.handleFocus("lowerLimit");
              }),
              af: o.o(i.handleBlur),
              ag: o.p({
                "decimal-length": i.pricePrecision,
                disabled: !i.conditionOrder.isStockSet,
                value: i.conditionOrder.lowerLimit,
                step: i.priceStep,
                max: 999999999,
                "max-length": 9,
                focus: "lowerLimit" === i.currentFocus,
                "simple-mode": !0,
                "blur-support-empty": !0,
              }),
              ah: o.n(i.getPopoverTextLong(i.condLowerLimitPopoverText)),
              ai: o.p({ text: i.condLowerLimitPopoverText }),
              aj: o.sr("inputLowerLimitRef", "28083d2c-14,28083d2c-0"),
            }
          : {},
        {
          ak: i.conditionOrder.highSettingExpanded ? "" : 1,
          al: (null == (s = i.condRiskTips) ? void 0 : s.length) > 0,
        },
        (null == (a = i.condRiskTips) ? void 0 : a.length) > 0
          ? {
              am: o.f(i.condRiskTips, function (e, t, n) {
                return { a: o.t(e), b: t };
              }),
            }
          : {},
        {
          an:
            i.conditionOrder.highSettingExpanded ||
            i.conditionOrder.highSettingChecked,
        },
        i.conditionOrder.highSettingExpanded ||
          i.conditionOrder.highSettingChecked
          ? { ao: i.isMiniProgram ? 1 : "" }
          : {},
        {
          ap: !i.searching,
          aq: o.n(i.conditionOrder.isStockSet ? "is-set" : ""),
          ar: o.n(
            (null == (d = i.condRiskTips) ? void 0 : d.length) > 0
              ? "has-tips"
              : ""
          ),
          as: i.tradeDisabled || !i.conditionOrder.isStockSet,
          at: o.o(function () {
            return (
              i.startSettingDebounce &&
              i.startSettingDebounce.apply(i, arguments)
            );
          }),
          av: i.showBottomBtn,
          aw: o.o(function (e) {
            return (i.isShowInvestPeriodPopup = e);
          }),
          ax: o.o(function (e) {
            return (i.isShowInvestPeriodPopup = !1);
          }),
          ay: o.o(i.onInvestPeriodChange),
          az: o.p({
            value: i.isShowInvestPeriodPopup,
            "selected-val": i.investPeriodVal,
          }),
          aA: o.o(function (e) {
            return (i.isShowInvestTimePopup = e);
          }),
          aB: o.o(function (e) {
            return (i.isShowInvestTimePopup = !1);
          }),
          aC: o.o(i.onInvestTimeChange),
          aD: o.p({
            value: i.isShowInvestTimePopup,
            "selected-val": i.conditionOrder.investTime,
          }),
          aE: o.o(function (e) {
            return (i.isShowInvestNumOrAmountPopup = e);
          }),
          aF: o.o(function (e) {
            return (i.isShowInvestNumOrAmountPopup = !1);
          }),
          aG: o.o(i.onInvestNumorAmountChange),
          aH: o.p({
            value: i.isShowInvestNumOrAmountPopup,
            "selected-val": i.conditionOrder.isInvestAmountMode ? "0" : "1",
          }),
          aI: o.o(i.handleBottomSelectorChange),
          aJ: o.o(i.hideBottomSelector),
          aK: o.p({
            title: i.bottomSelectorConfig.title,
            value: i.bottomSelectState,
            "selected-val": i.bottomSelectedVal,
            "select-range": i.bottomSelectorConfig.range,
          }),
          aL: o.sr("condProtocol", "28083d2c-21,28083d2c-0"),
          aM: i.showConditionConfirm,
        },
        i.showConditionConfirm
          ? {
              aN: o.sr("condConfirm", "28083d2c-22,28083d2c-0"),
              aO: o.o(i.handleConfirmDebounce),
              aP: o.o(function (e) {
                return (i.showConditionConfirm = !1);
              }),
              aQ: o.p({
                "weak-hint": i.conditionOrder.weakHint,
                conditionOrder: i.conditionOrder,
                stockInfo: i.stockInfo,
                "hide-close-icon": i.isSubmitLoading,
              }),
            }
          : {},
        {
          aR: o.p({ id: "mp-dialog" }),
          aS: o.sr("#global-wrap", "28083d2c-0"),
          aT: o.p({
            id: "global-wrap",
            filePath: "/trade/condition/invest",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-28083d2c"],
]);
wx.createPage(k);
