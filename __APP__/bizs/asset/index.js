require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  i = require("../../components/BulletinBar/useBulletin.js"),
  r = require("../../common/components/Dialog/index.js"),
  s = require("../../model/kzz/useKzz.js"),
  a = require("../../model/index/useAssetNew.js"),
  u = require("../../model/index/useHideFund.js"),
  d = require("../../model/index/useTabBar.js"),
  l = require("../../model/index/useAssetFetchData.js"),
  c = require("../../model/common/useZxgSupport.js");
require("../../service/broker.js");
var p = require("../../utils/index.js"),
  f = require("../../utils/navigator.js"),
  h = require("../../stores/position/usePositionDrawer.js"),
  m = require("../../service/aegis/platform/not-wujie.js"),
  g = require("../../config/key.js"),
  v = require("../../config/enum/condition.js"),
  C = require("../../service/connect/index.js"),
  S = require("../../utils/getPlatform.js"),
  w = require("../../model/trade/useConditionEntry.js"),
  D = require("../../components/Password/index.js"),
  b = require("../../stores/user/useUserinfo.js"),
  y = require("../../stores/app/useMode.js"),
  R = require("../../config/enum.js"),
  k = require("../../model/act/useGovBondsInfo.js"),
  I = require("../../router/helper.js"),
  P = require("../../service/cookie/mp-weixin.js"),
  A = require("../../stores/red-point/useQuickEntry.js"),
  E = require("../../stores/new-stock/useNewStockEntryTip.js");
