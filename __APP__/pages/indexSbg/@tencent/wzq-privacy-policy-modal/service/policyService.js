var e = require("../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, n) {
    for (var r in n || (n = {})) c.call(n, r) && u(e, r, n[r]);
    if (a) {
      var o,
        l = t(a(n));
      try {
        for (l.s(); !(o = l.n()).done; ) {
          r = o.value;
          i.call(n, r) && u(e, r, n[r]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  s = function (e, t) {
    return r(e, o(t));
  },
  p = require("../../../../../common/vendor.js"),
  d = p.getPrivacyRuntime().app,
  f = "".concat(
    (function () {
      var e = "https://wzq.tenpay.com/";
      if (p.StockBridge.ENV === p.EnvTypeEnum.MP) return e;
      var t = window.location.host;
      return t.includes("zqact") && t.includes("tenpay.com")
        ? "https://".concat(t, "/")
        : e;
    })(),
    "svr/user/user_service"
  ),
  v = "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/",
  y = p.StockBridge.ENV === p.EnvTypeEnum.MP;
(exports.getSyncStatus = function () {
  return (function (e, t, n) {
    var r = y
        ? p.wx$1.getStorageSync("_qluin")
        : p.StockBridge.getCookie("wzq_qluin"),
      o = y
        ? p.wx$1.getStorageSync("_qlskey")
        : p.StockBridge.getCookie("wzq_qlskey");
    if (r && o) {
      var a = l(
          {
            app: d,
            check: "11",
            appid: "wx4ffb369b6881ee5e",
            openid: r,
            fskey: o,
          },
          {} || {}
        ),
        c = Object.keys(a)
          .map(function (e) {
            return "".concat(e, "=").concat(a[e]);
          })
          .join("&");
      return p.StockBridge.request(
        ""
          .concat("https://proxy.finance.qq.com/newstock/stockapp/zixuangu/")
          .concat("getSyncStatus", "?")
          .concat(c)
      ).then(function (e) {
        var t, n;
        return (null == (t = null == e ? void 0 : e.data) ? void 0 : t.data)
          ? null == (n = null == e ? void 0 : e.data)
            ? void 0
            : n.data
          : (null == e ? void 0 : e.data) || {};
      });
    }
  })();
}),
  (exports.setSyncStatus = function (e) {
    var t = y
        ? p.wx$1.getStorageSync("_qluin")
        : p.StockBridge.getCookie("wzq_qluin"),
      n = y
        ? p.wx$1.getStorageSync("_qlskey")
        : p.StockBridge.getCookie("wzq_qlskey");
    if (!t || !n) return Promise.resolve({ code: -1 });
    var r = l(
        {
          app: d,
          check: "11",
          appid: "wx4ffb369b6881ee5e",
          openid: t,
          fskey: n,
        },
        e || {}
      ),
      o = Object.keys(r)
        .map(function (e) {
          return "".concat(e, "=").concat(r[e]);
        })
        .join("&");
    return p.StockBridge.request(
      "".concat(v, "setSyncStatus?").concat(o),
      "get"
    ).then(function (e) {
      var t;
      return (null == (t = null == e ? void 0 : e.data) ? void 0 : t.data)
        ? e.data.data
        : (null == e ? void 0 : e.data) || e || {};
    });
  }),
  (exports.updateUserAgreementStatusByProtocols = function (n) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
      o = n,
      u = o.protocols,
      v = void 0 === u ? [] : u,
      y = (function (e, n) {
        var r = {};
        for (var o in e) c.call(e, o) && n.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && a) {
          var u,
            l = t(a(e));
          try {
            for (l.s(); !(u = l.n()).done; ) {
              o = u.value;
              n.indexOf(o) < 0 && i.call(e, o) && (r[o] = e[o]);
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        }
        return r;
      })(o, ["protocols"]),
      g = v.reduce(function (t, n) {
        var r = (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return e.__agreement_scene__ || "";
          })(n),
          o = t[r] || [];
        return o.push(n), s(l({}, t), e({}, r, o));
      }, {}),
      S = Object.keys(g)
        .map(function (e) {
          var t = (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return Array.from(
              new Set(
                e
                  .map(function (e) {
                    return null == e ? void 0 : e.id;
                  })
                  .filter(Boolean)
              )
            );
          })(g[e]);
          return 0 === t.length
            ? null
            : (function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : d;
                return p.StockBridge.request(
                  "".concat(f, "/update_agreement"),
                  "POST",
                  e,
                  {
                    headers: {
                      "x-app": t || d,
                      "Content-Type": "application/json",
                    },
                  }
                );
              })(
                l(s(l({}, y), { agreement_ids: t }), e ? { scene: e } : {}),
                r
              );
        })
        .filter(Boolean);
    return 0 === S.length ? Promise.resolve([]) : Promise.all(S);
  });
