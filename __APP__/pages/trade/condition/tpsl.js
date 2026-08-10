var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  i = require("../../../config/enum/condition.js"),
  r = require("../../../model/trade/conditions/useTPSLCondition.js"),
  l = require("../../../config/enum.js"),
  a = require("../../../model/trade/conditions/useTPSLTypeStepper.js"),
  s = require("../../../model/trade/conditions/useTPSLBottomSelector.js"),
  c = require("../../../model/trade/conditions/useAutoScrollIntoView.js"),
  u = require("../../../model/trade/conditions/useTPSLPopSelector.js"),
  p = require("../../../model/common/useVisibleControl.js"),
  d = require("../../../model/trade/useConditionEntry.js"),
  S = require("../../../model/trade/conditions/useSearchResult.js"),
  m = require("../../../model/trade/conditions/useTPSLAmount.js"),
  f = require("../../../model/trade/conditions/useTPSLConfirm.js"),
  C = require("../../../model/trade/conditions/useTPSLLimitTips.js"),
  h = require("../../../model/trade/useSearch.js"),
  y = require("../../../components/SubmitResult/enum.js"),
  P = require("../../../utils/getPlatform.js"),
  g = require("../../../service/stat/mp-weixin.js"),
  T = require("../../../service/connect/index.js"),
  k = require("../../../config/errcode.js"),
  v = require("../../../service/aegis/platform/not-wujie.js"),
  b = require("../../../model/trade/conditions/grid-utils.js"),
  x = require("../../../model/trade/conditions/tpsl-utils.js");
