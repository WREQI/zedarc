var e = require("../../../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  i = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && i(e, n, t[n]);
    if (a) {
      var o,
        c = r(a(t));
      try {
        for (c.s(); !(o = c.n()).done; ) {
          n = o.value;
          s.call(t, n) && i(e, n, t[n]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return o(e, c(t));
  },
  l = function (e, t, r) {
    return new Promise(function (n, o) {
      var c = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, a);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  f = require("../../../../../../../../common/vendor.js");
require("../../../../../st-money/dist/index.js");
var y = "undefined" != typeof shy && "function" == typeof shy.request;
function h(e) {
  return Object.keys(e)
    .map(function (t) {
      return ""
        .concat(encodeURIComponent(t), "=")
        .concat(encodeURIComponent(e[t]));
    })
    .join("&");
}
function g(e, r, n) {
  return l(this, arguments, function (e, r, n) {
    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return t().mark(function c() {
      var a, u;
      return t().wrap(function (c) {
        for (;;)
          switch ((c.prev = c.next)) {
            case 0:
              if (!y) {
                c.next = 2;
                break;
              }
              return c.abrupt(
                "return",
                new Promise(function (t, c) {
                  o.headers && Object.assign(o, { header: o.headers });
                  var a = p(
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
                        c(e);
                      },
                    },
                    o
                  );
                  /newstock/.test(a.url) && Object.assign(n, { app: "3G" }),
                    e === f.RequestTypeEnum.GET
                      ? (a.url = "".concat(r, "?").concat(h(n)))
                      : Object.assign(a, { data: n }),
                    shy.request(a);
                })
              );
            case 2:
              return (
                (c.next = 4),
                (function (e) {
                  return l(
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
                                  e === f.EnvTypeEnum.MP
                                    ? {
                                        app: "wzqxcx",
                                        appid: "wx4ffb369b6881ee5e",
                                        openid:
                                          f.StockBridge.getStorage("_qluin"),
                                        fskey:
                                          f.StockBridge.getStorage("_qlskey"),
                                        check: 11,
                                      }
                                    : {
                                        app: "mini_h5",
                                        appid: "wx9cf8c670ebd68ce4",
                                        openid:
                                          f.StockBridge.getCookie("wzq_qluin"),
                                        fskey:
                                          f.StockBridge.getCookie("wzq_qlskey"),
                                        access_token: "",
                                        check: 11,
                                        _devId:
                                          f.StockBridge.getCookie("wzq_qlskey"),
                                        buildType: "rdm",
                                      }),
                                Promise.resolve(h(n)))
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, r);
                    })
                  );
                })(f.StockBridge.ENV)
              );
            case 4:
              return (
                (a = c.sent),
                (u = "".concat(r, "?").concat(a)),
                c.abrupt(
                  "return",
                  (e === f.RequestTypeEnum.GET &&
                    (u = "".concat(u, "&").concat(h(n))),
                  f.StockBridge.request(u, e, p({}, n), o).catch(function (e) {
                    return e;
                  }))
                )
              );
            case 7:
            case "end":
              return c.stop();
          }
      }, c);
    })();
  });
}
var v = (function (e) {
  return (
    (e[(e.RESET = 0)] = "RESET"),
    (e[(e.DES = 1)] = "DES"),
    (e[(e.ASC = 2)] = "ASC"),
    e
  );
})(v || {});
function m() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    n = e.toString();
  return n.length < r
    ? t.repeat(r).replace(new RegExp("\\d{" + n.length + "}$"), n)
    : n;
}
var b = "undefined" != typeof shy && "function" == typeof shy.request;
(exports.E_SORT_ORDER = v),
  (exports.adaptFontSize = function (e, t) {
    var r = +e;
    if (!isNaN(r)) {
      var n = String(e).length > 8 ? 1e7 : 1e4;
      n = n ? Number(n) : 1e8;
      return Math.abs(r) > n ? "adapt-small-size fs-".concat(t) : "";
    }
  }),
  (exports.defaults = function (e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "--";
    return Number.isNaN(e) || null == e || "" === e ? t : e;
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
          .replace(/M{2}/, m(t.getMonth() + 1))
          .replace(/d{2}/, m(t.getDate()))
          .replace(/h{2}/, m(t.getHours()))
          .replace(/m{2}/, m(t.getMinutes()))
          .replace(/s{2}/, m(t.getSeconds()))
          .replace(/w{1}/, "日一二三四五六"[t.getDay()]))
      : "";
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
    var r = t.code,
      n = t.secu_type,
      o = /^(sh|sz|hk|us|bj)(\d+)$/;
    if (o.test(r)) {
      var c = r.match(o),
        a = e(c, 3);
      a[0];
      return { market: a[1], scode: a[2], type: n };
    }
    return { market: "", scode: r, type: n };
  }),
  (exports.postfix = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    return (
      (t = ":percent:" === t ? "%" : t),
      /^-+$/.test(e) || -1 !== [void 0, null, ""].indexOf(e) ? e : e + t
    );
  }),
  (exports.queryStocksAddStatus = function (e) {
    return l(
      this,
      null,
      t().mark(function r() {
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt(
                  "return",
                  g(
                    "GET",
                    "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd",
                    { stocks: e.join(",") },
                    {}
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
    b
      ? shy.reportAnalytics({ eventName: e, dataObject: t })
      : f.StockBridge.report(e, t);
  }),
  (exports.sign = function (e, t) {
    var r = parseFloat(e);
    return Number.isNaN(r) || r < 0
      ? e
      : e > 0 && /^[^+-]/.test(e)
      ? "+".concat(e)
      : e;
  }),
  (exports.sortList = function (e, t, r) {
    return 0 === r
      ? e.sort(function (e, t) {
          return e._index - t._index;
        })
      : e.sort(function (e, n) {
          var o,
            c,
            a,
            u,
            s =
              null ==
              (c =
                null == (o = null == e ? void 0 : e.condition_values)
                  ? void 0
                  : o[t])
                ? void 0
                : c.raw,
            i =
              null ==
              (u =
                null == (a = null == n ? void 0 : n.condition_values)
                  ? void 0
                  : a[t])
                ? void 0
                : u.raw;
          return (
            /^\d{4}-\d{2}-\d{2}$/.test(s) &&
              ((s = s.replace(/(-|\s)/g, "")), (i = i.replace(/(-|\s)/g, ""))),
            Number(r) === Number(1) ? +i - +s : +s - +i
          );
        });
  }),
  (exports.updateStockAddStatus = function (e, r) {
    return l(
      this,
      null,
      t().mark(function n() {
        var o, c;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (
                  "undefined" == typeof shy ||
                  "function" != typeof shy.request
                ) {
                  t.next = 2;
                  break;
                }
                return t.abrupt(
                  "return",
                  new Promise(function (t, n) {
                    var o = function (e) {
                      "success" === e.status ? t({ code: 0 }) : n({ code: -1 });
                    };
                    r
                      ? shy.removeStockFromGroup(e.code, o)
                      : shy.addStockToGroup(e.code, e.name, "", o);
                  })
                );
              case 2:
                return (
                  (o = {
                    timestamp: new Date().getTime(),
                    act: r ? "sd" : "sa",
                    grpid: "1",
                  }),
                  (c = []),
                  t.abrupt(
                    "return",
                    (Array.isArray(e)
                      ? e.forEach(function (e) {
                          c.push(d(p({}, o), { code: e.code }));
                        })
                      : c.push(d(p({}, o), { code: e.code })),
                    g(
                      "POST",
                      "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
                      { seq: JSON.stringify(c) },
                      {}
                    ))
                  )
                );
              case 4:
              case "end":
                return t.stop();
            }
        }, n);
      })
    );
  });
