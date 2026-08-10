var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, a) {
    return new Promise(function (n, r) {
      var c = function (e) {
          try {
            i(a.next(e));
          } catch (e) {
            r(e);
          }
        },
        o = function (e) {
          try {
            i(a.throw(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, o);
        };
      i((a = a.apply(e, t)).next());
    });
  },
  a = require("../../../common/vendor.js"),
  n = a.ref(!1),
  r = a.ref(!1),
  c = a.wx$1.getStorageSync("_qluin"),
  o = {
    10800: "60001",
    10100: "60003",
    10500: "60005",
    11800: "60002",
    19900: "619900",
    21900: "60004",
  },
  i = function (e) {
    return o[e] || e;
  },
  u = (function () {
    function e() {
      var e = !0;
      try {
        var t = a.StockBridge.store.protocolStatus;
        "string" == typeof t && (e = "agree" === t);
      } catch (e) {}
      return (r.value = e), r.value && (n.value = !1), e;
    }
    return {
      showPrivacyPolicy: n,
      didAgreeUserAgreement: r,
      handleProtocolStatusChange: function () {
        e();
      },
      checkUserAgreementStatus: e,
      needUserAgreementStatus: function () {
        e() || (n.value = !0);
      },
      checkPrivacyAuth: function () {
        return (n.value = !0), !0;
      },
    };
  })().checkPrivacyAuth;
exports.useJumpDetail = function () {
  var n = a.ref(!1),
    r = a.ref("normal"),
    o = a.getCurrentInstance().proxy,
    s = getApp().globalData,
    l = a.useBrokerInfo().isTradeEnable;
  function p(n) {
    return t(
      this,
      null,
      e().mark(function t() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ("community" === n.id) {
                  e.next = 13;
                  break;
                }
                if ("ai" === n.id) {
                  e.next = 10;
                  break;
                }
                if ("simulate" !== n.id) {
                  e.next = 8;
                  break;
                }
                return (e.next = 5), a.judgeGrayUser(c, "6151479712");
              case 5:
                if (((e.t0 = e.sent), !e.t0)) {
                  e.next = 8;
                  break;
                }
                n.mpPath = "/pages/mockTradeNew/home/index";
              case 8:
                e.next = 11;
                break;
              case 10:
                s.navigateTo({
                  url: "/pages/additional/webview/index?url=".concat(
                    encodeURIComponent(
                      "https://wzq.tenpay.com/wzq/aics-cloud/xiaomi/page.do?channel=17&entry=zxg_applet&_="
                        .concat(Date.now(), "&tag=")
                        .concat(i(o.dealercode), "&stat_data=Ifm00p000r013")
                    )
                  ),
                });
              case 11:
                e.next = 14;
                break;
              case 13:
                !(function () {
                  var e = s.taskConfig || {},
                    t = e.actid,
                    n = e.tid,
                    r = e.id,
                    c = e.url,
                    o = "";
                  n &&
                    (o = "?act_id="
                      .concat(r, "&act_tid=")
                      .concat(n, "&act_actid=")
                      .concat(t, "&act_url=")
                      .concat(c)),
                    a.wx$1.navigateTo({ url: "/pages/square/index".concat(o) });
                })();
              case 14:
              case "end":
                return e.stop();
            }
        }, t);
      })
    );
  }
  return {
    showAccountBrokerSheet: n,
    accountBrokerSheetType: r,
    jumpDetail: function (n) {
      return t(
        this,
        null,
        e().mark(function r() {
          var c, o;
          return e().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  c = !1;
                  try {
                    c = u(n);
                  } catch (e) {}
                  if (!c) {
                    r.next = 4;
                    break;
                  }
                  return r.abrupt("return");
                case 4:
                  return (
                    a.Request.reportMTAData({
                      eventName: "list_".concat(n.id, "_click"),
                    }),
                    (o = n.mpStat || n.stat) &&
                      a.Request.reportMTAData({ eventName: o }),
                    (r.next = 9),
                    p(n)
                  );
                case 9:
                  n.isTrade &&
                    (function (n) {
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
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      a.sdkBridge.navToBrokerPage({
                                        path: "/pages".concat(n),
                                      })
                                    );
                                  case 3:
                                    e.next = 9;
                                    break;
                                  case 5:
                                    (e.prev = 5),
                                      (e.t0 = e.catch(0)),
                                      (r =
                                        "ERR_MAINTAIN" === e.t0.retcode
                                          ? e.t0.retmsg
                                          : "系统繁忙请稍后再试"),
                                      a.wx$1.showModal({
                                        confirmText: "确定",
                                        content: r,
                                        showCancel: !1,
                                      });
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 5]]
                          );
                        })
                      );
                    })(n.path),
                    n.mpPath &&
                      (n.openUseWebview || n.openUseActWebview
                        ? setTimeout(function () {
                            !(function (e, t) {
                              if (a.wx$1.canIUse("web-view")) {
                                var n = t
                                  ? "/pages/act/webview/main?url="
                                  : "/pages/additional/webview/index?url=";
                                a.wx$1.navigateTo({
                                  url: n + encodeURIComponent(e),
                                });
                              } else a.wx$1.showModal({ title: "提示", content: "当前微信版本过低，无法使用内嵌H5功能，请升级到最新微信版本后重试。", showCancel: !1 });
                            })(n.mpPath, n.openUseActWebview);
                          }, 300)
                        : n.switchTab
                        ? a.wx$1.switchTab({ url: n.mpPath })
                        : a.wx$1.navigateTo({ url: n.mpPath }));
                case 11:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      );
    },
    tapAccountBroker: function () {
      a.wx$1.hideTabBar({}),
        a.Request.reportMTAData({
          eventName: "base.new_profile.gobrokermanagement_click",
        }),
        (r.value = "normal"),
        (n.value = !0);
    },
    toBrokerLogin: function () {
      a.wx$1.hideTabBar(),
        l.value
          ? ((r.value = "login"), (n.value = !0))
          : a.wx$1.switchTab({ url: "/pages/index/trade" });
    },
    closeAccountBrokerSheet: function () {
      a.Request.reportMTAData({ eventName: "xcx_mine_account_broker_close" }),
        (n.value = !1),
        (r.value = "normal"),
        a.wx$1.showTabBar({});
    },
  };
};
