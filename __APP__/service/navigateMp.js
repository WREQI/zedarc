var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../@babel/runtime/helpers/objectWithoutProperties"),
  r = require("../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../@babel/runtime/helpers/objectSpread2"),
  a = ["appId", "path", "envVersion", "extraData"];
require("../app.js");
var t = require("../common/vendor.js"),
  l = require("../adapter/getApp.js");
require("./broker.js");
var o = require("./cookie/mp-weixin.js"),
  u = require("../config/mpConfig.js"),
  p = require("../config/index.js"),
  s = require("../utils/index.js"),
  g = require("../utils/system.js"),
  d = require("./aegis/platform/not-wujie.js"),
  v = require("../utils/getPlatform.js"),
  c = require("./aegis/platform/pageRouteTiming.js"),
  m = require("../config/broker/11100/index.js"),
  f = v.getPlatform(),
  x = f.isPCWeixin,
  q = f.isMpPlugin,
  b = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    e.extraData || (e.extraData = {}),
      (e.extraData.timestamp = String(new Date().getTime())),
      t.wx$1.navigateBackMiniProgram(
        n(
          {
            fail: function (i) {
              var r;
              "navigateBackMiniProgram:fail not MiniProgram can navigate back." ===
                (null == i ? void 0 : i.errMsg) &&
                h(
                  (null == (r = null == e ? void 0 : e.extraData)
                    ? void 0
                    : r.path) || ""
                );
            },
          },
          e
        )
      );
  },
  k = (function () {
    var p = r(
      e().mark(function r(p) {
        var d,
          v,
          c,
          f,
          x,
          q,
          k,
          T,
          h,
          P,
          M,
          y,
          w,
          j,
          I,
          C,
          D,
          _,
          A,
          R,
          S,
          V,
          L,
          O,
          z,
          E,
          B;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((A = s.getIsMpPluginComponent()),
                  (R = !1),
                  (null == p ? void 0 : p.linkType) !==
                    u.linkTypeMap.plugin2Embedded)
                ) {
                  e.next = 6;
                  break;
                }
                return (
                  (R = !0),
                  (S =
                    null ==
                    (c =
                      null ==
                      (v =
                        null == (d = requireMiniProgram())
                          ? void 0
                          : d.main2Plugin)
                        ? void 0
                        : v.call(d))
                      ? void 0
                      : c.from),
                  (V = g.getAccountInfo()),
                  (L = V.miniProgram.envVersion),
                  (O =
                    (null ==
                    (q =
                      null ==
                      (x =
                        null == (f = null == global ? void 0 : global.getVm)
                          ? void 0
                          : f.call(global))
                        ? void 0
                        : x.globalData)
                      ? void 0
                      : q.theme) || "light"),
                  (z = new o.AdapterCookie()),
                  (E = n(
                    n(
                      {
                        stat_data: l.getApp().$vm.$stat.getStorageChannelStr(),
                        dealerCode: m.brokerConfig.base.code,
                      },
                      p
                    ),
                    {},
                    {
                      path: p.url,
                      envVersion: null != L ? L : "release",
                      appId: m.brokerConfig.base.appid,
                      extraData: {
                        theme: O,
                        from: S,
                        _from: "broker-plugin",
                        wzq_qluin: z.get("wzq_qluin"),
                        qluin: z.get("qluin"),
                        wzq_qlskey: z.get("wzq_qlskey"),
                        qlskey: z.get("qlskey"),
                        wzq_qlappid: z.get("wzq_qlappid"),
                        qlappid: z.get("qlappid"),
                      },
                    }
                  )),
                  e.abrupt(
                    "return",
                    A
                      ? (null ==
                          (h =
                            null ==
                            (T =
                              null == (k = requireMiniProgram())
                                ? void 0
                                : k.main2Plugin)
                              ? void 0
                              : T.call(k)) || h.handleLink(E),
                        R)
                      : ((function (e) {
                          var r = e.appId,
                            l = void 0 === r ? "" : r,
                            o = e.path,
                            u = void 0 === o ? "" : o,
                            p = e.envVersion,
                            s = void 0 === p ? "" : p,
                            g = e.extraData,
                            d = void 0 === g ? {} : g,
                            v = i(e, a);
                          t.index.openEmbeddedMiniProgram(
                            n(
                              {
                                appId: l,
                                path: u,
                                envVersion: null != s ? s : "release",
                                extraData: d,
                                fail: function (e) {},
                                complete: function () {},
                              },
                              v
                            )
                          );
                        })(E),
                        R)
                  )
                );
              case 6:
                if (
                  (null == p ? void 0 : p.linkType) !==
                    u.linkTypeMap.plugin2Plugin &&
                  (null == p ? void 0 : p.linkType) !==
                    u.linkTypeMap.plugin2MainMp
                ) {
                  e.next = 19;
                  break;
                }
                if (!A) {
                  e.next = 10;
                  break;
                }
                return (
                  (R = !0),
                  "navigateTo" === p.navigateType &&
                    (getCurrentPages().length || 0) >= 10 &&
                    (p.navigateType = "redirectTo"),
                  e.abrupt(
                    "return",
                    (null ==
                      (y =
                        null ==
                        (M =
                          null == (P = requireMiniProgram())
                            ? void 0
                            : P.main2Plugin)
                          ? void 0
                          : M.call(P)) || y.handleLink(p),
                    !0)
                  )
                );
              case 10:
                if (
                  "1" !==
                  (null == (B = t.dist.urltools.param.parse(p.url) || {})
                    ? void 0
                    : B.isRelaunch)
                ) {
                  e.next = 17;
                  break;
                }
                return (
                  (R = !0),
                  (e.next = 15),
                  null ==
                  (I =
                    null ==
                    (j =
                      null == (w = requireMiniProgram())
                        ? void 0
                        : w.main2Plugin)
                      ? void 0
                      : j.call(w))
                    ? void 0
                    : I.updateBrokerInfo()
                );
              case 15:
                return t.index.reLaunch(p), e.abrupt("return", !0);
              case 17:
                if (
                  !(null ==
                  (_ =
                    null ==
                    (D =
                      null == (C = requireMiniProgram())
                        ? void 0
                        : C.main2Plugin)
                      ? void 0
                      : D.call(C))
                    ? void 0
                    : _.isTabbarPage(p.url))
                ) {
                  e.next = 19;
                  break;
                }
                return e.abrupt("return", ((R = !0), t.index.switchTab(p), !0));
              case 19:
                return e.abrupt(
                  "return",
                  ((null == p ? void 0 : p.linkType) ===
                    u.linkTypeMap.mp2Plugin &&
                    ((R = !0), b({ extraData: { path: p.url } })),
                  R)
                );
              case 20:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
    return function (e) {
      return p.apply(this, arguments);
    };
  })(),
  T = "no permission currently",
  h = function () {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "pages/index/index",
      i = g.getAccountInfo(),
      r = i.miniProgram.envVersion,
      n = s.getMpFromSource();
    t.index.navigateToMiniProgram({
      appId: p.MP_INFO[n] || p.MP_INFO.wzqxcx,
      path: e,
      envVersion: r,
      fail: console.error,
    });
  };
(exports.handleLinkMainMp = function (e) {
  var i = e || {},
    r = i.navigateType,
    n = void 0 === r ? "" : r,
    a = i.url;
  if (void 0 === a ? "" : a)
    switch (n) {
      case "switchTab":
        t.index.switchTab(e);
        break;
      case "redirectTo":
        t.index.redirectTo(e);
        break;
      default:
        t.index.navigateTo(e);
    }
  else "navigateBack" === n && t.index.navigateBack();
}),
  (exports.navigateBackMiniProgram = b),
  (exports.navigateTo = (function () {
    var i = r(
      e().mark(function i(r) {
        var a, l;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  k(n(n({}, r), {}, { navigateType: "navigateTo" }))
                );
              case 2:
                (a = e.sent),
                  (l = null == r ? void 0 : r.fail),
                  a ||
                    t.index.navigateTo(
                      n(
                        n({}, r),
                        {},
                        {
                          fail: function (e) {
                            var i, a, t, o, u;
                            null == l || l(e),
                              null == (i = d.aegisReporter) ||
                                i.reportEvent("NAVIGATE-TO-FAIL", {
                                  ext3: JSON.stringify(e || {}),
                                });
                            var p =
                              (null == (a = null == e ? void 0 : e.errMsg)
                                ? void 0
                                : a.indexOf(T)) > -1;
                            x &&
                              q &&
                              p &&
                              (null ==
                                (u =
                                  null ==
                                  (o =
                                    null == (t = requireMiniProgram())
                                      ? void 0
                                      : t.main2Plugin)
                                    ? void 0
                                    : o.call(t)) ||
                                u.handleLink(
                                  n(n({}, r), {}, { isTriggerWithCustom: !0 })
                                ));
                          },
                        }
                      )
                    ),
                  c.pageRouteTimingStart();
              case 5:
              case "end":
                return e.stop();
            }
        }, i);
      })
    );
    return function (e) {
      return i.apply(this, arguments);
    };
  })()),
  (exports.navigateToZxgMiniProgram = h),
  (exports.redirectTo = (function () {
    var i = r(
      e().mark(function i(r) {
        var a, l;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  k(n(n({}, r), {}, { navigateType: "redirectTo" }))
                );
              case 2:
                (a = e.sent),
                  (l = null == r ? void 0 : r.fail),
                  a ||
                    t.index.redirectTo(
                      n(
                        n({}, r),
                        {},
                        {
                          fail: function (e) {
                            var i, a, t, o, u;
                            null == l || l(e),
                              null == (i = d.aegisReporter) ||
                                i.reportEvent("REDIRECT-TO-FAIL", {
                                  ext3: JSON.stringify(e || {}),
                                });
                            var p =
                              (null == (a = null == e ? void 0 : e.errMsg)
                                ? void 0
                                : a.indexOf(T)) > -1;
                            x &&
                              q &&
                              p &&
                              (null ==
                                (u =
                                  null ==
                                  (o =
                                    null == (t = requireMiniProgram())
                                      ? void 0
                                      : t.main2Plugin)
                                    ? void 0
                                    : o.call(t)) ||
                                u.handleLink(
                                  n(n({}, r), {}, { isTriggerWithCustom: !0 })
                                ));
                          },
                        }
                      )
                    ),
                  c.pageRouteTimingStart();
              case 5:
              case "end":
                return e.stop();
            }
        }, i);
      })
    );
    return function (e) {
      return i.apply(this, arguments);
    };
  })());
