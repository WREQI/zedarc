var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var n = require("../../../common/vendor.js"),
  t = require("../../../model/transfer/useTransfer.js"),
  a = require("../../../config/enum/transfer.js"),
  o = require("../../../service/aegis/utils.js"),
  s = require("../../../model/transfer/transferMonitorEvents.js"),
  i = require("../../../common/components/Dialog/index.js"),
  u = require("../../../service/log/index.js"),
  f = require("../../../utils/getPlatform.js");
n.dayjs.extend(n.isToday);
var l = new u.Log("TransferOut"),
  p = {
    name: "TransferOut",
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
      TransferOutPreTimeDialog: function () {
        return "./TransferOutPreTimeDialog.js";
      },
      TransferBottomNav: function () {
        return "./TransferBottomNav.js";
      },
    },
    setup: function (u, p) {
      var T = p.emit,
        c = n.getCurrentInstance().proxy,
        m = f.getPlatform().isOEM,
        d = n.inject("curPageContext"),
        v = n.ref(!1),
        g = n.ref(!1),
        h = t.useTransfer(),
        y = h.drawablePlan,
        x = h.drawFromBalance,
        w = h.getOrderPackage,
        O = h.getPageState,
        b = h.hasFreezeMoney,
        D = h.havePreDraw,
        P = h.isAppointmentUser,
        A = h.isX724TransferUser,
        C = h.maxTransferAmount,
        B = h.money,
        F = h.onTransfer,
        N = h.pageStatus,
        S = h.pendingPreTransferNum,
        M = h.transferOutDelayTip,
        j = h.qryFundInfo,
        R = h.transferData,
        _ = h.transferring,
        I = h.transferX724,
        q = h.fundsInfoData,
        E = h.handleOtherBtnClick,
        k = h.otherBtnText,
        U = h.tipsText,
        $ = h.showOtherBtn,
        G = h.transferTimeTip,
        z = h.toChangeCard,
        L = h.serverTime,
        X = h.isChangeCardAvailable,
        H = h.isFundRecordAvailable,
        W = h.isNewFundRecordUser;
      function J(e) {
        g.value = e;
      }
      n.provide("transferData", R),
        n.provide("drawablePlan", y),
        n.onBeforeMount(function () {
          n.index.$on("show-transfer-plan", J);
        }),
        n.onBeforeUnmount(function () {
          n.index.$off("show-transfer-plan", J);
        });
      var Y,
        K = n.ref(!0),
        Q = n.computed(function () {
          return Number(B.value) > C.value;
        }),
        V = n.computed(function () {
          var e = M.value;
          return !(!e || !e.includes("暂停该功能") || m);
        });
      return {
        cancelTransferPlan: function () {
          (g.value = !1),
            c.$stat.click("trade.transferout.transferplan.cancel");
        },
        confirmTransferPlan: function () {
          g.value = !1;
          var e = parseInt(n.__CJS__export_yuan2fen__(B.value), 10);
          I(e), c.$stat.click("trade.transferout.transferplan.confirm");
        },
        drawFromBalance: x,
        hasFreezeMoney: b,
        havePreDraw: D,
        initTransfer:
          ((Y = r(
            e().mark(function r() {
              var n,
                t,
                u,
                f = arguments;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = f.length > 0 && void 0 !== f[0] ? f[0] : {}),
                        (t = n.money)
                          ? ((B.value = t), l.info("设置金额", t))
                          : (B.value = null),
                        (g.value = !1),
                        i.Dialog.hide(),
                        (e.next = 7),
                        w(a.TRANSFER_TYPE.WITHDRAW)
                      );
                    case 7:
                      if (!R.needAddCard) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", void T("showEmptyCard"));
                    case 9:
                      return (e.next = 11), j();
                    case 11:
                      return (e.next = 13), O();
                    case 13:
                      (u = e.sent),
                        l.info("是否为银证转账时间", u),
                        o.reportMonitorEvent(s.TRANSFER_MONITOR.PAGE_OPEN_SUC, {
                          ext2: "out",
                        }),
                        d &&
                          (d.clearPageOpenTimer && d.clearPageOpenTimer(),
                          d.pageOpenStartTime &&
                            o.reportMonitorTime(
                              s.TRANSFER_MONITOR.PAGE_OPEN_TIME,
                              Date.now() - d.pageOpenStartTime
                            ));
                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          )),
          function () {
            return Y.apply(this, arguments);
          }),
        isAppointmentUser: P,
        isHideDetail: v,
        isX724TransferUser: A,
        maxTransferAmount: C,
        money: B,
        onAllTransfer: function () {
          (B.value = C.value), c.$stat.click("trade.transferout.all");
        },
        oninput: function (e) {
          B.value = e;
        },
        onTransfer: F,
        pageStatus: N,
        pendingPreTransferNum: S,
        transferOutDelayTip: M,
        showTransferPlan: g,
        transferData: R,
        transferring: _,
        explainDrawableMoney: function () {
          1 === Number(q.canTrade - C.value)
            ? i.Dialog({
                context: d,
                message:
                  "为防止账户结算透支，如当天委托买入股票将冻结1.00元暂不可取。冻结资金结算后（次日）可取",
              })
            : i.Dialog({
                context: d,
                message: "你有新股或新债中签待缴费用".concat(
                  q.newStockPay,
                  "元未结算"
                ),
              });
        },
        handleOtherBtnClick: E,
        otherBtnText: k,
        tipsText: U,
        showOtherBtn: $,
        toChangeCard: z,
        transferTimeTip: G,
        serverTime: L,
        isChangeCardAvailable: X,
        isFundRecordAvailable: H,
        isNavShow: K,
        onInputFoucs: function () {
          K.value = !1;
        },
        onInputBlur: function () {
          K.value = !0;
        },
        relativeTimeText: function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "MM月DD日",
            t = n.dayjs(e);
          return t.isToday() ? "今日" : t.isTomorrow() ? "明日" : t.format(r);
        },
        isNewFundRecordUser: W,
        moneyOverMax: Q,
        goToDebtAutoOrder: function () {
          c.$stat.click("trade.transferout.gotodebtautoorder.confirm"),
            c.$router.push({ name: "DebtAutoOrder" });
        },
        isShowGoToDebtAutoOrder: V,
      };
    },
  };
