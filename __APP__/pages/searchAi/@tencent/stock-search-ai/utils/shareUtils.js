var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  p = function (t, r) {
    for (var n in r || (r = {})) a.call(r, n) && i(t, n, r[n]);
    if (o) {
      var p,
        s = e(o(r));
      try {
        for (s.s(); !(p = s.n()).done; ) {
          n = p.value;
          c.call(r, n) && i(t, n, r[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return t;
  },
  s = function (e, t) {
    return r(e, n(t));
  },
  l = require("../../../../../common/vendor.js"),
  u = require("./hostUtils.js");
(exports.fetchAIShareContent = function (e) {
  var t = "https://".concat(
      u.getHost(),
      "/svr/openai/session/query_share_dialog"
    ),
    r = { sharecode: e };
  return (
    l.StockBridge.ENV === l.EnvTypeEnum.MP
      ? (r = s(p({}, r), {
          app: "wzqxcx",
          openid: l.wx$1.getStorageSync("_qluin"),
          fskey: l.wx$1.getStorageSync("_qlskey"),
          check: 12,
        }))
      : "mpweapp" === l.ShellTypeEnum.SHY && (t = "".concat(t, "?channel=1")),
    l.StockBridge.request(t, "POST", r, {
      headers: {
        referer: "https://finance.qq.com",
        "Content-Type": "application/json",
      },
    })
  );
}),
  (exports.uploadAIShareContent = function (e) {
    var t = "https://".concat(u.getHost(), "/svr/openai/session/share_dialog"),
      r = { dialogid: e };
    return (
      l.StockBridge.ENV === l.EnvTypeEnum.MP
        ? (r = s(p({}, r), {
            openid: l.wx$1.getStorageSync("_qluin"),
            fskey: l.wx$1.getStorageSync("_qlskey"),
            check: 12,
          }))
        : "mpweapp" === l.ShellTypeEnum.SHY && (t = "".concat(t, "?channel=1")),
      l.StockBridge.request(t, "POST", r, {
        headers: {
          referer: "https://finance.qq.com",
          "Content-Type": "application/json",
        },
      })
    );
  });
