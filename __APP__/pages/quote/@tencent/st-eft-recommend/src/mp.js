require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  s = function (e, n) {
    for (var r in n || (n = {})) i.call(n, r) && u(e, r, n[r]);
    if (a) {
      var o,
        s = t(a(n));
      try {
        for (s.s(); !(o = s.n()).done; ) {
          r = o.value;
          c.call(n, r) && u(e, r, n[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return r(e, o(t));
  },
  l = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, i);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  d = require("../../stock-hq-data/index.js");
function m(t, n) {
  return l(
    this,
    null,
    e().mark(function r() {
      var o, a, i, c;
      return e().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (
                (c = function (e) {
                  var t = "".concat(e).replace(/%/g, "");
                  return isNaN(+t) || parseFloat(t) <= 0
                    ? t
                    : parseFloat(t) > 0
                    ? "+".concat(t)
                    : void 0;
                }),
                (i = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "YUAN",
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "元",
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 2;
                  if (!["YUAN", "WAN", "YI"].includes(t)) return e;
                  if (isNaN(e)) return e;
                  e = Math.abs(e);
                  var o = Math.pow(10, 8),
                    a = Math.pow(10, 4);
                  if (
                    ("WAN" === t ? (e *= a) : "YI" === t && (e *= o), e > o)
                  ) {
                    var i = "亿";
                    return (
                      (e /= o) >= a && ((e /= a), (i = "万亿")),
                      "".concat(e.toFixed(r)).concat(i)
                    );
                  }
                  return e > a
                    ? "".concat((e /= a).toFixed(r), "万")
                    : "".concat(e.toFixed(r)).concat(n);
                }),
                (o = []),
                (a = !0),
                (r.next = 5),
                (function () {
                  return l(
                    this,
                    null,
                    e().mark(function r() {
                      var u, l, m, v;
                      return e().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                (function () {
                                  var e;
                                  e =
                                    p.StockBridge.ENV === p.EnvTypeEnum.MP
                                      ? p.StockBridge.getStorage("_qluin")
                                      : p.StockBridge.getCookie("wzq_qluin");
                                  var r = {
                                    code: n,
                                    scenes: "stock_buy",
                                    openid: e,
                                  };
                                  return t.request(
                                    "https://proxy.finance.qq.com/ifzqgtimg/appstock/fund/etf/recommend?",
                                    "GET",
                                    r
                                  );
                                })()
                              );
                            case 2:
                              if ((u = e.sent) && 0 === u.code && u.data) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              (l = u.data),
                                (m = l.has_related_etf),
                                (v = l.list),
                                (o = v.map(function (e, t) {
                                  var n = m
                                      ? 0 === t
                                        ? "https://st.gtimg.com/design/f6bb0b51bd58e3cb55d1dae8daf71df8.png"
                                        : 1 === t
                                        ? "https://st.gtimg.com/design/add702d7b2a85214ba6f9c2df16231d8.png"
                                        : "https://st.gtimg.com/design/ce7f9a0e49c4f7528ccbbdfa79b6b858.png"
                                      : "",
                                    r = d.utils.splitSymbol(e.code),
                                    o = r.market,
                                    a = r.scode;
                                  return f(s({}, e), {
                                    market: o,
                                    scode: a,
                                    topImg: n,
                                    fields: e.fields.map(function (e) {
                                      return f(s({}, e), {
                                        val:
                                          "涨跌幅" === e.name
                                            ? "".concat(c(e.val), "%")
                                            : "成交额" === e.name
                                            ? i(e.val, "WAN", "万")
                                            : "".concat(e.val, "%"),
                                      });
                                    }),
                                  });
                                })).splice(1),
                                (a = m);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, r);
                    })
                  );
                })()
              );
            case 5:
              return r.abrupt("return", { ETFList: o, hasRecommendEtf: a });
            case 6:
            case "end":
              return r.stop();
          }
      }, r);
    })
  );
}
var v = {
    hasBind_hk_info: ["无需香港银行卡", "T+0 日内交易", "无印花税"],
    hasBind_us_info: ["无需境外银行卡", "T+0 日内交易", "无印花税"],
    hasBind_hk_title: "用沪深A股账户，通过跨境ETF投资港股！",
    hasBind_us_title: "用沪深A股账户，通过跨境ETF投资美股！",
    noAccount_hk_info: ["无需香港银行卡", "T+0 日内交易", "无印花税"],
    noAccount_us_info: ["无需境外银行卡", "T+0 日内交易", "无印花税"],
    noAccount_hk_title: "开沪深A股账户，通过跨境ETF投资港股！",
    noAccount_us_title: "开沪深A股账户，通过跨境ETF投资美股！",
  },
  h = {
    components: {
      etfInfo: function () {
        return "../components/etfInfo.js";
      },
      etfSwiperMp: function () {
        return "../components/etfSwiperMp.js";
      },
    },
    props: {
      symbol: { type: String, default: "" },
      wujiConfig: { type: Object, default: function () {} },
      accountStatus: { type: Boolean, default: !1 },
      isUS: { type: Boolean, default: !1 },
      isHK: { type: Boolean, default: !1 },
      infoTitle: { type: String, default: "" },
      infoLabel: {
        type: Array,
        default: function () {
          return [];
        },
      },
      openSession: { type: Number, default: 0 },
    },
    setup: function (t, n) {
      var r = n.emit,
        o = p.inject("hqBridge"),
        a = p.ref([]),
        i = p.ref({
          title: "开沪深A股账户，通过跨境ETF投资港股！",
          label: ["无需境外银行卡", "T+0 日内交易", "无印花税"],
        }),
        c = p.ref(!1),
        u = p.ref(!0);
      function s(e) {
        r("setTradeStock", e);
      }
      function f(e) {
        var t = (function (e) {
          var t = null == e ? void 0 : e[0];
          return t
            ? { market: t.market, code: t.scode, fullCode: t.code }
            : null;
        })(e);
        t && s(t);
      }
      function d() {
        t.infoTitle && t.infoLabel.length
          ? (i.value = { title: t.infoTitle, label: t.infoLabel })
          : (i.value = (function (e, t, n) {
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                o = e ? "hasBind" : "noAccount",
                a = t ? "hk" : n ? "us" : "",
                i = "".concat(o, "_").concat(a, "_title"),
                c = "".concat(o, "_").concat(a, "_info");
              return { title: r[i] || v[i], label: r[c] || v[c] };
            })(t.accountStatus, t.isHK, t.isUS, t.wujiConfig));
      }
      return (
        (function () {
          l(
            this,
            null,
            e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.t0 = function (e) {
                          var t = e.ETFList,
                            n = e.hasRecommendEtf;
                          (a.value = t), (u.value = n), (c.value = !0), f(t);
                        }),
                        (e.next = 3),
                        m(o, t.symbol)
                      );
                    case 3:
                      (e.t1 = e.sent), (0, e.t0)(e.t1);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        })(),
        p.watch(
          function () {
            return t.openSession;
          },
          function () {
            a.value.length > 0 && f(a.value);
          }
        ),
        p.watch(
          function () {
            return t.wujiConfig;
          },
          function (e) {
            e && d();
          },
          { immediate: !0 }
        ),
        {
          RecommendETFList: a,
          closeMiniapply: function () {
            r("closeMiniApply");
          },
          ETFInfo: i,
          setTradeStock: s,
          etflistReady: c,
          hasRecEtf: u,
        }
      );
    },
  };
Array ||
  (p.resolveComponent("etf-info") + p.resolveComponent("etf-swiper-mp"))();
var b = p._export_sfc(h, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return {
        a: p.p({ title: r.ETFInfo.title, label: r.ETFInfo.label }),
        b: p.o(r.closeMiniapply, 2021),
        c: p.o(r.setTradeStock, 2022),
        d: p.p({
          "has-rec-etf": r.hasRecEtf,
          "etf-list": r.RecommendETFList,
          "etflist-ready": r.etflistReady,
        }),
      };
    },
  ],
]);
wx.createComponent(b);
