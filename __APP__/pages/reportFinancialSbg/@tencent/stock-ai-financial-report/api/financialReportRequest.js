var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  p = function (t, r) {
    for (var n in r || (r = {})) i.call(r, n) && c(t, n, r[n]);
    if (o) {
      var p,
        a = e(o(r));
      try {
        for (a.s(); !(p = a.n()).done; ) {
          n = p.value;
          s.call(r, n) && c(t, n, r[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return t;
  },
  a = function (e, t) {
    return r(e, n(t));
  },
  u = require("../../../../../common/vendor.js"),
  l = require("../../stock-news-core/utils/request/index.js"),
  f = require("../../stock-news-core/utils/tools.js"),
  g = require("../../../js-cookie/src/js.cookie.js");
(exports.getFinancialReportData = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = f.md5(),
    r = t.zappid,
    n = t.sign,
    o = t.nonce,
    i = p({ zappid: r, sign: n, nonce: o }, e);
  return (
    (i = u.wx$1
      ? a(p({}, i), {
          openId: u.wx$1.getStorageSync("_qluin"),
          fsKey: u.wx$1.getStorageSync("_qlskey"),
        })
      : a(p({}, i), {
          openId: g.cookie.get("wzq_qluin"),
          fsKey: g.cookie.get("wzq_qlskey"),
        })),
    l.request("https://snp.tenpay.com/cgi-bin/snpgw_report_newsinfo.fcgi", i, {
      method: "get",
      isShowToast: !1,
    })
  );
}),
  (exports.getFinancialReportListData = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = f.md5(),
      r = t.zappid,
      n = p({ zappid: r }, e);
    return l.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/news/info/report_news",
      n,
      { method: "get", isShowToast: !1 }
    );
  }),
  (exports.getFinancialSearchListData = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = f.md5(),
      r = t.zappid,
      n = p({ zappid: r }, e);
    return l.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/news/info/search_report_news",
      n,
      { method: "get", isShowToast: !1 }
    );
  }),
  (exports.isAppEnv = function () {
    return !1;
  }),
  (exports.isMPEnv = function () {
    return !0;
  }),
  (exports.isWZQEnv = function () {
    return !1;
  }),
  (exports.isWebEnv = function () {
    return !1;
  });
