var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var o = require("../../stock.js"),
  n = require("../../common/vendor.js"),
  t = e(
    {
      name: "TradeStock",
      components: {
        TradeConfirmDialog: function () {
          return "./components/TradeConfirmDialogEmbedded.js";
        },
        TradeResult: function () {
          return "./components/TradeResult.js";
        },
        ConditionList: function () {
          return "../../bizs/asset/ConditionList.js";
        },
        OrderTypeGuides: function () {
          return "./components/order-type-guides/index.js";
        },
        PopupSelect: function () {
          return "../../components/PopupSelect/PopupSelect.js";
        },
        OrderTypeSelect: function () {
          return "./components/new-version/OrderTypeSelect.js";
        },
        HKOrderTypeSelect: function () {
          return "./components/HKOrderTypeSelect.js";
        },
        ServerBroker: function () {
          return "../../components/ServerBroker/ServerBroker.js";
        },
        FixedQuote: function () {
          return "./components/new-version/FixedQuote.js";
        },
        QuoteInfo: function () {
          return "./components/new-version/QuoteInfo.js";
        },
        SearchResult: function () {
          return "../../bizs/trade/SearchResult.js";
        },
        TransInfo: function () {
          return "./components/new-version/TransInfo.js";
        },
        TradeForm: function () {
          return "./components/TradeFormUni.js";
        },
        MpDialog: function () {
          return "../../common/components/Dialog/Dialog.js";
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
        Tabbar: function () {
          return "../../common/components/Tabbar/index.js";
        },
        Confirmation: function () {
          return "../../components/Confirmation/index.js";
        },
        Notify: function () {
          return "../../common/components/Notify/Notify.js";
        },
        SignPrivacyProtocol: function () {
          return "../../components/PrivacyProtocol/PrivacyProtocol.js";
        },
        BulletinBar: function () {
          return "../../components/BulletinBar/index.js";
        },
        RiskTestReminder: function () {
          return "../../components/RiskTestReminder/index.js";
        },
        RegisterRiskPopup: function () {
          return "../../components/RegisterRiskPopup/index.js";
        },
        MpTransition: function () {
          return "../../common/components/Transition/index.js";
        },
        Popup: function () {
          return "../../common/components/Popup/index.js";
        },
        TradeGGTShareHolderSelector: function () {
          return "./components/TradeGGTShareHolderSelector.js";
        },
        MoneyTraceRiskPopup: function () {
          return "../../bizs/asset/MoneyTraceRiskPopup.js";
        },
      },
    },
    o.createStock()
  );
Array ||
  (
    n.resolveComponent("fixed-quote") +
    n.resolveComponent("mp-transition") +
    n.resolveComponent("BulletinBar") +
    n.resolveComponent("QuoteInfo") +
    n.resolveComponent("TradeGGTShareHolderSelector") +
    n.resolveComponent("OrderTypeSelect") +
    n.resolveComponent("HKOrderTypeSelect") +
    n.resolveComponent("TradeForm") +
    n.resolveComponent("Tabbar") +
    n.resolveComponent("PositionsList") +
    n.resolveComponent("OrdersList") +
    n.resolveComponent("ConditionList") +
    n.resolveComponent("server-broker") +
    n.resolveComponent("SearchResult") +
    n.resolveComponent("confirmation") +
    n.resolveComponent("BrokerLogo") +
    n.resolveComponent("TradeConfirmDialog") +
    n.resolveComponent("TradeResult") +
    n.resolveComponent("Popup") +
    n.resolveComponent("OrderTypeGuides") +
    n.resolveComponent("MpDialog") +
    n.resolveComponent("OrderFailDialog") +
    n.resolveComponent("Notify") +
    n.resolveComponent("SignPrivacyProtocol") +
    n.resolveComponent("RiskTestReminder") +
    n.resolveComponent("RegisterRiskPopup") +
    n.resolveComponent("KzzRiskDialog") +
    n.resolveComponent("MoneyTraceRiskPopup") +
    n.resolveComponent("GlobalWrap")
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
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var r = n._export_sfc(t, [
  [
    "render",
    function (e, o, t, r, i, s) {
      return n.e(
        {
          a: e.rootFontSize,
          b: n.o(e.onForceRefresh),
          c: n.p({
            "stock-name": e.name,
            "force-updating": e.loading,
            "is-after-trade-stock": e.isAfterTradeStock,
          }),
          d: n.p({
            name: "fixed-quote",
            show: e.showFiveTrans && e.showFixedQuote,
          }),
          e: e.newUserGuideBulltin,
        },
        e.newUserGuideBulltin
          ? {
              f: n.t(e.newUserGuideBulltin),
              g: n.o(e.closeNewUserGuideBulletin),
              h: n.o(function (o) {
                return e.showBulletinContent("newUser");
              }),
              i: n.p({
                "bulletin-id": e.TRADE_STOCK_NEW_USER_GUIDE,
                "click-stop": !1,
                "show-right-icon": !0,
                animate: !1,
              }),
            }
          : e.hideBulletin
          ? !e.simpleMode &&
            e.isStockSet &&
            e.showBulletin &&
            e.selectedKey === e.ORDER_TYPES.LIMIT &&
            e.bullteinTips &&
            e.showFiveTrans
            ? {
                p: n.t(e.bullteinTips),
                q: n.o(function (o) {
                  return (e.showBulletin = !1);
                }),
                r: n.p({
                  "bulletin-id": "tradeStockBulletin",
                  "click-stop": !1,
                }),
              }
            : {}
          : {
              k: n.t(e.tradeBulletinConfig.title),
              l: n.o(e.closeBulletin),
              m: n.o(function (o) {
                return e.showBulletinContent("trade");
              }),
              n: n.p({
                "bulletin-id": e.tradeBulletin,
                "click-stop": !1,
                "show-right-icon": !0,
                animate: !1,
              }),
            },
        {
          j: !e.hideBulletin,
          o:
            !e.simpleMode &&
            e.isStockSet &&
            e.showBulletin &&
            e.selectedKey === e.ORDER_TYPES.LIMIT &&
            e.bullteinTips &&
            e.showFiveTrans,
          s: e.simpleMode && !e.isShowInput,
        },
        (e.simpleMode && e.isShowInput, {}),
        {
          t: n.sr("tradeQuoteInfo", "3dbd573b-6,3dbd573b-0"),
          v: n.o(e.onSearchStateChange),
          w: n.o(e.onSetPrice),
          x: n.o(e.onForceRefresh),
          y: n.p({
            id: "tradeQuoteInfo",
            "simple-mode": e.simpleMode,
            "stock-code": e.code,
            "stock-name": e.name,
            "stock-market": e.market,
            "show-input": e.isShowInput,
            searching: e.searching,
            loading: e.loading,
            "is-after-trade-stock": e.isAfterTradeStock,
            "show-search-entry": e.isShowSearchEntry,
            "show-safe-setting": e.isShowSafeSetting,
            label: e.quoteInfoLabel,
            "trans-info": e.transInfo,
          }),
          z: n.n(e.isShowInput ? "" : "quote-trans-wrapper"),
          A: !e.searching,
        },
        e.searching
          ? {}
          : n.e(
              { B: e.stockInfo.isGGT },
              e.stockInfo.isGGT
                ? {
                    C: n.o(e.handleStockHolderChange),
                    D: n.p({
                      "show-fundaccount": !0,
                      fundaccount: e.fundaccount,
                    }),
                  }
                : {},
              {
                E: n.n(e.order.isBuyAction ? "active" : ""),
                F: n.o(function (o) {
                  return (e.order.action = e.ACTION.BUY);
                }),
                G: n.n(e.order.isSellAction ? "active" : ""),
                H: n.o(function (o) {
                  return (e.order.action = e.ACTION.SELL);
                }),
                I: !e.stockInfo.isGGT,
              },
              e.stockInfo.isGGT
                ? {
                    L: n.o(e.handleOrderTypeSelect),
                    M: n.o(e.handleTypeGuidesShow),
                    N: n.p({ "split-mode": !1, action: e.order.action }),
                  }
                : {
                    J: n.o(e.handleJumpToCond),
                    K: n.p({
                      code: e.code,
                      market: e.market,
                      text: e.selectedText,
                      name: e.name,
                      holder: e.holder,
                      "asset-data": e.data,
                    }),
                  },
              {
                O: n.sr("tradeForm", "3dbd573b-10,3dbd573b-0"),
                P: n.o(e.onSetPrice),
                Q: n.o(e.onSetAmount),
                R: n.o(e.onShowConfirmDialog),
              }
            ),
        {
          S: n.o(function (o) {
            return (e.currentTab = o);
          }),
          T: n.o(e.statTabBar),
          U: n.p({
            value: e.currentTab,
            data: e.tabs,
            "show-slider": !0,
            "simple-mode": e.simpleMode,
            border: !e.simpleMode,
          }),
          V: n.o(function () {
            return e.handleToAsset && e.handleToAsset.apply(e, arguments);
          }),
          W: n.n(e.simpleMode ? "" : "border--bottom"),
          X: !e.searching,
          Y: n.p({
            controller: e.positionController,
            data: e.data,
            "is-active": 0 === e.currentTabIndex,
            "use-scene": "trade",
            "current-active-stock": e.currentActiveStock,
          }),
          Z: n.o(e.handlerEvoked),
          aa: n.o(e.onShowOrderFailReason),
          ab: n.o(e.onDoneOrderListExpanded),
          ac: e.isConditionEntry,
        },
        e.isConditionEntry
          ? { ad: n.o(e.fetchCondList), ae: n.p({ "jump-type": "replace" }) }
          : {},
        {
          af: !e.searching,
          ag: e.swiperHeight,
          ah: e.currentTabIndex,
          ai: n.o(function () {
            return e.onSwiperChange && e.onSwiperChange.apply(e, arguments);
          }),
          aj: e.isMpPlugin,
        },
        (e.isMpPlugin, {}),
        { ak: e.showPositionSwiper, al: !e.searching },
        e.searching ? {} : { am: n.p({ fixedv2: !0, "calc-safe-area": !0 }) },
        {
          an: n.o(e.handleClickSearchResult),
          ao: n.p({ "simple-mode": e.simpleMode }),
          ap: e.searching,
          aq: e.isShowTradeConfirm,
        },
        e.isShowTradeConfirm
          ? {
              ar: n.o(e.confirmationConfirm),
              as: n.o(e.confirmationCancel),
              at: n.p({
                type: e.confirmCfg.matchType,
                scenes: e.confirmCfg.scenes,
                "match-info": e.tradeAuth.matchTypeInfo,
              }),
            }
          : {},
        { av: e.isShowConfirmDialog || e.tradeResultVisible },
        e.isShowConfirmDialog || e.tradeResultVisible
          ? n.e(
              { aw: e.isShowConfirmDialog || e.tradeResultVisible },
              e.isShowConfirmDialog || e.tradeResultVisible
                ? {
                    ax: n.t(e.broker.base.name),
                    ay: n.t(e.fundaccount),
                    az: n.o(function () {
                      return (
                        e.closeTradePopup &&
                        e.closeTradePopup.apply(e, arguments)
                      );
                    }),
                  }
                : {},
              { aA: e.isShowConfirmDialog && !e.tradeResultVisible },
              e.isShowConfirmDialog && !e.tradeResultVisible
                ? {
                    aB: n.sr("confirmRef", "3dbd573b-20,3dbd573b-18"),
                    aC: n.o(e.closeTradePopup),
                    aD: n.p({
                      value: e.isShowConfirmDialog,
                      fundaccount: e.fundaccount,
                    }),
                  }
                : {},
              {
                aE: n.sr("classicTradeResult", "3dbd573b-21,3dbd573b-18"),
                aF: n.o(e.onShowConfirmDialog),
                aG: n.o(e.handleTradeResultVisible),
                aH: n.o(e.refreshToday),
                aI: n.o(e.closeTradePopup),
                aJ: n.p({
                  show: e.isShowConfirmDialog || e.tradeResultVisible,
                  position: "bottom",
                }),
              }
            )
          : {},
        {
          aK: n.o(e.handleTypeGuidesHide),
          aL: n.p({
            visible: e.showTypeGuides,
            "current-tab": (e.order && e.order.orderType) || e.selectedKey,
            isGGT: e.isGGT,
          }),
          aM: n.p({ id: "mp-dialog" }),
          aN: n.o(function (o) {
            return (e.isOrderFailReasonShow = o);
          }),
          aO: n.o(function (o) {
            return (e.isOrderFailReasonShow = !1);
          }),
          aP: n.p({
            value: e.isOrderFailReasonShow,
            order: e.currentFailedOrder,
            type: e.orderFailReasonType,
          }),
          aQ: n.p({ id: "notify" }),
          aR: n.sr("privacyProtocolDialog", "3dbd573b-26,3dbd573b-0"),
          aS: e.initStatus,
        },
        (e.initStatus, {}),
        {
          aT: n.p({ "stock-cls": e.stockCls, type: "stock" }),
          aU: n.sr("kzzRiskDialog", "3dbd573b-29,3dbd573b-0"),
          aV: n.p({ id: "KzzRiskDialog", action: "trade" }),
          aW: e.initStatus && "1" === e.userinfo.show_trace_notice,
        },
        (e.initStatus && e.userinfo.show_trace_notice, {}),
        {
          aX: n.n(e.wujieEnv ? "trade-stock" : ""),
          aY: n.n(e.simpleMode ? "trade-stock__simple-mode" : ""),
          aZ: n.n(e.isStockSet ? "" : "trade-stock--unset"),
          ba: n.n(e.searching && e.simpleMode ? "search-mode" : ""),
          bb: n.n(e.curShowBulletin ? "trade-stock__with-bulletin" : ""),
          bc: n.s(e.isShowTradeConfirm ? "height:100vh;overflow:hidden;" : ""),
          bd: n.sr("#global-wrap", "3dbd573b-0"),
          be: n.p({
            id: "global-wrap",
            filePath: "/trade/stock-new",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(r);
