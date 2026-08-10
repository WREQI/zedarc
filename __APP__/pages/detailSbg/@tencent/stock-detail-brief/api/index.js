var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../common/vendor.js");
require("../../stock-crypto-modules-config/dist/index.js");
var n = require("../../stock-hq-core/config/const.js");
(exports.getFundData = function (t, c) {
  var r = ""
    .concat(
      e.getApiFullUrl(
        "ifzqgtimg/appstock/fund/baseInfo/innerHomepage",
        e.API_HOST_ENUM.PROXY_QQ
      ),
      "?code="
    )
    .concat(c);
  return (
    "mp" === t.ENV && (r = "".concat(r, "&app=").concat(n.SOURCEENUM.MP)),
    t.request(r, "GET")
  );
}),
  (exports.getHKData = function (t, c) {
    var r = ""
      .concat(
        e.getApiFullUrl(
          "ifzqgtimg/appstock/app/hkStockinfo/jiankuang",
          e.API_HOST_ENUM.PROXY_QQ
        ),
        "?code=hk"
      )
      .concat(c, "&_appver=9.7");
    return (
      "mp" === t.ENV && (r = "".concat(r, "&app=").concat(n.SOURCEENUM.MP)),
      t.request(r, "GET")
    );
  }),
  (exports.getHSData = function (t, c) {
    var r = ""
      .concat(
        e.getApiFullUrl(
          "ifzqgtimg/appstock/app/stockinfo/jiankuang",
          e.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(c, "&_appver=9.4");
    return (
      "mp" === t.ENV && (r = "".concat(r, "&app=").concat(n.SOURCEENUM.MP)),
      t.request(r, "GET")
    );
  }),
  (exports.getHydetail = function (n, c, r) {
    return (
      (o = exports),
      null,
      (a = t().mark(function o() {
        var a;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (a = ""
                    .concat(
                      e.getApiFullUrl(
                        "ifzqgtimg/appstock/app/stockinfo/getHydetail",
                        e.API_HOST_ENUM.PROXY_QQ
                      ),
                      "?code="
                    )
                    .concat(c, "&type=")
                    .concat(r)),
                  t.abrupt("return", n.request(a, "GET"))
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, o);
      })),
      new Promise(function (t, e) {
        var n = function t(n) {
            try {
              r(a.next(n));
            } catch (t) {
              e(t);
            }
          },
          c = function (t) {
            try {
              r(a.throw(t));
            } catch (t) {
              e(t);
            }
          },
          r = function (e) {
            return e.done ? t(e.value) : Promise.resolve(e.value).then(n, c);
          };
        r((a = a.apply(o, null)).next());
      })
    );
    var o, a;
  }),
  (exports.getOrganData = function (t, n) {
    var c = ""
      .concat(
        e.getApiFullUrl(
          "xg_stock_institution_holdings.fcgi",
          e.API_HOST_ENUM.BISHENG
        ),
        "?"
      )
      .concat(n);
    return t.request(c, "GET");
  }),
  (exports.getPlateListData = function (t, e) {
    var c =
      "https://proxy.finance.qq.com/cgi/cgi-bin/stockminor/plate/get?code="
        .concat(e, "&app=")
        .concat(
          "mp" === t.ENV ? n.SOURCEENUM.MP : n.SOURCEENUM.DEFAULT,
          "&zdf=1"
        );
    return t.request(c, "GET");
  }),
  (exports.getUSData = function (t, c) {
    var r = ""
      .concat(
        e.getApiFullUrl(
          "ifzqgtimg/appstock/us/introduce/brief",
          e.API_HOST_ENUM.PROXY_QQ
        ),
        "?symbol=us"
      )
      .concat(c, "&_appver=9.5");
    return (
      "mp" === t.ENV && (r = "".concat(r, "&app=").concat(n.SOURCEENUM.MP)),
      t.request(r, "GET")
    );
  }),
  (exports.getWorranBrief = function (t, n) {
    var c,
      r =
        "DAFENG" ===
        (null == (c = null == window ? void 0 : window.$broker) ? void 0 : c.id)
          ? "&app=df"
          : "",
      o = e.getApiFullUrl(
        "ifzqgtimg/appstock/app/HkWarrant/hkw",
        e.API_HOST_ENUM.PROXY_QQ
      );
    return t
      .request("".concat(o, "?code=").concat(n).concat(r), "GET")
      .then(function (t) {
        return t.data || {};
      })
      .catch(function (t) {
        return t;
      });
  });