require("../../service/request/pureRequest.js");
var T = require("../../stores/app/useNavbar.js"),
  x = require("../../config/event.js"),
  _ = require("../../utils/market.js"),
  O = require("../../composables/useLotteryReward.js"),
  B = require("./composables/useOperateAdv.js"),
  j = require("./composables/useAssetOperMatlDely.js"),
  M = require("./composables/useAssetPopupQueue.js"),
  L = require("./composables/useDeferredRender.js"),
  q = require("./composables/useSwiperHeight.js"),
  H = require("./composables/useDelistedInfo.js"),
  F = require("./composables/useAssetComposition.js"),
  N = require("./composables/useAccountModeSwitch.js"),
  U = require("./composables/useAssetEntryClick.js"),
  z = require("../../service/mpIntercept.js"),
  $ = require("../../config/broker/11100/index.js"),
  G = {
    components: {
      ServerBroker: function () {
        return "../../components/ServerBroker/ServerBroker.js";
      },
      SnacBar: function () {
        return "../../components/SnacBar/SnacBar.js";
      },
      Tabbar: function () {
        return "../../common/components/Tabbar/index.js";
      },
      QuickEntry: function () {
        return "./QuickEntry.js";
      },
      OrdersList: function () {
        return "./OrdersList.js";
      },
      OrderFailDialog: function () {
        return "./OrderFailDialog.js";
      },
      ConditionList: function () {
        return "./ConditionList.js";
      },
      HoldKzzRiskList: function () {
        return "./HoldKzzRiskList.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      KzzRiskDialog: function () {
        return "../../components/KzzRiskDialog/KzzRiskDialog.js";
      },
      BulletinBar: function () {
        return "../../components/BulletinBar/index.js";
      },
      OperateAdv: function () {
        return "./operate-adv/index.js";
      },
      RiskTestReminder: function () {
        return "../../components/RiskTestReminder/index.js";
      },
      RegisterRiskPopup: function () {
        return "../../components/RegisterRiskPopup/index.js";
      },
      IndexPullRefresh: function () {
        return "./index-pull-refresh.js";
      },
      ConditionStrategy: function () {
        return "../../pages/trade/components/condition/ConditionStrategy.js";
      },
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
      TransferProgress: function () {
        return "../../components/TransferProgress/TransferProgress.js";
      },
      AssetDataInfoNew: function () {
        return "./v2/AssetDataInfo.js";
      },
      PositionsListNew: function () {
        return "./v2/PositionsList.js";
      },
      Overlay: function () {
        return "../../common/components/Overlay/index.js";
      },
      MoneyTraceRiskPopup: function () {
        return "./MoneyTraceRiskPopup.js";
      },
      MilestoneDialog: function () {
        return "../../components/MilestoneDialog/index.js";
      },
      LotteryRewardDialog: function () {
        return "../../components/LotteryRewardDialog/index.js";
      },
    },
    setup: function () {
      var G,
        K,
        Q,
        W,
        V = t.getCurrentInstance().proxy;
      t.provide("curPageContext", V);
      var Z = t.storeToRefs(y.useModeStore()).simpleMode,
        X = S.getPlatform(),
        Y = X.isZxg,
        J = (X.isWeixin, X.platform),
        ee = X.isMiniProgram,
        oe = (X.isLctXcx, X.bizPlatformVer),
        ne = X.isMpPlugin,
        te = X.isZxgXcx,
        ie = X.isPCWeixin,
        re = [],
        se = O.useLotteryReward({ scene: "asset" }),
        ae = b.useUserinfoStore(),
        ue = t.storeToRefs(ae),
        de = ue.userinfo,
        le = ue.accountMode,
        ce = M.useAssetPopupQueue({ lottery: se }),
        pe = ce.POPUP_ID,
        fe = ce.popupQueue,
        he = ce.popupCurrentId,
        me = ce.advanceLotteryPopup,
        ge = (ae.setAccountMode, ae.forceGetUserInfo, ae.getGreyConfigWithName),
        ve = w.useConditionEntry(),
        Ce = ve.isConditionEntry,
        Se = ve.ASSET_TAB_MAX_SHOW,
        we = ve.isShowCondStrategy,
        De = ve.conditionItem,
        be = ve.clickCreateCond,
        ye = ve.createCondByType;
      t.provide("clickCreateCond", be),
        t.provide("assetIndexComp", V),
        t.provide("kzzRiskDialogPageContext", V),
        t.provide("isAssetIndex", !0),
        t.provide("isConditionEntry", Ce);
      var Re = t.ref(!0),
        ke = t.ref(!1),
        Ie = t.ref(300),
        Pe = t.ref(0),
        Ae = c.useZxgSupport(),
        Ee = t.ref(
          !(!window || !window.__embedded__mode) && window.__embedded__mode
        ),
        Te = t.ref(!0),
        xe = t.ref(Y && "ios" === J),
        _e = t.ref(!1),
        Oe = t.ref("black");
      Oe.value = "dark" === z.getTheme() ? "white" : "black";
      var Be = t.ref(null),
        je =
          (null ==
          (W =
            null ==
            (Q =
              null == (K = null == (G = $.brokerConfig) ? void 0 : G.dictionary)
                ? void 0
                : K.Enties)
              ? void 0
              : Q.ipo)
            ? void 0
            : W.routeName) || "",
        Me = B.useOperateAdv(),
        Le = !new P.AdapterCookie().get("wzq_qluin"),
        qe = t.computed(function () {
          return !1;
        }),
        He = t.ref(!0);
      He.value = !1;
      var Fe,
        Ne,
        Ue = t.ref(!1),
        ze = A.useQuickEntry(),
        $e = t.storeToRefs(ze).redPoints,
        Ge = t.computed(function () {
          var e;
          return (
            ("1" === de.value.assets_drawer_control ||
              (null == (e = null == Ye ? void 0 : Ye.data)
                ? void 0
                : e.isAssetV2Control) ||
              ne) &&
            !0
          );
        }),
        Ke = t.computed(function () {
          return ["1", "2", "3"].includes(de.value.hs_trade_status);
        }),
        Qe = t.ref(!1),
        We = t.throttle(
          n(
            o().mark(function e() {
              var n, t, i;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (go.value && Ge.value) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        !(null ==
                        (t =
                          null == (n = null == V ? void 0 : V.$refs)
                            ? void 0
                            : n.assetDataInfo)
                          ? void 0
                          : t.getTopHideInfoRect)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 6), t.getTopHideInfoRect();
                    case 6:
                      void 0 !== (null == (i = e.sent) ? void 0 : i.top) &&
                        (Qe.value = ne ? i.top < Pe.value - 24 : i.top < 10);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          50
        ),
        Ve = t.computed(function () {
          return !!(de.value.rzrq_account && Y && t.gte(oe, "11.12.0"));
        }),
        Ze = null,
        Xe = t.computed(function () {
          return "请联系"
            .concat($.brokerConfig.base.name, "客服")
            .concat($.brokerConfig.base.tel);
        }),
        Ye = a.useAsset(),
        Je = F.useAssetComposition({ asset: Ye, zxgSupport: Ae }),
        eo = Je.showAssetComposition,
        oo = Je.assetCompositionPopupTop,
        no = Je.compositionScrollHeight,
        to = Je.showAnalysisEntry,
        io = Je.showBalExplain,
        ro = Je.holdValWithBalance,
        so = Je.onShowAssetComposition,
        ao = Je.onCloseAssetComposition,
        uo = Je.onAssetAnalysis,
        lo = N.useAccountModeSwitch(),
        co = lo.accountSwitcherVisible,
        po = lo.handleToggleAccount,
        fo = lo.changeAccountMode,
        ho = s.useKzz().holdRiskList,
        mo = u.useHideFund(),
        go = mo.hidefund,
        vo = mo.toggleHideFund,
        Co = mo.restoreHideFund,
        So = d.useTabbar({
          numHolding: Ye.numHolding,
          numHistory: Ye.numHistory,
          numCondition: Ye.numCondition,
          assetV2Control: Ge,
        }),
        wo = L.useDeferredRender({ assetV2Control: Ge, isConditionEntry: Ce }),
        Do = wo.canRenderDelayAssetInfo,
        bo = wo.scheduleDelayRenderOnce,
        yo = j.useAssetOperMatlDely({
          popupQueue: fe,
          milestonePopupId: pe.MILESTONE,
          operateAdv: Me,
          milestoneDialogRef: Be,
          getPositionStocks: function () {
            var e;
            return null == (e = Ye.data) ? void 0 : e.stock;
          },
        }),
        Ro = yo.bandAssistMap,
        ko = yo.operateAdvItgData,
        Io = yo.handleOperateAdvClose,
        Po = l.useAssetFetchData(Ye, So, {
          onHomeShowSuccess:
            ((Ne = n(
              o().mark(function e(n) {
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            yo.fetchOperMatlDelyData()
                          );
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          (e.prev = 5),
                            (e.t0 = e.catch(0)),
                            m.aegisReporter.reportEvent(
                              "OPER_MATL_DELY_FETCH_ASSET_ERROR",
                              {
                                ext4:
                                  e.t0 instanceof Error
                                    ? e.t0.stack || e.t0.message
                                    : JSON.stringify(e.t0 || {}),
                              }
                            );
                        case 8:
                          !(function (e) {
                            try {
                              se.trigger(e);
                            } catch (e) {
                              m.aegisReporter.reportEvent(
                                "LOTTERY_DIALOG_TRIGGER_ASSET_ERROR",
                                {
                                  ext4:
                                    e instanceof Error
                                      ? e.stack || e.message
                                      : JSON.stringify(e || {}),
                                }
                              );
                            }
                          })(n),
                            bo();
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                );
              })
            )),
            function (e) {
              return Ne.apply(this, arguments);
            }),
        }),
        Ao = h.usePositionDrawerStore(),
        Eo = t.storeToRefs(Ao).curUniKey,
        To = q.useSwiperHeight({
          asset: Ye,
          tabBar: So,
          assetFetchData: Po,
          assetV2Control: Ge,
          bandAssistMap: Ro,
          curUniKey: Eo,
          doneOrderListExpanded: Re,
          assetTabMaxShow: Se,
        }),
        xo = H.useDelistedInfo({ asset: Ye, assetFetchData: Po }),
        _o = xo.isShowDelistedDetailPopup,
        Oo = xo.isShowSilentDelistedPopup,
        Bo = xo.delistedInfo,
        jo = xo.silentDelistedInfo,
        Mo = xo.onShowDelistedInfo,
        Lo = xo.onDisplayDelistedInfo,
        qo = xo.showDelistedItemInfo,
        Ho = xo.handleContactBroker,
        Fo = xo.handleHideDelistedDetailPopup,
        No = xo.handleHideSilentDelistedItem,
        Uo = xo.handleHideSilentDelistedDetailPopup;
      function zo() {
        Po.fetchCondList();
      }
      t.watch(
        function () {
          return So.currentTab.value;
        },
        function (e) {
          e === d.TAB.CONDITION && zo();
        }
      );
      var $o = E.useNewStockEntryTip().newStockOnClick;
      function Go() {
        var e = t.index.getStorageSync(g.ASSET_BACK_BUTTON);
        e && ((ke.value = !0), (Ze = e));
      }
      function Ko() {
        t.index.removeStorageSync(g.ASSET_BACK_BUTTON), (ke.value = !1);
      }
      function Qo() {
        setTimeout(function () {
          V.$refs["js-wrap"] && (V.$refs["js-wrap"].style.opacity = "");
        });
      }
      function Wo(e) {
        ne &&
          (null == V ? void 0 : V.$emit) &&
          e &&
          !re.includes(e) &&
          (re.push(e),
          V.$emit("reportTime", {
            event: "".concat(e).concat(Le ? "-new" : ""),
            dealerCode: $.brokerConfig.base.code,
          }));
      }
      t.onMounted(
        n(
          o().mark(function e() {
            var n, i, r, s;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    Wo("mounted"),
                      (function () {
                        try {
                          if ("10100" !== String($.brokerConfig.base.code))
                            return;
                          var e = ge("grey_config");
                          m.aegisReporter.reportEvent("GREY-CONFIG", {
                            ext3: JSON.stringify(e),
                          });
                        } catch (e) {}
                      })(),
                      (null !=
                        (r = t.index.getStorageSync(
                          g.ASSET_ORDER_LIST_EXPANDED
                        )) &&
                        "" !== r) ||
                        (r = !0),
                      (Re.value = r),
                      ((null == window
                        ? void 0
                        : window.__POWERED_BY_WUJIE__) &&
                        0 ===
                          document.documentElement.getBoundingClientRect()
                            .width) ||
                        ne ||
                        (Po.fetchData({ firstReq: !0, reload: !1 }),
                        Y || setTimeout(Qo, 1e3)),
                      Go(),
                      hn(),
                      (_e.value =
                        "1" ===
                        (null == (i = null == (n = V.$route) ? void 0 : n.query)
                          ? void 0
                          : i.showgznhgbar)),
                      (s = t.index.createSelectorQuery().in(V))
                        .select(".swiper")
                        .boundingClientRect(function (e) {
                          Ie.value = (null == e ? void 0 : e.top) || 300;
                        })
                        .exec(),
                      s
                        .select(".asset-index-wrap")
                        .boundingClientRect(function (e) {
                          Pe.value = (null == e ? void 0 : e.top) || 0;
                        })
                        .exec();
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )
      ),
        t.provide("undoneOrderList", Ye.undoneOrderList),
        t.provide("doneOrderList", Ye.doneOrderList),
        t.provide("revokingItemsMaps", Ye.revokingItemsMaps),
        t.provide("newPriceMap", Ye.newPriceMap),
        t.provide("noTriggerConditionList", Po.noTriggerConditions),
        t.provide("numCondition", Ye.numCondition),
        t.provide("onStockListSort", Ye.onStockListSort),
        t.provide("combinedOrderList", Ye.combinedOrderList),
        t.provide("embeddedMode", Ee),
        t.provide("operateData", Po.operateData),
        t.provide("assetV2Control", Ge),
        t.provide(
          "isDifferenceInHoldAndCanuse",
          Ye.isDifferenceInHoldAndCanuse
        ),
        t.provide("condStatusType", Po.condStatusType),
        t.provide("setCondStatusType", Po.setCondStatusType),
        t.provide("condFetchStatus", Po.condFetchStatus),
        t.provide("fetchCondList", zo),
        t.provide(
          "isAssetCondTabActive",
          t.computed(function () {
            return 2 === So.currentTabIndex.value;
          })
        );
      var Vo = g.ASSET_INDEX_BULLETIN,
        Zo = t.computed(function () {
          var e;
          return (
            "1" ===
            (null == (e = null == V ? void 0 : V.bulletinConfig)
              ? void 0
              : e.status)
          );
        }),
        Xo = t.ref(!1),
        Yo = i.useBulletin({
          expire: 1,
          id: Vo,
          needPrefix: !1,
          bizShowBulletin: Zo,
        }),
        Jo = Yo.hideBulletin,
        en = Yo.closeBulletin;
      function on() {
        var e,
          o = (null == (e = I.getCurrentRoute()) ? void 0 : e.route) || "";
        return (
          !o || "pages/index/trade" === o || o.indexOf("pages/asset/index") > -1
        );
      }
      function nn() {
        C.updateExpectScheme([]),
          Ye.QUOTATION_CACHE.clear(),
          Y
            ? C.disconnect()
            : ne && !te
            ? ["10100", "19900", "19000", "10500"].includes(
                String($.brokerConfig.base.code)
              )
              ? C.unsubscribe()
              : C.disconnect()
            : C.unsubscribe();
      }
      function tn() {
        (go.value = !0), on() && Wo("home_show_finish");
      }
      function rn() {
        Ue.value ||
          ((Ue.value = !0),
          t.index.$on(x.NEED_TRADE_SESSION, tn),
          t.index.$on(x.PASSWORD_COMPLETE, Co));
      }
      function sn() {
        (Ue.value = !1),
          t.index.$off(x.NEED_TRADE_SESSION, tn),
          t.index.$off(x.PASSWORD_COMPLETE, Co);
      }
      t.onBeforeUnmount(function () {
        sn(), (t.index.getPluginContext = null);
      }),
        rn();
      var an = k.useGovBondsInfo(),
        un = an.setEntryAdvClass,
        dn = an.handleEntryAdvClick,
        ln = U.useAssetEntryClick({
          assetFetchData: Po,
          handleEntryAdvClick: dn,
        }),
        cn = ln.onEntryClick,
        pn = ln.showEtfRaceRed,
        fn = ln.showShadowaccountRed,
        hn = ln.refreshEtfRaceRed,
        mn = (ln.refreshEntryRedDotOnAppear, t.ref(!1)),
        gn = t.ref(""),
        vn = t.ref(null);
      ne && Po.fetchData({ firstReq: !0, reload: !1 }).catch(function (e) {});
      var Cn,
        Sn,
        wn = t.ref(!!$.brokerConfig.trade.showFundInfoMoreDesc),
        Dn = t.storeToRefs(T.useNavbarStore()).shownav;
      return e(
        e(
          e(
            e(
              {
                popupQueue: fe,
                popupCurrentId: he,
                POPUP_ID: pe,
                isSupportOpacity: xe,
                isMpPlugin: ne,
                isPCWeixin: ie,
                isZxgXcx: te,
                isMiniProgram: ee,
                isConditionEntry: Ce,
                isZxg: Y,
                hidefund: go,
                swiperHeight: To,
                customerService: Xe,
                toggleHideFund: vo,
                onTabClick: function (e) {
                  (Po.REFRESH_COUNT = 1), So.handleChangeTab(e);
                },
                onChange: function (e) {
                  var o = e.detail.current;
                  So.handleChangeTab(o), Po.fetchWebsocket();
                },
                onEntryClick: cn,
              },
              Ye
            ),
            So
          ),
          Po
        ),
        {},
        {
          onDoneOrderListExpanded: function (e) {
            (Re.value = e),
              V.$stat.click("trade.asset.expanded." + (e ? "open" : "close"));
          },
          showBackButton: ke,
          onClickBackButton: function () {
            V.$stat.click("trade.asset.backbutton"),
              Ze &&
                (V.$router.push({
                  name: "TradeStock",
                  query: e(
                    {},
                    Ze.code
                      ? {
                          market: Ze.market,
                          code: Ze.code,
                          holder: Ze.holder,
                          price: Ze.price,
                          amount: Ze.amount,
                          minChart: Ze.minChart,
                        }
                      : {}
                  ),
                }),
                Ko());
          },
          onCloseBackButton: Ko,
          shouldShowTradeBackButton: Go,
          onPullingDown:
            ((Sn = n(
              o().mark(function e() {
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Ye.checkAndReportStaleRevokingItems(
                              "asset_pulldown_refresh"
                            ),
                            nn(),
                            (e.prev = 1),
                            (e.next = 4),
                            Po.fetchData({ firstReq: !0, reload: !0 })
                          );
                        case 4:
                          e.next = 8;
                          break;
                        case 6:
                          (e.prev = 6), (e.t0 = e.catch(1));
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 6]]
                );
              })
            )),
            function () {
              return Sn.apply(this, arguments);
            }),
          handleZXGAppSwipeActionChange: function (e) {
            V.$sdk.handleJSTouchEventFirst(e).catch(t.noop);
          },
          checkShareDialogHidden: function () {},
          zxgSupport: Ae,
          wujieEnv: qe,
          assetBulletin: Vo,
          isShowCleanBulletin: Xo,
          hideBulletin: Jo,
          closeBulletin: en,
          showBulletinContent: function () {
            var e;
            if (
              "1" !==
              (null == (e = null == V ? void 0 : V.bulletinConfig)
                ? void 0
                : e.type)
            ) {
              var o = '<p style="text-align:left;">'.concat(
                V.bulletinConfig.content,
                "</p>"
              );
              r.Dialog({
                title: V.bulletinConfig.title,
                message: o,
                messageType: "html",
                confirmButtonText: "我已知晓",
              });
            } else Xo.value = !0;
          },
          holdRiskList: ho,
          showRoboAdvisor: Ve,
          showCloseBackIcon: He,
          handleShow: function () {
            var e, o;
            if (
              (Ye.checkAndReportStaleRevokingItems("asset_onshow"),
              rn(),
              on() &&
                (t.index.getPluginContext = function () {
                  return V;
                }),
              t.index.xxx)
            ) {
              var n = { trade: 1, condition: 2 }[t.index.xxx] || 0;
              (null == (o = null == (e = V.$refs) ? void 0 : e.conditionList)
                ? void 0
                : o.handleStatusChange) &&
                V.$refs.conditionList.handleStatusChange(v.CondStatus.WAIT),
                So.handleChangeTab(n),
                (t.index.xxx = null);
            }
            Oe.value = "dark" === z.getTheme() ? "white" : "black";
          },
          handleHide: function () {
            D.hidePassword({ isEmitHideCallback: !0 }),
              !Y && Ko(),
              nn(),
              clearTimeout(Fe),
              Po.clearRefreshTimer(),
              sn();
          },
          refresherStyle: Oe,
          showEtfRaceRed: pn,
          userinfo: de,
          simpleMode: Z,
          showShadowaccountRed: fn,
          embeddedMode: Ee,
          onQuickEntryChange: function (e) {
            un(e, k.RP_CACHE_TYPE.ASSET);
          },
          onCancelOrder: function () {
            Fe = setTimeout(function () {
              C.connector.source === C.SOURCE.AJAX &&
                Po.fetchData({ firstReq: !0, reload: !0 });
            }, 1e3);
          },
          orderFailReasonType: gn,
          isOrderFailReasonShow: mn,
          currentFailedOrder: vn,
          onShowOrderFailReason: function (e, o) {
            (gn.value = e), (vn.value = o), (mn.value = !0);
          },
          reportPluginTime: Wo,
          isShowCondStrategy: we,
          handleCreateCond: function () {
            V.$stat.click("trade.condition.asset_create_cond_btn_click"), be();
          },
          goToCreateCond: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = e.orderType,
              n = e.citem;
            ye({ orderType: o, citem: n });
          },
          isOem: !1,
          isShowOperate: Te,
          brokerTel: $.brokerConfig.base.tel,
          redPoints: $e,
          onShowDelistedInfo: Mo,
          showDelistedItemInfo: qo,
          onDisplayDelistedInfo: Lo,
          handleContactBroker: Ho,
          handleHideDelistedDetailPopup: Fo,
          isShowDelistedDetailPopup: _o,
          isShowSilentDelistedPopup: Oo,
          delistedInfo: Bo,
          silentDelistedInfo: jo,
          handleHideSilentDelistedItem: No,
          handleHideSilentDelistedDetailPopup: Uo,
          assetV2Control: Ge,
          curUniKey: Eo,
          hasGgtRight: Ke,
          showFundInfoMoreDesc: wn,
          toFundInfoMoreDesc: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "other",
              o = {
                lite: Z.value ? "1" : "0",
                broker: $.brokerConfig.base.code,
                skin: p.isDarkTheme() ? "dark" : "light",
                tab: e,
              };
            V.$stat.click("trade.asset.cash_overlay_more_desc_click");
            var n = ne
              ? "https://wzq.tenpay.com/cgi-bin/login.fcgi?returl=".concat(
                  encodeURIComponent(
                    "/wzq/front/aics/#/views/indicatorDescription?".concat(
                      t.lib.stringify(o)
                    )
                  )
                )
              : "https://wzq.tenpay.com/wzq/front/aics/#/views/indicatorDescription?".concat(
                  t.lib.stringify(o)
                );
            Y ? V.$sdk.openUrlWithExtraWebview({ url: n }) : f.uniHref(n);
          },
          accountMode: le,
          accountSwitcherVisible: co,
          handleToggleAccount: po,
          changeAccountMode: fo,
          hasAddGlobalEvents: Ue,
          addGlobalEvents: rn,
          removeGlobalEvents: sn,
          conditionItem: De,
          fetchCondList: zo,
          platform: J,
          shownav: Dn,
          onJumpQuote: function (e) {
            ne &&
              (null == V ? void 0 : V.$emit) &&
              Ge.value &&
              V.$emit("jumpQuote", {
                type: _.stockDetailMarketMapWx(e.market),
                scode: e.code,
              });
          },
          canRenderDelayAssetInfo: Do,
          broker: $.brokerConfig,
          showTopHide: Qe,
          exitHide: function () {
            (Qe.value = !1), vo();
          },
          onScroll: We,
          assetHideTop: Pe,
          showGznhgBar: _e,
          showAssetComposition: eo,
          assetCompositionPopupTop: oo,
          compositionScrollHeight: no,
          onCloseAssetComposition: ao,
          onAssetAnalysis: uo,
          onShowAssetComposition: so,
          showAnalysisEntry: to,
          holdValWithBalance: ro,
          showBalExplain: io,
          FUND_SHOW_MODE: R.FUND_SHOW_MODE,
          milestoneDialogRef: Be,
          operateAdv: Me,
          operateAdvItgData: ko,
          handleOperateAdvClose: Io,
          lotteryItems: se.items,
          getLotteryKingKongSelector: function () {
            return je
              ? ne
                ? ".quick-entry >>> .entry-item-".concat(je, " .icon")
                : ".entry-item-".concat(je, " .icon")
              : "";
          },
          onLotteryExposed: function () {
            se.markShown();
          },
          onLotteryClose:
            ((Cn = n(
              o().mark(function e(n) {
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), se.closeDialog(n || "know");
                      case 2:
                        me();
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return Cn.apply(this, arguments);
            }),
          onLotteryGotoList: function (e) {
            !(function (e) {
              var o,
                n,
                t,
                i =
                  e ||
                  (null == (n = null == (o = se.items.value) ? void 0 : o[0])
                    ? void 0
                    : n.date) ||
                  "";
              null == (t = null == V ? void 0 : V.$router) ||
                t.push({
                  name: "NewStockList",
                  query: i ? { purchaseDate: i } : {},
                });
            })(e),
              $o();
          },
          checkAndReportStaleRevokingItems: Ye.checkAndReportStaleRevokingItems,
        }
      );
    },
  };
