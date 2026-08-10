require("../../../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, a) {
    return new Promise(function (n, r) {
      var s = function (e) {
          try {
            c(a.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            c(a.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(s, i);
        };
      c((a = a.apply(e, t)).next());
    });
  },
  a = require("../../../../../../../common/vendor.js"),
  n = require("api.js"),
  r = require("../../utils/bridgeApi.js"),
  s = {
    props: {
      finishData: {
        type: Object,
        default: function () {
          return { status: 0, retmsg: "", quantity: 0, name: "", symbol: "" };
        },
      },
    },
    setup: function (s, i) {
      var c = i.emit,
        u = a.ref(!0),
        o = a.ref(!1),
        l = a.ref(!1);
      function f() {
        return t(
          this,
          null,
          e().mark(function t() {
            var i, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        n.setStockAlert({ symbol: s.finishData.symbol })
                      );
                    case 2:
                      if (!(i = e.sent) || 0 != +i.retcode) {
                        e.next = 18;
                        break;
                      }
                      if (
                        (a.StockBridge.report(
                          "yy.mocktrade.price_remind_btn_click"
                        ),
                        (u.value = !0),
                        c("closeSemimask"),
                        a.StockBridge.ENV === a.EnvTypeEnum.MP)
                      ) {
                        e.next = 17;
                        break;
                      }
                      return (e.prev = 5), (e.next = 8), r.getH5Userinfo();
                    case 8:
                      1 != +(null == (o = e.sent) ? void 0 : o.subscribe)
                        ? a.StockBridge.openExtraWebview(
                            "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=In200p000q022"
                          )
                        : a.StockBridge.toast("已开启价格提醒", "none"),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(5)),
                        a.StockBridge.toast("已开启价格提醒", "none");
                    case 15:
                      e.next = 18;
                      break;
                    case 17:
                      a.StockBridge.toast("已开启价格提醒", "none");
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[5, 12]]
            );
          })
        );
      }
      return (
        a.watch(
          function () {
            return s.finishData;
          },
          function (r) {
            r &&
              1 === r.status &&
              r.symbol &&
              ((u.value = !1),
              (o.value = !1),
              (function () {
                t(
                  this,
                  null,
                  e().mark(function t() {
                    var r;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !s.finishData.symbol ||
                                1 !== s.finishData.status
                              ) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (l.value = !0),
                                (e.prev = 2),
                                (e.next = 5),
                                n.queryStockAlert({
                                  symbol: s.finishData.symbol,
                                })
                              );
                            case 5:
                              (r = e.sent) &&
                              0 === r.retcode &&
                              r.stocks &&
                              r.stocks.length > 0
                                ? (u.value = !0)
                                : (u.value = !1),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                a.StockBridge.aegisReportEvent(
                                  "MOCKTRADE_NEW_USER_QUERYSTOCK_ERROR"
                                ),
                                (u.value = !1);
                            case 12:
                              return (
                                (e.prev = 12), (l.value = !1), e.finish(12)
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 9, 12, 15]]
                    );
                  })
                );
              })());
          },
          { immediate: !0, deep: !0 }
        ),
        {
          handleBackTrade: function () {
            c("backTrade");
          },
          hasAlertSet: u,
          isSettingAlert: o,
          handleSetPriceAlert: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                var n;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o.value || u.value) {
                            e.next = 33;
                            break;
                          }
                          if (!s.finishData.symbol) {
                            e.next = 32;
                            break;
                          }
                          if (
                            ((o.value = !0),
                            (e.prev = 3),
                            a.StockBridge.ENV !== a.EnvTypeEnum.MP)
                          ) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (e.prev = 5),
                            (e.next = 8),
                            a.StockBridge.requestSubscribeMessage({
                              business: "price_remind",
                              tmplIds: [
                                "QBDM1tKbT0d3bwQtm5LGhiRX2feqFf2yNNOod6bjSBs",
                              ],
                            })
                          );
                        case 8:
                          if (
                            ((n = e.sent),
                            (e.t0 = Object.values(n || {}).some(function (e) {
                              return "accept" === e;
                            })),
                            !e.t0)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (e.next = 13), f();
                        case 13:
                          e.next = 18;
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t1 = e.catch(5)),
                            a.StockBridge.aegisReportEvent(
                              "MOCKTRADE_NEW_USER_SUBSCRIBE_ERROR"
                            );
                        case 18:
                          e.next = 22;
                          break;
                        case 20:
                          return (e.next = 22), f();
                        case 22:
                          e.next = 27;
                          break;
                        case 24:
                          (e.prev = 24),
                            (e.t2 = e.catch(3)),
                            a.StockBridge.aegisReportEvent(
                              "MOCKTRADE_NEW_USER_SUBSCRIBE_PRICE_ERROR"
                            );
                        case 27:
                          return (e.prev = 27), (o.value = !1), e.finish(27);
                        case 30:
                          e.next = 33;
                          break;
                        case 32:
                          a.StockBridge.toast(
                            "股票信息异常，请稍后重试",
                            "none"
                          );
                        case 33:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [
                    [3, 24, 27, 30],
                    [5, 15],
                  ]
                );
              })
            );
          },
          callSetStockAlertApi: f,
        }
      );
    },
  },
  i = a._export_sfc(s, [
    [
      "render",
      function (e, t, n, r, s, i) {
        return a.e(
          { a: 0 === n.finishData.status },
          (n.finishData.status, {}),
          {
            b: a.t(0 === n.finishData.status ? "失败" : "已提交"),
            c: 0 === n.finishData.status,
          },
          0 === n.finishData.status
            ? { d: a.t(n.finishData.retmsg) }
            : {
                e: a.t(n.finishData.quantity || 0),
                f: a.t(n.finishData.name || ""),
              },
          { g: 0 === n.finishData.status },
          0 === n.finishData.status
            ? {
                h: a.o(function () {
                  return (
                    r.handleBackTrade && r.handleBackTrade.apply(r, arguments)
                  );
                }, 5149),
              }
            : {},
          { i: 1 === n.finishData.status && !r.hasAlertSet },
          1 !== n.finishData.status || r.hasAlertSet
            ? {}
            : {
                j: a.o(function () {
                  return (
                    r.handleSetPriceAlert &&
                    r.handleSetPriceAlert.apply(r, arguments)
                  );
                }, 5150),
              }
        );
      },
    ],
    ["__scopeId", "data-v-26a8b664"],
  ]);
wx.createComponent(i);
