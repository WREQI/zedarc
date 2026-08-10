var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../@babel/runtime/helpers/createClass");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var o = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  c = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  l = function (e, t, r) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  d = function (e, t) {
    for (var r in t || (t = {})) u.call(t, r) && l(e, r, t[r]);
    if (s) {
      var n,
        a = o(s(t));
      try {
        for (a.s(); !(n = a.n()).done; ) {
          r = n.value;
          p.call(t, r) && l(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return c(e, i(t));
  },
  g = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, c);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  m = require("../../../../../common/vendor.js"),
  y = (m.StockBridge.getPlatform() || {}).isZxg,
  h = "zxg_xcx",
  k = "wx4ffb369b6881ee5e",
  v = ["mpwzq", "wzqlight"].includes("mpweapp"),
  b = new ((function () {
    function e() {
      r(this, e);
    }
    return (
      n(e, [
        {
          key: "getZxgLoginInfo",
          value: function () {
            return g(
              this,
              null,
              t().mark(function e() {
                var r;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), m.StockBridge.getZxgLoginInfo();
                      case 2:
                        if (((e.t0 = e.sent), e.t0)) {
                          e.next = 5;
                          break;
                        }
                        e.t0 = {};
                      case 5:
                        return (
                          (r = e.t0),
                          e.abrupt("return", f(d({}, r || {}), { channel: 1 }))
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          },
        },
        {
          key: "queryMyHistory",
          value: function (e, r, n) {
            return g(
              this,
              null,
              t().mark(function o() {
                var a, c, i, s, u;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((a =
                              "https://wzq.tenpay.com/svr/stock/wzq_stock_adapter/user_browsing_record"),
                            (c = {}),
                            !y)
                          ) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 4), this.getZxgLoginInfo();
                        case 4:
                          for (s in ((c = t.sent), (i = []), c))
                            (u = c[s]),
                              i.push(
                                ""
                                  .concat(encodeURIComponent(s), "=")
                                  .concat(encodeURIComponent(u))
                              );
                          a = "".concat(a, "?").concat(i.join("&"));
                        case 8:
                          return t.abrupt(
                            "return",
                            m.StockBridge.request(
                              a,
                              m.RequestTypeEnum.POST,
                              f(
                                d(
                                  d({}, v ? {} : { source: "wzq" }),
                                  y ? { source: "zxg" } : {}
                                ),
                                { record_type: e, offset_time: r, limit: n }
                              ),
                              {
                                headers: { "Content-Type": "application/json" },
                                forceCallback: !0,
                              }
                            )
                          );
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  o,
                  this
                );
              })
            );
          },
        },
        {
          key: "queryStockAdd",
          value: function () {
            var e = this.getLoginParams(m.StockBridge.ENV),
              t = [];
            for (var r in e) {
              var n = e[r];
              t.push(
                ""
                  .concat(encodeURIComponent(r), "=")
                  .concat(encodeURIComponent(n))
              );
            }
            var o =
              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stocklist?".concat(
                t.join("&")
              );
            return m.StockBridge.request(o, m.RequestTypeEnum.GET, {
              forceCallback: !0,
            });
          },
        },
        {
          key: "toggleChooseAdd",
          value: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "add",
              r = this.getLoginParams(m.StockBridge.ENV),
              n = [];
            for (var o in r) {
              var a = r[o];
              n.push(
                ""
                  .concat(encodeURIComponent(o), "=")
                  .concat(encodeURIComponent(a))
              );
            }
            var c =
                "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?".concat(
                  n.join("&")
                ),
              i = [
                {
                  act: "add" === t ? "sa" : "sd",
                  code: e,
                  timestamp: new Date().getTime(),
                },
              ];
            return m.StockBridge.request(c, m.RequestTypeEnum.POST, {
              seq: JSON.stringify(i),
            });
          },
        },
        {
          key: "getLoginParams",
          value: function (e) {
            return e === m.EnvTypeEnum.MP
              ? {
                  app: h,
                  appid: k,
                  openid: m.StockBridge.getStorage("_qluin"),
                  fskey: m.StockBridge.getStorage("_qlskey"),
                  check: 11,
                }
              : {
                  app: h,
                  appid: k,
                  openid: m.StockBridge.getCookie("wzq_qluin"),
                  fskey: m.StockBridge.getCookie("wzq_qlskey"),
                  access_token: "",
                  check: 11,
                  _devId: m.StockBridge.getCookie("wzq_qlskey"),
                  buildType: "rdm",
                };
          },
        },
        {
          key: "getUrlParams",
          value: function (e) {
            var t = [];
            return (
              Object.keys(e).forEach(function (r) {
                var n = e[r];
                t.push(
                  ""
                    .concat(encodeURIComponent(r), "=")
                    .concat(encodeURIComponent(n))
                );
              }),
              t.join("&")
            );
          },
        },
      ]),
      e
    );
  })())();