require("../../../service/broker.js");
var z = require("../../../stores/app/useMode.js"),
  L = require("../../../model/trade/conditions/useConditionErrorHandle.js"),
  q = require("../../../model/trade/conditions/useSettingCheck.js"),
  V = require("../../../mixin/platforms/index.js"),
  _ = require("../../../config/broker/11100/index.js"),
  A = "zyCond",
  w = "zsCond",
  R = "quantity",
  j = "zyPullback",
  Z = {
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
      TPSLConfirm: function () {
        return "../components/condition/newCondConfirm.js";
      },
      CondResult: function () {
        return "../../../components/SubmitResult/ActionSheetResult.js";
      },
      PullAndPagination: function () {
        return "../../../components/PullAndPagination/mp/index.js";
      },
    },
    mixins: [V.pluginMixins],
    setup: function () {
      var V,
        Z = n.getCurrentInstance().proxy,
        I = P.getPlatform().isMiniProgram,
        B = n.storeToRefs(z.useModeStore()).simpleMode,
        F = null == (V = _.brokerConfig.trade) ? void 0 : V.hideDefaultRiskTips,
        E = _.brokerConfig.trade.condRiskTips;
      (null == E ? void 0 : E.length) > 0 &&
        (E = E.map(function (e) {
          return e.replace("触发价", "基准价和委托价");
        }));
      var D = r.useTPSLCondition(),
        O = D.requiredFieldTips,
        U = D.clearRequiredFieldTips,
        Q = D.weekHint,
        N = D.tradeAccount,
        Y = D.stockInfo,
        M = D.quoteInfo,
        H = D.tpslCondition,
        W = D.initTPSLCondition,
        K = D.switchStock,
        $ = D.tpslPreCheck,
        G = D.submitTPSL,
        J = D.isSubmitLoading,
        X = D.currentHoldItemQuantity,
        ee = D.updateSignStatus,
        te = D.initTradeService,
        oe = D.handleRefresh,
        ne = s.useTPSLBottomSelector(H),
        ie = ne.bottomSelectedVal,
        re = ne.bottomSelectorConfig,
        le = ne.bottomSelectState,
        ae = ne.hideBottomSelector,
        se = ne.showBottomSelector,
        ce = ne.handleBottomSelectorChange,
        ue = u.useTPSLPopSelector(H),
        pe = ue.popupSelectVal,
        de = ue.popupSelectState,
        Se = ue.positionStyle,
        me = ue.direction,
        fe = ue.popupSelectList,
        Ce = ue.handlePopupTrigger,
        he = ue.handlePopupSelect,
        ye = ue.hidePopupSelect,
        Pe = m.useTPSLAmount({ order: H, stockInfo: Y }),
        ge = Pe.amountPopText,
        Te = Pe.amountStep,
        ke = Pe.changeAmount,
        ve = Pe.handleBlur,
        be = Pe.clearAmountPopTimmer,
        xe = Pe.handleFocus,
        ze = n.ref(0),
        Le = c.useAutoScrollIntoView({
          onScroll: function (e) {
            I
              ? n.index.pageScrollTo({ scrollTop: e, duration: 100 })
              : (ze.value = e || 0);
          },
        }),
        qe = Le.setPageTop,
        Ve = Le.execPageScroll,
        _e = h.useSearch(),
        Ae = _e.holdStockData;
      n.provide("searchWithHold", _e);
      var we = d.useConditionEntry(),
        Re = we.checkBeforeJump,
        je = we.isPullbackCondUser,
        Ze = S.useSearchResult({
          clickCallback: function (e) {
            try {
              if (
                Re(l.ORDER_TYPES.TPSL, {
                  searchResStock: e,
                  assetData: Ae.value,
                })
              )
                return;
            } catch (e) {}
            I
              ? K(e)
              : (window && (window.tpslSwitchFlag = !0),
                Z.$router.replace({
                  type: "redirectTo",
                  name: "TPSLCondition",
                  query: { code: e.code, market: e.market, name: e.name },
                }));
          },
        }),
        Ie = Ze.searching,
        Be = Ze.hideSearch,
        Fe = Ze.showSearch,
        Ee = Ze.handleSearchStateChange,
        De = Ze.handleSearchResultClick,
        Oe = f.useTPSLConfirm({ tpslCondition: H, stockInfo: Y }),
        Ue = Oe.tpslConfirmData,
        Qe = Oe.tpslConfirmVisible,
        Ne = Oe.showTPSLConfirm,
        Ye = Oe.hideTPSLConfirm,
        Me = L.useConditionErrorHandle(),
        He = Me.setLastRetcode,
        We = Me.getErrorBtnText;
      n.provide("trade", H);
      var Ke = p.useVisibleControl(),
        $e = Ke.visible,
        Ge = Ke.show,
        Je = Ke.hide,
        Xe = q.useSettingCheck("tpsl-condition-precheck"),
        et = Xe.startSettingCheck,
        tt = Xe.checkSetting,
        ot = Xe.clearCheckTimer,
        nt = n.debounce(
          o(
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          et(),
                          g.stat.click("trade.tpslcond.setting"),
                          (e.prev = 1),
                          (e.next = 4),
                          $()
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
                            (g.stat.click(
                              "trade.tpslcond.".concat(
                                (null == e.t0 ? void 0 : e.t0.retcode) ||
                                  "checkfail"
                              )
                            ),
                            void v.aegisReporter.reportEvent(
                              "TRADE-TPSL-CHECK-FAIL",
                              { ext3: JSON.stringify(e.t0) }
                            ))
                          )
                        );
                      case 9:
                        return (e.prev = 9), tt(), e.finish(9);
                      case 12:
                        Ne();
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
        );
      function it(e) {
        var t, o;
        null ==
          (o =
            null == (t = Z.$refs.condResult)
              ? void 0
              : t.$refs.simleAnimResult) || o.changeStatus(e);
      }
      var rt = q.useSettingCheck("tpsl-condition-confirmcheck"),
        lt = rt.startSettingCheck,
        at = rt.checkSetting,
        st = rt.clearCheckTimer,
        ct = n.debounce(
          o(
            t().mark(function e() {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        lt(),
                        g.stat.click("trade.tpslcond.submit"),
                        (e.next = 4),
                        G({
                          onCancel: function () {
                            Ye(), at();
                          },
                          onCheckPwd: function () {
                            at();
                          },
                          onLoading: function () {
                            Ye(),
                              Ge(),
                              it({
                                status: y.SimpleAnimStatus.Loading,
                                action: l.ACTION.BUY,
                                statusTitle: "止盈止损条件单提交中",
                              }),
                              g.stat.click("trade.tpslcond.loading");
                          },
                          onFail: function (e) {
                            He(e.retcode),
                              e && +e.retcode === k.COND_DUPLICATE_STOCK
                                ? it({
                                    status: y.SimpleAnimStatus.Fail,
                                    statusTitle: "止盈止损条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "一个标的只能创建一个止盈止损条件单",
                                    buttonText: "返回",
                                  })
                                : it({
                                    status: y.SimpleAnimStatus.Fail,
                                    statusTitle: "止盈止损条件单设置失败",
                                    tips:
                                      e.retmsg ||
                                      "网络原因导致提交失败，稍后重新提交",
                                    buttonText: We(),
                                  }),
                              g.stat.click("trade.tpslcond.fail"),
                              at();
                          },
                          onSuccess: function () {
                            He(0),
                              it({
                                status: y.SimpleAnimStatus.Success,
                                statusTitle: "止盈止损条件单设置成功",
                                buttonText: "查看条件单",
                              }),
                              g.stat.click("trade.tpslcond.succ"),
                              at();
                          },
                        })
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          1500,
          { leading: !0, trailing: !1 }
        );
      function ut(e) {
        H.setBasePrice(e), b.checkIsEmpty(e) || U("basePrice");
      }
      function pt(e, t) {
        return ft.value === t ? e : b.changeZeroToEmptyStr(e);
      }
      var dt = a.useTPSLTypeStepper(H, Y),
        St = dt.tpslZyStepperConfig,
        mt = dt.tpslZsStepperConfig,
        ft = n.ref("");
      function Ct(e) {
        ft.value = e;
      }
      function ht(e, t) {
        if (((ft.value = ""), b.isZeroNotStr(e.value)))
          switch (t) {
            case A:
              H.setZyCondValue(e.value),
                n.nextTick$1(function () {
                  H.setZyCondValue("");
                });
              break;
            case w:
              H.setZsCondValue(e.value),
                n.nextTick$1(function () {
                  H.setZsCondValue("");
                });
              break;
            case R:
              H.setQuatity(e.value),
                n.nextTick$1(function () {
                  H.setQuatity("");
                });
              break;
            case j:
              H.setZyPullbackValue(e.value),
                n.nextTick$1(function () {
                  H.setZyPullbackValue("");
                });
          }
      }
      function yt(e, t, o) {
        var n = [];
        return (
          !e || 0 == +e || o ? n.push("cond-equal") : n.push("cond-noequal"),
          t && n.push("cond-focus"),
          n.join(" ")
        );
      }
      var Pt = n.computed(function () {
          try {
            return +X.value > 0 &&
              void 0 !== (null == H ? void 0 : H.costPrice) &&
              x.isNumeric(H.costPrice)
              ? (+H.costPrice).toFixed(Y.value.spreadAcc || 2)
              : "暂无持仓";
          } catch (e) {
            return "暂无持仓";
          }
        }),
        gt = n.computed(function () {
          return !!H.zyCondValue;
        }),
        Tt = n.computed(function () {
          return !!H.zsCondValue;
        }),
        kt = n.computed(function () {
          return H.zyCondType === i.LimitType.Percent ? "+" : "";
        }),
        vt = n.computed(function () {
          return H.zsCondType === i.LimitType.Percent ? "-" : "";
        }),
        bt = n.computed(function () {
          return H.zyCondType === i.LimitType.Percent ? "%" : "";
        }),
        xt = n.computed(function () {
          return H.zsCondType === i.LimitType.Percent ? "%" : "";
        }),
        zt = n.computed(function () {
          return gt.value ? kt.value : "";
        }),
        Lt = n.computed(function () {
          return Tt.value ? vt.value : "";
        }),
        qt = n.computed(function () {
          return gt.value ? bt.value : "";
        }),
        Vt = n.computed(function () {
          return Tt.value ? xt.value : "";
        }),
        _t = n.computed(function () {
          return H.zyPullbackValue ? bt.value : "";
        }),
        At = n.computed(function () {
          return [
            yt(H.zyCondValue, ft.value === A),
            O.upStep ? "need-fill-color" : "",
          ];
        }),
        wt = n.computed(function () {
          return [
            yt(H.zsCondValue, ft.value === w),
            O.downStep ? "need-fill-color" : "",
          ];
        }),
        Rt = C.useTPSLLimitTips({ order: H, stockInfo: Y }),
        jt = Rt.zyPopoverText,
        Zt = Rt.zsPopoverText,
        It = Rt.zyPopoverClass,
        Bt = Rt.zsPopoverClass,
        Ft = Rt.handleZyCondValueTips,
        Et = Rt.handleZsCondValueTips;
      return (
        n.watch(
          function () {
            return [H.zyCondValue, H.basePrice];
          },
          function (t) {
            var o = e(t, 2),
              n = o[0],
              i = o[1];
            Ft(n, i);
          },
          { immediate: !0 }
        ),
        n.watch(
          function () {
            return [H.zsCondValue, H.basePrice];
          },
          function (t) {
            var o = e(t, 2),
              n = o[0],
              i = o[1];
            Et(n, i);
          },
          { immediate: !0 }
        ),
        n.onBeforeMount(function () {
          W();
        }),
        n.onMounted(function () {
          (_e.searchCode.value = ""), (_e.searchData.value = []);
        }),
        n.onBeforeUnmount(function () {
          (_e.searchCode.value = ""),
            (_e.searchData.value = []),
            be(),
            ot(),
            st();
        }),
        {
          ZY_FOCUS_KEY: A,
          ZS_FOCUS_KEY: w,
          ZY_PULLBACK_FOCUS_KEY: j,
          CondTypesBackEnd: i.CondTypesBackEnd,
          PriceTypeRangeWithoutSell: i.PriceTypeRangeWithoutSell,
          tpslCondition: H,
          otherCondRiskTips: E,
          hideDefaultRiskTips: F,
          bottomSelectedVal: ie,
          bottomSelectorConfig: re,
          bottomSelectState: le,
          hideBottomSelector: ae,
          showBottomSelector: se,
          handleBottomSelectorChange: ce,
          ORDER_VALIDATE_DAYS: l.ORDER_VALIDATE_DAYS,
          initTPSLCondition: W,
          updateSignStatus: ee,
          tradeAccount: N,
          quoteInfo: M,
          stockInfo: Y,
          currentHoldItemQuantity: X,
          popupSelectVal: pe,
          popupSelectState: de,
          popupSelectList: fe,
          positionStyle: Se,
          direction: me,
          hidePopupSelect: ye,
          handlePopupTrigger: Ce,
          handlePopupSelect: he,
          amountStep: Te,
          amountPopText: ge,
          changeQuantity: function (e) {
            ke("".concat(e)), b.checkIsEmpty(e) || U("quantity");
          },
          setPageTop: qe,
          handleQuantityFocus: function () {
            Ct(R), xe(), Ve(".cond-tpsl-quatity-forscroll", Z);
          },
          handleQuantityBlur: function (e) {
            ht(e, R), ve();
          },
          handleCostPriceClick: function () {
            "暂无持仓" !== Pt.value && x.isNumeric(Pt.value) && ut(Pt.value);
          },
          handleQuantityClick: function (e) {
            var t = "";
            +(t = "hold" === e ? X.value : N.max_sell_qty) >
              i.COMMON_COND_MAX_AMOUNT &&
              (t = String(i.COMMON_COND_MAX_AMOUNT)),
              x.isNumeric(t) &&
                (ke(pt(t, R)), b.checkIsEmpty(t) || U("quantity"));
          },
          changeBasePrice: ut,
          handleNext: function (e, t) {
            var o,
              i,
              r,
              l,
              a,
              s = {
                basePriceStepper: "zyStepStepper",
                zyStepStepper: "zsStepStepper",
                zsStepStepper: "quatityStepper",
              }[t];
            s &&
              (null ==
                (a =
                  null ==
                  (l =
                    null ==
                    (r =
                      null == (i = null == (o = Z.$refs) ? void 0 : o[t])
                        ? void 0
                        : i.$refs)
                      ? void 0
                      : r.input)
                    ? void 0
                    : l.onClose) || a.call(l),
              n.nextTick$1(function () {
                var e, t, o, n, i;
                null ==
                  (i =
                    null ==
                    (n =
                      null ==
                      (o =
                        null == (t = null == (e = Z.$refs) ? void 0 : e[s])
                          ? void 0
                          : t.$refs)
                        ? void 0
                        : o.input)
                      ? void 0
                      : n.focus) || i.call(n);
              }));
          },
          changeZyCondValue: function (e) {
            H.setZyCondValue(pt(e, A)), b.checkIsEmpty(e) || U("zyCondValue");
          },
          changeZsCondValue: function (e) {
            H.setZsCondValue(pt(e, w)), b.checkIsEmpty(e) || U("zsCondValue");
          },
          tpslZyStepperConfig: St,
          tpslZsStepperConfig: mt,
          isPullbackCondUser: je,
          handleZyPullbackToggle: function (e) {
            var t,
              o,
              n =
                null !==
                  (t =
                    null == (o = null == e ? void 0 : e.detail)
                      ? void 0
                      : o.value) && void 0 !== t
                  ? t
                  : !H.zyPullbackFlag;
            H.setZyPullbackFlag(n),
              n || U("zyPullbackValue"),
              g.stat.click(
                "trade.tpslcond.zy_pullback_switch_" + (n ? "on" : "off")
              );
          },
          changeZyPullbackValue: function (e) {
            H.setZyPullbackValue(pt(e, j)),
              b.checkIsEmpty(e) || U("zyPullbackValue");
          },
          zyPullbackValueAfter: _t,
          simpleMode: B,
          searching: Ie,
          hideSearch: Be,
          showSearch: function () {
            var e, t;
            Fe(),
              g.stat.click("trade.tpslcond.searchicon"),
              null ==
                (t =
                  null == (e = Z.$refs.realSearchBar)
                    ? void 0
                    : e.handleFocus) || t.call(e);
          },
          handleSearchStateChange: Ee,
          handleSearchResultClick: function (e) {
            De(e), g.stat.click("trade.tpslcond.selectstock");
          },
          weekHint: Q,
          startSetting: nt,
          tpslConfirmData: Ue,
          tpslConfirmVisible: Qe,
          showTPSLConfirm: Ne,
          hideTPSLConfirm: Ye,
          handleConfirm: ct,
          tpslResultVisible: $e,
          showTPSLResult: Ge,
          hideTPSLResult: Je,
          isSubmitLoading: J,
          handleRefresh: oe,
          toCurrency: n.__CJS__export_toCurrency__,
          statNameClick: function () {
            g.stat.click("trade.tpslcond.tohq");
          },
          tpslScrollTop: ze,
          handleScroll: function (e) {
            (ze.value = e.detail.scrollTop || 0), qe({ scrollTop: ze.value });
          },
          handleStepperFocus: Ct,
          handleStepperBlur: ht,
          currentCostPrice: Pt,
          upStepperCls: At,
          downStepperCls: wt,
          zyCondValuePrefix: zt,
          zsCondValuePrefix: Lt,
          zyCondValueAfter: qt,
          zsCondValueAfter: Vt,
          zyPopoverText: jt,
          zsPopoverText: Zt,
          zyPopoverClass: It,
          zsPopoverClass: Bt,
          toTPSLCondIntro: function (e) {
            Z.$router.push({
              name: "TPSLConditionGuide",
              query: { tpslGuideType: e },
            });
          },
          TPSLGuideType: i.TPSLGuideType,
          clearWss: function () {
            H.isStockSet && T.unsubscribe();
          },
          initTradeService: te,
          requiredFieldTips: O,
        }
      );
    },
    onShow: function () {
      (null == window ? void 0 : window.tpslSwitchFlag)
        ? (window.tpslSwitchFlag = !1)
        : g.stat.page("/trade/condition/tpsl"),
        this.tpslCondition.isStockSet && this.initTradeService(),
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
      this.setPageTop(e.scrollTop);
    },
  };
Array ||
  (
    n.resolveComponent("SearchBar") +
    n.resolveComponent("ConditionQuote") +
    n.resolveComponent("Stepper") +
    n.resolveComponent("FormWrap") +
    n.resolveComponent("PopupTrigger") +
    n.resolveComponent("BottomSelectorTrigger") +
    n.resolveComponent("SearchResultWithHold") +
    n.resolveComponent("BottomSelector") +
    n.resolveComponent("PopupSelect") +
    n.resolveComponent("ConditionProtocol") +
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("TPSLConfirm") +
    n.resolveComponent("CondResult") +
    n.resolveComponent("GlobalWrap")
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
var I = n._export_sfc(Z, [
  [
    "render",
    function (e, t, o, i, r, l) {
      return n.e(
        {
          a: e.rootFontSize,
          b: n.sr("realSearchBar", "d9878b00-1,d9878b00-0"),
          c: n.o(i.handleSearchStateChange),
          d: n.p({ searching: i.searching }),
          e: !i.tpslCondition.isStockSet || i.searching,
          f: i.tpslCondition.isStockSet,
        },
        i.tpslCondition.isStockSet
          ? {
              g: n.o(i.showSearch),
              h: n.o(i.statNameClick),
              i: n.p({
                name: i.tpslCondition.name,
                code: i.tpslCondition.code,
                market: i.tpslCondition.market,
                "quote-info": i.quoteInfo,
                "show-search": !i.tpslCondition.isUpdate,
              }),
            }
          : {},
        {
          j: n.o(function (e) {
            return i.toTPSLCondIntro(i.TPSLGuideType.Params);
          }),
          k: n.sr("basePriceStepper", "d9878b00-4,d9878b00-3"),
          l: n.o(i.changeBasePrice),
          m: n.o(function (e) {
            return i.handleNext(e, "basePriceStepper");
          }),
          n: n.p({
            placeholder: "请输入",
            "support-empty": !0,
            "simple-mode": !0,
            "confirm-type": "next",
            value: i.tpslCondition.basePrice,
            "decimal-length": i.stockInfo.spreadAcc || 2,
            step: i.stockInfo.spread,
            max: 999999,
            "max-length": 10,
            disabled: i.stockInfo.disabled || !i.tpslCondition.isStockSet,
          }),
          o: n.n(i.requiredFieldTips.basePrice ? "need-fill-color" : ""),
          p: i.tpslCondition.isStockSet,
        },
        i.tpslCondition.isStockSet
          ? {
              q: n.t(i.currentCostPrice),
              r: n.o(function () {
                return (
                  i.handleCostPriceClick &&
                  i.handleCostPriceClick.apply(i, arguments)
                );
              }),
            }
          : {},
        {
          s: n.t(i.tpslCondition.zyPullbackFlag ? "涨至..." : "涨至...止盈"),
          t: n.o(function (e) {
            return i.handlePopupTrigger(e, "zyCondType");
          }),
          v: n.p({
            "popup-id": "zyCondTypePop",
            text: i.tpslCondition.zyTypeText,
          }),
          w: n.sr("zyStepStepper", "d9878b00-7,d9878b00-5"),
          x: n.o(function (e) {
            return i.handleNext(e, "zyStepStepper");
          }),
          y: n.o(i.changeZyCondValue),
          z: n.o(function (e) {
            return i.handleStepperFocus(i.ZY_FOCUS_KEY);
          }),
          A: n.o(function (e) {
            return i.handleStepperBlur(e, i.ZY_FOCUS_KEY);
          }),
          B: n.p({
            "simple-mode": !0,
            "confirm-type": "next",
            "is-filter-negativ-sign": !0,
            "support-empty": !0,
            placeholder: "请输入",
            disabled: i.stockInfo.disabled || !i.tpslCondition.isStockSet,
            value: i.tpslCondition.zyCondValue,
            "decimal-length": i.tpslZyStepperConfig.spreadAcc,
            step: i.tpslZyStepperConfig.spread,
            max: i.tpslZyStepperConfig.max,
            min: 0,
            "max-length": i.tpslZyStepperConfig.maxLength,
            "value-prefix": i.zyCondValuePrefix,
            "value-after": i.zyCondValueAfter,
          }),
          C: i.zyPopoverText,
        },
        i.zyPopoverText
          ? { D: n.t(i.zyPopoverText), E: n.n(i.zyPopoverClass) }
          : {},
        {
          F: n.n(i.upStepperCls),
          G: n.n(i.requiredFieldTips.zyCondValue ? "need-fill-color" : ""),
          H: i.isPullbackCondUser,
        },
        i.isPullbackCondUser
          ? n.e(
              {
                I: n.n({ close: !i.tpslCondition.zyPullbackFlag }),
                J: i.tpslCondition.zyPullbackFlag,
                K: i.simpleMode ? "#e63535" : "#3077ec",
                L: i.stockInfo.disabled || !i.tpslCondition.isStockSet,
                M: n.o(function () {
                  return (
                    i.handleZyPullbackToggle &&
                    i.handleZyPullbackToggle.apply(i, arguments)
                  );
                }),
                N: i.tpslCondition.zyPullbackFlag,
              },
              i.tpslCondition.zyPullbackFlag
                ? {
                    O: n.sr("zyPullbackStepper", "d9878b00-10,d9878b00-9"),
                    P: n.o(i.changeZyPullbackValue),
                    Q: n.o(function (e) {
                      return i.handleStepperFocus(i.ZY_PULLBACK_FOCUS_KEY);
                    }),
                    R: n.o(function (e) {
                      return i.handleStepperBlur(e, i.ZY_PULLBACK_FOCUS_KEY);
                    }),
                    S: n.o(function (e) {
                      return i.handleNext(e, "zyStepStepper");
                    }),
                    T: n.p({
                      "simple-mode": !0,
                      "confirm-type": "next",
                      "is-filter-negativ-sign": !0,
                      "support-empty": !0,
                      placeholder: "请输入",
                      disabled:
                        i.stockInfo.disabled || !i.tpslCondition.isStockSet,
                      value: i.tpslCondition.zyPullbackValue,
                      "decimal-length": i.tpslZyStepperConfig.spreadAcc,
                      step: i.tpslZyStepperConfig.spread,
                      max: i.tpslZyStepperConfig.max,
                      min: 0,
                      "max-length": i.tpslZyStepperConfig.maxLength,
                      "value-after": i.zyPullbackValueAfter,
                    }),
                    U: n.n(
                      i.requiredFieldTips.zyPullbackValue
                        ? "need-fill-color"
                        : ""
                    ),
                  }
                : {}
            )
          : {},
        {
          V: n.o(function (e) {
            return i.handlePopupTrigger(e, "zsCondType");
          }),
          W: n.p({
            "popup-id": "zsCondTypePop",
            text: i.tpslCondition.zsTypeText,
          }),
          X: n.sr("zsStepStepper", "d9878b00-13,d9878b00-11"),
          Y: n.o(function (e) {
            return i.handleNext(e, "zsStepStepper");
          }),
          Z: n.o(i.changeZsCondValue),
          aa: n.o(function (e) {
            return i.handleStepperFocus(i.ZS_FOCUS_KEY);
          }),
          ab: n.o(function (e) {
            return i.handleStepperBlur(e, i.ZS_FOCUS_KEY);
          }),
          ac: n.p({
            "simple-mode": !0,
            "confirm-type": "next",
            "is-filter-negativ-sign": !0,
            "support-empty": !0,
            placeholder: "请输入",
            disabled: i.stockInfo.disabled || !i.tpslCondition.isStockSet,
            value: i.tpslCondition.zsCondValue,
            "decimal-length": i.tpslZsStepperConfig.spreadAcc,
            step: i.tpslZsStepperConfig.spread,
            max: i.tpslZsStepperConfig.max,
            "max-length": i.tpslZsStepperConfig.maxLength,
            "value-prefix": i.zsCondValuePrefix,
            "value-after": i.zsCondValueAfter,
          }),
          ad: i.zsPopoverText,
        },
        i.zsPopoverText
          ? { ae: n.t(i.zsPopoverText), af: n.n(i.zsPopoverClass) }
          : {},
        {
          ag: n.n(i.downStepperCls),
          ah: n.n(i.requiredFieldTips.zsCondValue ? "need-fill-color" : ""),
          ai: n.o(function (e) {
            return i.showBottomSelector(e, "orderPriceType");
          }),
          aj: n.p({
            "selected-val": i.tpslCondition.orderPriceType,
            "select-range": i.PriceTypeRangeWithoutSell,
          }),
          ak: n.sr("quatityStepper", "d9878b00-17,d9878b00-16"),
          al: n.o(i.changeQuantity),
          am: n.o(i.handleQuantityFocus),
          an: n.o(function (e) {
            return i.handleQuantityBlur(e);
          }),
          ao: n.p({
            "simple-mode": !0,
            "support-empty": !0,
            disabled: i.stockInfo.disabled || !i.tpslCondition.isStockSet,
            value: i.tpslCondition.quantity,
            placeholder: "请输入",
            integer: !0,
            max: 1e6,
            "max-length": 7,
            "extra-key": "00",
            step: i.amountStep,
          }),
          ap: i.amountPopText,
        },
        i.amountPopText ? { aq: n.t(i.amountPopText) } : {},
        {
          ar: n.n(i.requiredFieldTips.quantity ? "need-fill-color" : ""),
          as: i.tpslCondition.isStockSet,
        },
        i.tpslCondition.isStockSet
          ? n.e(
              { at: i.currentHoldItemQuantity !== i.tradeAccount.max_sell_qty },
              i.currentHoldItemQuantity !== i.tradeAccount.max_sell_qty
                ? n.e(
                    { av: !i.currentHoldItemQuantity },
                    i.currentHoldItemQuantity
                      ? {
                          aw: n.t(i.toCurrency(i.currentHoldItemQuantity, 0)),
                          ax: n.t(i.stockInfo.quantityUnit),
                          ay: n.o(function (e) {
                            return i.handleQuantityClick("hold");
                          }),
                        }
                      : {}
                  )
                : {},
              { az: !i.tradeAccount.max_sell_qty },
              i.tradeAccount.max_sell_qty
                ? {
                    aA: n.t(i.toCurrency(i.tradeAccount.max_sell_qty, 0)),
                    aB: n.t(i.stockInfo.quantityUnit),
                    aC: n.o(function (e) {
                      return i.handleQuantityClick("sell");
                    }),
                  }
                : {}
            )
          : {},
        {
          aD: n.o(function (e) {
            return i.showBottomSelector(e, "validDayEnum");
          }),
          aE: n.p({
            "selected-val": i.tpslCondition.validDayEnum,
            "select-range": i.ORDER_VALIDATE_DAYS,
          }),
          aF: n.t(i.tpslCondition.timeText),
          aG: n.o(function (e) {
            return i.toTPSLCondIntro(i.TPSLGuideType.Intro);
          }),
          aH: !i.hideDefaultRiskTips,
        },
        (i.hideDefaultRiskTips, {}),
        {
          aI: n.f(i.otherCondRiskTips, function (e, t, o) {
            return { a: n.t(e), b: t };
          }),
          aJ: i.stockInfo.disabled || !i.tpslCondition.isStockSet,
          aK: n.o(function () {
            return i.startSetting && i.startSetting.apply(i, arguments);
          }),
          aL: !i.searching,
          aM: i.searching,
          aN: n.o(i.handleSearchResultClick),
          aO: n.o(i.handleBottomSelectorChange),
          aP: n.o(i.hideBottomSelector),
          aQ: n.p({
            title: i.bottomSelectorConfig.title,
            value: i.bottomSelectState,
            "selected-val": i.bottomSelectedVal,
            "select-range": i.bottomSelectorConfig.range,
          }),
          aR: n.o(i.hidePopupSelect),
          aS: n.o(i.handlePopupSelect),
          aT: n.p({
            visible: i.popupSelectState,
            "selected-key": i.popupSelectVal,
            list: i.popupSelectList,
            "position-style": i.positionStyle,
            direction: i.direction,
          }),
          aU: n.sr("condProtocol", "d9878b00-23,d9878b00-0"),
          aV: n.p({ id: "mp-dialog" }),
          aW: i.tpslConfirmVisible,
        },
        i.tpslConfirmVisible
          ? {
              aX: n.o(i.hideTPSLConfirm),
              aY: n.o(i.handleConfirm),
              aZ: n.p({
                "week-hint": i.weekHint,
                data: i.tpslConfirmData,
                type: i.CondTypesBackEnd.TPSL,
              }),
            }
          : {},
        {
          ba: n.sr("condResult", "d9878b00-26,d9878b00-0"),
          bb: n.o(i.hideTPSLResult),
          bc: n.p({
            visible: i.tpslResultVisible,
            "hide-close-icon": i.isSubmitLoading,
          }),
          bd: n.sr("#global-wrap", "d9878b00-0"),
          be: n.p({
            id: "global-wrap",
            filePath: "/trade/condition/tpsl",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d9878b00"],
]);
wx.createPage(I);
