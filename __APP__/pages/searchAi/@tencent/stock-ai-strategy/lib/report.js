var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  i = function (e, t) {
    for (var n in t || (t = {})) a.call(t, n) && u(e, n, t[n]);
    if (o) {
      var i,
        s = r(o(t));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          n = i.value;
          c.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  s = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, c);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  l = require("../../st-money/dist/index.js"),
  d = "undefined" != typeof shy && "function" == typeof shy.request;
function f(e) {
  return Object.keys(e)
    .map(function (t) {
      return ""
        .concat(encodeURIComponent(t), "=")
        .concat(encodeURIComponent(e[t]));
    })
    .join("&");
}
function y(e, r, n) {
  return s(this, arguments, function (e, r, n) {
    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return t().mark(function a() {
      var c, u;
      return t().wrap(function (a) {
        for (;;)
          switch ((a.prev = a.next)) {
            case 0:
              if (!d) {
                a.next = 2;
                break;
              }
              return a.abrupt(
                "return",
                new Promise(function (t, a) {
                  o.headers && Object.assign(o, { header: o.headers });
                  var c = i(
                    {
                      url: r,
                      method: e,
                      header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      dataType: "json",
                      success: function (e) {
                        t(e.data);
                      },
                      fail: function (e) {
                        a(e);
                      },
                    },
                    o
                  );
                  /newstock/.test(c.url) && Object.assign(n, { app: "3G" }),
                    e === p.RequestTypeEnum.GET
                      ? (c.url = "".concat(r, "?").concat(f(n)))
                      : Object.assign(c, { data: n }),
                    shy.request(c);
                })
              );
            case 2:
              return (
                (a.next = 4),
                (function (e) {
                  return s(
                    this,
                    null,
                    t().mark(function r() {
                      var n;
                      return t().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                "return",
                                ((n =
                                  e === p.EnvTypeEnum.MP
                                    ? {
                                        app: "wzqxcx",
                                        appid: "wx4ffb369b6881ee5e",
                                        openid:
                                          p.StockBridge.getStorage("_qluin"),
                                        fskey:
                                          p.StockBridge.getStorage("_qlskey"),
                                        check: 11,
                                      }
                                    : {
                                        app: "mini_h5",
                                        appid: "wx9cf8c670ebd68ce4",
                                        openid:
                                          p.StockBridge.getCookie("wzq_qluin"),
                                        fskey:
                                          p.StockBridge.getCookie("wzq_qlskey"),
                                        access_token: "",
                                        check: 11,
                                        _devId:
                                          p.StockBridge.getCookie("wzq_qlskey"),
                                        buildType: "rdm",
                                      }),
                                Promise.resolve(f(n)))
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, r);
                    })
                  );
                })(p.StockBridge.ENV)
              );
            case 4:
              return (
                (c = a.sent),
                (u = "".concat(r, "?").concat(c)),
                a.abrupt(
                  "return",
                  (e === p.RequestTypeEnum.GET &&
                    (u = "".concat(u, "&").concat(f(n))),
                  p.StockBridge.request(u, e, i({}, n), o).catch(function (e) {
                    return e;
                  }))
                )
              );
            case 7:
            case "end":
              return a.stop();
          }
      }, a);
    })();
  });
}
var g = (function (e) {
  return (
    (e[(e.RESET = 0)] = "RESET"),
    (e[(e.DES = 1)] = "DES"),
    (e[(e.ASC = 2)] = "ASC"),
    e
  );
})(g || {});
function h() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    n = e.toString();
  return n.length < r
    ? t.repeat(r).replace(new RegExp("\\d{" + n.length + "}$"), n)
    : n;
}
var v = "undefined" != typeof shy && "function" == typeof shy.request;
(exports.E_SORT_ORDER = g),
  (exports.adaptFontSize = function (e, t) {
    var r = +e;
    if (!isNaN(r)) {
      var n = String(e).length > 8 ? 1e7 : 1e4;
      n = n ? Number(n) : 1e8;
      return Math.abs(r) > n ? "adapt-small-size fs-".concat(t) : "";
    }
  }),
  (exports.formatDate = function (e) {
    var t,
      r =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "yyyyMMdd";
    return e
      ? ((t =
          "number" == typeof e
            ? new Date(e)
            : "string" == typeof e && /^\d+$/.test(e)
            ? new Date(+e)
            : "function" == typeof e.getFullYear
            ? e
            : new Date(e.toString().replace(/-/g, "/"))),
        r
          .replace(/y{4}/, t.getFullYear())
          .replace(/M{2}/, h(t.getMonth() + 1))
          .replace(/d{2}/, h(t.getDate()))
          .replace(/h{2}/, h(t.getHours()))
          .replace(/m{2}/, h(t.getMinutes()))
          .replace(/s{2}/, h(t.getSeconds()))
          .replace(/w{1}/, "日一二三四五六"[t.getDay()]))
      : "";
  }),
  (exports.formatMoney = function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
      n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      o = Math.abs(+e),
      a = r,
      c = "";
    return isNaN(+e)
      ? "--"
      : ((c =
          o > 9999.99 && o < 1e8
            ? "".concat(
                n ? l.amount.toCurrency(o / 1e4, a) : (o / 1e4).toFixed(a),
                "万"
              )
            : o >= 1e12
            ? "".concat(
                n ? l.amount.toCurrency(o / 1e12, a) : (o / 1e12).toFixed(a),
                "万亿"
              )
            : o >= 1e8
            ? "".concat(
                n ? l.amount.toCurrency(o / 1e8, a) : (o / 1e8).toFixed(a),
                "亿"
              )
            : n
            ? l.amount.toCurrency(o, a)
            : o.toFixed(a)),
        +e < 0 && (c = "-".concat(o)),
        c);
  }),
  (exports.formatNoUnit = function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
      n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      o = Math.abs(+e),
      a = r,
      c = "";
    return isNaN(+e)
      ? "--"
      : ((c = n ? l.amount.toCurrency(o, a) : o.toFixed(a)),
        +e < 0 && (c = "-".concat(c)),
        c);
  }),
  (exports.getStrcharLen = function () {
    for (
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = 0,
        r = e.split(""),
        n = 0;
      n < r.length;
      n++
    )
      /[\u4e00-\u9fa5]/.test(r[n]) ? (t += 2) : (t += 1);
    return t;
  }),
  (exports.parseStock = function (t) {
    var r = /^(sh|sz|hk)(\d+)$/;
    if (r.test(t)) {
      var n = t.match(r),
        o = e(n, 3);
      o[0];
      return { market: o[1], code: o[2] };
    }
    return { market: "", code: t };
  }),
  (exports.queryCustomStrategyStocks = function (e) {
    return s(
      this,
      null,
      t().mark(function r() {
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt(
                  "return",
                  y(
                    "POST",
                    "https://wzq.tenpay.com/svr/stock/wzq_xuangu_cgi/stock_selection",
                    e,
                    {
                      dataType: "json",
                      headers: { "Content-Type": "application/json" },
                    }
                  )
                );
              case 1:
              case "end":
                return t.stop();
            }
        }, r);
      })
    );
  }),
  (exports.queryCustomStrategyStocksV2 = function (e) {
    return s(
      this,
      null,
      t().mark(function r() {
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt(
                  "return",
                  y(
                    "POST",
                    "https://wzq.tenpay.com/svr/stock/wzq_xuangu_cgi/stock_select",
                    e,
                    {
                      dataType: "json",
                      headers: { "Content-Type": "application/json" },
                    }
                  )
                );
              case 1:
              case "end":
                return t.stop();
            }
        }, r);
      })
    );
  }),
  (exports.redOrGreen = function (e) {
    return (e = +e) < 0
      ? "green"
      : 0 === e || Number.isNaN(e)
      ? "equal"
      : "red";
  }),
  (exports.report = function (e, t) {
    v
      ? shy.reportAnalytics({ eventName: e, dataObject: t })
      : p.StockBridge.report(e, t);
  }),
  (exports.sortList = function (e, t, r) {
    return 0 === r
      ? e.sort(function (e, t) {
          return e._index - t._index;
        })
      : e.sort(function (e, n) {
          var o,
            a,
            c,
            u,
            i =
              null ==
              (a =
                null == (o = null == e ? void 0 : e.condition_values)
                  ? void 0
                  : o[t])
                ? void 0
                : a.raw,
            s =
              null ==
              (u =
                null == (c = null == n ? void 0 : n.condition_values)
                  ? void 0
                  : c[t])
                ? void 0
                : u.raw;
          return (
            /^\d{4}-\d{2}-\d{2}$/.test(i) &&
              ((i = i.replace(/(-|\s)/g, "")), (s = s.replace(/(-|\s)/g, ""))),
            Number(r) === Number(1) ? +s - +i : +i - +s
          );
        });
  });
