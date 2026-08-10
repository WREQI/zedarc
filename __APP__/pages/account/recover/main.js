var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js");
getApp().globalData;
var n = {
    cover: "该账号处于注销考虑期，当前登录视为撤销注销，您的账号信息将被恢复",
    cant: "账号信息错误",
  },
  o = {
    mounted: function () {
      var o = getCurrentPages(),
        a = o[o.length - 1].options;
      a.action
        ? t.wx$1.showModal({
            title: "",
            content: n[a.action],
            showCancel: !1,
            confirmText: "我知道了",
          })
        : (t.Request.reportMTAData({
            eventName: "base.accountcancellation_reject.modal_show",
          }),
          t.wx$1.showModal({
            title: "恢复账号信息",
            cancelText: "取消",
            confirmText: "确认恢复",
            confirmColor: "#3077EC",
            content: n.cover,
            success: function (n) {
              return (
                (o = this),
                null,
                (a = e().mark(function o() {
                  var a;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!n.confirm) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (e.prev = 1),
                              t.Request.reportMTAData({
                                eventName:
                                  "base.accountcancellation_reject.modal_confirm_click",
                              }),
                              (e.next = 5),
                              t.AccountAPI.accountCancellationReject()
                            );
                          case 5:
                            (a = e.sent),
                              t.Request.reportMTAData({
                                eventName:
                                  "base.accountcancellation_confirm.modal_confirm_click",
                              }),
                              0 == +a.code
                                ? t.wx$1.reLaunch({ url: "/pages/index/index" })
                                : t.wx$1.showToast({
                                    title: a.msg || "注销失败",
                                    icon: "none",
                                    duration: 2e3,
                                  }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              t.wx$1.showToast({
                                title: "系统繁忙, 请稍后再试",
                                icon: "none",
                                duration: 1e3,
                              });
                          case 12:
                            e.next = 15;
                            break;
                          case 14:
                            n.cancel &&
                              t.Request.reportMTAData({
                                eventName:
                                  "base.accountcancellation_reject.modal_cancel_click",
                              });
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    o,
                    null,
                    [[1, 9]]
                  );
                })),
                new Promise(function (e, t) {
                  var n = function (e) {
                      try {
                        r(a.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    c = function (e) {
                      try {
                        r(a.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    r = function (t) {
                      return t.done
                        ? e(t.value)
                        : Promise.resolve(t.value).then(n, c);
                    };
                  r((a = a.apply(o, null)).next());
                })
              );
              var o, a;
            },
            fail: function () {
              t.wx$1.showToast({
                title: "系统繁忙, 请稍后再试",
                icon: "none",
                duration: 1e3,
              });
            },
          }));
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var a = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, a, c, r) {
      return { a: e.rootFontSize, b: t.p({ "no-auto": !0 }) };
    },
  ],
]);
wx.createPage(a);