Array ||
  (
    t.resolveComponent("BulletinBar") +
    t.resolveComponent("HoldKzzRiskList") +
    t.resolveComponent("AssetDataInfoNew") +
    t.resolveComponent("QuickEntry") +
    t.resolveComponent("OperateAdv") +
    t.resolveComponent("Tabbar") +
    t.resolveComponent("PositionsListNew") +
    t.resolveComponent("OrdersList") +
    t.resolveComponent("ConditionList") +
    t.resolveComponent("index-pull-refresh") +
    t.resolveComponent("server-broker") +
    t.resolveComponent("snac-bar") +
    t.resolveComponent("BrokerLogo") +
    t.resolveComponent("MpDialog") +
    t.resolveComponent("RegisterRiskPopup") +
    t.resolveComponent("KzzRiskDialog") +
    t.resolveComponent("RiskTestReminder") +
    t.resolveComponent("OrderFailDialog") +
    t.resolveComponent("ConditionStrategy") +
    t.resolveComponent("TransferProgress") +
    t.resolveComponent("action-sheet") +
    t.resolveComponent("Overlay") +
    t.resolveComponent("MoneyTraceRiskPopup") +
    t.resolveComponent("MilestoneDialog") +
    t.resolveComponent("LotteryRewardDialog")
  )(),
  Math ||
    (
      function () {
        return "../../components/BrokerLogo/BrokerLogo.js";
      } +
      function () {
        return "../../components/KzzRiskDialog/KzzRiskDialog.js";
      } +
      function () {
        return "../../components/TransferProgress/TransferProgress.js";
      }
    )();
