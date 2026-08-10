var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../model/transfer/useTransfer.js"),
  a = require("../../../config/enum/transfer.js"),
  t = require("../../../common/vendor.js"),
  s = require("../../../model/common/useServerTime.js"),
  o = require("../../../service/log/index.js"),
  i = require("../../../service/aegis/utils.js"),
  c = require("../../../model/transfer/transferMonitorEvents.js"),
  u = require("../../../common/components/Dialog/index.js"),
  p = require("../../../stores/transfer/useTransferInMoneySearch.js"),
  d = require("../../../stores/app/useMode.js"),
  f = new o.Log("TransferIn"),
  T = {
    name: "TransferIn",
    components: {
      TransferInfo: function () {
        return "./TransferInfo.js";
      },
      TransferForm: function () {
        return "./TransferForm.js";
      },
      TransferPendingTip: function () {
        return "./TransferPendingTip.js";
      },
      TransferLoading: function () {
        return "./TransferLoading.js";
      },
      TransferBankPwd: function () {
        return "./TransferBankPwd.js";
      },
      TransferBottomNav: function () {
        return "./TransferBottomNav.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
    },
    setup: function (o, T) {
      var l = T.emit,
        m = s.useServerTime().processTimeToTransferTime,
        h = n.useTransfer(),
        g = h.getOrderPackage,
        S = h.getPageState,
        y = h.isX724TransferUser,
        v = h.money,
        B = h.onTransfer,
        w = h.pageStatus,
        k = h.pendingPreTransferNum,
        C = h.transferData,
        M = h.transferring,
        P = h.transferByBankPwd,
        R = h.needValidateBankPwd,
        b = h.handleOtherBtnClick,
        x = h.otherBtnText,
        E = h.tipsText,
        j = h.transferTimeTip,
        N = h.nextTradeTimeFmt,
        F = h.isChangeCardAvailable,
        A = h.isFundRecordAvailable,
        I = h.closePreTransferTipDialog,
        O = h.isNewFundRecordUser,
        D = h.handleOutTimeWithInputMoney,
        q = h.restoreExpiredPageStatus,
        _ = p.useTransferInMoneySearch(),
        L = _.searchMoneyClick,
        V = _.handleTransferTime,
        U = t.storeToRefs(_),
        G = U.bankBalance,
        X = U.isSearching,
        H = U.isLoadEnd,
        z = U.isSupportSearchCardMoney,
        J = U.isShowRetryBySearchError,
        K = U.notRealTimeSearchMoneyTip,
        W = d.useModeStore(),
        Y = t.storeToRefs(W).simpleMode;
      t.provide("transferData", C);
      var $,
        Q = t.inject("curPageContext", null),
        Z = t.ref(!0);
      return {
        isX724TransferUser: y,
        money: v,
        oninput: function (e) {
          (v.value = e), e ? D() : q();
        },
        onTransfer: B,
        pageStatus: w,
        pendingPreTransferNum: k,
        transferData: C,
        transferring: M,
        initTransfer:
          (($ = r(
            e().mark(function n() {
              var t,
                s,
                o,
                p,
                d = arguments;
              return e().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = d.length > 0 && void 0 !== d[0] ? d[0] : {}),
                        (s = t.money)
                          ? ((v.value = s), f.info("设置金额", s))
                          : (v.value = null),
                        I(),
                        u.Dialog.hide(),
                        (n.next = 7),
                        g(a.TRANSFER_TYPE.RECHARGE)
                      );
                    case 7:
                      if (!C.needAddCard) {
                        n.next = 9;
                        break;
                      }
                      return n.abrupt("return", void l("showEmptyCard"));
                    case 9:
                      return (
                        (n.next = 11),
                        S(
                          (function () {
                            var n = r(
                              e().mark(function r() {
                                var n, a;
                                return e().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (e.next = 3),
                                            m({
                                              bankAbbr: C.bankAbbr,
                                              serverTime: C.timeFromServer,
                                            })
                                          );
                                        case 3:
                                          return (
                                            (n = e.sent),
                                            z.value &&
                                              ((a = n.isTradeTime),
                                              V(C.isTradeDay, a)),
                                            e.abrupt("return", n)
                                          );
                                        case 8:
                                          throw (
                                            ((e.prev = 8),
                                            (e.t0 = e.catch(0)),
                                            e.t0)
                                          );
                                        case 11:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  r,
                                  null,
                                  [[0, 8]]
                                );
                              })
                            )();
                            return function () {
                              return n;
                            };
                          })()
                        )
                      );
                    case 11:
                      (o = n.sent),
                        f.info("是否为银证转账时间", o),
                        i.reportMonitorEvent(c.TRANSFER_MONITOR.PAGE_OPEN_SUC, {
                          ext2: "in",
                        }),
                        Q &&
                          ((p = Q).clearPageOpenTimer && p.clearPageOpenTimer(),
                          p.pageOpenStartTime &&
                            i.reportMonitorTime(
                              c.TRANSFER_MONITOR.PAGE_OPEN_TIME,
                              Date.now() - p.pageOpenStartTime
                            ));
                    case 13:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )),
          function () {
            return $.apply(this, arguments);
          }),
        transferByBankPwd: P,
        needValidateBankPwd: R,
        handleOtherBtnClick: b,
        otherBtnText: x,
        tipsText: E,
        transferTimeTip: j,
        nextTradeTimeFmt: N,
        isChangeCardAvailable: F,
        isFundRecordAvailable: A,
        isNavShow: Z,
        onInputFoucs: function () {
          Z.value = !1;
        },
        onInputBlur: function () {
          Z.value = !0;
        },
        isNewFundRecordUser: O,
        bankBalance: G,
        simpleMode: Y,
        isSearching: X,
        isLoadEnd: H,
        notRealTimeSearchMoneyTip: K,
        isSupportSearchCardMoney: z,
        isShowRetryBySearchError: J,
        searchMoneyClick: L,
      };
    },
  };
