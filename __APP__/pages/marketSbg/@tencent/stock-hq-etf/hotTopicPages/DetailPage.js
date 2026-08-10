require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t) {
    for (var o in t || (t = {})) u.call(t, o) && c(e, o, t[o]);
    if (i) {
      var r,
        a = n(i(t));
      try {
        for (a.s(); !(r = a.n()).done; ) {
          o = r.value;
          l.call(t, o) && c(e, o, t[o]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return r(e, a(t));
  },
  f = function (e, t, n) {
    return new Promise(function (o, r) {
      var a = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        u = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(a, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  v = require("../../stock-hq-data/index.js"),
  m = require("../../stock-hq-core/utils/storage/local.js");
require("../../../js-cookie/src/js.cookie.js");
var h = require("../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  k = require("../api/index.js"),
  g = require("../utils/common.js");
function y(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
    n = Number(e);
  return Number.isNaN(n)
    ? "--"
    : "".concat(t && n > 0 ? "+" : "").concat(n.toFixed(2), "%");
}
function b(e) {
  return null == e || "" === e ? "--" : e;
}
function w(e) {
  return "".concat(g.setZdpClass(e));
}
function _() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return void 0 !== e.zdf && null !== e.zdf ? e.zdf : e.price_ratio;
}
function x() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e.fund_name || e.name || "--";
}
function S() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e.code || e.symbol || e.stock_code || e.fund_code || "--";
}
function C() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = String(S(e)).trim(),
    n = t.match(/^([a-z]{2})(\d+)$/i);
  return n
    ? { market: n[1].toLowerCase(), code: n[2] }
    : /^5/.test(t)
    ? { market: "sh", code: t }
    : /^(0|1|2|3)/.test(t)
    ? { market: "sz", code: t }
    : { market: "cnjj", code: t };
}
var q = [
    {
      title: "行业好不好？",
      content: "行业订单量增长超 40%，超8成公司已实现盈利。",
      star: 5,
      star_desc: "高速增长",
    },
    {
      title: "主力买不买？",
      content: "近5日主力资金净流入超 2.5亿，昨日净流出5亿。",
      star: 3,
      star_desc: "持续流入",
    },
    {
      title: "机构怎么看？",
      content: "中信证券等十余家主流券商发布研报看好商业航天。",
      star: 4,
      star_desc: "机构看好",
    },
  ],
  E = { 3: 3, 2: 2, 1: 1 },
  R = {
    midTitle: "板块相关性",
    midColumn: "posRatioText",
    title: "涨跌幅",
    column: "price_ratio",
    unit: "%",
    color: !0,
    midColorColumn: null,
    colorColumn: "price_ratio",
    type: "hot_topic_related_etf",
  },
  A = "hot_topic_detail",
  B = p.defineComponent({
    name: "DetailPage",
    components: {
      HotTopicNavBar: function () {
        return "./components/HotTopicNavBar.js";
      },
      KeypointCard: function () {
        return "./components/KeypointCard.js";
      },
      OpinionCard: function () {
        return "./components/OpinionCard.js";
      },
      EtfInvestCard: function () {
        return "./components/EtfInvestCard.js";
      },
      FooterBar: function () {
        return "./components/FooterBar.js";
      },
      OpinionRuleSheet: function () {
        return "./components/OpinionRuleSheet.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
      semiMask: function () {
        return "../../../../asyncCom/@tencent/st-semi-modal/index.js";
      },
      NoData: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/NoData.js";
      },
      TrustFooter: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
    },
    props: { query: { type: Object, default: null } },
    options: { styleIsolation: "shared" },
    setup: function (n) {
      var o = this,
        r = (
          "undefined" == typeof navigator
            ? { IS_ZXG: !1 }
            : h._default(navigator.userAgent).env
        ).IS_ZXG,
        a = p.getCurrentInstance(),
        i = new v.DetailApi(function () {
          return 1 === arguments.length
            ? p.StockBridge.request(
                arguments.length <= 0 ? void 0 : arguments[0],
                p.RequestTypeEnum.GET,
                {},
                { forceCallback: !0 }
              )
            : p.StockBridge.request(
                arguments.length <= 0 ? void 0 : arguments[0],
                arguments.length <= 1 ? void 0 : arguments[1],
                arguments.length <= 2 ? void 0 : arguments[2],
                d(
                  s({}, (arguments.length <= 3 ? void 0 : arguments[3]) || {}),
                  { forceCallback: !0 }
                )
              );
        }),
        u = p.computed(function () {
          var e, t;
          return null !=
            (t = null == (e = null == a ? void 0 : a.proxy) ? void 0 : e.$route)
            ? t
            : {};
        }),
        l = p.computed(function () {
          var e;
          return n.query || (null == (e = u.value) ? void 0 : e.query) || {};
        }),
        c = p.ref(null),
        g = p.ref(!0),
        B = p.ref(!1),
        O = p.ref(!1),
        N = p.ref(!1),
        T = p.ref(!1),
        j = p.ref(null),
        I = p.ref(!1),
        P = p.ref(!1),
        D = p.ref(!1),
        F = p.ref(null),
        L = p.ref(!1),
        M = ["mpwzq", "mpweapp"].includes("mpweapp"),
        G = ["mpwzq", "wzqlight"].includes("mpweapp"),
        $ = p.ref(r),
        z = p.ref(0),
        H = p.computed(function () {
          return z.value <= 30 ? 0 : Math.min(1, z.value / 120);
        }),
        Q = p.ref("");
      function U(e, t) {
        p.StockBridge.mtaReport(
          s(
            { busi: "hq", eventName: e },
            t && Object.keys(t).length ? { params: t } : {}
          )
        );
      }
      var J = 0,
        W = new Set();
      function Z(e, t, n) {
        if (!(n <= t)) {
          var o = Math.min(100, Math.round(((e + t) / n) * 100));
          o <= J ||
            ((J = o),
            [25, 50, 75, 100].forEach(function (e) {
              o >= e &&
                !W.has(e) &&
                (W.add(e), U("detail_page_scroll_depth_scroll", { depth: e }));
            }));
        }
      }
      function K(e) {
        if (M)
          !(function (e) {
            if (
              void 0 !== p.wx$1 &&
              p.wx$1.createSelectorQuery &&
              p.wx$1.getSystemInfoSync
            ) {
              var t = Number(e) || 0;
              p.nextTick$1(function () {
                var e = p.wx$1.getSystemInfoSync();
                p.wx$1
                  .createSelectorQuery()
                  .in((null == a ? void 0 : a.proxy) || a)
                  .select(".hot-topic-detail-page")
                  .boundingClientRect(function (n) {
                    var o = Number(null == e ? void 0 : e.windowHeight) || 0,
                      r = Number(null == n ? void 0 : n.height) || 0;
                    Z(t, o, r);
                  })
                  .exec();
              });
            }
          })(e);
        else if (
          "undefined" != typeof window &&
          "undefined" != typeof document
        ) {
          var t = document.documentElement,
            n = window.pageYOffset || t.scrollTop || 0;
          (z.value = n),
            Z(
              n,
              window.innerHeight || t.clientHeight || 0,
              t.scrollHeight || 0
            );
        }
      }
      function Y() {
        var e = m.sls.getItem("_qluin") || p.StockBridge.getStorage("_qluin"),
          t = m.sls.getItem("_qlskey") || p.StockBridge.getStorage("_qlskey");
        return {
          app: p.OriginTypeEnum.mpweapp,
          appid: "wx4ffb369b6881ee5e",
          openid: e || "",
          fskey: t || "",
          check: 11,
        };
      }
      function X() {
        var e = p.StockBridge.getCookie("wzq_qluin"),
          t = p.StockBridge.getCookie("wzq_qlskey");
        return e && t
          ? { appid: "wx9cf8c670ebd68ce4", openid: e, fskey: t, check: 11 }
          : {};
      }
      function V(e) {
        return f(
          this,
          null,
          t().mark(function n() {
            var o;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((o = M ? Y() : X()).openid && o.fskey) {
                      t.next = 3;
                      break;
                    }
                    throw new Error("missing login info");
                  case 3:
                    return t.abrupt(
                      "return",
                      p.StockBridge.request(
                        "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
                        "GET",
                        d(s({}, o), { seq: JSON.stringify(e) }),
                        { forceCallback: !0 }
                      )
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, n);
          })
        );
      }
      var ee = p.computed(function () {
          var e, t;
          return String(
            (null == (e = l.value) ? void 0 : e.code) ||
              (null == (t = l.value) ? void 0 : t.symbol) ||
              ""
          );
        }),
        te = p.computed(function () {
          var e;
          return (null == (e = c.value) ? void 0 : e.symbol) || ee.value;
        }),
        ne = p.computed(function () {
          var e;
          return (null == (e = c.value) ? void 0 : e.point) || {};
        }),
        oe = p.computed(function () {
          var e;
          return (null == (e = c.value) ? void 0 : e.opinion) || {};
        }),
        re = p.computed(function () {
          var t;
          return (function (t) {
            if (!t || "object" != e(t)) return {};
            var n = function (e) {
              var t,
                n = Number(e);
              return Number.isNaN(n) ? e : null != (t = E[n]) ? t : e;
            };
            return { short: n(t.short), long: n(t.long) };
          })(null == (t = oe.value) ? void 0 : t.judgments);
        }),
        ae = p.computed(function () {
          var e, t, n;
          return null != (n = null == (e = c.value) ? void 0 : e.zdf)
            ? n
            : null == (t = c.value)
            ? void 0
            : t.price_ratio;
        }),
        ie = p.computed(function () {
          var e,
            t,
            n = Array.isArray(null == (e = c.value) ? void 0 : e.etfs)
              ? c.value.etfs
              : null == (t = c.value)
              ? void 0
              : t.etf;
          return Array.isArray(n) ? n : [];
        }),
        ue = p.computed(function () {
          return ie.value[0] || {};
        }),
        le = p.computed(function () {
          return S(ue.value);
        }),
        ce = p.computed(function () {
          return C(ue.value);
        }),
        se = p.computed(function () {
          var e = String(le.value || "").trim();
          if (!e || "--" === e) return "";
          if (/^[a-z]{2}/i.test(e)) return e.toLowerCase();
          var t = ce.value,
            n = t.market,
            o = t.code;
          return n && o && "cnjj" !== n ? "".concat(n).concat(o) : e;
        }),
        de = p.computed(function () {
          var e = String(le.value || "").trim(),
            t = ce.value,
            n = t.market,
            o = t.code,
            r = e;
          /^[a-z]{2}/i.test(e)
            ? (r = e.toLowerCase())
            : ["sh", "sz", "hk", "us"].includes(n) && (r = n + o);
          var a = r ? v.utils.splitSymbol(r) : {};
          return {
            symbol: e || "--",
            market: a.market || n,
            code: a.scode || o,
          };
        }),
        fe = R,
        pe = p.computed(function () {
          return ie.value.slice(1).map(function (e) {
            var t = C(e),
              n = t.market,
              o = t.code,
              r = Number(e.price_ratio);
            return d(s({}, e), {
              market: n,
              code: o,
              name: x(e),
              price_ratio: Number.isNaN(r) ? "--" : e.price_ratio,
              posRatioText: y(e.pos_ratio, !1),
            });
          });
        }),
        ve = p.computed(function () {
          return w(ae.value);
        }),
        me = p.computed(function () {
          return !(!ne.value.news && !ne.value.affect);
        }),
        he = p.computed(function () {
          return void 0 !== re.value.short || void 0 !== re.value.long;
        }),
        ke = p.computed(function () {
          return (function (e) {
            var t = Array.isArray(e) ? e : [e].filter(Boolean);
            return 0 === t.length
              ? q
              : t.slice(0, 3).map(function (e, t) {
                  var n, o;
                  return {
                    title:
                      e.title ||
                      (null == (n = q[t]) ? void 0 : n.title) ||
                      "--",
                    content:
                      e.content ||
                      (null == (o = q[t]) ? void 0 : o.content) ||
                      "--",
                    star: e.star,
                    star_desc: e.star_desc,
                  };
                });
          })(oe.value.analysis);
        }),
        ge = p.computed(function () {
          return !!oe.value.analysis;
        }),
        ye = p.computed(function () {
          return !!(oe.value.overview || he.value || ge.value);
        }),
        be = p.computed(function () {
          var e,
            t = (null == (e = c.value) ? void 0 : e.name) || "热点主题",
            n = ae.value;
          return "".concat(
            t,
            n >= 3
              ? "大涨是短期炒作还是拐点？"
              : n <= -3
              ? "遭遇回调，是风险释放还是倒车接人？"
              : "后市怎么看？板块多维剖析一键直达"
          );
        }),
        we = p.computed(function () {
          var e, t;
          return (
            (null == (e = c.value) ? void 0 : e.desc) ||
            (null == (t = oe.value) ? void 0 : t.overview) ||
            "用ETF投资行业板块，紧跟热点机会"
          );
        }),
        _e = p.computed(function () {
          return "undefined" != typeof window ? window.location.href : void 0;
        }),
        xe = p.computed(function () {
          var e;
          return (null == (e = c.value) ? void 0 : e.symbol) || ee.value || "";
        }),
        Se = p.computed(function () {
          var e;
          return {
            symbol: ee.value,
            topic_name: (null == (e = c.value) ? void 0 : e.name) || "",
          };
        }),
        Ce = p.computed(function () {
          var e;
          return {
            symbol: ee.value,
            topic_name: (null == (e = c.value) ? void 0 : e.name) || "",
          };
        }),
        qe = p.computed(function () {
          var e;
          return (null == (e = j.value) ? void 0 : e.title) || be.value;
        }),
        Ee = p.computed(function () {
          var e, t;
          return (
            (null == (e = j.value) ? void 0 : e.prompt) ||
            (null == (t = j.value) ? void 0 : t.query) ||
            qe.value
          );
        }),
        Re = p.computed(function () {
          var e, t, n, o;
          return d(s({}, j.value || {}), {
            title: qe.value,
            prompt: Ee.value,
            scene: (null == (e = j.value) ? void 0 : e.scene) || A,
            sub_channel:
              (null == (t = j.value) ? void 0 : t.sub_channel) || "manual",
            sub_scene:
              (null == (n = j.value) ? void 0 : n.sub_scene) ||
              "hot_topic_detail",
            ext_content:
              (null == (o = j.value) ? void 0 : o.ext_content) || ee.value,
          });
        });
      function Ae() {
        if (M) {
          var e = p.StockBridge.getStorage("user/skin");
          return ("dark" === e || "black" === e) && !G;
        }
        if ("undefined" == typeof document) return !1;
        var t = document.body.getAttribute("data-theme") || "light";
        return "dark" === t || "black" === t;
      }
      var Be = p.computed(function () {
          return Ae() ? "dark" : "white";
        }),
        Oe = p.computed(function () {
          return Ae()
            ? "https://st.gtimg.com/design/992aaa5730e993fcdf5f3fea71b8e386.png"
            : "https://st.gtimg.com/pcm/mp16i3xk_6369cf5192087e6186c6f449d8219ef2.png";
        });
      function Ne() {
        return f(
          this,
          null,
          t().mark(function e() {
            var n, o, i, u, l, c, v, m;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((l = String(le.value || "").trim()) && "--" !== l) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", void (I.value = !1));
                  case 3:
                    if (
                      !r ||
                      !(null ==
                      (o =
                        null == (n = null == a ? void 0 : a.proxy)
                          ? void 0
                          : n.$sdk)
                        ? void 0
                        : o.checkStockZxg)
                    ) {
                      e.next = 8;
                      break;
                    }
                    return (e.next = 6), a.proxy.$sdk.checkStockZxg(l);
                  case 6:
                    return (
                      (c = e.sent),
                      e.abrupt(
                        "return",
                        void (I.value = Boolean(null == c ? void 0 : c.exist))
                      )
                    );
                  case 8:
                    if (!M) {
                      e.next = 14;
                      break;
                    }
                    return (
                      (e.next = 11),
                      (function (e) {
                        return f(
                          this,
                          null,
                          t().mark(function n() {
                            var o;
                            return t().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (o = Y()),
                                      t.abrupt(
                                        "return",
                                        o.openid && o.fskey
                                          ? p.StockBridge.request(
                                              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockGroups",
                                              "GET",
                                              d(s({}, o), { stocks: e }),
                                              { forceCallback: !0 }
                                            )
                                          : null
                                      )
                                    );
                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, n);
                          })
                        );
                      })(l)
                    );
                  case 11:
                    (e.t0 = e.sent), (e.next = 17);
                    break;
                  case 14:
                    return (
                      (e.next = 16),
                      (function (e) {
                        return f(
                          this,
                          null,
                          t().mark(function n() {
                            var o;
                            return t().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (o = X()),
                                      t.abrupt(
                                        "return",
                                        o.openid && o.fskey
                                          ? p.StockBridge.request(
                                              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockGroups",
                                              "GET",
                                              d(s({}, o), { stocks: e })
                                            )
                                          : null
                                      )
                                    );
                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, n);
                          })
                        );
                      })(l)
                    );
                  case 16:
                    e.t0 = e.sent;
                  case 17:
                    (v = e.t0),
                      (m =
                        null ==
                        (u =
                          null == (i = null == v ? void 0 : v.data)
                            ? void 0
                            : i[l])
                          ? void 0
                          : u.grpids),
                      (I.value = Array.isArray(m) && m.length > 0);
                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      }
      function Te() {
        N.value && U("close_btn_close"), (N.value = !1);
      }
      function je() {
        p.StockBridge.userShare({
          title: be.value,
          desc: we.value,
          path: _e.value,
          mtaParams: { symbol: ee.value },
        });
      }
      var Ie = p.ref(!1),
        Pe = null,
        De = null,
        Fe = !0,
        Le = "",
        Me = !1,
        Ge = ["etfhotlist", "etfhotsearch"],
        $e = "",
        ze = null;
      function He() {
        return f(
          this,
          null,
          t().mark(function e() {
            var n, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        i.getMarketState({ market: 0 }, { needProcess: !0 })
                      );
                    case 3:
                      (n = e.sent),
                        (o = ((null == n ? void 0 : n.split("|")) || [])
                          .map(function (e) {
                            return e.split("_");
                          })
                          .filter(function (e) {
                            return "NEWSH" === e[0];
                          })).length
                          ? (Ie.value = "open" === o[0][1])
                          : Ie.value || (Ie.value = !0),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        Ie.value || (Ie.value = !0);
                    case 11:
                      Fe &&
                        (De = setTimeout(function () {
                          He(), clearTimeout(De);
                        }, 3e4));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        );
      }
      function Qe() {
        Ue(),
          (Pe = setInterval(function () {
            Fe && Ie.value && ee.value && Ze(!0);
          }, 5e3));
      }
      function Ue() {
        Pe && (clearInterval(Pe), (Pe = null));
      }
      function Je() {
        De && (clearTimeout(De), (De = null));
      }
      function We() {
        (Fe = !document.hidden) ? (He(), Ze(!0), Qe()) : (Ue(), Je());
      }
      function Ze() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return f(
          this,
          null,
          t().mark(function n() {
            var o;
            return t().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (!ee.value) {
                        n.next = 19;
                        break;
                      }
                      return (
                        e || (g.value = !0),
                        (n.prev = 2),
                        (n.next = 5),
                        k.api.getHotTopicDetail(p.StockBridge, {
                          symbol: ee.value,
                        })
                      );
                    case 5:
                      return (
                        (o = n.sent),
                        (c.value = (null == o ? void 0 : o.data) || null),
                        (Le = ee.value),
                        (n.next = 10),
                        (function () {
                          return f(
                            this,
                            null,
                            t().mark(function e() {
                              return t().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!le.value || "--" === le.value) {
                                          e.next = 15;
                                          break;
                                        }
                                        return (
                                          (P.value = !0),
                                          (e.prev = 2),
                                          (e.next = 5),
                                          Ne()
                                        );
                                      case 5:
                                        e.next = 10;
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(2)),
                                          (I.value = !1);
                                      case 10:
                                        return (
                                          (e.prev = 10),
                                          (P.value = !1),
                                          e.finish(10)
                                        );
                                      case 13:
                                        e.next = 16;
                                        break;
                                      case 15:
                                        I.value = !1;
                                      case 16:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[2, 7, 10, 13]]
                              );
                            })
                          );
                        })()
                      );
                    case 10:
                      je(), (n.next = 16);
                      break;
                    case 13:
                      (n.prev = 13),
                        (n.t0 = n.catch(2)),
                        e || ((c.value = null), (I.value = !1));
                    case 16:
                      return (n.prev = 16), e || (g.value = !1), n.finish(16);
                    case 19:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[2, 13, 16, 19]]
            );
          })
        );
      }
      return (
        p.onMounted(function () {
          return f(
            o,
            null,
            t().mark(function e() {
              var n, o;
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (Me = !0),
                        Ze(),
                        He(),
                        Qe(),
                        p.nextTick$1(function () {
                          p.StockBridge.mtaReport({
                            busi: "hq",
                            eventName: "detail_page_overall_brow",
                            exposure: {
                              selector: ".hot-topic-detail-page",
                              context: (null == a ? void 0 : a.proxy) || a,
                            },
                          });
                        }),
                        "undefined" != typeof window &&
                          (window.addEventListener("scroll", K, {
                            passive: !0,
                          }),
                          document.addEventListener("visibilitychange", We)),
                        (o =
                          null == (n = null == a ? void 0 : a.proxy)
                            ? void 0
                            : n.$router) &&
                          "function" == typeof o.afterEach &&
                          (ze = o.afterEach(function (e, t) {
                            $e = (null == t ? void 0 : t.name) || "";
                          })),
                        (e.next = 5),
                        p.StockBridge.tradeFunc.fetchBrokerInfo()
                      );
                    case 5:
                      p.StockBridge.tradeFunc.isBind() ||
                        (Q.value = "I4N00p000a011");
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        }),
        p.onActivated(function () {
          (Me && ((Me = !1), ee.value && ee.value === Le)) ||
            ((Fe = !0),
            ee.value &&
              ee.value !== Le &&
              ((g.value = !0),
              (c.value = null),
              (I.value = !1),
              (O.value = !1),
              (B.value = !1),
              Ze()),
            Ge.includes($e) &&
              "undefined" != typeof window &&
              "undefined" != typeof document &&
              p.nextTick$1(function () {
                window.scrollTo(0, 0),
                  document.documentElement &&
                    (document.documentElement.scrollTop = 0),
                  document.body && (document.body.scrollTop = 0);
              }),
            He(),
            Qe());
        }),
        p.onBeforeUnmount(function () {
          Ue(),
            Je(),
            "function" == typeof ze && (ze(), (ze = null)),
            "undefined" != typeof window &&
              (window.removeEventListener("scroll", K),
              document.removeEventListener("visibilitychange", We));
        }),
        {
          detail: c,
          isLoading: g,
          isOpinionExpanded: B,
          isEtfExpanded: O,
          showOpinionRuleSheet: N,
          showAiDialog: T,
          opinionRuleSheetRef: F,
          isMP: M,
          isLite: G,
          isAPP: $,
          point: ne,
          opinion: oe,
          judgments: re,
          detailRatio: ae,
          etfList: ie,
          featuredEtf: ue,
          featuredEtfMiniMinsSymbol: se,
          relatedEtfRankConfig: fe,
          relatedEtfRankList: pe,
          channelId: Q,
          isFeaturedEtfAdded: I,
          isFeaturedEtfLoading: P,
          isWatchlistSubmitting: D,
          ratioClass: ve,
          hasPoint: me,
          hasOpinion: ye,
          opinionAnalysisList: ke,
          footerContentId: xe,
          aiReportInfo: Se,
          aiMaterial: Ce,
          aiDialogQuestion: qe,
          aiQuestionQuery: Ee,
          aiDialogServerObj: Re,
          bgImageSrc: Oe,
          formatRatio: y,
          formatText: b,
          getRatioClass: w,
          getEtfRatio: _,
          getEtfName: x,
          calcHistoryReturn: function (e) {
            if (!e || !e.history_ratio) return "1186";
            if ("total" === e.history_ratio.type) {
              var t = Number(e.history_ratio.price_ratio);
              return Number.isNaN(t) ? "1186" : Math.round(1e3 * (1 + t / 100));
            }
            var n = Number(e.history_ratio.annualized_return);
            return Number.isNaN(n) ? "1186" : Math.round(1e3 * (1 + n / 100));
          },
          handleToggleOpinion: function () {
            U("market_outlook_more_btn_click"), (B.value = !B.value);
          },
          handleToggleEtf: function () {
            O.value = !O.value;
          },
          handleRankItemClick: function () {
            U("bottom_etf_list_click");
          },
          handleShowOpinionRuleSheet: function () {
            U("market_outlook_xiao_i_click"), (N.value = !0);
          },
          handleCloseOpinionRuleSheet: Te,
          handleCloseOpinionRuleSheetByIcon: function () {
            var e;
            (null == (e = F.value) ? void 0 : e.closeSemimask)
              ? F.value.closeSemimask()
              : Te();
          },
          handleAskAi: function (e) {
            if ((U("ask_yuanbao_entry_click"), r)) {
              var t = ee.value,
                n = e || {},
                o = n.title,
                a = n.prompt,
                i = n.scene,
                u = o || be.value,
                l = a || o || be.value,
                c = i || A,
                s = e ? JSON.stringify(e) : "{}",
                d =
                  ("undefined" != typeof document &&
                    document.body.getAttribute("data-theme")) ||
                  "light",
                f = "light" === d || "white" === d,
                p = {
                  url: "qqstock://SHY?info=".concat(
                    encodeURIComponent(
                      JSON.stringify({
                        p_key: "com.tencent.shy.search_ai",
                        p_url: "semiAi?stockCode="
                          .concat(t, "&sourceFrom=")
                          .concat(c, "&aiDialogQuestion=")
                          .concat(encodeURIComponent(u), "&aiQuestionQuery=")
                          .concat(encodeURIComponent(l), "&serverObj=")
                          .concat(encodeURIComponent(s)),
                        showNav: !1,
                      })
                    )
                  ),
                  height:
                    0.8 *
                    ("undefined" != typeof window ? window.screen.height : 812),
                  coverColor: f ? "#66000000" : "#99000000",
                  cornerRadius: 8,
                };
              location.href = "qqstock://SDModal?info=".concat(
                encodeURIComponent(JSON.stringify(p))
              );
            } else (j.value = e || null), (T.value = !0);
          },
          handleCloseAiDialog: function () {
            (T.value = !1), (j.value = null);
          },
          handleShare: function () {
            je(),
              $.value &&
              (
                ("undefined" != typeof navigator && navigator.userAgent) ||
                ""
              ).match(/(OpenHarmony);?[\s\/]+([\d.]+)?/)
                ? p.StockBridge.toast("暂未支持，敬请期待", "none")
                : M || p.StockBridge.openShareGuide();
          },
          handleGoFeaturedEtfDetail: function () {
            var e = de.value,
              t = e.market,
              n = e.code,
              o = e.symbol;
            if (t && n && "--" !== o) {
              var r = v.utils.splitSymbol(o).market;
              U("etf_card_click", { stockid: o }),
                p.StockRouter.routeTo({
                  name: "stockdetail",
                  query: s(
                    { market: r, scode: n },
                    "mpweapp" === p.ShellTypeEnum.SHY ? { lite: "1" } : {}
                  ),
                });
            }
          },
          handleGoPlateDetail: function () {
            var e;
            p.StockBridge.report(
              "hq.etfhotspotdetail.sector_name_and_change_hot_click"
            );
            var t = ee.value;
            if (t) {
              var n = t.slice(0, 2),
                o = t.slice(2);
              $.value
                ? (location.href = "qqstock://StockDetail?info=".concat(
                    encodeURIComponent(
                      JSON.stringify({
                        code: t,
                        name: (null == (e = c.value) ? void 0 : e.name) || "",
                        showNav: !0,
                      })
                    )
                  ))
                : p.StockRouter.routeTo({
                    name: "stockdetail",
                    query: { market: n, scode: o },
                  });
            }
          },
          handleBuyFeaturedEtf: function () {
            return f(
              this,
              null,
              t().mark(function e() {
                var n, o, r, a, i, u, l, c;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!L.value) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            ((o = p.StockBridge.tradeFunc),
                            (r = de.value),
                            (a = r.market),
                            (i = r.code),
                            (u = r.symbol),
                            !a || !i || "--" === u)
                          ) {
                            e.next = 23;
                            break;
                          }
                          if (
                            (p.StockBridge.report(
                              "hq.etfhotspotdetail.etf_card_instant_buy_btn_click",
                              { fchannel_id_fm_i: Q.value }
                            ),
                            (L.value = !0),
                            !o)
                          ) {
                            e.next = 22;
                            break;
                          }
                          return (
                            (e.prev = 5), (e.next = 8), o.fetchBrokerInfo()
                          );
                        case 8:
                          if (o.isBind()) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            (p.StockBridge.report(
                              "hq.etfhotspotdetail.etf_card_instant_open_btn_click",
                              { fchannel_id_fm_i: Q.value }
                            ),
                            void o.navToApplyIndex({ stat: Q.value }))
                          );
                        case 10:
                          return (
                            (l =
                              (null == (n = o.getCurrentBroker)
                                ? void 0
                                : n.call(o)) || {}),
                            (c = l.code),
                            (e.next = 13),
                            o.navToBrokerPage({
                              broker: c,
                              name: "TradeStock",
                              data: { market: a, code: i, entrust_type: "buy" },
                            })
                          );
                        case 13:
                          e.next = 17;
                          break;
                        case 15:
                          (e.prev = 15), (e.t0 = e.catch(5));
                        case 17:
                          return (e.prev = 17), (L.value = !1), e.finish(17);
                        case 20:
                          e.next = 23;
                          break;
                        case 22:
                          L.value = !1;
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 15, 17, 20]]
                );
              })
            );
          },
          handleGoMoreEtf: function () {
            p.StockBridge.report("hq.etfhotspotdetail.back_btn_click");
            var e = te.value,
              t =
                "https://wzq.tenpay.com/mp/v2/index.html?stat_data=OLA00p000h024&lite=1#/chy/fundList?boardType="
                  .concat(encodeURIComponent(e), "&pageType=plate")
                  .concat(G ? "&jumpFrom=lite" : "");
            if ($.value) {
              var n = (
                  ("undefined" != typeof navigator && navigator.userAgent) ||
                  ""
                ).match(/(OpenHarmony);?[\s\/]+([\d.]+)?/),
                o = { board_type: e, stock_code: ee.value };
              return n
                ? void p.StockBridge.openExtraWebview(
                    "https://wzq.tenpay.com/mp/v2/index.html#/chy/fundList",
                    { boardType: e, pageType: "plate" }
                  )
                : void (location.href = "qqstock://RelatedFund?info=".concat(
                    encodeURIComponent(JSON.stringify(o))
                  ));
            }
            p.StockBridge.openExtraWebview(t, {});
          },
          updateFeaturedEtfWatchlist: function (e) {
            return f(
              this,
              null,
              t().mark(function n() {
                var o, i, u, l, c, s, d, f, v, m, h, k;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (U("etf_card_add_favorite_btn_click"),
                            !D.value && le.value && "--" !== le.value)
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          if (
                            ((d = le.value),
                            (D.value = !0),
                            (t.prev = 4),
                            !(
                              r &&
                              (null ==
                              (i =
                                null == (o = null == a ? void 0 : a.proxy)
                                  ? void 0
                                  : o.$sdk)
                                ? void 0
                                : i.addStockZxg) &&
                              (null ==
                              (l =
                                null == (u = null == a ? void 0 : a.proxy)
                                  ? void 0
                                  : u.$sdk)
                                ? void 0
                                : l.removeStockFromGroup)
                            ))
                          ) {
                            t.next = 21;
                            break;
                          }
                          if (!e) {
                            t.next = 12;
                            break;
                          }
                          return (t.next = 9), a.proxy.$sdk.addStockZxg(d);
                        case 9:
                          (t.t0 = t.sent), (t.next = 15);
                          break;
                        case 12:
                          return (
                            (t.next = 14), a.proxy.$sdk.removeStockFromGroup(d)
                          );
                        case 14:
                          t.t0 = t.sent;
                        case 15:
                          if (
                            ((f = t.t0),
                            (v = e
                              ? "addStockToGroup:ok"
                              : "removeStockFromGroup:ok"),
                            (null == f ? void 0 : f.err_msg) === v)
                          ) {
                            t.next = 19;
                            break;
                          }
                          throw new Error(
                            (null == f ? void 0 : f.err_msg) ||
                              "watchlist toggle failed"
                          );
                        case 19:
                          t.next = 28;
                          break;
                        case 21:
                          return (
                            (m = [
                              {
                                act: e ? "sa" : "sd",
                                code: d,
                                timestamp: Math.floor(Date.now() / 1e3),
                              },
                            ]),
                            (t.next = 24),
                            V(m)
                          );
                        case 24:
                          if (
                            ((h = t.sent),
                            (k =
                              null == (c = null == h ? void 0 : h.data)
                                ? void 0
                                : c.record),
                            0 === (null == h ? void 0 : h.code) &&
                              Array.isArray(k) &&
                              k.length > 0 &&
                              k.every(function (e) {
                                return 0 === (null == e ? void 0 : e.code);
                              }))
                          ) {
                            t.next = 28;
                            break;
                          }
                          throw new Error(
                            (null == h ? void 0 : h.msg) ||
                              (null == (s = null == k ? void 0 : k[0])
                                ? void 0
                                : s.code) ||
                              "watchlist toggle failed"
                          );
                        case 28:
                          (I.value = e),
                            p.StockBridge.toast(
                              e ? "已添加自选" : "已删除自选"
                            ),
                            (t.next = 34);
                          break;
                        case 31:
                          (t.prev = 31),
                            (t.t1 = t.catch(4)),
                            p.StockBridge.toast(
                              e ? "添加自选失败" : "删除自选失败"
                            );
                        case 34:
                          return (t.prev = 34), (D.value = !1), t.finish(34);
                        case 37:
                        case "end":
                          return t.stop();
                      }
                  },
                  n,
                  null,
                  [[4, 31, 34, 37]]
                );
              })
            );
          },
          handleBack: function () {
            var e;
            if (
              (U("back_btn_click"),
              M && void 0 !== p.wx$1 && p.wx$1.navigateBack)
            )
              p.wx$1.navigateBack({ delta: 1 });
            else {
              var t =
                null == (e = null == a ? void 0 : a.proxy) ? void 0 : e.$router;
              t && "function" == typeof t.back
                ? t.back()
                : "undefined" != typeof window &&
                  window.history &&
                  window.history.back();
            }
          },
          headerAlpha: H,
          setScrollTop: function (e) {
            var t = Number(e);
            Number.isFinite(t) && ((z.value = t), K(t));
          },
          skin: Be,
        }
      );
    },
  });
