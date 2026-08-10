var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  u = require("../../../../../common/vendor.js"),
  s = require("../../stock-crypto-modules-config/dist/index.js");
function p(e) {
  var t = "",
    n = Object.keys(e).length;
  return (
    Object.keys(e).forEach(function (r, c) {
      t =
        c !== n - 1
          ? "".concat(t).concat(r, "=").concat(e[r], "&")
          : "".concat(t).concat(r, "=").concat(e[r]);
    }),
    t
  );
}
var d = {
  getFundIndexList: function (t, u) {
    var s,
      d,
      f = "mp" === t.ENV ? t.getStorage("_qluin") : t.getCookie("wzq_qluin"),
      g =
        ((s = (function (t, n) {
          for (var r in n || (n = {})) o.call(n, r) && a(t, r, n[r]);
          if (c) {
            var u,
              s = e(c(n));
            try {
              for (s.s(); !(u = s.n()).done; ) {
                r = u.value;
                i.call(n, r) && a(t, r, n[r]);
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
          }
          return t;
        })({}, u)),
        (d = { openid: f || u.openid || "" }),
        n(s, r(d)));
    return t.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/rank/index_fund/getRankIndex?".concat(
        p(g)
      )
    );
  },
  getFundList: function (e, t) {
    return e.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/rank/fund/getList?".concat(p(t))
    );
  },
  queryLCTFundList: function (e, t) {
    var n = {
      cmd: "FuitemQueryVo.QueryIndexRelatedFund",
      data: {
        rate_key: "year1_rise_rate",
        limit: 15,
        index_code: t.scode || "",
        offset: 0,
        index_type: "200",
      },
    };
    return e
      .request(
        "https://proxy.finance.qq.com/cgi/cgi-bin/api/lct_proxy/fairy?app=wzq",
        "post",
        n,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  queryFundsIncome: function (e) {
    return u.StockBridge.request(
      "https://wzq.tenpay.com/cgi-bin/openapi_zxgplat.fcgi?action=hsfundtab",
      "POST",
      e
    );
  },
  getPlateFunds: function (e) {
    return (
      "mp" === u.StockBridge.ENV
        ? (e.addWzqSign = !0)
        : (e.sign = (function (e) {
            var t = [];
            for (var n in e) n && t.push("".concat(n, "=").concat(e[n]));
            return (
              t.push("key=".concat(s.dist.SIGN_KEY.wzq_analyse)),
              u.md5Module(t.join("&")).toLowerCase()
            );
          })(e)),
      u.StockBridge.request(
        "https://wzq.tenpay.com/cgi-bin/stockpicking_plat.fcgi?action=xg_plate_stocks.fcgi",
        "POST",
        e
      )
    );
  },
};
exports.FundAPI = d;
