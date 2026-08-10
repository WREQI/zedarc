var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, r) {
    for (var n in r || (r = {})) i.call(r, n) && u(e, n, r[n]);
    if (c) {
      var o,
        s = t(c(r));
      try {
        for (s.s(); !(o = s.n()).done; ) {
          n = o.value;
          a.call(r, n) && u(e, n, r[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  p = function (e, t, r) {
    return new Promise(function (n, o) {
      var c = function (e) {
          try {
            a(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            a(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, i);
        };
      a((r = r.apply(e, t)).next());
    });
  },
  l = require("../../../../../../../common/vendor.js");
function f() {
  var e,
    t,
    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    c = {};
  return (
    "mp" === l.StockBridge.ENV
      ? (c = {
          app: "wzqxcx",
          appid: "wx4ffb369b6881ee5e",
          openid: l.StockBridge.getStorage("_qluin"),
          fskey: l.StockBridge.getStorage("_qlskey"),
          check: 11,
        })
      : -1 !== ["wzq_light", "wzq"].indexOf(l.StockBridge.ENV) &&
        ((c = {
          app: "mini_h5",
          appid: "wx9cf8c670ebd68ce4",
          openid: l.StockBridge.getCookie("wzq_qluin"),
          fskey: l.StockBridge.getCookie("wzq_qlskey"),
          check: 11,
        }),
        "jq" === r &&
          ((e = s({}, c)),
          (t = {
            access_token: "",
            _devId: l.StockBridge.getCookie("wzq_qlskey"),
            buildType: "rdm",
          }),
          (c = n(e, o(t))))),
    c
  );
}
(exports.getBasketDetail = function (t) {
  return p(
    exports,
    null,
    e().mark(function r() {
      var n;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = f()),
                e.abrupt(
                  "return",
                  l.StockBridge.request(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/watchlist/detail",
                    "GET",
                    s({ id: t }, n),
                    { forceCallback: !0 }
                  )
                )
              );
            case 2:
            case "end":
              return e.stop();
          }
      }, r);
    })
  );
}),
  (exports.getStockInfo = function (t) {
    return p(
      exports,
      null,
      e().mark(function r() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  l.StockBridge.request(
                    "https://wzq.tenpay.com/cgi-bin/stockinfo.fcgi",
                    "GET",
                    {
                      scode:
                        (null == (n = t.symbol) ? void 0 : n.substring(2)) ||
                        "",
                      markets: t.market || "",
                      needfive: 1,
                      needquote: 1,
                    }
                  )
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  }),
  (exports.queryCustomStrategyStocksV2 = function (t) {
    return p(
      exports,
      null,
      e().mark(function r() {
        var n, o, c;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = f("jq")),
                  (c =
                    "https://wzq.tenpay.com/svr/stock/wzq_xuangu_cgi/stock_select?".concat(
                      ((o = n),
                      Object.keys(o)
                        .map(function (e) {
                          return ""
                            .concat(encodeURIComponent(e), "=")
                            .concat(encodeURIComponent(o[e]));
                        })
                        .join("&"))
                    )),
                  e.abrupt(
                    "return",
                    l.StockBridge.request(
                      c,
                      "POST",
                      { condition_id: t },
                      {
                        dataType: "json",
                        headers: { "Content-Type": "application/json" },
                      }
                    )
                  )
                );
              case 3:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  });