var K = t._export_sfc(G, [
  [
    "render",
    function (e, o, n, i, r, s) {
      return t.e(
        { a: !i.hideBulletin },
        i.hideBulletin
          ? {}
          : {
              b: t.t(e.bulletinConfig.title),
              c: t.o(i.closeBulletin),
              d: t.o(i.showBulletinContent),
              e: t.p({
                "bulletin-id": i.assetBulletin,
                "click-stop": !1,
                "show-right-icon": !0,
                animate: !1,
              }),
            },
        { f: !i.simpleMode },
        i.simpleMode
          ? {}
          : t.e(
              {
                g:
                  !i.hideBulletin &&
                  ((i.hidefund && !i.showRoboAdvisor) ||
                    i.holdRiskList.length > 0),
              },
              (!i.hideBulletin &&
                ((i.hidefund && !i.showRoboAdvisor) || i.holdRiskList.length),
              {}),
              { h: i.hidefund && !i.showRoboAdvisor && !i.assetV2Control },
              !i.hidefund || i.showRoboAdvisor || i.assetV2Control
                ? {}
                : {
                    i: t.o(function () {
                      return (
                        i.toggleHideFund && i.toggleHideFund.apply(i, arguments)
                      );
                    }),
                  },
              {
                j:
                  i.hidefund && !i.showRoboAdvisor && i.holdRiskList.length > 0,
              },
              (i.hidefund && !i.showRoboAdvisor && i.holdRiskList.length, {}),
              { k: i.hidefund && i.showRoboAdvisor && !i.assetV2Control },
              i.hidefund && i.showRoboAdvisor && !i.assetV2Control
                ? {
                    l: t.o(function () {
                      return (
                        i.toggleHideFund && i.toggleHideFund.apply(i, arguments)
                      );
                    }),
                  }
                : {}
            ),
        {
          m: t.sr("assetDataInfo", "72035793-3,72035793-0"),
          n: t.o(i.handleToggleAccount),
          o: t.p({ fundsinfo: e.data.fundsinfo }),
          p: t.o(i.onEntryClick),
          q: t.o(i.onQuickEntryChange),
          r: t.p({
            loading: e.loading,
            "red-points": i.redPoints,
            "has-newstock": e.hasNewStock,
            showEtfRaceRed: i.showEtfRaceRed,
            "show-shadowaccount-red": i.showShadowaccountRed,
          }),
          s: e.data.isFetchedData,
        },
        e.data.isFetchedData
          ? t.e(
              { t: i.isShowOperate },
              i.isShowOperate
                ? {
                    v: t.o(i.handleOperateAdvClose),
                    w: t.p({ "adv-data": i.operateAdvItgData }),
                  }
                : {}
            )
          : {},
        {
          x: t.o(function (o) {
            return (e.currentTab = o);
          }),
          y: t.p({
            value: e.currentTab,
            border: !i.simpleMode,
            "simple-mode": i.simpleMode,
            data: e.tabs,
            "show-slider": !0,
          }),
          z: t.n(i.simpleMode ? "" : "border--bottom"),
          A: t.n(i.isPCWeixin && i.isZxgXcx ? "large-screen-tabbar" : ""),
          B: t.o(i.onDisplayDelistedInfo),
          C: t.o(i.onShowDelistedInfo),
          D: t.o(i.onJumpQuote),
          E: t.p({
            data: e.data,
            "is-active": 0 === e.currentTabIndex,
            "is-asset-index": !0,
          }),
          F: 1 === e.currentTabIndex || i.canRenderDelayAssetInfo,
        },
        1 === e.currentTabIndex || i.canRenderDelayAssetInfo
          ? {
              G: t.o(i.onShowOrderFailReason),
              H: t.o(i.onCancelOrder),
              I: t.o(i.onDoneOrderListExpanded),
              J: t.p({ orders: e.data.history }),
            }
          : {},
        { K: i.isConditionEntry },
        i.isConditionEntry
          ? t.e(
              { L: 2 === e.currentTabIndex || i.canRenderDelayAssetInfo },
              2 === e.currentTabIndex || i.canRenderDelayAssetInfo
                ? {
                    M: t.sr("conditionList", "72035793-9,72035793-0"),
                    N: t.o(i.handleCreateCond),
                    O: t.o(i.fetchCondList),
                    P: t.p({ showButton: !0 }),
                  }
                : {}
            )
          : {},
        {
          Q: i.swiperHeight,
          R: e.currentTabIndex,
          S: t.o(function () {
            return i.onChange && i.onChange.apply(i, arguments);
          }),
          T: t.o(function (e) {
            return i.handleZXGAppSwipeActionChange(!0);
          }),
          U: t.o(function (e) {
            return i.handleZXGAppSwipeActionChange(!1);
          }),
          V: i.shownav,
        },
        (i.shownav, {}),
        { W: i.isMpPlugin },
        i.isMpPlugin
          ? {
              X: t.n(
                "devtools" === i.platform
                  ? "placeholder-block-mp"
                  : "placeholder-block-mpnav"
              ),
            }
          : {},
        {
          Y: t.sr("indexPullRefresh", "72035793-0"),
          Z: t.o(i.onPullingDown),
          aa: t.o(i.onScroll),
          ab: t.p({ "refresher-style": i.refresherStyle }),
          ac: t.p({
            fixedv2: !0,
            "calc-nav": i.shownav,
            "calc-safe-area": !i.isMpPlugin,
          }),
          ad: i.canRenderDelayAssetInfo && i.showGznhgBar,
        },
        (i.canRenderDelayAssetInfo && i.showGznhgBar, {}),
        { ae: i.showBackButton },
        i.showBackButton
          ? t.e(
              { af: i.showCloseBackIcon },
              i.showCloseBackIcon
                ? {
                    ag: t.o(function () {
                      return (
                        i.onCloseBackButton &&
                        i.onCloseBackButton.apply(i, arguments)
                      );
                    }),
                  }
                : {},
              {
                ah: t.n(i.showCloseBackIcon ? "" : "back-button-no-close"),
                ai: t.o(function () {
                  return (
                    i.onClickBackButton &&
                    i.onClickBackButton.apply(i, arguments)
                  );
                }),
              }
            )
          : {},
        { aj: i.hidefund && i.showTopHide },
        i.hidefund && i.showTopHide
          ? {
              ak: t.t(i.broker.base.name),
              al: t.o(function () {
                return i.exitHide && i.exitHide.apply(i, arguments);
              }),
              am: "".concat(i.assetHideTop, "px"),
            }
          : {},
        {
          an: t.p({ id: "mp-dialog" }),
          ao:
            i.popupCurrentId === i.POPUP_ID.REGISTER_RISK &&
            e.data.isFetchedData &&
            i.canRenderDelayAssetInfo,
        },
        i.popupCurrentId === i.POPUP_ID.REGISTER_RISK &&
          e.data.isFetchedData &&
          i.canRenderDelayAssetInfo
          ? {
              ap: t.o(function (e) {
                return i.popupQueue.next(i.POPUP_ID.REGISTER_RISK);
              }),
              aq: t.o(function (e) {
                return i.popupQueue.skip(i.POPUP_ID.REGISTER_RISK);
              }),
              ar: t.p({ type: "asset" }),
            }
          : {},
        {
          as: t.sr("kzzRiskDialog", "72035793-15"),
          at: t.p({ action: "hold" }),
          av:
            i.popupCurrentId === i.POPUP_ID.RISK_TEST &&
            e.data.isFetchedData &&
            i.canRenderDelayAssetInfo,
        },
        i.popupCurrentId === i.POPUP_ID.RISK_TEST &&
          e.data.isFetchedData &&
          i.canRenderDelayAssetInfo
          ? {
              aw: t.o(function (e) {
                return i.popupQueue.next(i.POPUP_ID.RISK_TEST);
              }),
              ax: t.o(function (e) {
                return i.popupQueue.skip(i.POPUP_ID.RISK_TEST);
              }),
            }
          : {},
        { ay: i.isOrderFailReasonShow },
        i.isOrderFailReasonShow
          ? {
              az: t.o(function (e) {
                return (i.isOrderFailReasonShow = !1);
              }),
              aA: t.o(function (e) {
                return (i.isOrderFailReasonShow = e);
              }),
              aB: t.p({
                value: i.isOrderFailReasonShow,
                type: i.orderFailReasonType,
                order: i.currentFailedOrder,
              }),
            }
          : {},
        { aC: i.isShowCondStrategy },
        i.isShowCondStrategy
          ? {
              aD: t.o(function (e) {
                return (i.isShowCondStrategy = !1);
              }),
              aE: t.o(i.goToCreateCond),
              aF: t.o(function (e) {
                return (i.isShowCondStrategy = e);
              }),
              aG: t.o(function (e) {
                return (i.isShowCondStrategy = !1);
              }),
              aH: t.p({
                value: i.isShowCondStrategy,
                "need-navbar-height": !(i.isMiniProgram || i.isZxg),
                scene: "assetIndex",
                "condition-item": i.conditionItem,
              }),
            }
          : {},
        { aI: i.isShowDelistedDetailPopup },
        i.isShowDelistedDetailPopup
          ? t.e(
              {
                aJ: t.p({
                  scene: "delisted",
                  "current-progress": 1,
                  "state-list": i.delistedInfo.stateList || [],
                  "show-progress-text": "2" !== i.delistedInfo.status,
                }),
                aK: t.t(i.delistedInfo.delist_date),
                aL: t.t(i.delistedInfo.feMarket),
                aM: "2" !== i.delistedInfo.status,
              },
              "2" !== i.delistedInfo.status
                ? {}
                : { aN: t.t(i.delistedInfo.neeq_list_date) },
              {
                aO: t.t(i.brokerTel),
                aP: t.o(function () {
                  return (
                    i.showDelistedItemInfo &&
                    i.showDelistedItemInfo.apply(i, arguments)
                  );
                }),
                aQ: t.o(function () {
                  return (
                    i.handleContactBroker &&
                    i.handleContactBroker.apply(i, arguments)
                  );
                }),
                aR: i.isMpPlugin || i.isZxg ? 1 : "",
                aS: t.o(i.handleHideDelistedDetailPopup),
                aT: t.o(i.handleHideDelistedDetailPopup),
                aU: t.o(function (e) {
                  return (i.isShowDelistedDetailPopup = e);
                }),
                aV: t.p({
                  value: i.isShowDelistedDetailPopup,
                  title: i.delistedInfo.title,
                  "picker-style": !0,
                  "confirm-button": !1,
                  "show-title-border-bottom": !1,
                }),
              }
            )
          : {},
        { aW: i.isShowSilentDelistedPopup },
        i.isShowSilentDelistedPopup
          ? {
              aX: t.o(function () {
                return (
                  i.handleHideSilentDelistedItem &&
                  i.handleHideSilentDelistedItem.apply(i, arguments)
                );
              }),
              aY: t.o(function () {
                return (
                  i.handleHideSilentDelistedDetailPopup &&
                  i.handleHideSilentDelistedDetailPopup.apply(i, arguments)
                );
              }),
              aZ: i.isMpPlugin || i.isZxg ? 1 : "",
              ba: t.o(i.handleHideSilentDelistedDetailPopup),
              bb: t.o(function (e) {
                return (i.isShowSilentDelistedPopup = e);
              }),
              bc: t.p({
                value: i.isShowSilentDelistedPopup,
                "picker-style": !0,
                title: i.silentDelistedInfo.title,
                "hide-close-icon": !0,
                "confirm-button": !1,
              }),
            }
          : {},
        { bd: i.isShowCleanBulletin },
        i.isShowCleanBulletin
          ? {
              be: i.isMpPlugin || i.isZxg ? 1 : "",
              bf: t.o(function (e) {
                return (i.isShowCleanBulletin = !1);
              }),
              bg: t.o(function (e) {
                return (i.isShowCleanBulletin = e);
              }),
              bh: t.p({
                value: i.isShowCleanBulletin,
                title: "日终清算提醒",
                "picker-style": !0,
                "confirm-button": !1,
                "show-title-border-bottom": !1,
              }),
            }
          : {},
        { bi: i.showAssetComposition },
        i.showAssetComposition
          ? t.e(
              { bj: i.showFundInfoMoreDesc },
              i.showFundInfoMoreDesc
                ? {
                    bk: t.o(function (e) {
                      return i.toFundInfoMoreDesc("assets");
                    }),
                  }
                : {},
              { bl: i.showAnalysisEntry },
              i.showAnalysisEntry
                ? {
                    bm: t.o(function () {
                      return (
                        i.onAssetAnalysis &&
                        i.onAssetAnalysis.apply(i, arguments)
                      );
                    }),
                  }
                : {},
              {
                bn: t.t(
                  i.hidefund
                    ? "***"
                    : e.$filters.money.formatNoUnit(
                        e.$filters.defaults(i.holdValWithBalance, "--")
                      )
                ),
                bo: t.t(
                  i.hidefund
                    ? "***"
                    : e.$filters.money.formatNoUnit(
                        e.$filters.defaults(e.data.fundsinfo.hold_val, "--")
                      )
                ),
                bp: t.t(
                  i.hidefund
                    ? "***"
                    : e.$filters.money.formatNoUnit(
                        e.$filters.defaults(
                          i.showBalExplain ? 0 : e.data.fundsinfo.bal_val,
                          "--"
                        )
                      )
                ),
                bq: t.t(
                  i.hidefund
                    ? "***"
                    : e.$filters.money.formatNoUnit(
                        e.$filters.defaults(e.data.fundsinfo.can_trade, "--")
                      )
                ),
                br: i.hasGgtRight,
              },
              i.hasGgtRight
                ? {
                    bs: t.t(
                      i.hidefund
                        ? "***"
                        : e.$filters.money.formatNoUnit(
                            e.$filters.defaults(
                              e.data.fundsinfo.hs_can_trade,
                              "--"
                            )
                          )
                    ),
                    bt: t.t(
                      i.hidefund
                        ? "***"
                        : e.$filters.money.formatNoUnit(
                            e.$filters.defaults(
                              e.data.fundsinfo.ggt_can_trade,
                              "--"
                            )
                          )
                    ),
                  }
                : {},
              {
                bv: t.t(
                  i.hidefund
                    ? "***"
                    : e.$filters.money.formatNoUnit(
                        e.$filters.defaults(e.data.fundsinfo.can_draw, "--")
                      )
                ),
                bw: t.t(
                  i.hidefund
                    ? "***"
                    : e.$filters.money.formatNoUnit(
                        e.$filters.defaults(e.data.fundsinfo.freeze_money, "--")
                      )
                ),
                bx: [i.FUND_SHOW_MODE.add, i.FUND_SHOW_MODE.row].includes(
                  e.data.fundsinfo.show_mode
                ),
              },
              [i.FUND_SHOW_MODE.add, i.FUND_SHOW_MODE.row].includes(
                e.data.fundsinfo.show_mode
              )
                ? {
                    by: t.t(
                      i.hidefund
                        ? "***"
                        : e.$filters.money.formatNoUnit(
                            e.$filters.defaults(e.data.fundsinfo.unknown, "--")
                          )
                    ),
                  }
                : {},
              {
                bz: t.s(
                  i.compositionScrollHeight
                    ? { maxHeight: i.compositionScrollHeight }
                    : {}
                ),
                bA: i.assetCompositionPopupTop,
                bB: t.o(i.onCloseAssetComposition),
                bC: t.p({
                  show: i.showAssetComposition,
                  "custom-class": "mp-overlay-no-touch",
                }),
              }
            )
          : {},
        {
          bD:
            i.popupCurrentId === i.POPUP_ID.MONEY_TRACE &&
            i.canRenderDelayAssetInfo,
        },
        i.popupCurrentId === i.POPUP_ID.MONEY_TRACE && i.canRenderDelayAssetInfo
          ? {
              bE: t.o(function (e) {
                return i.popupQueue.next(i.POPUP_ID.MONEY_TRACE);
              }),
              bF: t.o(function (e) {
                return i.popupQueue.skip(i.POPUP_ID.MONEY_TRACE);
              }),
            }
          : {},
        {
          bG: t.sr("milestoneDialogRef", "72035793-25"),
          bH: t.o(function (e) {
            return i.popupQueue.next(i.POPUP_ID.MILESTONE);
          }),
          bI: t.o(function (e) {
            return i.popupQueue.skip(i.POPUP_ID.MILESTONE);
          }),
          bJ: t.p({
            disabled: i.isOem,
            "popup-active": i.popupCurrentId === i.POPUP_ID.MILESTONE,
            "operate-adv-map": i.operateAdv.advMap,
          }),
          bK: i.popupCurrentId === i.POPUP_ID.LOTTERY_REWARD,
        },
        i.popupCurrentId === i.POPUP_ID.LOTTERY_REWARD
          ? {
              bL: t.o(i.onLotteryExposed),
              bM: t.o(i.onLotteryClose),
              bN: t.o(i.onLotteryGotoList),
              bO: t.p({
                items: i.lotteryItems,
                scene: "asset",
                "king-kong-selector": i.getLotteryKingKongSelector(),
              }),
            }
          : {},
        {
          bP: t.n(i.wujieEnv ? "asset-index" : ""),
          bQ: t.n(i.simpleMode ? "asset-index__simple-mode" : ""),
          bR: t.s(i.isSupportOpacity ? { opacity: "0.99" } : {}),
        }
      );
    },
  ],
  ["__scopeId", "data-v-72035793"],
]);
wx.createComponent(K);