Array ||
  (
    n.resolveComponent("TransferInfo") +
    n.resolveComponent("TransferForm") +
    n.resolveComponent("TransferBottomNav") +
    n.resolveComponent("TransferPendingTip") +
    n.resolveComponent("TransferLoading") +
    n.resolveComponent("TransferOutPreTimeDialog")
  )();
var T = n._export_sfc(p, [
  [
    "render",
    function (e, r, t, a, o, s) {
      return n.e(
        {
          a: n.p({ "transfer-type": 1 }),
          b: n.t(e.$filters.format.toCurrency(a.maxTransferAmount, 2)),
          c: a.hasFreezeMoney,
        },
        a.hasFreezeMoney
          ? {
              d: n.o(function () {
                return (
                  a.explainDrawableMoney &&
                  a.explainDrawableMoney.apply(a, arguments)
                );
              }),
            }
          : {},
        { e: a.transferOutDelayTip },
        a.transferOutDelayTip ? { f: n.t(a.transferOutDelayTip) } : {},
        { g: a.isShowGoToDebtAutoOrder },
        a.isShowGoToDebtAutoOrder
          ? {
              h: n.o(function () {
                return (
                  a.goToDebtAutoOrder && a.goToDebtAutoOrder.apply(a, arguments)
                );
              }),
            }
          : {},
        {
          i: n.o(function () {
            return a.onAllTransfer && a.onAllTransfer.apply(a, arguments);
          }),
          j: n.o(a.oninput),
          k: n.o(a.onInputFoucs),
          l: n.o(a.onInputBlur),
          m: n.p({
            money: a.money,
            "page-status": a.pageStatus,
            "init-max-len": String(Number(a.maxTransferAmount).toFixed(2))
              .length,
            "transfer-type": "out",
          }),
          n:
            a.pageStatus.transferBtnDisable || a.transferring || a.moneyOverMax,
          o: n.o(function () {
            return a.onTransfer && a.onTransfer.apply(a, arguments);
          }),
          p: a.pageStatus.showTips && a.tipsText,
        },
        a.pageStatus.showTips && a.tipsText
          ? n.e(
              { q: n.t(a.tipsText), r: a.otherBtnText },
              (a.otherBtnText, {}),
              { s: a.otherBtnText },
              a.otherBtnText
                ? {
                    t: n.t(a.otherBtnText),
                    v: n.o(function () {
                      return (
                        a.handleOtherBtnClick &&
                        a.handleOtherBtnClick.apply(a, arguments)
                      );
                    }),
                  }
                : {}
            )
          : a.moneyOverMax
          ? {}
          : { x: n.t(a.transferTimeTip) },
        { w: a.moneyOverMax, y: a.isNavShow },
        a.isNavShow
          ? {
              z: n.p({
                type: "out",
                "show-change-card": a.isChangeCardAvailable,
                "show-fund-record": a.isFundRecordAvailable,
              }),
            }
          : {},
        {
          A: n.p({
            "is-new-fund-record-user": a.isNewFundRecordUser,
            "pending-pre-transfers": Number(a.pendingPreTransferNum),
            "page-status": a.pageStatus,
            is724: a.isX724TransferUser,
          }),
          B: a.transferring,
        },
        (a.transferring, {}),
        { C: a.showTransferPlan },
        a.showTransferPlan
          ? {
              D: n.o(a.confirmTransferPlan),
              E: n.o(a.cancelTransferPlan),
              F: n.p({
                "server-time": a.serverTime,
                "draw-from-balance": a.drawFromBalance,
                money: Number(a.money),
              }),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(T);
