require("../../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../../../../../../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../../../../../../../@babel/runtime/helpers/createClass"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t, r) {
    return new Promise(function (a, n) {
      var o = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            n(e);
          }
        },
        i = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(o, s);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  h = require("../../../../../../../../../common/vendor.js"),
  v = function () {
    var e = h.wx$1.getSystemInfoSync(),
      t = e.platform,
      r = e.version,
      a = e.system;
    return {
      env: { IS_PCWEIXIN: /(windows|mac)/i.test(t) },
      platformVersion: r,
      os: a,
    };
  },
  b = (function () {
    function n() {
      r(this, n), this.initGlobalData();
    }
    return (
      a(n, [
        {
          key: "initGlobalData",
          value: function () {
            try {
              var e = getApp();
              e.globalData || (e.globalData = {}),
                e.globalData.sessionCache || (e.globalData.sessionCache = {});
            } catch (e) {}
          },
        },
        {
          key: "getSession",
          value: function (e) {
            try {
              var t = getApp().globalData.sessionCache[e] || null;
              return Promise.resolve(t);
            } catch (e) {
              return Promise.resolve(null);
            }
          },
        },
        {
          key: "setSession",
          value: function (e, t) {
            try {
              var r = getApp();
              r.globalData.sessionCache || (r.globalData.sessionCache = {}),
                (r.globalData.sessionCache[e] = t);
            } catch (e) {}
          },
        },
        {
          key: "removeSession",
          value: function (e) {
            try {
              var t = getApp();
              t.globalData.sessionCache && delete t.globalData.sessionCache[e];
            } catch (e) {}
          },
        },
        {
          key: "clearSession",
          value: function () {
            try {
              getApp().globalData.sessionCache = {};
            } catch (e) {}
          },
        },
        {
          key: "backHome",
          value: function (e) {
            h.StockBridge.routeTo({
              url: "/pages/act/webview/main?url=".concat(encodeURIComponent(e)),
            });
          },
        },
        {
          key: "shareFriend",
          value: function (r) {
            var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "OUo00p000d452";
            return p(
              this,
              null,
              e().mark(function n() {
                var p, v;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null == r ? void 0 : r.share_code) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            (h.StockBridge.toast(
                              "系统繁忙，请稍后重试",
                              "none",
                              { duration: 3e3 }
                            ),
                            !1)
                          );
                        case 2:
                          return (
                            (e.prev = 2),
                            (v = (function (e, r) {
                              for (var a in r || (r = {}))
                                c.call(r, a) && l(e, a, r[a]);
                              if (i) {
                                var n,
                                  o = t(i(r));
                                try {
                                  for (o.s(); !(n = o.n()).done; ) {
                                    a = n.value;
                                    u.call(r, a) && l(e, a, r[a]);
                                  }
                                } catch (e) {
                                  o.e(e);
                                } finally {
                                  o.f();
                                }
                              }
                              return e;
                            })({}, r)),
                            (p = o(
                              v,
                              s({
                                share_source: "thirteenYearAskQuestion",
                                shareStat: a,
                              })
                            )),
                            e.abrupt(
                              "return",
                              (h.StockBridge.busEmit(
                                "common-ai-prompt-share",
                                p
                              ),
                              !0)
                            )
                          );
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(2)),
                            e.abrupt(
                              "return",
                              (h.StockBridge.toast(
                                "系统繁忙，请稍后重试",
                                "none",
                                { duration: 3e3 }
                              ),
                              !1)
                            )
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  null,
                  [[2, 7]]
                );
              })
            );
          },
        },
        {
          key: "processShareUrl",
          value: function (e) {
            if (!e) return "";
            if (e.startsWith("pages/act/webview/main")) return e;
            var t = e;
            if (!e.includes("lite=")) {
              var r = e.includes("?") ? "&" : "?";
              t = "".concat(e).concat(r, "lite=0");
            }
            return (
              t.startsWith("http://") || t.startsWith("https://"),
              "pages/act/webview/main?url=".concat(encodeURIComponent(t))
            );
          },
        },
        {
          key: "shareActivity",
          value: function () {
            return p(this, arguments, function () {
              var t = this,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return e().mark(function a() {
                var n, o, s, i, c, u, l, p, v, b;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = r.shareUrl),
                            (o = r.shareImage),
                            (s =
                              void 0 === o
                                ? "https://st.gtimg.com/design/f16c733c8ee95996d9275f5cd6068398.png"
                                : o),
                            (i = r.title),
                            (c = void 0 === i ? "活动分享" : i),
                            (u = r.summary),
                            (l = void 0 === u ? "快来参与活动吧！" : u),
                            (p = r.callback),
                            (v = void 0 === p ? function () {} : p),
                            (e.prev = 1),
                            (b = {
                              shareUrl: t.processShareUrl(n),
                              shareImage: s,
                              title: c,
                              summary: l,
                              share_source: "thirteenYearTask",
                            }),
                            e.abrupt(
                              "return",
                              (h.StockBridge.busEmit(
                                "common-ai-prompt-share",
                                b
                              ),
                              v(),
                              !0)
                            )
                          );
                        case 6:
                          return (
                            (e.prev = 6),
                            (e.t0 = e.catch(1)),
                            e.abrupt(
                              "return",
                              (h.StockBridge.toast(
                                "系统繁忙，请稍后重试",
                                "none",
                                { duration: 3e3 }
                              ),
                              !1)
                            )
                          );
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  a,
                  null,
                  [[1, 6]]
                );
              })();
            });
          },
        },
      ]),
      n
    );
  })();
"mp" === h.StockBridge.ENV || v().env;
var m = new b();
(exports.detect = v), (exports.platform = m);