Array ||
  (
    p.resolveComponent("HotTopicNavBar") +
    p.resolveComponent("NoData") +
    p.resolveComponent("KeypointCard") +
    p.resolveComponent("OpinionCard") +
    p.resolveComponent("EtfInvestCard") +
    p.resolveComponent("TrustFooter") +
    p.resolveComponent("OpinionRuleSheet") +
    p.resolveComponent("semi-mask") +
    p.resolveComponent("FooterBar") +
    p.resolveComponent("half-screen-ai-entry")
  )();
var O = p._export_sfc(B, [
  [
    "render",
    function (e, t, n, o, r, a) {
      return p.e(
        { a: e.isMP || e.isAPP },
        e.isMP || e.isAPP
          ? {
              b: p.o(e.handleBack, 566),
              c: p.p({
                title: e.detail && e.detail.name ? e.detail.name : "",
                opacity: e.headerAlpha,
              }),
            }
          : {},
        { d: e.isLoading },
        e.isLoading
          ? {}
          : e.detail && e.detail.name
          ? p.e(
              {
                f: e.bgImageSrc,
                g: p.t(e.detail.name || "--"),
                h: p.t(e.formatRatio(e.detailRatio)),
                i: p.n(e.ratioClass),
                j: p.o(function () {
                  return (
                    e.handleGoPlateDetail &&
                    e.handleGoPlateDetail.apply(e, arguments)
                  );
                }, 567),
                k: e.detail.desc,
              },
              e.detail.desc ? { l: p.t(e.detail.desc) } : {},
              {
                m: p.n({ "page-hero--h5": !e.isMP && !e.isAPP }),
                n: e.hasPoint,
              },
              e.hasPoint ? { o: p.p({ point: e.point }) } : {},
              { p: e.hasOpinion },
              e.hasOpinion
                ? {
                    q: p.o(e.handleShowOpinionRuleSheet, 568),
                    r: p.o(e.handleToggleOpinion, 569),
                    s: p.p({
                      opinion: e.opinion,
                      judgments: e.judgments,
                      "is-opinion-expanded": e.isOpinionExpanded,
                      "opinion-analysis-list": e.opinionAnalysisList,
                    }),
                  }
                : {},
              { t: e.etfList.length > 0 },
              e.etfList.length > 0
                ? {
                    v: p.o(e.updateFeaturedEtfWatchlist, 570),
                    w: p.o(e.handleGoFeaturedEtfDetail, 571),
                    x: p.o(e.handleBuyFeaturedEtf, 572),
                    y: p.o(e.handleToggleEtf, 573),
                    z: p.o(e.handleGoMoreEtf, 574),
                    A: p.o(e.handleRankItemClick, 575),
                    B: p.p({
                      "featured-etf": e.featuredEtf,
                      "featured-etf-symbol": e.featuredEtfMiniMinsSymbol,
                      "instant-buy-report-channel-id": e.channelId,
                      "related-etf-rank-config": e.relatedEtfRankConfig,
                      "related-etf-rank-list": e.relatedEtfRankList,
                      "is-etf-expanded": e.isEtfExpanded,
                      "is-featured-etf-added": e.isFeaturedEtfAdded,
                      "is-featured-etf-loading": e.isFeaturedEtfLoading,
                      "is-watchlist-submitting": e.isWatchlistSubmitting,
                      "format-ratio": e.formatRatio,
                      "format-text": e.formatText,
                      "get-ratio-class": e.getRatioClass,
                      "get-etf-ratio": e.getEtfRatio,
                      "get-etf-name": e.getEtfName,
                      "calc-history-return": e.calcHistoryReturn,
                    }),
                  }
                : {},
              { C: e.isLite },
              (e.isLite, {}),
              { D: e.showOpinionRuleSheet },
              e.showOpinionRuleSheet
                ? {
                    E: p.o(e.handleCloseOpinionRuleSheetByIcon, 576),
                    F: p.sr("opinionRuleSheetRef", "a14226bd-6"),
                    G: p.o(e.handleCloseOpinionRuleSheet, 577),
                    H: p.p({ skin: e.skin }),
                  }
                : {}
            )
          : {},
        {
          e: !e.detail || !e.detail.name,
          I: e.footerContentId && e.detail && e.detail.name,
        },
        e.footerContentId && e.detail && e.detail.name
          ? {
              J: p.o(e.handleAskAi, 578),
              K: p.o(e.handleShare, 579),
              L: p.p({
                scene: "etfhotissue",
                "content-id": e.footerContentId,
                "ai-report-info": e.aiReportInfo,
                "is-mp": e.isMP,
              }),
            }
          : {},
        { M: e.showAiDialog && e.isMP },
        e.showAiDialog && e.isMP
          ? {
              N: p.o(e.handleCloseAiDialog, 580),
              O: p.p({
                "show-ai-dialog": e.showAiDialog,
                "ai-dialog-question": e.aiDialogQuestion,
                "ai-question-query": e.aiQuestionQuery,
                "server-obj": e.aiDialogServerObj,
                theme: e.skin,
                "source-from": "hot_topic_detail",
              }),
            }
          : e.showAiDialog && !e.isAPP
          ? {
              Q: p.o(e.handleCloseAiDialog, 581),
              R: p.p({
                "show-ai-dialog": e.showAiDialog,
                "ai-dialog-question": e.aiDialogQuestion,
                "ai-question-query": e.aiQuestionQuery,
                "server-obj": e.aiDialogServerObj,
                "source-from": "hot_topic_detail",
              }),
            }
          : {},
        { P: e.showAiDialog && !e.isAPP, S: e.skin }
      );
    },
  ],
  ["__scopeId", "data-v-a14226bd"],
]);
wx.createComponent(O);
