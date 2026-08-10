var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  i = function (e, r) {
    for (var n in r || (r = {})) u.call(r, n) && s(e, n, r[n]);
    if (c) {
      var o,
        i = t(c(r));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          n = o.value;
          a.call(r, n) && s(e, n, r[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return n(e, o(t));
  },
  l = function (e, t, r) {
    return new Promise(function (n, o) {
      var c = function (e) {
          try {
            a(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            a(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, u);
        };
      a((r = r.apply(e, t)).next());
    });
  },
  d = require("../../../../../../../common/vendor.js"),
  f = require("../../services/BaseController.js");
require("../../../../../js-cookie/src/js.cookie.js");
var m = "wzqxcx",
  v = "https://wzq.tenpay.com/cgi-bin",
  k = "".concat(v, "/stockinfo.fcgi"),
  y = "".concat(v, "/mn_tradeinit.fcgi"),
  b = "".concat(v, "/mn_tradesubmit.fcgi");
function h() {
  return {
    app: "zxg_xcx",
    openid: d.StockBridge.getStorage("_qluin"),
    fskey: d.StockBridge.getStorage("_qlskey"),
  };
}
var g = { headers: { "Content-Type": "application/json" }, forceCallback: !0 };
function q(e) {
  try {
    var t = e.match(/^([A-Za-z]{2})(\d+)$/),
      r = e.match(/^(\d+)\.([A-Za-z]{2})$/),
      n = (null == t ? void 0 : t[1]) || (null == r ? void 0 : r[2]),
      o = (null == t ? void 0 : t[2]) || (null == r ? void 0 : r[1]);
    return n && o
      ? { market: f.MARKET_CODE[n.toLowerCase()], code: o, symbol: e }
      : { market: "", code: "", symbol: e };
  } catch (t) {
    return { market: "", code: "", symbol: e };
  }
}
(exports.addStockToGroup = function (e) {
  var t = [
    {
      code: e,
      timestamp: new Date().getTime(),
      grpid: "unlogingrp1",
      act: "sa",
    },
  ];
  return d.StockBridge.request(
    "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
    d.RequestTypeEnum.GET,
    p(i({ seq: JSON.stringify(t) }, h()), {
      check: 11,
      appid: "wx9cf8c670ebd68ce4",
    })
  );
}),
  (exports.getChooseStatus = function (e) {
    var t = { appid: "wx9cf8c670ebd68ce4", check: 11, stocks: e };
    return (
      (t = i(i({}, h()), t)),
      d.StockBridge.request(
        "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd",
        d.RequestTypeEnum.GET,
        i({}, t)
      ).then(function (e) {
        return e;
      })
    );
  }),
  (exports.getStockInfo = function (t) {
    return l(
      exports,
      null,
      e().mark(function r() {
        var n, o, c, u, a;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = 1),
                  (o = t.match(/^([A-Za-z]{2})(\d+)$/)),
                  (c = t.match(/^(\d+)\.([A-Za-z]{2})$/)),
                  (u =
                    (null == o ? void 0 : o[1]) || (null == c ? void 0 : c[2])),
                  (a =
                    (null == o ? void 0 : o[2]) || (null == c ? void 0 : c[1])),
                  e.abrupt(
                    "return",
                    (u && a && ((t = a), (n = f.MARKET_CODE[u.toLowerCase()])),
                    d.StockBridge.request(k, "GET", {
                      scode: t,
                      markets: n,
                      needfive: 1,
                      needquote: 1,
                    }))
                  )
                );
              case 3:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  }),
  (exports.initTrade = function (t, r) {
    return l(
      exports,
      null,
      e().mark(function n() {
        var o, c, u, a, s;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (o = 1),
                  (c = t.match(/^([A-Za-z]{2})(\d+)$/)),
                  (u = t.match(/^(\d+)\.([A-Za-z]{2})$/)),
                  (a =
                    (null == c ? void 0 : c[1]) || (null == u ? void 0 : u[2])),
                  (s =
                    (null == c ? void 0 : c[2]) || (null == u ? void 0 : u[1])),
                  e.abrupt(
                    "return",
                    (a && s && ((t = s), (o = f.MARKET_CODE[a.toLowerCase()])),
                    d.StockBridge.request(y, "GET", {
                      market: o,
                      stock_code: t,
                      gameid: r,
                      type: f.GAME_TYPE.TRAINING_GAME,
                    }))
                  )
                );
              case 3:
              case "end":
                return e.stop();
            }
        }, n);
      })
    );
  }),
  (exports.queryStockAlert = function (e) {
    var t = q(e.symbol),
      r = t.market,
      n = t.code;
    return d.StockBridge.request(
      "https://wzq.tenpay.com/svr/stock/alert/query",
      d.RequestTypeEnum.POST,
      { symbol: e.symbol, market: r, code: n },
      g
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.setStockAlert = function (t) {
    return l(
      exports,
      null,
      e().mark(function r() {
        var n;
        return e().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.t0 = function (e, t) {
                      var r = null == e ? void 0 : e[t],
                        n = +(null == r ? void 0 : r[3]);
                      if ("number" != typeof n || isNaN(n))
                        throw new Error(
                          "Invalid current value: must be a valid number"
                        );
                      var o = 1.1 * n,
                        c = 0.9 * n,
                        u = q(t),
                        a = u.market,
                        s = u.code,
                        l = [
                          { subs_type: 1, val: o.toFixed(2) },
                          { subs_type: 2, val: c.toFixed(2) },
                          { subs_type: 3, val: "3" },
                          { subs_type: 4, val: "3" },
                        ],
                        f = {
                          market: a,
                          code: s,
                          symbol: t,
                          smart: {
                            new_high_low: 1,
                            limit_up_down: 0,
                            big_event: 0,
                          },
                          subscribe_infos:
                            d.StockBridge.ENV === d.EnvTypeEnum.MP
                              ? l.map(function (e) {
                                  return p(i({}, e), {
                                    extra_info: "scene=".concat(m),
                                  });
                                })
                              : l,
                        };
                      return (
                        d.StockBridge.ENV === d.EnvTypeEnum.MP &&
                          Object.assign(f, {
                            scenes: 6,
                            xcxname: m,
                            come_from: "3",
                          }),
                        f
                      );
                    }),
                    (r.next = 4),
                    (function (t) {
                      return l(
                        this,
                        null,
                        e().mark(function r() {
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    d.StockBridge.request(
                                      "https://proxy.finance.qq.com/qt/utf8/?q=".concat(
                                        t,
                                        "&fmt=json"
                                      ),
                                      d.RequestTypeEnum.GET
                                    )
                                      .then(function (e) {
                                        return e;
                                      })
                                      .catch(function (e) {
                                        return e;
                                      })
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, r);
                        })
                      );
                    })(t.symbol)
                  );
                case 4:
                  return (
                    (r.t1 = r.sent),
                    (r.t2 = t.symbol),
                    (n = (0, r.t0)(r.t1, r.t2)),
                    r.abrupt(
                      "return",
                      d.StockBridge.request(
                        "https://wzq.tenpay.com/svr/stock/alert/set",
                        d.RequestTypeEnum.POST,
                        n,
                        g
                      )
                    )
                  );
                case 10:
                  throw (
                    ((r.prev = 10),
                    (r.t3 = r.catch(0)),
                    d.StockBridge.aegisReportEvent(
                      "MOCKTRADE_STOCK_ALERT_ERROR"
                    ),
                    r.t3)
                  );
                case 13:
                case "end":
                  return r.stop();
              }
          },
          r,
          null,
          [[0, 10]]
        );
      })
    );
  }),
  (exports.submitOrder = function (t) {
    return l(
      exports,
      null,
      e().mark(function r() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", d.StockBridge.request(b, "GET", t));
              case 1:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  });