Array ||
  (
    t.resolveComponent("TransferInfo") +
    t.resolveComponent("TransferForm") +
    t.resolveComponent("TransferBottomNav") +
    t.resolveComponent("TransferPendingTip") +
    t.resolveComponent("TransferLoading") +
    t.resolveComponent("TransferBankPwd") +
    t.resolveComponent("MpDialog")
  )();
var l = t._export_sfc(T, [
  [
    "render",
    function (e, r, n, a, s, o) {
      return t.e(
        { a: !a.transferring && !a.needValidateBankPwd },
        a.transferring || a.needValidateBankPwd
          ? a.transferring && !a.needValidateBankPwd
            ? {}
            : a.needValidateBankPwd
            ? {
                H: t.o(a.transferByBankPwd),
                I: t.p({ "transfer-data": a.transferData }),
              }
            : {}
          : t.e(
              {
                b: t.p({ "transfer-type": 0 }),
                c: a.isSupportSearchCardMoney && a.isLoadEnd,
              },
              a.isSupportSearchCardMoney && a.isLoadEnd
                ? t.e(
                    { d: !a.notRealTimeSearchMoneyTip },
                    a.notRealTimeSearchMoneyTip
                      ? { n: t.t(a.notRealTimeSearchMoneyTip) }
                      : t.e(
                          {
                            e:
                              "" === a.bankBalance &&
                              !a.isSearching &&
                              !a.isShowRetryBySearchError,
                          },
                          "" !== a.bankBalance ||
                            a.isSearching ||
                            a.isShowRetryBySearchError
                            ? {}
                            : {
                                f: t.n(
                                  a.simpleMode
                                    ? "simple-mode-search-card-money"
                                    : ""
                                ),
                                g: t.o(function () {
                                  return (
                                    a.searchMoneyClick &&
                                    a.searchMoneyClick.apply(a, arguments)
                                  );
                                }),
                              },
                          { h: a.isSearching },
                          (a.isSearching, {}),
                          { i: a.isShowRetryBySearchError && !a.isSearching },
                          a.isShowRetryBySearchError && !a.isSearching
                            ? {
                                j: t.n(
                                  a.simpleMode
                                    ? "simple-mode-search-card-money"
                                    : "search-card-money"
                                ),
                                k: t.o(function () {
                                  return (
                                    a.searchMoneyClick &&
                                    a.searchMoneyClick.apply(a, arguments)
                                  );
                                }),
                              }
                            : {},
                          {
                            l:
                              "" !== a.bankBalance &&
                              !a.isSearching &&
                              !a.isShowRetryBySearchError,
                          },
                          "" === a.bankBalance ||
                            a.isSearching ||
                            a.isShowRetryBySearchError
                            ? {}
                            : {
                                m: t.t(
                                  e.$filters.format.toCurrency(a.bankBalance, 2)
                                ),
                              }
                        )
                  )
                : {},
              {
                o: t.o(a.oninput),
                p: t.o(a.onInputFoucs),
                q: t.o(a.onInputBlur),
                r: t.p({
                  money: a.money,
                  "page-status": a.pageStatus,
                  "transfer-type": "in",
                }),
                s: a.pageStatus.transferBtnDisable || a.transferring,
                t: t.o(function () {
                  return a.onTransfer && a.onTransfer.apply(a, arguments);
                }),
                v: a.pageStatus.showTips && a.tipsText,
              },
              a.pageStatus.showTips && a.tipsText
                ? t.e(
                    { w: t.t(a.tipsText), x: a.otherBtnText },
                    (a.otherBtnText, {}),
                    { y: a.otherBtnText },
                    a.otherBtnText
                      ? {
                          z: t.t(a.otherBtnText),
                          A: t.o(function () {
                            return (
                              a.handleOtherBtnClick &&
                              a.handleOtherBtnClick.apply(a, arguments)
                            );
                          }),
                        }
                      : {}
                  )
                : { B: t.t(a.transferTimeTip) },
              { C: a.isNavShow },
              a.isNavShow
                ? {
                    D: t.p({
                      type: "in",
                      "show-change-card": a.isChangeCardAvailable,
                      "show-fund-record": a.isFundRecordAvailable,
                    }),
                  }
                : {},
              {
                E: t.p({
                  "is-new-fund-record-user": a.isNewFundRecordUser,
                  "pending-pre-transfers": Number(a.pendingPreTransferNum),
                  "page-status": a.pageStatus,
                  is724: a.isX724TransferUser,
                }),
              }
            ),
        {
          F: a.transferring && !a.needValidateBankPwd,
          G: a.needValidateBankPwd,
          J: t.t(a.nextTradeTimeFmt),
          K: t.p({ id: "pre-time-confirm" }),
        }
      );
    },
  ],
]);
wx.createComponent(l);
