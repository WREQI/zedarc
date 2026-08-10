var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  a = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  o = function (e, t, n) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t, n) {
    return new Promise(function (r, a) {
      var c = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(c, u);
        };
      i((n = n.apply(e, t)).next());
    });
  },
  l = require("../common/vendor.js"),
  p = new ((function () {
    function a() {
      n(this, a);
    }
    return (
      r(a, [
        {
          key: "get",
          value: function (e, n, r, a) {
            var s = l.login.getLoginInfo() || {},
              p = s.qluin,
              f = s.qlskey,
              h = getApp().globalData;
            if (p && f) {
              var g = (function (e, n) {
                for (var r in n || (n = {})) u.call(n, r) && o(e, r, n[r]);
                if (c) {
                  var a,
                    s = t(c(n));
                  try {
                    for (s.s(); !(a = s.n()).done; ) {
                      r = a.value;
                      i.call(n, r) && o(e, r, n[r]);
                    }
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                }
                return e;
              })(
                {
                  app: "zxg_xcx",
                  check: "11",
                  appid: "wx4ffb369b6881ee5e",
                  openid: p,
                  fskey: f,
                },
                r || {}
              );
              return new Promise(function (t, r) {
                h.wx.request({
                  url: "".concat(e).concat(n),
                  method: "GET",
                  data: g,
                  forceCallback: !0,
                  success: function (e) {
                    t(a ? e : (null == e ? void 0 : e.data) || {});
                  },
                  fail: function () {
                    r();
                  },
                });
              });
            }
          },
        },
        {
          key: "getSyncStatus",
          value: function () {
            return s(
              this,
              null,
              e().mark(function t() {
                var n, r;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n =
                              l.wx$1 &&
                              l.wx$1.getLaunchOptionsSync &&
                              l.wx$1.getLaunchOptionsSync()),
                            (r = n ? n.scene : ""),
                            e.abrupt(
                              "return",
                              this.get(l.API_ZXG, "getSyncStatus", { scene: r })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "setSyncStatus",
          value: function (t) {
            return s(
              this,
              null,
              e().mark(function n() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            this.get(l.API_ZXG, "setSyncStatus", t)
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
        },
        {
          key: "getChooseGroupList",
          value: function (t) {
            return s(
              this,
              null,
              e().mark(function n() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            this.get(l.API_ZXG, "groupInfos", t)
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
        },
        {
          key: "getChooseRedbagList",
          value: function () {
            return s(
              this,
              null,
              e().mark(function t() {
                var n, r, a, c, u, i, o, s;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = getApp().globalData),
                          (e.next = 3),
                          l.Wuji.get({
                            appid: "act",
                            schemaid: "wave_redbag_choose_list",
                            schemakey: "0ef15873acf642f6a5bc3c5990fc9a64",
                          })
                        );
                      case 3:
                        if (((r = e.sent), (a = r.data), 200 != +r.code)) {
                          e.next = 12;
                          break;
                        }
                        if (
                          ((c = a[0] || {}),
                          (u = c.valid_mp),
                          (i = c.allow_range),
                          1 != +u)
                        ) {
                          e.next = 12;
                          break;
                        }
                        if (
                          ((o = new Date()
                            .toTimeString()
                            .slice(0, 5)
                            .replace(":", "")),
                          (s = i.split(";")),
                          !(
                            (o >= s[0] && o <= s[1]) ||
                            (o >= s[2] && o <= s[3])
                          ))
                        ) {
                          e.next = 12;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          new Promise(function (e, t) {
                            n.wx.request({
                              url: l.API_QUERY_STOCK_TAP,
                              data: { app: "zxg_xcx" },
                              method: "POST",
                              header: { "Content-Type": "application/json" },
                              success: function (t) {
                                return e(t);
                              },
                              fail: function (e) {
                                return t(e);
                              },
                            });
                          })
                        );
                      case 12:
                        return e.abrupt(
                          "return",
                          Promise.resolve({ redpockets: [] })
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
        },
        {
          key: "set",
          value: function (e, t, n) {
            var r = l.login.getLoginInfo() || {},
              a = r.qluin,
              c = r.qlskey,
              u = getApp().globalData;
            if (a && c) {
              var i = {
                app: "zxg_xcx",
                check: "11",
                appid: "wx4ffb369b6881ee5e",
                openid: a,
                fskey: c,
              };
              return new Promise(function (r, a) {
                u.wx.request({
                  url: ""
                    .concat(e)
                    .concat(t, "?")
                    .concat(
                      Object.keys(i)
                        .map(function (e) {
                          return "".concat(e, "=").concat(i[e]);
                        })
                        .join("&")
                    ),
                  method: "POST",
                  header: { "Content-Type": "application/json" },
                  data: n,
                  forceCallback: !0,
                  success: function (e) {
                    r(e || {});
                  },
                  fail: function () {
                    a();
                  },
                });
              });
            }
          },
        },
        {
          key: "userSettingsBatchGet",
          value: function (e) {
            return this.get(l.CGI_ZXG, "zxgapi/usersettings/batchget", e, !0);
          },
        },
        {
          key: "userSettingsBatchSet",
          value: function (e) {
            return this.set(l.CGI_ZXG, "zxgapi/usersettings/batchset", e);
          },
        },
      ]),
      a
    );
  })())();
exports.zxgApi = p;
