var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  n = require("../../../config/enum/condition.js"),
  i = require("../../../model/trade/conditions/useGridCondition.js"),
  r = require("../../../config/enum.js"),
  a = require("../../../model/trade/conditions/useGridTypeStepper.js"),
  c = require("../../../model/trade/conditions/useGridBottomSelector.js"),
  u = require("../../../model/trade/conditions/useAutoScrollIntoView.js"),
  d = require("../../../model/trade/conditions/useGridPopSelector.js"),
  l = require("../../../model/common/useVisibleControl.js"),
  s = require("../../../model/trade/conditions/useSearchResult.js"),
  p = require("../../../model/trade/conditions/useGridAmount.js"),
  S = require("../../../model/trade/conditions/useGridConfirm.js"),
  m = require("../../../model/trade/useSearch.js"),
  g = require("../../../components/SubmitResult/enum.js"),
  f = require("../../../utils/getPlatform.js"),
  h = require("../../../service/stat/mp-weixin.js"),
  C = require("../../../service/connect/index.js"),
  v = require("../../../config/errcode.js"),
  k = require("../../../service/aegis/platform/not-wujie.js"),
  T = require("../../../model/trade/conditions/grid-utils.js"),
  y = require("../../../model/trade/conditions/tpsl-utils.js");
require("../../../service/broker.js");
var b = require("../../../model/trade/conditions/useConditionErrorHandle.js"),
  P = require("../../../model/trade/conditions/useSettingCheck.js"),
  w = require("../../../mixin/platforms/index.js"),
  x = require("../../../config/broker/11100/index.js"),
  q = "upStep",
  G = "downStep",
  R = "quantity",
  _ = {
    components: {
      ConditionQuote: function () {
        return "../components/condition/ConditionQuote.js";
      },
      FormWrap: function () {
        return "../components/condition/FormWrap.js";
      },
      Stepper: function () {
        return "../../../common/components/Stepper/index.js";
      },
      BottomSelectorTrigger: function () {
        return "../components/condition/BottomSelectorTrigger.js";
      },
      PopupTrigger: function () {
        return "../../../components/PopupSelect/Display.js";
      },
      BottomSelector: function () {
        return "../components/condition/BottomSelector.js";
      },
      PopupSelect: function () {
        return "../../../components/PopupSelect/PopupSelect.js";
      },
      SearchResultWithHold: function () {
        return "../../../bizs/trade/SearchResultWithHold.js";
      },
      SearchBar: function () {
        return "../../../bizs/trade/SearchBar.js";
      },
      ConditionProtocol: function () {
        return "../components/condition/ConditionProtocol.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      GridConfirm: function () {
        return "../components/condition/newCondConfirm.js";
      },
      CondResult: function () {
        return "../../../components/SubmitResult/ActionSheetResult.js";
      },
      PullAndPagination: function () {
        return "../../../components/PullAndPagination/mp/index.js";
      },
    },
    mixins: [w.pluginMixins],
    setup: function () {
      var w,
        _,
        j = o.getCurrentInstance().proxy,
        A = f.getPlatform().isMiniProgram,
        I = null == (w = x.brokerConfig.trade) ? void 0 : w.hideDefaultRiskTips,
        D = null == (_ = x.brokerConfig.trade) ? void 0 : _.condRiskTips;
      (null == D ? void 0 : D.length) > 0 &&
        (D = D.map(function (e) {
          return e.replace("触发价", "基准价和委托价");
        }));
      var B = i.useGridCondition(),
        F = B.requiredFieldTips,
        E = B.clearRequiredFieldTips,
        V = B.weekHint,
        O = B.tradeAccount,
        U = B.stockInfo,
        N = B.quoteInfo,
        L = B.gridCondition,
        W = B.initGridCondition,
        M = B.switchStock,
        Q = B.gridPreCheck,
        $ = B.submitGrid,
        H = B.updateSignStatus,
        Y = B.initTradeService,
        K = B.isSubmitLoading,
        z = B.handleRefresh,
        J = c.useGridBottomSelector(L),
        X = J.bottomSelectedVal,
        Z = J.bottomSelectorConfig,
        ee = J.bottomSelectState,
        te = J.hideBottomSelector,
        oe = J.showBottomSelector,
        ne = J.handleBottomSelectorChange,
        ie = d.useGridPopSelector(L, U),
        re = ie.popupSelectVal,
        ae = ie.popupSelectState,
        ce = ie.positionStyle,
        ue = ie.direction,
        de = ie.popupSelectList,
        le = ie.handlePopupTrigger,
        se = ie.handlePopupSelect,
        pe = ie.hidePopupSelect,
        Se = p.useGridAmount({ order: L, stockInfo: U }),
        me = Se.amountPopText,
        ge = Se.amountStep,
        fe = Se.changeAmount,
        he = Se.handleBlur,
        Ce = Se.clearAmountPopTimmer,
        ve = Se.handleFocus,
        ke = o.ref(0),
        Te = u.useAutoScrollIntoView({
          onScroll: function (e) {
            A
              ? o.index.pageScrollTo({ scrollTop: e, duration: 100 })
              : (ke.value = e || 0);
          },
        }),
        ye = Te.setPageTop,
        be = Te.execPageScroll,
        Pe = m.useSearch();
      o.provide("searchWithHold", Pe);
      var we = s.useSearchResult({
          clickCallback: function (e) {
            A
              ? M(e)
              : (window && (window.gridSwitchFlag = !0),
                j.$router.replace({
                  type: "redirectTo",
                  name: "GridCondition",
                  query: { code: e.code, market: e.market, name: e.name },
                }));
          },
        }),
        xe = we.searching,
        qe = we.hideSearch,
        Ge = we.showSearch,
        Re = we.handleSearchStateChange,
        _e = we.handleSearchResultClick,
        je = S.useGridConfirm({ gridCondition: L, stockInfo: U }),
        Ae = je.gridConfirmData,
        Ie = je.gridConfirmVisible,
        De = je.showGridConfirm,
        Be = je.hideGridConfirm,
        Fe = b.useConditionErrorHandle(),
        Ee = Fe.setLastRetcode,
        Ve = Fe.getErrorBtnText;
      o.provide("trade", L);
      var Oe = l.useVisibleControl(),
        Ue = Oe.visible,
        Ne = Oe.show,
        Le = Oe.hide,
        We = P.useSettingCheck("grid-condition-precheck"),
        Me = We.startSettingCheck,
        Qe = We.checkSetting,
        $e = We.clearCheckTimer,
        He = o.debounce(
          t(
            e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Me(),
                          h.stat.click("trade.gridcond.setting"),
                          (e.prev = 1),
                          (e.next = 4),
                          Q()
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
                            (h.stat.click(
                              "trade.gridcond.".concat(
                                (null == e.t0 ? void 0 : e.t0.retcode) ||
                                  "checkfail"
                              )
                            ),
                            void k.aegisReporter.reportEvent(
                              "TRADE-GRID-CHECK-FAIL",
                              { ext3: JSON.stringify(e.t0) }
                            ))
                          )
                        );
                      case 9:
                        return (e.prev = 9), Qe(), e.finish(9);
                      case 12:
                        De();
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[1, 6, 9, 12]]
              );
            })
          ),
          1500,
          { leading: !0, trailing: !1 }
        );
      function Ye(e) {
        var t, o;
        null ==
          (o =
            null == (t = j.$refs.condResult)
              ? void 0
              : t.$refs.simleAnimResult) || o.changeStatus(e);
      }
      var Ke = P.useSettingCheck("grid-condition-confirmcheck"),
        ze = Ke.startSettingCheck,
        Je = Ke.checkSetting,
        Xe = Ke.clearCheckTimer,
        Ze = o.debounce(
          t(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        ze(),
                        h.stat.click("trade.gridcond.submit"),
                        (e.next = 4),
                        $({
                          onCancel: function () {
                            Be(), Je();
                          },
                          onCheckPwd: function () {
                            Je();
                          },
                          onLoading: function () {
                            Be(),
                              Ne(),
                              Ye({
                                status: g.SimpleAnimStatus.Loading,
                                action: r.ACTION.BUY,
                                statusTitle: "网格交易条件单提交中",
                              }),
                              h.stat.click("trade.gridcond.loading");
                          },
                          onFail: function (e) {
                            Ee(e.retcode),
                              e && +e.retcode === v.COND_DUPLICATE_STOCK
                                ? Ye({
                                    status: g.SimpleAnimStatus.Fail,
                                    statusTitle: "网格交易条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "一个标的只能创建一个网格交易条件单",
                                    buttonText: "返回",
                                  })
                                : Ye({
                                    status: g.SimpleAnimStatus.Fail,
                                    statusTitle: "网格交易条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "网络原因导致提交失败，稍后重新提交",
                                    buttonText: Ve(),
                                  }),
                              h.stat.click("trade.gridcond.fail"),
                              Je();
                          },
                          onSuccess: function () {
                            Ee(0),
                              Ye({
                                status: g.SimpleAnimStatus.Success,
                                statusTitle: "网格交易条件单设置成功",
                                buttonText: "查看条件单",
                              }),
                              h.stat.click("trade.gridcond.succ"),
                              Je();
                          },
                        })
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          ),
          1500,
          { leading: !0, trailing: !1 }
        );
      function et(e, t) {
        return ot.value === t ? e : T.changeZeroToEmptyStr(e);
      }
      var tt = a.useGridTypeStepper(L, U).gridStepperConfig,
        ot = o.ref("");
      function nt(e) {
        ot.value = e;
      }
      function it(e, t) {
        if (((ot.value = ""), T.isZeroNotStr(e.value)))
          switch (t) {
            case q:
              L.setUpStep(e.value),
                o.nextTick$1(function () {
                  L.setUpStep("");
                });
              break;
            case G:
              L.setDownStep(e.value),
                o.nextTick$1(function () {
                  L.setDownStep("");
                });
              break;
            case R:
              L.setQuatity(e.value),
                o.nextTick$1(function () {
                  L.setQuatity("");
                });
          }
      }
      function rt(e, t) {
        var o = [];
        return (
          e && 0 != +e ? o.push("cond-noequal") : o.push("cond-equal"),
          t && o.push("cond-focus"),
          o.join(" ")
        );
      }
      var at = o.computed(function () {
          return !!L.upStep;
        }),
        ct = o.computed(function () {
          return !!L.downStep;
        }),
        ut = o.computed(function () {
          return L.gridType === n.GridType.Percent ? "%" : "";
        }),
        dt = o.computed(function () {
          return at.value ? "+" : "";
        }),
        lt = o.computed(function () {
          return at.value ? ut.value : "";
        }),
        st = o.computed(function () {
          return ct.value ? "-" : "";
        }),
        pt = o.computed(function () {
          return ct.value ? ut.value : "";
        }),
        St = o.computed(function () {
          return [
            rt(L.upStep, ot.value === q),
            F.upStep ? "need-fill-color" : "",
          ];
        }),
        mt = o.computed(function () {
          return [
            rt(L.downStep, ot.value === G),
            F.downStep ? "need-fill-color" : "",
          ];
        });
      return (
        o.onBeforeMount(function () {
          W();
        }),
        o.onMounted(function () {
          (Pe.searchCode.value = ""), (Pe.searchData.value = []);
        }),
        o.onBeforeUnmount(function () {
          (Pe.searchCode.value = ""),
            (Pe.searchData.value = []),
            Ce(),
            $e(),
            Xe();
        }),
        {
          UP_FOCUS_KEY: q,
          DOWN_FOCUS_KEY: G,
          PriceTypeRange: n.PriceTypeRange,
          gridCondition: L,
          otherCondRiskTips: D,
          hideDefaultRiskTips: I,
          bottomSelectedVal: X,
          bottomSelectorConfig: Z,
          bottomSelectState: ee,
          hideBottomSelector: te,
          showBottomSelector: oe,
          handleBottomSelectorChange: ne,
          ORDER_VALIDATE_DAYS: r.ORDER_VALIDATE_DAYS,
          initGridCondition: W,
          updateSignStatus: H,
          tradeAccount: O,
          quoteInfo: N,
          stockInfo: U,
          popupSelectVal: re,
          popupSelectState: ae,
          popupSelectList: de,
          positionStyle: ce,
          direction: ue,
          hidePopupSelect: pe,
          handlePopupTrigger: le,
          handlePopupSelect: se,
          amountStep: ge,
          amountPopText: me,
          changeQuantity: function (e) {
            fe(et(e, R)), T.checkIsEmpty(e) || E("quantity");
          },
          setPageTop: ye,
          handleQuantityFocus: function () {
            nt(R), ve(), be(".cond-grid-quatity-forscroll", j);
          },
          handleQuantityBlur: function (e) {
            it(e, R), he();
          },
          changeBasePrice: function (e) {
            L.setBasePrice(e), T.checkIsEmpty(e) || E("basePrice");
          },
          handleNext: function (e, t) {
            var n,
              i,
              r,
              a,
              c,
              u = {
                basePriceStepper: "upStepStepper",
                upStepStepper: "downStepStepper",
              }[t];
            u &&
              (null ==
                (c =
                  null ==
                  (a =
                    null ==
                    (r =
                      null == (i = null == (n = j.$refs) ? void 0 : n[t])
                        ? void 0
                        : i.$refs)
                      ? void 0
                      : r.input)
                    ? void 0
                    : a.onClose) || c.call(a),
              o.nextTick$1(function () {
                var e, t, o, n, i;
                null ==
                  (i =
                    null ==
                    (n =
                      null ==
                      (o =
                        null == (t = null == (e = j.$refs) ? void 0 : e[u])
                          ? void 0
                          : t.$refs)
                        ? void 0
                        : o.input)
                      ? void 0
                      : n.focus) || i.call(n);
              }));
          },
          changeUpStep: function (e) {
            L.setUpStep(et(e, q)), T.checkIsEmpty(e) || E("upStep");
          },
          changeDownStep: function (e) {
            L.setDownStep(et(e, G)), T.checkIsEmpty(e) || E("downStep");
          },
          gridStepperConfig: tt,
          searching: xe,
          hideSearch: qe,
          showSearch: function () {
            var e, t;
            Ge(),
              h.stat.click("trade.gridcond.searchicon"),
              null ==
                (t =
                  null == (e = j.$refs.realSearchBar)
                    ? void 0
                    : e.handleFocus) || t.call(e);
          },
          handleSearchStateChange: Re,
          handleSearchResultClick: function (e) {
            _e(e), h.stat.click("trade.gridcond.selectstock");
          },
          weekHint: V,
          startSetting: He,
          gridConfirmData: Ae,
          gridConfirmVisible: Ie,
          showGridConfirm: De,
          hideGridConfirm: Be,
          handleConfirm: Ze,
          gridResultVisible: Ue,
          showGridResult: Ne,
          hideGridResult: Le,
          handleRefresh: z,
          toCurrency: o.__CJS__export_toCurrency__,
          statNameClick: function () {
            h.stat.click("trade.gridcond.tohq");
          },
          gridScrollTop: ke,
          handleScroll: function (e) {
            (ke.value = e.detail.scrollTop || 0), ye({ scrollTop: ke.value });
          },
          handleStepperFocus: nt,
          handleStepperBlur: it,
          upStepperCls: St,
          downStepperCls: mt,
          valueAfter: ut,
          isUpStepSymbol: at,
          isDownStepSymbol: ct,
          upValuePrefix: dt,
          upValueAfter: lt,
          downValuePrefix: st,
          downValueAfter: pt,
          toSleepIntro: function () {
            j.$router.push({
              name: "GridConditionGuide",
              query: { gridGuideType: n.GridGuideType.Params },
            });
          },
          toGridIntro: function () {
            j.$router.push({
              name: "GridConditionGuide",
              query: { gridGuideType: n.GridGuideType.Intro },
            });
          },
          clearWss: function () {
            L.isStockSet && C.unsubscribe();
          },
          initTradeService: Y,
          isSubmitLoading: K,
          requiredFieldTips: F,
          handleQuantityClick: function (e) {
            var t = "";
            "sell" === e
              ? (t = O.max_sell_qty)
              : "buy" === e && (t = O.max_buy_qty),
              +t > n.COMMON_COND_MAX_AMOUNT &&
                (t = String(n.COMMON_COND_MAX_AMOUNT)),
              y.isNumeric(t) &&
                (fe(et(t, R)), T.checkIsEmpty(t) || E("quantity"));
          },
        }
      );
    },
    onShow: function () {
      (null == window ? void 0 : window.gridSwitchFlag)
        ? (window.gridSwitchFlag = !1)
        : h.stat.page("/trade/condition/grid"),
        this.updateSignStatus(),
        this.gridCondition.isStockSet && this.initTradeService();
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
      this.setPageTop(e.scrollTop);
    },
  };
