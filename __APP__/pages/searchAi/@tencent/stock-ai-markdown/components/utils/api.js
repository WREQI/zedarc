var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (e, n, c) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (e[n] = c);
  },
  s = function (t, n) {
    for (var c in n || (n = {})) o.call(n, c) && i(t, c, n[c]);
    if (r) {
      var s,
        p = e(r(n));
      try {
        for (p.s(); !(s = p.n()).done; ) {
          c = s.value;
          a.call(n, c) && i(t, c, n[c]);
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    }
    return t;
  },
  p = function (e, t) {
    return n(e, c(t));
  },
  u = require("../../../../../../common/vendor.js"),
  f = require("../../../stock-crypto-modules-config/dist/index.js"),
  m = function (e) {
    return "mp" === e.ENV ? "zxg_xcx" : "mini_h5";
  },
  l = function (t) {
    var n,
      c =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET",
      r = arguments.length > 2 ? arguments[2] : void 0,
      o = [],
      a = Object.keys(t).sort(),
      i = e(a);
    try {
      for (i.s(); !(n = i.n()).done; ) {
        var f = n.value;
        void 0 !== t[f] &&
          "" !== t[f] &&
          o.push("".concat(f, "=").concat(t[f]));
      }
    } catch (e) {
      i.e(e);
    } finally {
      i.f();
    }
    var m = u.md5Module("".concat(r).concat(c.toUpperCase())).toUpperCase();
    return (
      o.push("key=".concat(m)),
      p(s({}, t), {
        "x-appid": r,
        "x-sa-v": 2,
        "x-sa-sign": u.md5Module(o.join("&")).toLowerCase(),
        "x-timestamp": parseInt(t.t / 1e3, 10),
      })
    );
  };
(exports.getDepthData = function (e, t) {
  var n = l(t, "get", m(e));
  t = s(s({}, t), n);
  var c =
    "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/miniapp/companytab?".concat(
      Object.keys(t)
        .map(function (e) {
          return "".concat(e, "=").concat(t[e]);
        })
        .join("&")
    );
  return e.request(c, "GET", {}, { forceCallback: !0 });
}),
  (exports.getFinanceBasic = function (e, t) {
    var n =
      "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finance/basic?symbol="
        .concat(t, "&all=1&app=")
        .concat(m(e));
    return e.request(n, "GET");
  }),
  (exports.getFinanceData = function (e, t) {
    var n = m(e),
      c = p(s({}, t), {
        scenes: 6,
        come_from: "3",
        app: n,
        t: new Date().getTime(),
      });
    if ("mp" === e.ENV) {
      var r = (
          (u.wx$1.getDeviceInfo && u.wx$1.getDeviceInfo()) ||
          u.wx$1.getSystemInfoSync()
        ).platform,
        o = void 0 === r ? "" : r;
      (c.scenes = "ios" === o ? 5 : 6), (c.xcxname = n);
    }
    var a = l(c, "get", n);
    c = s(s({}, c), a);
    var i =
      "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/miniapp/financetab?".concat(
        Object.keys(c)
          .map(function (e) {
            return "".concat(e, "=").concat(c[e]);
          })
          .join("&")
      );
    return e.request(i, "GET", {}, { forceCallback: !0 });
  }),
  (exports.getFinanceMain = function (e, t) {
    var n =
      "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finance/main?symbol="
        .concat(t, "&all=1&app=")
        .concat(m(e));
    return e.request(n, "GET");
  }),
  (exports.getSnpGwNewsSummaryList = function (e, t) {
    var n = "appid=wzq&ids=".concat(t, "&key=").concat(f.dist.SIGN_KEY.wzq_snp);
    n = u.md5Module(n);
    var c =
      "https://snp.tenpay.com/cgi-bin/snpgw_news_summary_list.fcgi?appid=wzq&ids="
        .concat(t, "&sign=")
        .concat(n);
    return e.request(c, "GET", null, { headers: { "x-sa-sign": n } });
  });
