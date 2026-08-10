var e,
  t,
  n = require("../../../../../@babel/runtime/helpers/typeof"),
  o = { exports: {} };
(e = o),
  require("../../../../../common/vendor.js").commonjsGlobal,
  (t = function () {
    return (function (e) {
      var t = {};
      function n(o) {
        if (t[o]) return t[o].exports;
        var a = (t[o] = { exports: {}, id: o, loaded: !1 });
        return (
          e[o].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports
        );
      }
      return (n.m = e), (n.c = t), (n.p = ""), n(0);
    })([
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.ua = void 0);
        var o = n(1);
        Object.keys(o).forEach(function (e) {
          "default" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
        var a = n(13);
        Object.keys(a).forEach(function (e) {
          "default" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            });
        });
        var u = n(19);
        Object.keys(u).forEach(function (e) {
          "default" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            });
        });
        var r = n(25);
        Object.keys(r).forEach(function (e) {
          "default" !== e &&
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            });
        });
        var i = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(2));
        t.ua = i;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.check = t.Checker = void 0);
        var o = f(n(2)),
          a = f(n(3)),
          u = f(n(4)),
          r = f(n(6)),
          i = f(n(9)),
          l = f(n(11));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = (t.Checker = o.default.wx
          ? u.default
          : o.default.mqq
          ? r.default
          : o.default.qzone
          ? i.default
          : o.default.qqnews
          ? l.default
          : a.default);
        t.check = c.check;
      },
      function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (t.parse = function (e) {
          return {
            android: /\bAndroid([^;]+)/.test(e),
            ios: /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(e),
            wx:
              ((t = e.match(/microMessenger\/(\d+)\.([0-9.]+)/i)),
              t && t[1] && t[1] >= 5),
            mqq: (function (e) {
              return e && e[2]
                ? (e = e[2].split("."))[0] > 4 || (4 == e[0] && e[1] >= 7)
                : 0;
            })(e.match(/(V1_AND_SQI?_|QQ\/)([\d\.]+)/i)),
            qzone: (function (e) {
              return !!e;
            })(e.match(/Qzone\//)),
            qqnews: (function (e) {
              return !!e;
            })(e.match(/qqnews\//)),
          };
          var t;
        });
        t.default = n(
          (navigator && (null == navigator ? void 0 : navigator.userAgent)) ||
            ""
        );
      },
      function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          o = (function () {
            function e(t) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.options = {
                  name: t.name || "com.tencent.portfolio",
                  scheme: t.scheme || "qqstock://qqstockweixincallback",
                  sig: t.sig || "98a6788beeaeaa9446e0a7d146d222be",
                });
            }
            return (
              n(e, null, [
                {
                  key: "handler",
                  value: function () {
                    location.href = "https://ifzq.gtimg.cn/appstock/app/appd/";
                  },
                },
                {
                  key: "check",
                  value: function (t, n) {
                    new e({ scheme: n }).check(t);
                  },
                },
              ]),
              n(e, [
                {
                  key: "check",
                  value: function (t) {
                    t(0, e.handler);
                  },
                },
              ]),
              e
            );
          })();
        t.default = o;
      },
      function (e, t, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          u = l(o(5)),
          r = l(o(2)),
          i = l(o(3));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != n(t) && "function" != typeof t)
                  ? e
                  : t;
              })(this, Object.getPrototypeOf(t).apply(this, arguments))
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    n(t)
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(
              t,
              [
                {
                  key: "check",
                  value: function (e) {
                    var t = this.options,
                      n = t.scheme,
                      o = t.name,
                      a = t.sig;
                    t.log,
                      (0, u.default)(function (t) {
                        if (!t) return e(0, i.default.handler);
                        var u, l;
                        (u = function (u) {
                          u
                            ? e(u, function (e) {
                                var i = "string" == typeof e ? e : n;
                                if (r.default.android && u < 120)
                                  t.invoke(
                                    "launch3rdApp",
                                    { packageName: o, signature: a, type: 1 },
                                    function () {}
                                  );
                                else {
                                  var l =
                                      null == navigator
                                        ? void 0
                                        : navigator.userAgent
                                            .toLowerCase()
                                            .match(
                                              /micromessenger\/(\d+)\.(\d+)\.(\d+)/
                                            ),
                                    f = 0;
                                  l &&
                                    l.length >= 4 &&
                                    (f =
                                      100 * parseInt(l[1]) +
                                      parseInt(l[2]) +
                                      parseInt(l[3]) / 1e3),
                                    f >= 605.006
                                      ? t.invoke(
                                          "launchApplication",
                                          { schemeUrl: i },
                                          function (e) {}
                                        )
                                      : (location.href = i);
                                }
                              })
                            : e(0, i.default.handler);
                        }),
                          t.invoke(
                            "getInstallState",
                            { packageUrl: n, packageName: o },
                            function (e) {
                              if (
                                /system:access_denied/i.test(e.err_msg) &&
                                l < 5
                              )
                                return setTimeout(function () {
                                  (l = l || 0), checkIsInstall(l++);
                                }, 100);
                              var t =
                                e.err_msg &&
                                e.err_msg.match(
                                  /get_install_state:yes(_(\d+))?/i
                                );
                              u(t && (!t[1] || parseInt(t[2] || 0)));
                            }
                          );
                      });
                  },
                },
              ],
              [
                {
                  key: "check",
                  value: function (e, n) {
                    r.default.android && (n = n || "tencentstockapp282://"),
                      new t({ scheme: n }).check(e);
                  },
                },
                {
                  key: "handler",
                  value: function () {
                    i.default.handler();
                  },
                },
              ]
            ),
            t
          );
        })(i.default);
        t.default = f;
      },
      function (e, t, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a,
          u =
            "function" == typeof Symbol && "symbol" == n(Symbol.iterator)
              ? function (e) {
                  return n(e);
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol
                    ? "symbol"
                    : n(e);
                },
          r = (a = o(2)) && a.__esModule ? a : { default: a };
        t.default = function (e) {
          if (!r.default.wx) return e();
          var t = function () {
            e(window.WeixinJSBridge);
          };
          "object" ==
            ("undefined" == typeof WeixinJSBridge
              ? "undefined"
              : u(WeixinJSBridge)) && "function" == typeof WeixinJSBridge.invoke
            ? t()
            : document.addEventListener
            ? document.addEventListener("WeixinJSBridgeReady", t, !1)
            : document.attachEvent &&
              (document.attachEvent("WeixinJSBridgeReady", t),
              document.attachEvent("onWeixinJSBridgeReady", t));
        };
      },
      function (e, t, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          u = l(o(7)),
          r = l(o(2)),
          i = l(o(3));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != n(t) && "function" != typeof t)
                  ? e
                  : t;
              })(this, Object.getPrototypeOf(t).apply(this, arguments))
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    n(t)
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(
              t,
              [
                {
                  key: "check",
                  value: function (e) {
                    var t = this.options,
                      n = t.scheme,
                      o = t.name;
                    (0, u.default)(function (t) {
                      if (!t) return e(0, i.default.handler);
                      var a;
                      (a = function (a) {
                        a && "0" !== a
                          ? e(a, function (e) {
                              if (
                                r.default.android &&
                                ((a = a.split("."))[0] < 4 ||
                                  (4 == a[0] && a[1] < 7))
                              )
                                return t.app.launchApp({ name: o });
                              location.href = "string" == typeof e ? e : n;
                            })
                          : e(0, i.default.handler);
                      }),
                        r.default.android
                          ? t.app.checkAppInstalled(o, a)
                          : t.app.isAppInstalled(n.split(":")[0], a);
                    });
                  },
                },
              ],
              [
                {
                  key: "check",
                  value: function (e, n) {
                    new t({ scheme: n }).check(e);
                  },
                },
                {
                  key: "handler",
                  value: function () {
                    i.default.handler();
                  },
                },
              ]
            ),
            t
          );
        })(i.default);
        t.default = f;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = u(n(2)),
          a = u(n(8));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          if (!o.default.mqq) return e();
          (0, a.default)(
            "https://open.mobile.qq.com/sdk/qqapi.js?_bid=152",
            function () {
              e(window.mqq);
            }
          );
        };
      },
      function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = {};
        t.default = function (e, t) {
          1 === n[e]
            ? t()
            : n[e]
            ? n[e].push(t)
            : (function () {
                n[e] = [t];
                var o = document.createElement("script"),
                  a = !1;
                (o.onload = o.onreadystatechange =
                  function () {
                    a ||
                      (this.readyState &&
                        "loaded" !== this.readyState &&
                        "complete" !== this.readyState) ||
                      ((a = !0),
                      n[e].forEach(function (e) {
                        e();
                      }),
                      (n[e] = 1));
                  }),
                  (o.src = e),
                  (
                    document.getElementsByTagName("head")[0] ||
                    document.documentElement
                  ).appendChild(o);
              })();
        };
      },
      function (e, t, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          u = l(o(10)),
          r = l(o(2)),
          i = l(o(3));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != n(t) && "function" != typeof t)
                  ? e
                  : t;
              })(this, Object.getPrototypeOf(t).apply(this, arguments))
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    n(t)
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(
              t,
              [
                {
                  key: "check",
                  value: function (e) {
                    var t = this.options,
                      n = t.scheme,
                      o = t.name;
                    (0, u.default)(function (t, a) {
                      if (!a) return e(0, i.default.handler);
                      var u;
                      (u = function (t) {
                        t
                          ? e(t, function (e) {
                              if (
                                r.default.android &&
                                ((t = t.split("."))[0] < 4 ||
                                  (4 == t[0] && t[1] < 7))
                              )
                                return a.invoke("app", "launchApp", {
                                  name: o,
                                });
                              location.href = "string" == typeof e ? e : n;
                            })
                          : e(0, i.default.handler);
                      }),
                        r.default.android
                          ? a.invoke("app", "checkAppInstalled", { name: o }, u)
                          : a.invoke("app", "isAppInstalled", { name: o }, u);
                    });
                  },
                },
              ],
              [
                {
                  key: "check",
                  value: function (e, n) {
                    new t({ scheme: n }).check(e);
                  },
                },
                {
                  key: "handler",
                  value: function () {
                    i.default.handler();
                  },
                },
              ]
            ),
            t
          );
        })(i.default);
        t.default = f;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = u(n(2)),
          a = u(n(8));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          if (!o.default.qzone) return e();
          (0, a.default)(
            "https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js",
            function () {
              e(window.QZAppExternal, window.mqq);
            }
          );
        };
      },
      function (e, t, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })(),
          u = l(o(12)),
          r = l(o(2)),
          i = l(o(3));
        function l(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var f = (function (e) {
          function t() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != n(t) && "function" != typeof t)
                  ? e
                  : t;
              })(this, Object.getPrototypeOf(t).apply(this, arguments))
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    n(t)
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            a(
              t,
              [
                {
                  key: "check",
                  value: function (e) {
                    var t = this.options,
                      n = t.scheme,
                      o = t.name;
                    (0, u.default)(function (t) {
                      if (!t) return e(0, i.default.handler);
                      var a;
                      (a = function (a) {
                        a
                          ? e(a, function (e) {
                              if (r.default.android) return t.openNativeUrl(o);
                              location.href = "string" == typeof e ? e : n;
                            })
                          : e(0, i.default.handler);
                      }),
                        (window.checkCanOpenNativeUrlCallBack = function (
                          e,
                          t,
                          n
                        ) {
                          var o = t;
                          r.default.android && (o = e), a && a(o);
                        }),
                        r.default.android
                          ? t.checkCanOpenNativeUrl(
                              o,
                              "checkCanOpenNativeUrlCallBack",
                              ""
                            )
                          : t.checkCanOpenNativeUrl(
                              n,
                              "checkCanOpenNativeUrlCallBack",
                              ""
                            );
                    });
                  },
                },
              ],
              [
                {
                  key: "check",
                  value: function (e, n) {
                    new t({ scheme: n }).check(e);
                  },
                },
                {
                  key: "handler",
                  value: function () {
                    i.default.handler();
                  },
                },
              ]
            ),
            t
          );
        })(i.default);
        t.default = f;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = u(n(2)),
          a = u(n(8));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          if (!o.default.qqnews) return e();
          window.TencentNews
            ? e(window.TencentNews)
            : (0, a.default)(
                "https://mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1",
                function () {
                  e(window.TencentNews);
                }
              );
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.share = void 0);
        var o = f(n(2)),
          a = f(n(14)),
          u = f(n(15)),
          r = f(n(16)),
          i = f(n(17)),
          l = f(n(18));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.share = o.default.wx
          ? u.default
          : o.default.mqq
          ? r.default
          : o.default.qzone
          ? i.default
          : o.default.qqnews
          ? l.default
          : a.default;
      },
      function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {}),
          (t.defOptions = {
            img: "https://mat1.gtimg.com/finance/images/stock/p/news_zixuangu/zixuanguLogo.png",
            img_width: "240",
            img_height: "240",
            url: location && location.href,
            desc: " ",
            title: document && document.title,
          });
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = (o = n(5)) && o.__esModule ? o : { default: o },
          u = n(14);
        t.default = function () {
          var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0],
            t = {
              img_url: e.img || u.defOptions.img,
              img_width: e.img ? e.img_width : u.defOptions.img_width,
              img_height: e.img ? e.img_height : u.defOptions.img_height,
              link: e.url || u.defOptions.url,
              desc: e.desc || u.defOptions.desc,
              title: e.title || u.defOptions.title,
            };
          (0, a.default)(function (e) {
            e &&
              (e.on("menu:share:timeline", function () {
                e.invoke("shareTimeline", t, function (e) {});
              }),
              e.on("menu:share:appmessage", function () {
                e.invoke("sendAppMessage", t, function (e) {});
              }));
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = (o = n(7)) && o.__esModule ? o : { default: o },
          u = n(14);
        t.default = function () {
          var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0],
            t = {
              share_url: e.url || u.defOptions.url,
              title: e.title || u.defOptions.title,
              desc: e.desc || u.defOptions.desc,
              image_url: e.img || u.defOptions.img,
            };
          (0, a.default)(function (e) {
            e && e.data.setShareInfo(t, function (e) {});
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = (o = n(10)) && o.__esModule ? o : { default: o },
          u = n(14);
        t.default = function () {
          var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0],
            t = {
              type: "share",
              shareURL: [e.url || u.defOptions.url],
              title: [e.title || u.defOptions.title],
              summary: [e.desc || u.defOptions.desc],
              image: [e.img || u.defOptions.img],
            };
          (0, a.default)(function (e) {
            e && e.setShare(t, function (e) {});
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = (o = n(12)) && o.__esModule ? o : { default: o };
        n(14),
          (t.default = function () {
            var e =
              arguments.length <= 0 || void 0 === arguments[0]
                ? {}
                : arguments[0];
            (0, a.default)(function (t) {
              t && t.setShareArticleInfo(e.title, "", e.desc, e.url, e.img);
            });
          });
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.title = void 0);
        var o = f(n(2)),
          a = f(n(20)),
          u = f(n(21)),
          r = f(n(22)),
          i = f(n(23)),
          l = f(n(24));
        function f(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.title = o.default.wx
          ? u.default
          : o.default.mqq
          ? r.default
          : o.default.qzone
          ? i.default
          : o.default.qqnews
          ? l.default
          : a.default;
      },
      function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            document.title = e;
          });
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), a(n(7));
        var o = a(n(2));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          var t;
          (document.title = e),
            o.default.ios &&
              (((t = document.createElement("iframe")).src = "/favicon.ico"),
              (t.onload = function () {
                document.body.removeChild(t);
              }),
              document.body.appendChild(t));
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = (o = n(7)) && o.__esModule ? o : { default: o };
        t.default = function (e) {
          (document.title = e),
            (0, a.default)(function (e) {
              e && e.ui.refreshTitle();
            });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = (o = n(10)) && o.__esModule ? o : { default: o };
        t.default = function (e) {
          (document.title = e),
            (0, a.default)(function (e, t) {
              t && t.invoke("ui", "refreshTitle", {}, function (e) {});
            });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = (o = n(12)) && o.__esModule ? o : { default: o };
        t.default = function (e) {
          (document.title = e),
            (0, a.default)(function (t) {
              t && t.setTitle(e);
            });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.install = void 0);
        var o = i(n(2)),
          a = i(n(26)),
          u = i(n(27)),
          r = i(n(28));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.install = o.default.wx
          ? u.default
          : o.default.mqq
          ? r.default
          : a.default;
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defOptions = void 0);
        var o,
          a = (o = n(2)) && o.__esModule ? o : { default: o };
        t.default = function (e) {
          var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1];
          (location.href = a.default.android ? t.apk || u.apk : t.url || u.url),
            e(!1, 0);
        };
        var u = (t.defOptions = {
          appid: "100446294",
          apk: "https://dldir1.qq.com/dlomg/istock/apk/QQStock_10032.apk",
          url: "https://ifzq.gtimg.cn/appstock/app/appd/",
          name: "com.tencent.portfolio",
          via: "ANDROIDQQ.QQSTOCK",
          appName: "QQStock",
          md5: "e28c8b0adecb5b0dd1219979e0b60776",
        });
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = i(n(5)),
          a = i(n(2)),
          u = n(26),
          r = i(u);
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1];
          if (!a.default.android) return (0, r.default)(e, t);
          var n = t.md5 || u.defOptions.md5;
          (0, o.default)(function (o) {
            if (!o) return (0, r.default)(e, t);
            var a, i, l;
            (a = window.localStorage && localStorage.getItem("dk_" + n)),
              (i = function () {
                o.invoke(
                  "addDownloadTask",
                  {
                    task_name: t.appName || u.defOptions.appName,
                    task_url: t.apk || u.defOptions.apk,
                    file_md5: n,
                  },
                  function (o) {
                    (a = o.download_id)
                      ? window.localStorage &&
                        localStorage.setItem("dk_" + n, a)
                      : (0, r.default)(e, t);
                  }
                );
              }),
              (l = function (n) {
                switch (n) {
                  case "download_succ":
                    return (
                      o.invoke(
                        "installDownloadTask",
                        { download_id: a },
                        function () {
                          e(1);
                        }
                      ),
                      e(0, 100)
                    );
                  case "downloading":
                    return e(0, 0);
                  case "default":
                    return i(), e(0, 0);
                  case "download_fail":
                    return (0, r.default)(e, t);
                }
              }),
              o.on("wxdownload:state_change", function (e) {
                e.download_id == a && l(e.state);
              }),
              a
                ? o.invoke(
                    "queryDownloadTask",
                    { download_id: a },
                    function (e) {
                      l(e.state);
                    }
                  )
                : i();
          });
        };
      },
      function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = i(n(7)),
          a = i(n(2)),
          u = n(26),
          r = i(u);
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        t.default = function (e) {
          var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1];
          if (!a.default.android) return (0, r.default)(e, t);
          var n = {
            appid: t.appid || u.defOptions.appid,
            url: t.apk || u.defOptions.apk,
            packageName: t.name || u.defOptions.name,
            via: t.via || u.defOptions.via,
            appName: u.defOptions.appName,
          };
          (0, o.default)(function (o) {
            o
              ? ((n.actionCode = 2),
                o.app.downloadApp(n, function t(a) {
                  switch (a.state) {
                    case 2:
                    case 3:
                      return e(0, a.pro);
                    case 4:
                      return (
                        (n.actionCode = 5), o.app.downloadApp(n, t), e(0, 100)
                      );
                    case 6:
                      return e(1);
                  }
                }))
              : (0, r.default)(e, t);
          });
        };
      },
    ]);
  }),
  (e.exports = t());
var a = o.exports;
exports.mapiExports = a;
