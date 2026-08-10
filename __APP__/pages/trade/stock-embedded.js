require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var o = require("../../stock.js"),
  t = require("../../utils/getPlatform.js"),
  n = require("../../common/vendor.js"),
  r = t.getPlatform().isMpPlugin,
  i = e(
    {
      name: "TradeStock",
      sharedComponents: !0,
      components: {
        TradeForm: function () {
          return "./components/TradeFormUni.js";
        },
        MpDialog: function () {
          return "../../common/components/Dialog/Dialog.js";
        },
        TradeConfirmDialog: function () {
          return "./components/TradeConfirmDialogEmbedded.js";
        },
        BulletinBar: function () {
          return "../../components/BulletinBar/index.js";
        },
        Tabbar: function () {
          return "../../common/components/Tabbar/index.js";
        },
        PositionsList: function () {
          return "../../bizs/asset/PositionsList.js";
        },
        OrdersList: function () {
          return "../../bizs/asset/OrdersList.js";
        },
        OrderFailDialog: function () {
          return "../../bizs/asset/OrderFailDialog.js";
        },
        TradeResult4Mp: function () {
          return "./components/TradeResult4Mp.js";
        },
        TradeResult: function () {
          return "./components/TradeResult.js";
        },
        Notify: function () {
          return "../../common/components/Notify/Notify.js";
        },
        BubbleTip: function () {
          return "../../components/BubbleTip/BubbleTip.js";
        },
        RiskTestReminder: function () {
          return "../../components/RiskTestReminder/index.js";
        },
        TradeToolOption: function () {
          return "./components/TradeToolOption.js";
        },
        NetworkDetect: function () {
          return "../../components/NetworkDetect/NetworkDetect.js";
        },
        SignPrivacyProtocol: function () {
          return "../../components/PrivacyProtocol/PrivacyProtocol.js";
        },
        MoneyTraceRiskPopup: function () {
          return "../../bizs/asset/MoneyTraceRiskPopup.js";
        },
      },
      props: {
        embedded: { type: Boolean, default: !1 },
        embedded_stock: { type: String, default: "" },
        embedded_market: { type: String, default: "" },
        embedded_name: { type: String, default: "" },
        embedded_entrust_type: { type: String, default: "" },
        embedded_visible: { type: Boolean, default: !1 },
        df_dqj: { type: String, default: "" },
        embedded_price: {
          type: Object,
          default: function () {
            return {};
          },
        },
        embedded_stock_type: { type: String, default: "" },
        embeddedTradeMode: { type: String, default: "STANDARD" },
      },
    },
    o.createStock({ initPlugin: r })
  );
Array ||
  (
    n.resolveComponent("BrokerLogo") +
    n.resolveComponent("BulletinBar") +
    n.resolveComponent("Tabbar") +
    n.resolveComponent("bubble-tip") +
    n.resolveComponent("TradeToolOption") +
    n.resolveComponent("trade-form") +
    n.resolveComponent("OrdersList") +
    n.resolveComponent("PositionsList") +
    n.resolveComponent("TradeConfirmDialog") +
    n.resolveComponent("TradeResult4Mp") +
    n.resolveComponent("TradeResult") +
    n.resolveComponent("OrderFailDialog") +
    n.resolveComponent("Notify") +
    n.resolveComponent("MpDialog") +
    n.resolveComponent("SignPrivacyProtocol") +
    n.resolveComponent("RiskTestReminder") +
    n.resolveComponent("KzzRiskDialog") +
    n.resolveComponent("Password") +
    n.resolveComponent("NetworkDetect") +
    n.resolveComponent("MoneyTraceRiskPopup")
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
        return "../../components/Password/Password.js";
      } +
      function () {
        return "../../components/NetworkDetect/NetworkDetect.js";
      }
    )();
