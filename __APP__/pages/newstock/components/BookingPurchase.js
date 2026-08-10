var o = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var e = require("../../../common/vendor.js"),
  t = require("../../../cgi/types/newstock.js"),
  n = require("../../../service/stat/mp-weixin.js"),
  i = require("../config.js");
require("../../../service/sdk/lib/api.js"),
  require("../../../service/sdk/platform/mp-weixin.js");
var r = require("../../../stores/app/useNavbar.js"),
  s = require("../../../utils/getPlatform.js"),
  c = {
    name: "BookingPurchase",
    components: {
      QuotaInfo: function () {
        return "./QuotaInfo.js";
      },
      BookingListItem: function () {
        return "./BookingListItem.js";
      },
      AfterPurchaseListItem: function () {
        return "./AfterPurchaseListItem.js";
      },
      ProtocolPopup: function () {
        return "../../../components/ProtocolPopup/ProtocolPopup.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
    },
    setup: function () {
      e.getCurrentInstance().proxy;
      var c = s.getPlatform().isPCWeixin,
        a = e.ref(c ? "width: 850rpx" : "width: 650rpx"),
        l = e.inject("purchaseListData"),
        u = e.computed(function () {
          return [
            { number: l.maxBuyAmountSh, text: "沪A配额" },
            { number: l.maxBuyAmountSz, text: "深A配额" },
            { number: l.maxBuyAmountKcb, text: "科创板配额" },
            { number: l.maxBuyAmountConv, text: "新债额度" },
          ];
        }),
        k = e.inject("newStockBookingData");
      e.provide("notBookingReasonTextHandler", k.notBookingReasonTextHandler),
        e.provide("goToDetails", k.goToDetails),
        e.provide("stockPickerIndex", k.stockPickerIndex),
        e.provide("onStockPickerChange", k.onStockPickerChange),
        e.provide("onDebtPickerClick", k.onDebtPickerClick),
        e.provide("solutionHanlder", k.solutionHanlder),
        e.provide("selectHandler", k.selectHandler),
        k.hideRedPoint(),
        k.hideBubbleTips(),
        e.onMounted(function () {
          n.stat.click("trade.playnew.newstock.booking.brow");
        });
      var p = e.ref(i.RiskCfg.indexTip),
        g = e.ref(i.RiskCfg.confirmTip),
        d = e.ref(i.RiskCfg.confirmTipHeader),
        m = e.ref(!0),
        b = e.storeToRefs(r.useNavbarStore()),
        h = b.externalNavBar,
        f = b.externalNavBar4Mp;
      return o(
        {
          inputStyle: a,
          externalNavBar: h,
          externalNavBar4Mp: f,
          idxRiskTip: p,
          confirmTip: g,
          confirmTipHeader: d,
          confirmTipFold: m,
          onRiskTipLink: function () {},
          quotaList: u,
          EPurchaseType: t.EPurchaseType,
        },
        k
      );
    },
  };
Array ||
  (
    e.resolveComponent("QuotaInfo") +
    e.resolveComponent("BookingListItem") +
    e.resolveComponent("AfterPurchaseListItem") +
    e.resolveComponent("protocol-popup") +
    e.resolveComponent("mp-dialog") +
    e.resolveComponent("action-sheet")
  )();
var a = e._export_sfc(c, [
  [
    "render",
    function (o, t, n, i, r, s) {
      return e.e(
        {
          a: e.p({ lists: i.quotaList, "show-record": !1 }),
          b: o.newStockBookingData.bookingList.length,
        },
        o.newStockBookingData.bookingList.length
          ? e.e(
              {
                c: e.t(o.newStockBookingData.bookingCount),
                d: e.o(function (e) {
                  return o.cancel({ isAll: !0 });
                }),
                e: o.bookedStockList.length,
              },
              o.bookedStockList.length
                ? {
                    f: e.o(function (e) {
                      return o.cancel({ item: e });
                    }),
                    g: e.p({
                      "booking-list": o.bookedStockList,
                      "purchase-type": i.EPurchaseType.STOCK,
                    }),
                  }
                : {},
              { h: o.bookedDebtkList.length },
              o.bookedDebtkList.length
                ? {
                    i: o.bookedStockList.length ? 1 : "",
                    j: e.o(function (e) {
                      return o.cancel({ item: e });
                    }),
                    k: e.p({
                      "booking-list": o.bookedDebtkList,
                      "purchase-type": i.EPurchaseType.DEBT,
                    }),
                  }
                : {},
              {
                l: e.n(
                  o.showMoreButtonShow && !o.showMore
                    ? "freezing-height" +
                        (o.bookedStockList.length &&
                        o.bookedStockList.length < 3 &&
                        o.bookedDebtkList.length
                          ? "-stock_debt"
                          : "")
                    : ""
                ),
                m: o.showMoreButtonShow,
              },
              o.showMoreButtonShow
                ? {
                    n: e.t(o.showMore ? "收起" : "查看更多"),
                    o: e.n(o.showMore ? "icon-arrow-up" : "icon-arrow-down"),
                    p: e.o(function () {
                      return (
                        o.showMoreButtonClickHandler &&
                        o.showMoreButtonClickHandler.apply(o, arguments)
                      );
                    }),
                  }
                : {}
            )
          : {},
        {
          q: e.p({
            "can-book": !0,
            "stock-list": o.canBookingStockList,
            "debt-list": o.canBookingDebtList,
          }),
          r: o.newStockBookingData.notBookingList.length,
        },
        o.newStockBookingData.notBookingList.length
          ? {
              s: e.p({
                "can-book": !1,
                "purchase-list": o.newStockBookingData.notBookingList,
                "stock-list": o.notBookingStockList,
                "debt-list": o.notBookingDebtList,
              }),
            }
          : {},
        {
          t:
            o.allSelected && o.newStockBookingData.canBookingList.length
              ? 1
              : "",
          v: o.newStockBookingData.canBookingList.length ? "" : 1,
          w: e.o(function (e) {
            return o.allSelectedClickHandler(o.allSelected);
          }),
          x: e.t(
            o.newStockBookingData.canBookingList.length
              ? "(".concat(o.selectedCanBookingList.length, ")")
              : ""
          ),
          y:
            !o.newStockBookingData.canBookingList.length ||
            !o.selectedCanBookingList.length,
          z: e.o(function () {
            return o.booking && o.booking.apply(o, arguments);
          }),
          A: i.idxRiskTip,
        },
        i.idxRiskTip ? { B: e.t(i.idxRiskTip) } : {},
        { C: o.riskTipVisible },
        o.riskTipVisible
          ? {
              D: e.o(function (e) {
                return (o.riskTipVisible = e);
              }),
              E: e.o(o.signRiskTipDialog),
              F: e.p({
                value: o.riskTipVisible,
                title: "预约打新股功能协议书",
                "mask-closable": !0,
                preview: !0,
                protocols: o.protocols,
                "match-info": o.matchInfo,
              }),
            }
          : {},
        { G: i.confirmTip },
        i.confirmTip
          ? e.e(
              {
                H: e.t(i.confirmTipHeader),
                I: e.t(i.confirmTip),
                J: i.confirmTipFold ? "" : 1,
                K: i.confirmTipFold,
              },
              (i.confirmTipFold, {}),
              {
                L: e.o(function (o) {
                  return (i.confirmTipFold = !i.confirmTipFold);
                }),
              }
            )
          : {},
        {
          M: e.o(o.onBookingConfirm),
          N: e.o(o.onBookingCancel),
          O: e.p({
            visible: o.showBookingConfirmDialog,
            title: "预约确认",
            "confirm-button-text": "确认",
            "show-cancel-button": !0,
          }),
          P: e.t(o.debtSubmitMaxNum),
          Q: "0" == o.selectRadioIndex,
          R: o.debtNumInputFocus,
          S: "10的倍数，最大" + o.debtSubmitMaxNum,
          T: e.o(function () {
            return (
              o.onDebtNumInputBlur && o.onDebtNumInputBlur.apply(o, arguments)
            );
          }),
          U: o.debtInputNum,
          V: e.o(function (e) {
            return (o.debtInputNum = e.detail.value);
          }),
          W: "1" == o.selectRadioIndex,
          X: e.o(function () {
            return o.radioChange && o.radioChange.apply(o, arguments);
          }),
          Y: e.o(function (e) {
            return (o.showDebtActionSheet = e);
          }),
          Z: e.o(o.onDebtPickerChange),
          aa: e.o(o.onDebtPickerClose),
          ab: e.p({
            value: o.showDebtActionSheet,
            title: "申购数量",
            "picker-style": !0,
            "close-button": !0,
          }),
          ac: i.externalNavBar4Mp || i.externalNavBar ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-0d20a711"],
]);
wx.createComponent(a);
