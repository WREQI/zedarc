var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (t, e, n) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  i = function (t, r) {
    for (var i in r || (r = {})) c.call(r, i) && a(t, i, r[i]);
    if (n) {
      var u,
        p = e(n(r));
      try {
        for (p.s(); !(u = p.n()).done; ) {
          i = u.value;
          o.call(r, i) && a(t, i, r[i]);
        }
      } catch (t) {
        p.e(t);
      } finally {
        p.f();
      }
    }
    return t;
  },
  u = require("../../../stock-hq-core/utils/sign.js"),
  p = require("../../../../../../common/vendor.js"),
  s = window ? "mini_h5" : "wzqxcx";
(exports.getBuyBack = function (t) {
  var e = ""
    .concat(
      p.getApiFullUrl(
        "cgi/cgi-bin/stockminor/event/get_buyback",
        p.API_HOST_ENUM.PROXY_QQ
      ),
      "?security_code="
    )
    .concat(t.symbol, "&detail=")
    .concat(t.detail || !1);
  return p.StockBridge.request(e, "GET", {}, { forceCallback: !0 });
}),
  (exports.getDepthData = function (t, e) {
    var r = u.getSignV2(e, "get", s);
    e = i(i({}, e), r);
    var n =
      "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/miniapp/companytab?".concat(
        Object.keys(e)
          .map(function (t) {
            return "".concat(t, "=").concat(e[t]);
          })
          .join("&")
      );
    return t.request(n, "GET", {}, { forceCallback: !0 });
  }),
  (exports.getDividendList = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/fund/baseInfo/dividend",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(e.symbol, "&num=")
      .concat(e.num);
    return t.request(r, "GET");
  }),
  (exports.getGudongList = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/app/StandardPoorsGudong/holdingOwnerList",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(e.code, "&type=")
      .concat(e.type, "&sortByBd=1");
    return t.request(r, "GET");
  }),
  (exports.getHKGshg = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/app/hkStockinfo/buyback",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(e);
    return p.StockBridge.request(r, "GET");
  }),
  (exports.getHSData = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/app/stockinfo/jiankuang",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(e, "&_appver=9.4&app=")
      .concat(s);
    return t.request(r, "GET");
  }),
  (exports.getHSGshg = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/app/stockinfo/buyback",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(e);
    return p.StockBridge.request(r, "GET");
  }),
  (exports.getHydetail = function (e, r, n) {
    return (
      (c = exports),
      null,
      (o = t().mark(function c() {
        var o;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (o = ""
                    .concat(
                      p.getApiFullUrl(
                        "ifzqgtimg/appstock/app/stockinfo/getHydetail",
                        p.API_HOST_ENUM.PROXY_QQ
                      ),
                      "?code="
                    )
                    .concat(r, "&type=")
                    .concat(n, "&app=")
                    .concat(s)),
                  t.abrupt("return", e.request(o, "GET"))
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, c);
      })),
      new Promise(function (t, e) {
        var r = function t(r) {
            try {
              a(o.next(r));
            } catch (t) {
              e(t);
            }
          },
          n = function (t) {
            try {
              a(o.throw(t));
            } catch (t) {
              e(t);
            }
          },
          a = function (e) {
            return e.done ? t(e.value) : Promise.resolve(e.value).then(r, n);
          };
        a((o = o.apply(c, null)).next());
      })
    );
    var c, o;
  }),
  (exports.getInnerProfile = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/fund/baseInfo/innerProfileXCX",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(e.symbol);
    return t.request(r, "GET");
  }),
  (exports.getInnerTenHolder = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/fund/baseInfo/innerTenHolder",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?code="
      )
      .concat(e.symbol, "&date=")
      .concat(e.date);
    return t.request(r, "GET");
  }),
  (exports.getUSData = function (t, e) {
    var r = ""
      .concat(
        p.getApiFullUrl(
          "ifzqgtimg/appstock/us/introduce/brief",
          p.API_HOST_ENUM.PROXY_QQ
        ),
        "?symbol="
      )
      .concat(e, "&app=")
      .concat(s);
    return t.request(r, "GET");
  });
