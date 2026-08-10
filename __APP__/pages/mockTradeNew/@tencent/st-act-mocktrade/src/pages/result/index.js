var e = require("../../../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, t, r) {
    return new Promise(function (a, n) {
      var s = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            n(e);
          }
        },
        u = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(s, o);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  a = require("../../../../../../../common/vendor.js"),
  n = require("../../services/BaseController.js"),
  s = require("../../cp-util/navigator/index.js"),
  o = require("../../services/ActTaskController.js"),
  u = require("../../utils/tool.js");
function c(e) {
  var t = e;
  return e >= 0 && e < 10 && (t = "0".concat(e)), t;
}
require("../../utils/bridgeApi.js");
var l = {
  components: {
    Reward: function () {
      return "../../cp-component/tReward/mp.js";
    },
    popupCard: function () {
      return "../../components/popupCard.js";
    },
    taskLog: function () {
      return "../../components/taskLog.js";
    },
  },
  setup: function (l, i) {
    var d = this,
      p =
        (i.emit,
        a.ref({ PRE_OPEN: 0, OPEN: 1, NOON_CLOSED: 2, AFTER: 3, CLOSED: 4 })),
      f = a.ref({ BUY: 1, SELL: 2 }),
      v = a.ref(0),
      T = a.ref(0),
      g = a.ref("%m月%d日 %h:%m"),
      S = a.ref(f.BUY),
      w = a.ref({}),
      m = a.ref(!1),
      k = a.ref({}),
      _ = a.ref(!1),
      h = a.ref(""),
      E = a.ref(!1),
      A = a.ref(""),
      R = a.ref(""),
      x = a.ref(""),
      D = a.ref(!1),
      P = a.ref(""),
      U = a.ref(""),
      O = a.ref(!1),
      b = a.ref(""),
      C = {};
    r(
      d,
      null,
      t().mark(function a() {
        var n;
        return t().wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (a.next = 2), s.getUrlParam("tradeStatus");
              case 2:
                return (
                  (v.value = +a.sent), (a.next = 5), s.getUrlParam("tradeTime")
                );
              case 5:
                return (
                  (T.value = +a.sent), (a.next = 8), s.getUrlParam("orderType")
                );
              case 8:
                return (
                  (S.value = +a.sent), (a.next = 11), s.getUrlParam("srcsite")
                );
              case 11:
                if (((a.t0 = a.sent), a.t0)) {
                  a.next = 14;
                  break;
                }
                a.t0 = "";
              case 14:
                if (((b.value = a.t0), !T.value)) {
                  a.next = 20;
                  break;
                }
                (n = new Date(T.value)),
                  (g.value = g.value
                    .replace("%m", "".concat(c(n.getMonth() + 1)))
                    .replace("%d", "".concat(c(n.getDate())))
                    .replace("%h", "".concat(c(n.getHours())))
                    .replace("%m", "".concat(c(n.getMinutes())))),
                  (a.next = 21);
                break;
              case 20:
                g.value = "下个交易日09:30";
              case 21:
                return (a.next = 23), s.getUrlParam("taskInfo");
              case 23:
                if (((a.t1 = e(a.sent)), "string" != a.t1)) {
                  a.next = 32;
                  break;
                }
                return (a.t3 = JSON), (a.next = 28), s.getUrlParam("taskInfo");
              case 28:
                (a.t4 = a.sent),
                  (a.t2 = a.t3.parse.call(a.t3, a.t4)),
                  (a.next = 35);
                break;
              case 32:
                return (a.next = 34), s.getUrlParam("taskInfo");
              case 34:
                a.t2 = a.sent;
              case 35:
                (w.value = a.t2),
                  r(
                    d,
                    null,
                    t().mark(function e() {
                      return t().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                r(
                                  d,
                                  null,
                                  t().mark(function e() {
                                    var r, a;
                                    return t().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              ((r = !1),
                                              !(
                                                w.value &&
                                                w.value.act_actid &&
                                                w.value.act_tid &&
                                                w.value.act_id
                                              ))
                                            ) {
                                              e.next = 6;
                                              break;
                                            }
                                            return (
                                              (e.next = 4),
                                              o.ActTaskController.isTaskDone(
                                                w.value
                                              )
                                            );
                                          case 4:
                                            (a = e.sent) &&
                                              a.done &&
                                              (r = !parseInt(a.done, 10));
                                          case 6:
                                            return e.abrupt("return", r);
                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )
                              );
                            case 2:
                              if (((e.t0 = e.sent), !e.t0)) {
                                e.next = 5;
                                break;
                              }
                              o.ActTaskController.doActTask(w.value)
                                .then(function (e) {
                                  if (e) {
                                    var t = Object.assign(w.value, e);
                                    (k.value = t),
                                      20104 == +e.reward_type ||
                                      20107 == +e.reward_type
                                        ? (_.value = !0)
                                        : ((E.value = Boolean(
                                            parseInt(w.value.is_show_toast || 0)
                                          )),
                                          (h.value = e.reward_desc || ""),
                                          (R.value =
                                            w.value.toast_right_btn_text ||
                                            "去查看"),
                                          (x.value =
                                            w.value.pop_result_back_url),
                                          e.reward_type &&
                                            w.value.task_map &&
                                            (A.value = N(
                                              e.reward_type,
                                              w.value.task_map
                                            )),
                                          (m.value = !0));
                                  }
                                })
                                .catch(function (e) {
                                  (O.value = !0),
                                    (U.value =
                                      (e && e.retmsg) ||
                                      "系统繁忙，请稍后再试"),
                                    setTimeout(function () {
                                      O.value = !1;
                                    }, 2e3);
                                });
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
              case 37:
              case "end":
                return a.stop();
            }
        }, a);
      })
    );
    var L = function (e, t, r) {
        var a =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          s = "trade.mocktrade."
            .concat(e.toLowerCase(), ".")
            .concat(t.toLowerCase(), ".")
            .concat(r.toLowerCase());
        n.report(s, a);
      },
      N = function (e, t) {
        var r = "";
        return (
          t &&
            t.length &&
            t.forEach(function (t) {
              t.type == e && (r = t.toast_img_url);
            }),
          r
        );
      };
    return (
      a.onMounted(function () {
        return r(
          d,
          null,
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      }),
      {
        tradeStatus: v,
        tradeTime: T,
        tradeTimeCN: g,
        orderType: S,
        TRADE_STATUS: p,
        ORDER_TYPE: f,
        isRewardModal: m,
        rewardData: k,
        showPopupcard: _,
        awardDesc: h,
        isShowToast: E,
        rewardImg: A,
        backBtnText: R,
        taskBackUrl: x,
        h5userinfo: C,
        showLog: D,
        tasklog: P,
        errorMsg: U,
        isShowErrToast: O,
        srcsite: b,
        goRealAsset: function () {
          (m.value = !1),
            L("result", "gotrade", "click"),
            u.judgeGoAsset(C, { srcsite: b.value });
        },
        goAsset: function () {
          if (
            ((m.value = !1),
            L("result", "asset", "click"),
            "mp" === a.StockBridge.ENV)
          )
            try {
              var e = getCurrentPages();
              if (e && e.length > 0) {
                for (var t = -1, r = e.length - 1; r >= 0; r--)
                  if (
                    (e[r].route || "").includes("pages/mockTradeNew/home/index")
                  ) {
                    t = r;
                    break;
                  }
                if (-1 !== t && t < e.length - 1) {
                  var n = e.length - t - 1;
                  if (void 0 !== a.wx$1 && a.wx$1.navigateBack)
                    return void a.wx$1.navigateBack({ delta: n });
                }
              }
            } catch (e) {}
          s.push("GotoTradeTab", "qqstock", {
            report_channel: "",
            index: "3",
            srcsite: b.value,
            status: "unnew",
          });
        },
        showTaskLog: function () {
          D.value = !0;
        },
        closeTaskLog: function () {
          D.value = !1;
        },
        getMapImg: N,
        onShowShare: function () {
          m.value = !1;
        },
        closeRewardModal: function () {
          m.value = !1;
        },
        closePopupCard: function () {
          _.value = !1;
        },
      }
    );
  },
};
Array ||
  (
    a.resolveComponent("Reward") +
    a.resolveComponent("popup-card") +
    a.resolveComponent("taskLog")
  )();
var i = a._export_sfc(l, [
  [
    "render",
    function (e, t, r, n, s, o) {
      return a.e(
        { a: n.tradeStatus === n.TRADE_STATUS.OPEN },
        n.tradeStatus === n.TRADE_STATUS.OPEN
          ? { b: a.t(n.orderType === n.ORDER_TYPE.BUY ? "买入" : "卖出") }
          : { c: a.t(n.orderType === n.ORDER_TYPE.BUY ? "买入" : "卖出") },
        { d: n.tradeStatus === n.TRADE_STATUS.OPEN },
        n.tradeStatus === n.TRADE_STATUS.OPEN ||
          n.tradeStatus === n.TRADE_STATUS.PRE_OPEN ||
          n.tradeStatus === n.TRADE_STATUS.NOON_CLOSED
          ? {}
          : n.tradeStatus === n.TRADE_STATUS.CLOSED ||
            n.tradeStatus === n.TRADE_STATUS.AFTER
          ? { h: a.t(n.tradeTimeCN) }
          : {},
        {
          e: n.tradeStatus === n.TRADE_STATUS.PRE_OPEN,
          f: n.tradeStatus === n.TRADE_STATUS.NOON_CLOSED,
          g:
            n.tradeStatus === n.TRADE_STATUS.CLOSED ||
            n.tradeStatus === n.TRADE_STATUS.AFTER,
          i: a.o(function () {
            return n.goAsset && n.goAsset.apply(n, arguments);
          }, 1230),
          j: a.o(function () {
            return n.goRealAsset && n.goRealAsset.apply(n, arguments);
          }, 1231),
          k: n.isRewardModal,
        },
        n.isRewardModal
          ? {
              l: a.p({
                "is-show-toast": n.isShowToast,
                desc: n.awardDesc,
                srcsite: n.srcsite,
                "reward-img": n.rewardImg,
                "back-btn-text": n.backBtnText,
                "back-url": n.taskBackUrl,
              }),
            }
          : {},
        { m: n.showPopupcard },
        n.showPopupcard
          ? {
              n: a.o(n.closePopupCard, 1232),
              o: a.p({ "reward-data": n.rewardData }),
            }
          : {},
        { p: n.showLog },
        n.showLog
          ? { q: a.o(n.closeTaskLog, 1233), r: a.p({ tasklog: n.tasklog }) }
          : {},
        { s: n.isShowErrToast },
        n.isShowErrToast ? { t: a.t(n.errorMsg) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-3e0fa429"],
]);
wx.createComponent(i);