var s = n._export_sfc(i, [
  [
    "render",
    function (e, o, t, r, i, s) {
      return n.e(
        { a: !(e.isShowConfirmDialog || e.tradeResultVisible) },
        e.isShowConfirmDialog || e.tradeResultVisible
          ? e.tradeResultVisible
            ? {}
            : {
                d: n.o(function () {
                  return (
                    e.onClickHeaderBack &&
                    e.onClickHeaderBack.apply(e, arguments)
                  );
                }),
              }
          : {
              b: n.o(function () {
                return (
                  e.goToSafeSetting && e.goToSafeSetting.apply(e, arguments)
                );
              }),
            },
        {
          c: !e.tradeResultVisible,
          e: n.t(e.broker.base.name),
          f: n.t(e.fundaccount),
          g:
            !e.isShowConfirmDialog &&
            !e.tradeResultVisible &&
            e.isHalfRefreshIcon &&
            e.isShowRefresh,
        },
        !e.isShowConfirmDialog &&
          !e.tradeResultVisible &&
          e.isHalfRefreshIcon &&
          e.isShowRefresh
          ? n.e(
              { h: e.loading },
              e.loading
                ? {}
                : {
                    i: n.o(function () {
                      return (
                        e.onForceRefresh && e.onForceRefresh.apply(e, arguments)
                      );
                    }),
                  }
            )
          : {},
        { j: !e.isZxg },
        e.isZxg
          ? {}
          : {
              k: n.o(function () {
                return (
                  e.closeTradeStock && e.closeTradeStock.apply(e, arguments)
                );
              }),
            },
        { l: !(e.isShowConfirmDialog || e.tradeResultVisible) },
        e.isShowConfirmDialog || e.tradeResultVisible
          ? {}
          : n.e(
              { m: e.newUserGuideBulltin || !e.hideBulletin },
              e.newUserGuideBulltin || !e.hideBulletin
                ? n.e(
                    { n: e.newUserGuideBulltin },
                    e.newUserGuideBulltin
                      ? {
                          o: n.t(e.newUserGuideBulltin),
                          p: n.o(e.closeNewUserGuideBulletin),
                          q: n.o(function (o) {
                            return e.showBulletinContent("newUser");
                          }),
                          r: n.p({
                            "bulletin-id": e.TRADE_STOCK_NEW_USER_GUIDE,
                            "click-stop": !1,
                            "show-right-icon": !0,
                            animate: !1,
                            "show-radius": !0,
                            "close-text": "关闭",
                          }),
                        }
                      : e.hideBulletin
                      ? {}
                      : {
                          t: n.t(e.tradeBulletinConfig.title),
                          v: n.o(e.closeBulletin),
                          w: n.o(function (o) {
                            return e.showBulletinContent("trade");
                          }),
                          x: n.p({
                            "bulletin-id": e.tradeBulletin,
                            "click-stop": !1,
                            "show-right-icon": !0,
                            animate: !1,
                            "show-radius": !0,
                            "close-text": "关闭",
                          }),
                        },
                    { s: !e.hideBulletin }
                  )
                : {},
              {
                y: n.o(function (o) {
                  return (e.currentTab = o);
                }),
                z: n.o(e.onTabClick),
                A: n.o(e.onClickDropDown),
                B: n.p({
                  value: e.currentTab,
                  "active-dropdown": e.currentDropdownIndex,
                  data: e.tabs,
                  border: !1,
                  "show-slider": !0,
                  "show-mask": !0,
                }),
                C: n.o(function () {
                  return (
                    e.handleToAssetEmbedded &&
                    e.handleToAssetEmbedded.apply(e, arguments)
                  );
                }),
                D: e.showBubbleTipsFlag4SwitchTradeMode,
              },
              e.showBubbleTipsFlag4SwitchTradeMode
                ? {
                    E: n.o(function (o) {
                      return (e.showBubbleTipsFlag4SwitchTradeMode = !1);
                    }),
                    F: n.p({
                      "is-show": e.showBubbleTipsFlag4SwitchTradeMode,
                      content: "可切换按价格、数量下单的标准模式",
                      "show-close-btn": !0,
                      "arrow-position": "top-left",
                    }),
                  }
                : e.showBubbleTipsFlag4TabBarDropDown
                ? {
                    H: n.o(function (o) {
                      return (e.showBubbleTipsFlag4TabBarDropDown = !1);
                    }),
                    I: n.p({
                      "is-show": !0,
                      content: "点击可切换委托类型",
                      "show-close-btn": !0,
                      "arrow-position": "top-left",
                    }),
                  }
                : {},
              {
                G: e.showBubbleTipsFlag4TabBarDropDown,
                J: [e.TRADE_TAB_TYPE.CONDITION].includes(e.curTradeTabType),
              },
              [e.TRADE_TAB_TYPE.CONDITION].includes(e.curTradeTabType)
                ? {
                    K: n.p({
                      type: e.curTradeTabType,
                      code: e.code,
                      market: e.market,
                      name: e.name,
                      holder: e.holder,
                      "asset-data": e.data,
                    }),
                  }
                : {},
              {
                L: n.sr("tradeForm", "11bc16ff-7"),
                M: ![e.TRADE_TAB_TYPE.CONDITION].includes(e.curTradeTabType),
                N: n.o(e.onSetPrice),
                O: n.o(e.onSetAmount),
                P: n.o(e.onShowConfirmDialog),
                Q: n.o(e.handleTradeFormFocus),
                R: n.o(e.handleTradeFormBlur),
                S: n.o(e.handleStockHolderChange),
                T: n.p({
                  "trade-mode": e.tradeMode,
                  "focus-height": e.tradeFormFocusHeight,
                  "blur-height": e.tradeFormBlurHeight,
                  "is-classic-trade-split-mode": e.isClassicTradeSplitMode,
                }),
                U: 0 === e.currentTabIndex,
                V: 1 === e.currentTabIndex,
              },
              1 === e.currentTabIndex
                ? {
                    W: n.o(e.handlerEvoked),
                    X: n.o(e.onShowOrderFailReason),
                    Y: n.o(e.onDoneOrderListExpanded),
                  }
                : {},
              { Z: 2 === e.currentTabIndex },
              2 === e.currentTabIndex
                ? {
                    aa: n.p({
                      embeddedMode: !0,
                      controller: e.positionController,
                      data: e.data,
                      "is-active": 2 === e.currentTabIndex,
                      "use-scene": "trade",
                      "current-active-stock": e.currentActiveStock,
                    }),
                    ab: n.o(function () {}),
                  }
                : {}
            ),
        { ac: e.isShowConfirmDialog && !e.tradeResultVisible },
        e.isShowConfirmDialog && !e.tradeResultVisible
          ? {
              ad: n.sr("confirmRef", "11bc16ff-10"),
              ae: n.o(function (o) {
                return (e.isShowConfirmDialog = o);
              }),
              af: n.p({
                value: e.isShowConfirmDialog,
                fundaccount: e.fundaccount,
                "trade-mode": e.tradeMode,
                "show-embedded-header": !0,
              }),
              ag: n.n(e.isErrorTipsHeight ? "container-2-with-errortips" : ""),
            }
          : {},
        { ah: e.simpleMode },
        e.simpleMode
          ? {
              ai: n.sr("resultRef", "11bc16ff-11"),
              aj: n.o(e.onShowConfirmDialog),
              ak: n.o(e.handleTradeResultVisible),
              al: n.o(e.refreshToday),
              am: n.p({ fundaccount: e.fundaccount }),
            }
          : {
              an: n.sr("classicTradeResult", "11bc16ff-12"),
              ao: n.o(e.onShowConfirmDialog),
              ap: n.o(e.handleTradeResultVisible),
              aq: n.o(e.refreshToday),
            },
        { ar: e.isOrderFailReasonShow },
        e.isOrderFailReasonShow
          ? {
              as: n.o(function (o) {
                return (e.isOrderFailReasonShow = o);
              }),
              at: n.o(function (o) {
                return (e.isOrderFailReasonShow = !1);
              }),
              av: n.p({
                value: e.isOrderFailReasonShow,
                order: e.currentFailedOrder,
                type: e.orderFailReasonType,
              }),
            }
          : {},
        {
          aw: n.p({ id: "notify", "custom-style": e.customNotifyStyle }),
          ax: n.p({ id: "mp-dialog" }),
          ay: n.sr("privacyProtocolDialog", "11bc16ff-16"),
          az: e.initStatus,
        },
        (e.initStatus, {}),
        {
          aA: n.sr("kzzRiskDialog", "11bc16ff-18"),
          aB: n.p({ id: "KzzRiskDialog", action: "trade" }),
          aC: n.sr("#password-component", "11bc16ff-19"),
          aD: n.o(function (o) {
            return e.closeTradeStock(o);
          }),
          aE: n.o(function (o) {
            return e.closeTradeStock(o);
          }),
          aF: n.p({
            id: "password-component",
            mask: !1,
            "close-icon": !0,
            isWrapperVisible: t.embedded_visible,
            delayDuration: 350,
          }),
          aG: e.isMpPlugin,
        },
        e.isMpPlugin
          ? {
              aH: n.sr("#network-detect-component", "11bc16ff-20"),
              aI: n.p({
                id: "network-detect-component",
                "min-height": e.pluginSimpleEmbeddedFormHeight,
              }),
            }
          : {},
        { aJ: e.initStatus && "1" === e.userinfo.show_trace_notice },
        (e.initStatus && e.userinfo.show_trace_notice, {}),
        {
          aK: n.n(e.simpleMode ? "stock-embedded--simple" : ""),
          aL: n.n(
            !e.curShowBulletin || e.isShowConfirmDialog || e.tradeResultVisible
              ? ""
              : "stock-embedded__with-bulletin"
          ),
          aM: n.n(
            e.isClassicTradeSplitMode || e.simpleMode
              ? ""
              : "stock-embedded__not-split"
          ),
          aN: e.theme,
          aO: e.simpleMode,
          aP: n.s(
            e.isShowConfirmDialog || e.tradeResultVisible
              ? {}
              : e.pluginSimpleEmbeddedFormStyle
          ),
        }
      );
    },
  ],
]);
wx.createPage(s);