Array ||
  (
    o.resolveComponent("SearchBar") +
    o.resolveComponent("ConditionQuote") +
    o.resolveComponent("PopupTrigger") +
    o.resolveComponent("Stepper") +
    o.resolveComponent("FormWrap") +
    o.resolveComponent("BottomSelectorTrigger") +
    o.resolveComponent("SearchResultWithHold") +
    o.resolveComponent("BottomSelector") +
    o.resolveComponent("PopupSelect") +
    o.resolveComponent("ConditionProtocol") +
    o.resolveComponent("mp-dialog") +
    o.resolveComponent("GridConfirm") +
    o.resolveComponent("CondResult") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../../components/PopupSelect/PopupSelect.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var j = o._export_sfc(_, [
  [
    "render",
    function (e, t, n, i, r, a) {
      return o.e(
        {
          a: e.rootFontSize,
          b: o.sr("realSearchBar", "3842de17-1,3842de17-0"),
          c: o.o(i.handleSearchStateChange),
          d: o.p({ searching: i.searching }),
          e: !i.gridCondition.isStockSet || i.searching,
          f: i.gridCondition.isStockSet,
        },
        i.gridCondition.isStockSet
          ? {
              g: o.o(i.showSearch),
              h: o.o(i.statNameClick),
              i: o.p({
                name: i.gridCondition.name,
                code: i.gridCondition.code,
                market: i.gridCondition.market,
                "quote-info": i.quoteInfo,
                "show-search": !i.gridCondition.isUpdate,
              }),
            }
          : {},
        {
          j: o.o(function () {
            return i.toSleepIntro && i.toSleepIntro.apply(i, arguments);
          }),
          k: o.o(function (e) {
            return i.handlePopupTrigger(e, "basePriceStrategy");
          }),
          l: o.p({
            "popup-id": "basepricePop",
            text: i.gridCondition.basePriceStrategyText,
          }),
          m: o.sr("basePriceStepper", "3842de17-5,3842de17-3"),
          n: o.o(i.changeBasePrice),
          o: o.o(function (e) {
            return i.handleNext(e, "basePriceStepper");
          }),
          p: o.p({
            "support-show-zero": !0,
            value: i.gridCondition.basePrice,
            "decimal-length": i.stockInfo.spreadAcc || 2,
            step: i.stockInfo.spread,
            max: 999999,
            "max-length": 10,
            "simple-mode": !0,
            disabled: i.stockInfo.disabled || !i.gridCondition.isStockSet,
            "confirm-type": "next",
          }),
          q: o.n(i.requiredFieldTips.basePrice ? "need-fill-color" : ""),
          r: o.o(function (e) {
            return i.handlePopupTrigger(e, "gridType");
          }),
          s: o.p({
            "popup-id": "upGridPop",
            text: i.gridCondition.gridTypeText,
          }),
          t: o.sr("upStepStepper", "3842de17-8,3842de17-6"),
          v: o.o(function (e) {
            return i.handleNext(e, "upStepStepper");
          }),
          w: o.o(i.changeUpStep),
          x: o.o(function (e) {
            return i.handleStepperFocus(i.UP_FOCUS_KEY);
          }),
          y: o.o(function (e) {
            return i.handleStepperBlur(e, i.UP_FOCUS_KEY);
          }),
          z: o.p({
            "simple-mode": !0,
            "confirm-type": "next",
            "is-filter-negativ-sign": !0,
            "support-empty": !0,
            disabled: i.stockInfo.disabled || !i.gridCondition.isStockSet,
            value: i.gridCondition.upStep,
            placeholder: "请输入",
            "decimal-length": i.gridStepperConfig.spreadAcc,
            step: i.gridStepperConfig.spread,
            max: i.gridStepperConfig.max,
            min: 0,
            "max-length": i.gridStepperConfig.maxLength,
            "value-prefix": i.upValuePrefix,
            "value-after": i.upValueAfter,
          }),
          A: o.n(i.upStepperCls),
          B: o.o(function (e) {
            return i.handlePopupTrigger(e, "gridType");
          }),
          C: o.p({
            "popup-id": "downGridPop",
            text: i.gridCondition.gridTypeText,
          }),
          D: o.sr("downStepStepper", "3842de17-11,3842de17-9"),
          E: o.o(i.changeDownStep),
          F: o.o(function (e) {
            return i.handleStepperFocus(i.DOWN_FOCUS_KEY);
          }),
          G: o.o(function (e) {
            return i.handleStepperBlur(e, i.DOWN_FOCUS_KEY);
          }),
          H: o.p({
            "simple-mode": !0,
            "is-filter-negativ-sign": !0,
            "support-empty": !0,
            disabled: i.stockInfo.disabled || !i.gridCondition.isStockSet,
            placeholder: "请输入",
            value: i.gridCondition.downStep,
            "decimal-length": i.gridStepperConfig.spreadAcc,
            step: i.gridStepperConfig.spread,
            max: i.gridStepperConfig.max,
            "max-length": i.gridStepperConfig.maxLength,
            "value-prefix": i.downValuePrefix,
            "value-after": i.downValueAfter,
          }),
          I: o.n(i.downStepperCls),
          J: o.o(function (e) {
            return i.showBottomSelector(e, "sellPriceType");
          }),
          K: o.p({
            "selected-val": i.gridCondition.sellPriceType,
            "select-range": i.PriceTypeRange,
          }),
          L: o.o(function (e) {
            return i.showBottomSelector(e, "buyPriceType");
          }),
          M: o.p({
            "selected-val": i.gridCondition.buyPriceType,
            "select-range": i.PriceTypeRange,
          }),
          N: o.sr("quatityStepper", "3842de17-17,3842de17-16"),
          O: o.o(i.changeQuantity),
          P: o.o(i.handleQuantityFocus),
          Q: o.o(function (e) {
            return i.handleQuantityBlur(e);
          }),
          R: o.p({
            "simple-mode": !0,
            "support-empty": !0,
            disabled: i.stockInfo.disabled || !i.gridCondition.isStockSet,
            value: i.gridCondition.quantity,
            placeholder: "请输入",
            integer: !0,
            max: 1e6,
            "max-length": 7,
            "extra-key": "00",
            step: i.amountStep,
          }),
          S: i.amountPopText,
        },
        i.amountPopText ? { T: o.t(i.amountPopText) } : {},
        {
          U: o.n(i.requiredFieldTips.quantity ? "need-fill-color" : ""),
          V: i.gridCondition.isStockSet,
        },
        i.gridCondition.isStockSet
          ? o.e(
              { W: !i.stockInfo.secu_info },
              i.stockInfo.secu_info
                ? {
                    X: o.t(i.toCurrency(i.tradeAccount.max_buy_qty, 0)),
                    Y: o.t(i.stockInfo.quantityUnit),
                    Z: o.o(function (e) {
                      return i.handleQuantityClick("buy");
                    }),
                  }
                : {},
              { aa: !i.stockInfo.secu_info },
              i.stockInfo.secu_info
                ? {
                    ab: o.t(i.toCurrency(i.tradeAccount.max_sell_qty, 0)),
                    ac: o.t(i.stockInfo.quantityUnit),
                    ad: o.o(function (e) {
                      return i.handleQuantityClick("sell");
                    }),
                  }
                : {}
            )
          : {},
        {
          ae: o.o(function (e) {
            return i.showBottomSelector(e, "validDayEnum");
          }),
          af: o.p({
            "selected-val": i.gridCondition.validDayEnum,
            "select-range": i.ORDER_VALIDATE_DAYS,
          }),
          ag: o.t(i.gridCondition.timeText),
          ah: o.o(function () {
            return i.toGridIntro && i.toGridIntro.apply(i, arguments);
          }),
          ai: !i.hideDefaultRiskTips,
        },
        (i.hideDefaultRiskTips, {}),
        {
          aj: o.f(i.otherCondRiskTips, function (e, t, n) {
            return { a: o.t(e), b: t };
          }),
          ak: i.stockInfo.disabled || !i.gridCondition.isStockSet,
          al: o.o(function () {
            return i.startSetting && i.startSetting.apply(i, arguments);
          }),
          am: !i.searching,
          an: i.searching,
          ao: o.o(i.handleSearchResultClick),
          ap: o.o(i.handleBottomSelectorChange),
          aq: o.o(i.hideBottomSelector),
          ar: o.p({
            title: i.bottomSelectorConfig.title,
            value: i.bottomSelectState,
            "selected-val": i.bottomSelectedVal,
            "select-range": i.bottomSelectorConfig.range,
          }),
          as: o.o(i.hidePopupSelect),
          at: o.o(i.handlePopupSelect),
          av: o.p({
            visible: i.popupSelectState,
            "selected-key": i.popupSelectVal,
            list: i.popupSelectList,
            "position-style": i.positionStyle,
            direction: i.direction,
          }),
          aw: o.sr("condProtocol", "3842de17-23,3842de17-0"),
          ax: o.p({ id: "mp-dialog" }),
          ay: i.gridConfirmVisible,
        },
        i.gridConfirmVisible
          ? {
              az: o.o(i.hideGridConfirm),
              aA: o.o(i.handleConfirm),
              aB: o.p({ "week-hint": i.weekHint, data: i.gridConfirmData }),
            }
          : {},
        {
          aC: o.sr("condResult", "3842de17-26,3842de17-0"),
          aD: o.o(i.hideGridResult),
          aE: o.p({
            visible: i.gridResultVisible,
            "hide-close-icon": i.isSubmitLoading,
          }),
          aF: o.sr("#global-wrap", "3842de17-0"),
          aG: o.p({
            id: "global-wrap",
            filePath: "/trade/condition/grid",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3842de17"],
]);
wx.createPage(j);
