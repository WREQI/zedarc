var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  s = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, n) {
    for (var r in n || (n = {})) a.call(n, r) && s(e, r, n[r]);
    if (o) {
      var c,
        p = t(o(n));
      try {
        for (p.s(); !(c = p.n()).done; ) {
          r = c.value;
          i.call(n, r) && s(e, r, n[r]);
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    }
    return e;
  },
  u = function (e, t) {
    return r(e, c(t));
  },
  f = require("../../../../../common/vendor.js"),
  l = require("../../stock-search-ai/hooks/useComponentConfigHooks.js"),
  g = require("../util/route.js"),
  m = Object.create(f.StockBridge);
g.isAPP &&
  Object.assign(m, {
    request: function (t) {
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), c = 1;
        c < n;
        c++
      )
        r[c - 1] = arguments[c];
      return (
        (o = exports),
        (a = [t].concat(r)),
        (i = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "GET",
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            c =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          return e().mark(function o() {
            var a;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = p(p({}, c.params), r)),
                      (e.next = 3),
                      l.h5Request(t, a, { method: n })
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, o);
          })();
        }),
        new Promise(function (e, t) {
          var n = function (e) {
              try {
                c(i.next(e));
              } catch (e) {
                t(e);
              }
            },
            r = function (e) {
              try {
                c(i.throw(e));
              } catch (e) {
                t(e);
              }
            },
            c = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r);
            };
          c((i = i.apply(o, a)).next());
        })
      );
      var o, a, i;
    },
  });
var x = function (e) {
  var n,
    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET",
    c = arguments.length > 2 ? arguments[2] : void 0,
    o = [],
    a = Object.keys(e).sort(),
    i = t(a);
  try {
    for (i.s(); !(n = i.n()).done; ) {
      var s = n.value;
      void 0 !== e[s] && "" !== e[s] && o.push("".concat(s, "=").concat(e[s]));
    }
  } catch (e) {
    i.e(e);
  } finally {
    i.f();
  }
  var l = f.md5Module("".concat(c).concat(r.toUpperCase())).toUpperCase();
  return (
    o.push("key=".concat(l)),
    u(p({}, e), {
      "x-appid": c,
      "x-sa-v": 2,
      "x-sa-sign": f.md5Module(o.join("&")).toLowerCase(),
      "x-timestamp": parseInt(e.t / 1e3, 10),
    })
  );
};
(exports.HQBridge = m),
  (exports.getDepthData = function (e, t) {
    var n, r;
    (n = "zxg_xcx"),
      (r = g.isiOS ? 5 : 6),
      (t = p(
        p(
          {
            scenes: r,
            come_from: "3",
            xcxname: n,
            t: new Date().getTime(),
            app: n,
          },
          { xcxname: n }
        ),
        t
      ));
    var c = x(t, "get", "zxg_xcx");
    t = p(p({}, t), c);
    var o =
      "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/miniapp/companytab?".concat(
        Object.keys(t)
          .map(function (e) {
            return "".concat(e, "=").concat(t[e]);
          })
          .join("&")
      );
    return e.request(o, "GET", {}, { forceCallback: !0 });
  }),
  (exports.getFinanceBasic = function (e, t) {
    var n =
      "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finance/basic?symbol=".concat(
        t,
        "&all=1&app=zxg_xcx"
      );
    return e.request(n, "GET");
  }),
  (exports.getFinanceData = function (e, t) {
    var n = "zxg_xcx",
      r = u(p({}, t), {
        scenes: 6,
        come_from: "3",
        app: n,
        t: new Date().getTime(),
      }),
      c = (
        (f.wx$1.getDeviceInfo && f.wx$1.getDeviceInfo()) ||
        f.wx$1.getSystemInfoSync()
      ).platform,
      o = void 0 === c ? "" : c;
    (r.scenes = "ios" === o ? 5 : 6), (r.xcxname = n);
    var a = x(r, "get", n);
    r = p(p({}, r), a);
    var i =
      "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/miniapp/financetab?".concat(
        Object.keys(r)
          .map(function (e) {
            return "".concat(e, "=").concat(r[e]);
          })
          .join("&")
      );
    return e.request(i, "GET", {}, { forceCallback: !0 });
  }),
  (exports.getFinanceMain = function (e, t) {
    var n =
      "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finance/main?symbol=".concat(
        t,
        "&all=1&app=zxg_xcx"
      );
    return e.request(n, "GET");
  }),
  (exports.getIntlProfitForecast = function (e, t) {
    var n =
      "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/hkStockinfo/ylyc?symbol=".concat(
        t
      );
    return e.request(n, "GET");
  });
