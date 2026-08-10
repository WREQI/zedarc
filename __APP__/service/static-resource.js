var s = require("../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js"), require("./broker.js");
var e = require("./request/index.js"),
  d = require("../config/broker/11100/index.js"),
  i = {
    "/address-data/cities/110000.json":
      "/address-data/cities/110000.d3454c01.json",
    "/address-data/cities/120000.json":
      "/address-data/cities/120000.97fb807e.json",
    "/address-data/cities/130000.json":
      "/address-data/cities/130000.8a445d90.json",
    "/address-data/cities/140000.json":
      "/address-data/cities/140000.44a74786.json",
    "/address-data/cities/150000.json":
      "/address-data/cities/150000.937a5b19.json",
    "/address-data/cities/210000.json":
      "/address-data/cities/210000.76e76b9d.json",
    "/address-data/cities/220000.json":
      "/address-data/cities/220000.dcdb13c8.json",
    "/address-data/cities/230000.json":
      "/address-data/cities/230000.94c900e8.json",
    "/address-data/cities/310000.json":
      "/address-data/cities/310000.49351009.json",
    "/address-data/cities/320000.json":
      "/address-data/cities/320000.cbc2a627.json",
    "/address-data/cities/330000.json":
      "/address-data/cities/330000.1e642b9e.json",
    "/address-data/cities/340000.json":
      "/address-data/cities/340000.b02d2748.json",
    "/address-data/cities/350000.json":
      "/address-data/cities/350000.fd5a15ef.json",
    "/address-data/cities/360000.json":
      "/address-data/cities/360000.b47da9f6.json",
    "/address-data/cities/370000.json":
      "/address-data/cities/370000.e853316d.json",
    "/address-data/cities/410000.json":
      "/address-data/cities/410000.012132b6.json",
    "/address-data/cities/420000.json":
      "/address-data/cities/420000.beafd25a.json",
    "/address-data/cities/430000.json":
      "/address-data/cities/430000.56aaad12.json",
    "/address-data/cities/440000.json":
      "/address-data/cities/440000.eb7b3b59.json",
    "/address-data/cities/450000.json":
      "/address-data/cities/450000.b56dc597.json",
    "/address-data/cities/460000.json":
      "/address-data/cities/460000.1832f09d.json",
    "/address-data/cities/500000.json":
      "/address-data/cities/500000.521eb11a.json",
    "/address-data/cities/510000.json":
      "/address-data/cities/510000.6b051663.json",
    "/address-data/cities/520000.json":
      "/address-data/cities/520000.a1689c78.json",
    "/address-data/cities/530000.json":
      "/address-data/cities/530000.00262500.json",
    "/address-data/cities/540000.json":
      "/address-data/cities/540000.1c353374.json",
    "/address-data/cities/610000.json":
      "/address-data/cities/610000.02621f89.json",
    "/address-data/cities/620000.json":
      "/address-data/cities/620000.b00ff469.json",
    "/address-data/cities/630000.json":
      "/address-data/cities/630000.2e722a4b.json",
    "/address-data/cities/640000.json":
      "/address-data/cities/640000.8cea48bd.json",
    "/address-data/cities/650000.json":
      "/address-data/cities/650000.c0220cd0.json",
    "/address-data/cities/710000.json":
      "/address-data/cities/710000.99914b93.json",
    "/address-data/cities/810000.json":
      "/address-data/cities/810000.99914b93.json",
    "/address-data/cities/820000.json":
      "/address-data/cities/820000.99914b93.json",
    "/address-data/province-city.json":
      "/address-data/province-city.7bd5dec3.json",
    "/address-data/province.json": "/address-data/province.fef4450f.json",
    "/margin-lesson/items.json": "/margin-lesson/items.81dc377b.json",
    "/margin-lesson/items/asset.json":
      "/margin-lesson/items/asset.b8c24cbd.json",
    "/margin-lesson/items/base.json": "/margin-lesson/items/base.23c3187c.json",
    "/margin-lesson/items/collateral.json":
      "/margin-lesson/items/collateral.3192fbea.json",
    "/margin-lesson/items/interest.json":
      "/margin-lesson/items/interest.3b81755a.json",
    "/margin-lesson/items/margin.json":
      "/margin-lesson/items/margin.5d7dc077.json",
    "/margin-lesson/items/repay.json":
      "/margin-lesson/items/repay.079acc9d.json",
    "/margin-lesson/items/risk.json": "/margin-lesson/items/risk.c83dfd4c.json",
    "/margin-lesson/items/trade.json":
      "/margin-lesson/items/trade.a68a0ef5.json",
    "/models": "/models.c3dd2d87",
  };
function t() {
  var s = "https://".concat(d.brokerConfig.base.domain);
  return (
    ("3" ===
      (function () {
        var s, a, e, d, i, t, n;
        try {
          var r =
            null ==
            (e =
              null ==
              (a =
                null == (s = globalThis.requireMiniProgram)
                  ? void 0
                  : s.call(globalThis))
                ? void 0
                : a.main2Plugin)
              ? void 0
              : e.call(a);
          return (
            (null ==
            (n =
              null ==
              (t =
                null ==
                (i =
                  null == (d = null == r ? void 0 : r.getBrokerInfo)
                    ? void 0
                    : d.call(r))
                  ? void 0
                  : i.highestPriorityDealer)
                ? void 0
                : t.value)
              ? void 0
              : n.cdnDomainType) || ""
          );
        } catch (s) {
          return "";
        }
      })() &&
      (function () {
        var s = d.brokerConfig.base.fullName;
        return s ? "https://wzq.gtimg.com/htdocs_".concat(s) : "";
      })()) ||
    s
  );
}
function n(s) {
  var a = (function (s) {
    var a = s.startsWith("/") ? s : "/".concat(s);
    return i[a] || a;
  })(s);
  return "".concat(t(), "/mp/resources").concat(a);
}
exports.requestStatic = (function () {
  var d = a(
    s().mark(function a(d) {
      return s().wrap(function (s) {
        for (;;)
          switch ((s.prev = s.next)) {
            case 0:
              return (s.next = 2), e.request(n(d), {}, { method: "GET" });
            case 2:
              return s.abrupt("return", s.sent.data);
            case 3:
            case "end":
              return s.stop();
          }
      }, a);
    })
  );
  return function (s) {
    return d.apply(this, arguments);
  };
})();
