var e = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../@babel/runtime/helpers/regeneratorRuntime"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = function (e, t, n) {
    return new Promise(function (r, o) {
      var l = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(l, u);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  a = require("../common/vendor.js"),
  i = !1,
  s = !0,
  p = null,
  f = null,
  // DevTools may load this helper before the App instance is available.
  v = (function () {
    var app, fallback;
    try {
      app = typeof getApp === "function" && getApp();
    } catch (e) {}
    fallback =
      (typeof global !== "undefined" && global.__SAFE_GLOBAL_DATA__) || {};
    var data = (app && app.globalData) || fallback;
    data.mpReporter = data.mpReporter || {
      reportEvent: function () {},
      log: function () {},
    };
    return data;
  })(),
  d = {};
function g(e, n) {
  return c(
    this,
    null,
    t().mark(function r() {
      var o;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (t.next = 3),
                require
                  .async(
                    "../pages/indexSbg/@tencent/stock-hq-data/websocket/mp.js"
                  )
                  .then(function (e) {
                    return e.mp;
                  })
              );
            case 3:
              return (
                (t.t0 = t.sent.default),
                (t.t1 = e),
                (t.t2 = a.wx$1.connectSocket),
                (o = new t.t0(t.t1, t.t2)),
                t.abrupt(
                  "return",
                  ((o.handleError = function (e) {
                    if (e) {
                      var t = n
                        ? "MONITOR-HQ-WEBSOCKET-ERROR"
                        : "MONITOR-HQ-PC-WEBSOCKET-ERROR";
                      "websocket-close-event" === e.event_type &&
                        (t = n
                          ? "MONITOR-HQ-WEBSOCKET-CLOSE"
                          : "MONITOR-HQ-PC-WEBSOCKET-CLOSE"),
                        v.mpReporter.reportEvent(t, {
                          ext3: JSON.stringify(e),
                        });
                    }
                  }),
                  o)
                )
              );
            case 8:
            case "end":
              return t.stop();
          }
      }, r);
    })
  );
}
function h(n) {
  var v = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return c(
    this,
    null,
    t().mark(function c() {
      var d;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if (
                ((d = (function (t, n) {
                  for (var c in n || (n = {})) o.call(n, c) && u(t, c, n[c]);
                  if (r) {
                    var a,
                      i = e(r(n));
                    try {
                      for (i.s(); !(a = i.n()).done; ) {
                        c = a.value;
                        l.call(n, c) && u(t, c, n[c]);
                      }
                    } catch (e) {
                      i.e(e);
                    } finally {
                      i.f();
                    }
                  }
                  return t;
                })(
                  {
                    auth: {
                      openId: a.wx$1.getStorageSync("_qluin"),
                      token: a.wx$1.getStorageSync("_qlskey"),
                    },
                  },
                  n
                )),
                !v)
              ) {
                t.next = 13;
                break;
              }
              if (!p) {
                t.next = 6;
                break;
              }
              p.changeOptions(d, a.wx$1.connectSocket), (t.next = 10);
              break;
            case 6:
              return (t.next = 8), g(d, v);
            case 8:
              (p = t.sent),
                i ||
                  ((i = !0),
                  a.wx$1.onNetworkStatusChange(function (e) {
                    var t = e.isConnected;
                    p &&
                      ((p.online = t),
                      t
                        ? s ||
                          (p.pull(),
                          p.open(a.wx$1.connectSocket),
                          (f = setTimeout(function () {
                            p.online &&
                              !p.responsed &&
                              (p.close(), p.pull(), p.switchToPull());
                          }, 3e3)))
                        : (clearTimeout(f), (p.retryCount = 0), p.close())),
                      (s = t);
                  }));
            case 10:
              (t.t0 = p), (t.next = 16);
              break;
            case 13:
              return (t.next = 15), g(d, v);
            case 15:
              t.t0 = t.sent;
            case 16:
              return t.abrupt("return", t.t0);
            case 17:
            case "end":
              return t.stop();
          }
      }, c);
    })
  );
}
function w(e) {
  e
    ? e.close()
    : p &&
      (p.changeOptions(
        {
          auth: {
            openId: a.wx$1.getStorageSync("_qluin"),
            token: a.wx$1.getStorageSync("_qlskey"),
          },
          topic: "quote_qt",
          tag: [],
          stockList: ["hk00700"],
        },
        a.wx$1.connectSocket
      ),
      (p.handleData = function () {}),
      (p.pull = function () {}));
}
var S = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      addToGlobalWS: function (e, t) {
        d[e] ? d[e].ws.push(t) : (d[e] = { ws: [t] });
      },
      changeStockList: function (e, t) {
        t ? t.changeStockList(e) : p && p.changeStockList(e);
      },
      close: function () {
        p && (p.close(), (p = null));
      },
      delayToClearWSByPageId: function (e) {
        var t, n;
        (null == (n = null == (t = d[e]) ? void 0 : t.ws)
          ? void 0
          : n.length) &&
          (function (e) {
            for (
              var t,
                n,
                r,
                o,
                l,
                u,
                c,
                a = (null == (t = d[e]) ? void 0 : t.ws) || [],
                i = a.length - 1;
              i >= 0;
              i--
            ) {
              var s = a[i];
              (null == s ? void 0 : s.pullMode)
                ? ((null == s ? void 0 : s.pullInterval) &&
                    !(null == s ? void 0 : s.ws) &&
                    (null == s || s.close()),
                  2 === (null == s ? void 0 : s.retryCount) &&
                    (null == (r = null == (n = d[e]) ? void 0 : n.ws) ||
                      r.splice(i, 1)))
                : !(null == s ? void 0 : s.pullMode) &&
                  (null == s ? void 0 : s.ws) &&
                  (null == s ? void 0 : s.responsed) &&
                  (null == s || s.close(),
                  null == (l = null == (o = d[e]) ? void 0 : o.ws) ||
                    l.splice(i, 1));
            }
            (null == (c = null == (u = d[e]) ? void 0 : u.ws)
              ? void 0
              : c.length) || delete d[e];
          })(e);
      },
      getInstance: h,
      stop: w,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
(exports.getInstance = h), (exports.hqWSHelper = S), (exports.stop = w);