function w(e) {
  var t = m.dayjs(e),
    r = m.dayjs(),
    n = m.dayjs().subtract(1, "day"),
    o = r.startOf("day"),
    a = n.startOf("day");
  return t.isAfter(o) || t.isSame(o)
    ? "今天"
    : t.isAfter(a) || t.isSame(a)
    ? "昨天"
    : r.year() === t.year()
    ? t.format("MM-DD")
    : t.format("YYYY-MM-DD");
}
(exports.AccountAPI = b),
  (exports.RECORD_TYPE = {
    stock: "stock",
    basket: "stock_order",
    news: "news",
  }),
  (exports.getCurIdInView = function (e, t, r) {
    var n,
      o,
      a = [];
    if (m.StockBridge.ENV === m.EnvTypeEnum.MP) {
      var c = (
        (m.wx$1.getWindowInfo && m.wx$1.getWindowInfo()) ||
        m.wx$1.getSystemInfoSync()
      ).screenHeight;
      try {
        m.wx$1
          .createSelectorQuery()
          .in(e)
          .selectAll(".".concat(t))
          .boundingClientRect(function (e) {
            e.forEach(function (e) {
              var t = e.top,
                r = e.bottom,
                n = e.id;
              ((t > 0 && r < c) ||
                (t > 0 && t < c) ||
                (r > 0 && r < c) ||
                (t < 0 && r > c)) &&
                a.push(n);
            }),
              r && r(a);
          })
          .exec();
      } catch (e) {
        return [];
      }
    } else
      try {
        var i =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        null == (o = null == (n = e.$refs[t]) ? void 0 : n.forEach) ||
          o.call(n, function (e) {
            var t = e.$el.getBoundingClientRect(),
              r = t.top,
              n = t.bottom;
            if (
              (r > 0 && n < i) ||
              (r > 0 && r < i) ||
              (n > 0 && n < i) ||
              (r < 0 && n > i)
            ) {
              var o = e.$el.getAttribute("id");
              a.push(o);
            }
          }),
          r && r(a);
      } catch (e) {
        return [];
      }
  }),
  (exports.getDateGroupData = function (e) {
    var t = {};
    return (
      e.forEach(function (e) {
        var r = m.dayjs(+e.browsing_time).format("YYYY-MM-DD");
        t[r] || (t[r] = { timeString: w(+e.browsing_time), data: [] }),
          t[r].data.push(e);
      }),
      Object.keys(t)
        .sort(function (e, t) {
          return t.localeCompare(e);
        })
        .map(function (e) {
          return t[e];
        })
    );
  }),
  (exports.mergeSameDayData = function (t, r) {
    var n = t[t.length - 1].data[0].browsing_time,
      o = r[0].data[0].browsing_time;
    if (
      new Date(+n).toISOString().split("T")[0] ===
      new Date(+o).toISOString().split("T")[0]
    ) {
      var a,
        c = t[t.length - 1];
      (a = c.data).splice.apply(a, [c.data.length, 0].concat(e(r[0].data))),
        r.shift();
    }
  });
