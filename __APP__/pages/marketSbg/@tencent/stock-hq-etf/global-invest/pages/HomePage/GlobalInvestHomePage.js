var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../../@babel/runtime/helpers/Objectvalues"),
  require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && c(e, n, t[n]);
    if (l) {
      var r,
        a = o(l(t));
      try {
        for (a.s(); !(r = a.n()).done; ) {
          n = r.value;
          s.call(t, n) && c(e, n, t[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  g = function (e, t) {
    return a(e, i(t));
  },
  f = function (e, t, n) {
    return new Promise(function (o, r) {
      var a = function (e) {
          try {
            l(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            l(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        l = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(a, i);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  v = require("../../../../../../../common/vendor.js"),
  m = require("../../../node-modules/@tencent/st-tools/dist/index.js"),
  p = require("../../../../stock-hq-data/index.js"),
  h = require("../../service/index.js"),
  _ = require("../../utils/report.js"),
  b = require("../../../../stock-markets-base/utils/market.js"),
  T = require("../../../utils/common.js"),
  S = [
    {
      tag_id: "fed_rate",
      imageUrl:
        "https://st.gtimg.com/design/e2ffad6d65ea4359152848876a0ea48f.png",
    },
    {
      tag_id: "inflation",
      imageUrl:
        "https://st.gtimg.com/design/479fbbb5a7f9e9108a27b47546ea6140.png",
    },
    {
      tag_id: "trade_friction",
      imageUrl:
        "https://st.gtimg.com/design/b86ba32f5d233747a8177445ba18cd7a.png",
    },
    {
      tag_id: "geopolitical",
      imageUrl:
        "https://st.gtimg.com/design/a976fc2bc08857e15e5a7e460ae1f3e5.png",
    },
    {
      tag_id: "us_election",
      imageUrl:
        "https://st.gtimg.com/design/e966a29a5dd3cc45bcf74462e2b23136.png",
    },
    {
      tag_id: "industry_trend",
      imageUrl:
        "https://st.gtimg.com/design/52605eb2101969c0aa44f7136af50652.png",
    },
    {
      tag_id: "oil_move",
      imageUrl:
        "https://st.gtimg.com/design/63719b1f8fa3ac55d800b3086f4db641.png",
    },
    {
      tag_id: "us_earnings",
      imageUrl:
        "https://st.gtimg.com/design/5806a7d21db6fb2a1ecbb11353877ab2.png",
    },
    {
      tag_id: "others",
      imageUrl:
        "https://st.gtimg.com/design/7747258fb7c1ca0e73aae5786e1226ad.png",
    },
  ],
  I = function e(t) {
    if (!t) return "";
    if ("string" == typeof t || "number" == typeof t) return String(t);
    if (Array.isArray(t))
      return e(
        t.find(function (e) {
          return e && "object" == n(e) && e.name;
        }) || t.find(Boolean)
      );
    if ("object" == n(t)) {
      var o = t;
      return String(o.name || o.label || "");
    }
    return "";
  },
  E = v.defineComponent({
    name: "GlobalInvestHomePage",
    components: {
      HotTopicNavBar: function () {
        return "../../../hotTopicPages/components/HotTopicNavBar.js";
      },
      FooterBar: function () {
        return "../../../hotTopicPages/components/FooterBar.js";
      },
      TrustFooter: function () {
        return "../../../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
      EtfInvestHeader: function () {
        return "../../../components/EtfInvestHeader.js";
      },
      HotspotVisual: function () {
        return "../../components/HotspotVisual.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
      NoData: function () {
        return "../../../../../../detailSbg/@tencent/stock-markets-base/components/NoData.js";
      },
      GlobalMarketSwiperSection: function () {
        return "../../components/GlobalMarketSwiperSection.js";
      },
    },
    setup: function () {
      var o,
        r,
        a = this,
        i = v.getCurrentInstance();
      v.inject("hqBridge");
      var l = new p.DetailApi(function () {
          return 1 === arguments.length
            ? v.StockBridge.request(
                arguments.length <= 0 ? void 0 : arguments[0],
                v.RequestTypeEnum.GET,
                {},
                { forceCallback: !0 }
              )
            : v.StockBridge.request(
                arguments.length <= 0 ? void 0 : arguments[0],
                arguments.length <= 1 ? void 0 : arguments[1],
                arguments.length <= 2 ? void 0 : arguments[2],
                g(
                  d({}, (arguments.length <= 3 ? void 0 : arguments[3]) || {}),
                  { forceCallback: !0 }
                )
              );
        }),
        u = v.ref(!1),
        s = v.ref(0),
        c = v.ref(0),
        E = v.computed(function () {
          return c.value <= 30 ? 0 : Math.min(1, c.value / 120);
        }),
        y = ["mpwzq", "mpweapp"].includes("mpweapp"),
        O = ["mpwzq", "wzqlight"].includes("mpweapp"),
        R = v.ref(y),
        A =
          !y &&
          "undefined" != typeof navigator &&
          m.dist.detect(navigator.userAgent).env.IS_ZXG,
        k =
          (null ==
          (r = null == (o = getApp().globalData.detect) ? void 0 : o.env)
            ? void 0
            : r.IS_PCWEIXIN) || !1,
        L = (y || A) && !k,
        H = v.ref(!1),
        w = v.ref(null),
        B = v.ref(null),
        N = v.ref(null),
        M = v.ref(null),
        G = v.ref(!1),
        P = v.ref(!1),
        C = v.ref(!1),
        D = v.ref(!1),
        x = null,
        q = null,
        j = null,
        V = "undefined" == typeof document || !document.hidden,
        F = !0,
        U = !1,
        K = !1,
        Q = !1,
        W = new Set(),
        z = "sz159655",
        Y = v.ref(""),
        J = v.ref(!1),
        X = v.computed(function () {
          return { fchannel_id_fm_i: Y.value };
        }),
        Z = v.computed(function () {
          var e;
          return String(
            (null == (e = w.value) ? void 0 : e.title) ||
              "我想投美股存储，推荐ETF"
          );
        }),
        $ = v.computed(function () {
          var e, t;
          return String(
            (null == (e = w.value) ? void 0 : e.prompt) ||
              (null == (t = w.value) ? void 0 : t.query) ||
              Z.value
          );
        }),
        ee = v.computed(function () {
          var e, t, n, o;
          return g(d({}, w.value || {}), {
            title: Z.value,
            prompt: $.value,
            scene: String(
              (null == (e = w.value) ? void 0 : e.scene) || "global_invest"
            ),
            sub_channel: String(
              (null == (t = w.value) ? void 0 : t.sub_channel) || "manual"
            ),
            sub_scene: String(
              (null == (n = w.value) ? void 0 : n.sub_scene) ||
                "global_invest_home"
            ),
            ext_content: String(
              (null == (o = w.value) ? void 0 : o.ext_content) || z
            ),
          });
        }),
        te = v.computed(function () {
          return "black" === T.skin() || "dark" === T.skin()
            ? {
                titleSvg:
                  "https://st.gtimg.com/design/ea8cb9c7e44204b694537e668e31f8ff.svg",
                bg: "https://st.gtimg.com/design/d6051a0648f151e8b18149f94e2a0982.png",
                bardBg:
                  "https://st.gtimg.com/design/494d3e827b23ff0ec04bf7ccb814916d.png",
                cardHeaderArrow:
                  "https://st.gtimg.com/design/5c8d3517ec1225898294d85de0281be8.png",
              }
            : {
                titleSvg:
                  "https://st.gtimg.com/design/918ede3e947e68cca54f63dea34b6649.svg",
                bg: "https://st.gtimg.com/design/4d87a759e332951f139c37e2f5453993.png",
                bardBg:
                  "https://st.gtimg.com/design/8480ae7e8aba804997c2fa1c11061175.png",
                cardHeaderArrow:
                  "https://st.gtimg.com/pcm/mq4q0ve7_ddce6c46356be86d6e4a75c17741d03f.svg",
              };
        }),
        ne = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t = h.GlobalInvestState.homeData;
          return (
            (Array.isArray(t.marketSummary) ? t.marketSummary : [])[e] || {}
          );
        },
        oe = function () {
          return h.GlobalInvestState.homeData.hotspot || {};
        },
        re = function () {
          var e,
            t,
            n,
            o,
            r,
            a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = a.etf_info,
            l =
              null !=
              (r =
                null !=
                (o =
                  null !=
                  (n =
                    null !=
                    (t =
                      null != (e = null == i ? void 0 : i.price_ratio)
                        ? e
                        : a.returnValue)
                      ? t
                      : a.zdfformat)
                    ? n
                    : a.zdf)
                  ? o
                  : a.change)
                ? r
                : a.ratio,
            u = String(l || "")
              .replace(/,/g, "")
              .match(/-?\d+(?:\.\d+)?/);
          if (!u) return Number.NEGATIVE_INFINITY;
          var s = Number(u[0]);
          return Number.isNaN(s) ? Number.NEGATIVE_INFINITY : s;
        },
        ae = v.computed(function () {
          var e = h.GlobalInvestState.homeData,
            t = Array.isArray(e.hotspotList) ? e.hotspotList : [];
          return (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return e
              .map(function (e, t) {
                return { item: e, index: t, ratio: re(e) };
              })
              .sort(function (e, t) {
                return e.ratio !== t.ratio
                  ? t.ratio - e.ratio
                  : e.index - t.index;
              })
              .map(function (e) {
                return e.item;
              });
          })(t.length > 0 ? t : [oe()]);
        }),
        ie = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.etf_info;
          return ce(
            (null == t ? void 0 : t.price_ratio) ||
              e.returnValue ||
              e.zdfformat ||
              e.zdf ||
              e.change ||
              e.ratio ||
              "--"
          );
        },
        le = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = I(e.label || e.labels),
            o = (Array.isArray(e.holding_top_list) ? e.holding_top_list : [])
              .slice(0, 2)
              .map(function (e) {
                return String(e.name || "");
              })
              .filter(Boolean);
          return n ? [n].concat(t(o)) : o;
        },
        ue = function () {
          return h.GlobalInvestState.homeData.longTermSummary || {};
        },
        se = function (e) {
          return null == e || "" === e ? "--" : String(e);
        },
        ce = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (null == e || "" === e) return "--";
          var n = String(e);
          if (n.includes("%")) return n;
          var o = Number(e);
          return Number.isNaN(o)
            ? n || "--"
            : "".concat(t && o > 0 ? "+" : "").concat(o.toFixed(2), "%");
        },
        de = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            e.returnValue ||
            e.zdfformat ||
            e.zdf ||
            e.change ||
            e.price_ratio ||
            e.ratio ||
            "--"
          );
        },
        ge = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return String(e.name || e.fund_name || e.fundName || e.title || "--");
        },
        fe = function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            null != (e = t.fund_code || t.code || t.symbol || t.etf_symbol) &&
            "" !== String(e).trim() &&
            "--" !== String(e).trim()
          );
        },
        ve = v.computed(function () {
          var e, t;
          return (
            !G.value &&
            !(null ==
            (t =
              null == (e = h.GlobalInvestState.homeData)
                ? void 0
                : e.hotspotList)
              ? void 0
              : t.length)
          );
        }),
        me = v.computed(function () {
          return ae.value.some(function (e) {
            return fe(e);
          });
        }),
        pe = v.computed(function () {
          return fe(ue());
        }),
        he = v.computed(function () {
          var e = h.GlobalInvestState.homeData.marketData || {};
          return Object.values(e).some(function (e) {
            return (
              Array.isArray(e) &&
              e.some(function (e) {
                return fe(e);
              })
            );
          });
        }),
        _e = v.computed(function () {
          return !(ve.value || me.value || pe.value || he.value);
        }),
        be = v.computed(function () {
          return (
            h.GlobalInvestState.homeData.marketData || {
              us: [],
              hk: [],
              jp: [],
              eu: [],
              other: [],
            }
          );
        }),
        Te = v.computed(function () {
          return h.GlobalInvestState.homeData.riskNote || "";
        }),
        Se = v.computed(function () {
          return d({}, ue());
        }),
        Ie = v.computed(function () {
          var e = Se.value;
          return String(
            e.symbol || e.codeformat || e.fund_code || e.code || ""
          );
        }),
        Ee = v.computed(function () {
          return ge(Se.value);
        }),
        ye = v.computed(function () {
          return String(Se.value.highlight || Se.value.description || "");
        }),
        Oe = v.computed(function () {
          return ce(de(Se.value));
        }),
        Re = v.computed(function () {
          return se(Se.value.priceText || Se.value.price);
        }),
        Ae = v.computed(function () {
          var e,
            t,
            n,
            o,
            r,
            a,
            i,
            l = Se.value,
            u =
              null !=
              (i =
                null !=
                (a =
                  null !=
                  (r =
                    null !=
                    (o =
                      null !=
                      (n =
                        null !=
                        (t =
                          null != (e = l.support_regular_invest)
                            ? e
                            : l.supportRegularInvest)
                          ? t
                          : l.can_regular_invest)
                        ? n
                        : l.canRegularInvest)
                      ? o
                      : l.is_support_regular_invest)
                    ? r
                    : l.isSupportRegularInvest)
                  ? a
                  : l.support_sip)
                ? i
                : l.supportSip;
          return (
            null == u ||
            "" === u ||
            !0 === u ||
            1 === u ||
            "1" === u ||
            "true" === u
          );
        }),
        ke = v.computed(function () {
          return Ae.value && (!C.value || P.value);
        }),
        Le = function (e, t) {
          var n = "".concat(e, ":").concat(JSON.stringify(t || {}));
          W.has(n) || (_.reportGlobalInvest(e, t), W.add(n));
        },
        He = function () {
          me.value &&
            (Le(_.GLOBAL_INVEST_REPORT.HOME_HOTSPOT_MODULE_BROW),
            J.value &&
              Le(
                _.GLOBAL_INVEST_REPORT.HOME_HOTSPOT_RELATED_ASSET_BUY_BROW,
                X.value
              )),
            pe.value &&
              (Le(_.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_MODULE_BROW),
              Le(_.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_ADD_BROW),
              J.value &&
                (Le(_.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_BUY_BROW, X.value),
                P.value &&
                  Le(
                    _.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_AUTO_BROW,
                    X.value
                  ))),
            he.value && Le(_.GLOBAL_INVEST_REPORT.HOME_GLOBAL_MARKET_LIST_BROW);
        },
        we = v.computed(function () {
          return "undefined" != typeof window ? window.location.href : void 0;
        });
      function Be() {
        v.StockBridge.userShare({
          title: "ETF投全球，不限购享T+0交易",
          desc: "用A股账户投全球，不限购享 T+0 交易",
          path: y ? void 0 : "".concat(we.value, "?"),
        });
      }
      function Ne(e) {
        (c.value = e),
          c.value > 0 &&
            !K &&
            (_.reportGlobalInvest(_.GLOBAL_INVEST_REPORT.HOME_PAGE_SCROLL),
            (K = !0)),
          c.value > 0 &&
            me.value &&
            !Q &&
            (_.reportGlobalInvest(
              _.GLOBAL_INVEST_REPORT.HOME_HOTSPOT_MODULE_SCROLL
            ),
            (Q = !0));
      }
      function Me() {
        var e;
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t = document.documentElement;
          Ne(
            window.pageYOffset ||
              t.scrollTop ||
              (null == (e = document.body) ? void 0 : e.scrollTop) ||
              0
          );
        }
      }
      function Ge() {
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (window.scrollTo(0, 0),
          document.documentElement && (document.documentElement.scrollTop = 0),
          document.body && (document.body.scrollTop = 0),
          (c.value = 0));
      }
      function Pe() {
        R.value = y && V && F && ae.value.length > 1;
      }
      function Ce() {
        var e, t;
        (F = !0),
          y || Ge(),
          Pe(),
          V &&
            (null ==
              (t = null == (e = M.value) ? void 0 : e.syncFeaturedEtfAdded) ||
              t.call(e),
            qe(),
            (U = !0),
            Ke(),
            Ue());
      }
      function De() {
        (F = !1), Pe(), je(), Ve(), Fe();
      }
      var xe = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return f(
          a,
          null,
          e().mark(function n() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        h.GlobalInvestService.fetchGlobalHome({
                          top_n: 3,
                          hotPointTopN: 3,
                          forceRefresh: t,
                          silent: t,
                        })
                      );
                    case 3:
                      return (e.prev = 3), (G.value = !0), He(), e.finish(3);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, , 3, 6]]
            );
          })
        );
      };
      function qe() {
        return f(
          this,
          null,
          e().mark(function t() {
            var n, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        l.getMarketState({ market: 0 }, { needProcess: !0 })
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
                          ? (D.value = "open" === o[0][1])
                          : D.value || (D.value = !0),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        D.value || (D.value = !0);
                    case 11:
                      V &&
                        F &&
                        (q = setTimeout(function () {
                          qe(), q && (clearTimeout(q), (q = null));
                        }, 3e4));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 8]]
            );
          })
        );
      }
      function je() {
        x && (clearInterval(x), (x = null));
      }
      function Ve() {
        q && (clearTimeout(q), (q = null));
      }
      function Fe() {
        j && (clearInterval(j), (j = null));
      }
      function Ue() {
        Fe(),
          y ||
            !V ||
            !F ||
            ae.value.length <= 1 ||
            (j = setInterval(function () {
              var e = ae.value.length;
              !V || !F || e <= 1 ? Fe() : (s.value = (s.value + 1) % e);
            }, 7e3));
      }
      function Ke() {
        je(),
          (x = setInterval(function () {
            if (V && F && D.value) {
              if (U) return void (U = !1);
              xe(!0);
            }
          }, 5e3));
      }
      function Qe() {
        (V = !document.hidden),
          Pe(),
          V && F ? (qe(), Ke(), Ue()) : (je(), Ve(), Fe());
      }
      return (
        v.watch([me, pe, he, P, J], function () {
          He();
        }),
        v.watch(
          function () {
            return ae.value.length;
          },
          function (e) {
            (e <= 0 || s.value >= e) && (s.value = 0), Pe(), Ue();
          }
        ),
        v.onMounted(function () {
          return f(
            a,
            null,
            e().mark(function t() {
              var n, o;
              return e().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (y || Ge(),
                        null == (o = (n = v.StockBridge).setTitle) ||
                          o.call(n, "投全球"),
                        f(
                          a,
                          null,
                          e().mark(function t() {
                            var n, o, r;
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if ((o = v.StockBridge.tradeFunc)) {
                                        e.next = 3;
                                        break;
                                      }
                                      return e.abrupt(
                                        "return",
                                        ((C.value = !1), void (P.value = !1))
                                      );
                                    case 3:
                                      return (
                                        (e.prev = 3),
                                        (e.next = 6),
                                        o.fetchBrokerInfo()
                                      );
                                    case 6:
                                      if (((C.value = o.isBind()), C.value)) {
                                        e.next = 9;
                                        break;
                                      }
                                      return e.abrupt(
                                        "return",
                                        void (P.value = !0)
                                      );
                                    case 9:
                                      (r =
                                        (null == (n = o.getCurrentBroker)
                                          ? void 0
                                          : n.call(o)) || {}),
                                        (P.value = T.isTargetBroker(r.code)),
                                        (e.next = 16);
                                      break;
                                    case 13:
                                      (e.prev = 13),
                                        (e.t0 = e.catch(3)),
                                        (C.value = !1),
                                        (P.value = !1);
                                    case 16:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              t,
                              null,
                              [[3, 13]]
                            );
                          })
                        ),
                        xe(!1),
                        qe(),
                        Ke(),
                        Pe(),
                        Ue(),
                        "undefined" != typeof window &&
                          window.addEventListener("scroll", Me, {
                            passive: !0,
                          }),
                        y ||
                          "undefined" == typeof document ||
                          document.addEventListener("visibilitychange", Qe),
                        (t.t0 = v.StockBridge.tradeFunc),
                        !t.t0)
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (
                        (t.next = 14), v.StockBridge.tradeFunc.fetchBrokerInfo()
                      );
                    case 14:
                      v.StockBridge.tradeFunc.isBind() ||
                        (Y.value = "IbW00p000a122");
                    case 15:
                      (J.value = !0), He();
                    case 17:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
        }),
        v.onActivated(Ce),
        v.onDeactivated(De),
        v.onBeforeUnmount(function () {
          (F = !1),
            je(),
            Ve(),
            Fe(),
            "undefined" != typeof window &&
              window.removeEventListener("scroll", Me),
            y ||
              "undefined" == typeof document ||
              document.removeEventListener("visibilitychange", Qe);
        }),
        {
          skinImgMap: te,
          isMP: y,
          isLite: O,
          skin: T.skin(),
          hotspotAutoplay: R,
          channelId: Y,
          isChannelIdReady: J,
          isAPP: A,
          isGlobalInvestNavVisible: L,
          headerAlpha: E,
          showAiDialog: H,
          footerBarRef: N,
          etfInvestHeaderRef: M,
          footerContentId: z,
          footerAiReportPrefix: "",
          footerAiReportInfo: { page: "global_invest_home" },
          aiDialogQuestion: Z,
          aiQuestionQuery: $,
          aiDialogServerObj: ee,
          isHomeLoading: ve,
          showHomeEmpty: _e,
          hasHotspotData: me,
          hasLongTermData: pe,
          hasMarketData: he,
          hasMarketFundData: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return fe(ne(e));
          },
          homeLongTermHeaderEtf: Se,
          homeLongTermHeaderSymbol: Ie,
          activeHotspotIndex: s,
          hotspotSwiperList: ae,
          getHotspotItemText: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
            return String(e[t] || n);
          },
          getHotspotItemName: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.etf_info;
            return String(
              (null == t ? void 0 : t.etf_name) ||
                e.name ||
                e.fund_name ||
                e.fundName ||
                e.title ||
                "--"
            );
          },
          getHotspotItemTagText: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            return le(e)[t] || "";
          },
          getHotspotItemRatioText: ie,
          getHotspotRatioClass: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = ie(e),
              n = String(t || "").match(/-?\d+(?:\.\d+)?/),
              o = n ? Number(n[0]) : null;
            return null === o || Number.isNaN(o) || 0 === o
              ? "equal"
              : o > 0
              ? "rise"
              : "drop";
          },
          getHotspotItemTagImageUrl: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.event_info,
              n = null == t ? void 0 : t.tag;
            return (function (e) {
              if (null != e) {
                var t = String(e),
                  n = S.find(function (e) {
                    return e.tag_id === t;
                  });
                return null == n ? void 0 : n.imageUrl;
              }
            })((null == n ? void 0 : n.tag_id) || e.tag_id);
          },
          getHotspotTags: le,
          longTermFundName: Ee,
          longTermHighlightText: ye,
          longTermRatioText: Oe,
          longTermPriceText: Re,
          riskNoteText: Te,
          getMarketFundName: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = ge(ne(e));
            return "--" === n ? t : n;
          },
          getMarketFundRatio: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "--",
              n = ce(de(ne(e)));
            return "--" === n ? t : n;
          },
          getMarketFundPrice: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "--",
              n = ne(e),
              o = se(n.priceText || n.price);
            return "--" === o ? t : o;
          },
          getMarketFundHighlight: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = ne(e);
            return String(n.highlight || n.description || n.desc || t);
          },
          getMarketHoldingName: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              o = ne(e),
              r = Array.isArray(o.holdings) ? o.holdings[t] : "";
            if ("string" == typeof r) return r;
            if (r && "object" == n(r)) {
              var a = r;
              return String(a.name || a.fund_name || a.title || "");
            }
            return "";
          },
          getMarketFundTagText: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t = ne(e);
            return String((Array.isArray(t.tags) ? t.tags[0] : "") || "");
          },
          formatRatio: ce,
          formatText: se,
          getRatioClass: function (e) {
            var t = Number(String(e || "").replace("%", ""));
            return Number.isNaN(t) || 0 === t
              ? "equal"
              : t > 0
              ? "rise"
              : "drop";
          },
          getEtfRatio: de,
          getEtfName: ge,
          handleAiBarShow: function (e) {
            (B.value = e || null),
              Le(
                _.GLOBAL_INVEST_REPORT.HOME_BOTTOM_ASK_BROW,
                _.getAiQuestionReportParams(e)
              ),
              Be();
          },
          handleAiBarHide: function () {
            B.value = null;
          },
          handleAskAi: function (e) {
            if (
              (_.reportGlobalInvest(
                _.GLOBAL_INVEST_REPORT.HOME_BOTTOM_ASK_CLICK,
                g(d({}, _.getAiQuestionReportParams(e)), {
                  from_column_id: "etf_investing_globally",
                })
              ),
              (w.value = e || null),
              A)
            ) {
              var t = Z.value,
                n = $.value,
                o = String((null == e ? void 0 : e.scene) || "global_invest"),
                r = e ? JSON.stringify(e) : "{}",
                a = {
                  url: "qqstock://SHY?info=".concat(
                    encodeURIComponent(
                      JSON.stringify({
                        p_key: "com.tencent.shy.search_ai",
                        p_url: "semiAi?sourceFrom="
                          .concat(o, "&aiDialogQuestion=")
                          .concat(encodeURIComponent(t), "&aiQuestionQuery=")
                          .concat(encodeURIComponent(n), "&serverObj=")
                          .concat(encodeURIComponent(r)),
                        showNav: !1,
                      })
                    )
                  ),
                  height:
                    0.8 *
                    ("undefined" != typeof window ? window.screen.height : 812),
                  coverColor: "#66000000",
                  cornerRadius: 8,
                };
              location.href = "qqstock://SDModal?info=".concat(
                encodeURIComponent(JSON.stringify(a))
              );
            } else H.value = !0;
          },
          handleCloseAiDialog: function () {
            (H.value = !1), (w.value = null);
          },
          handleBack: function () {
            v.StockRouter.routeBack(1);
          },
          setScrollTop: function (e) {
            var t = Number(e);
            Number.isFinite(t) && Ne(t);
          },
          scrollPageToTop: Ge,
          handlePageShow: Ce,
          handlePageHide: De,
          handleHotspotFundInfoClick: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t = ae.value[e] || oe(),
              n = t.etf_info,
              o = String(
                (null == n ? void 0 : n.etf_symbol) ||
                  t.symbol ||
                  t.etf_symbol ||
                  ""
              ).trim();
            if (
              (_.reportGlobalInvest(
                _.GLOBAL_INVEST_REPORT.HOME_HOTSPOT_RELATED_ASSETS_CLICK,
                { stockid: o }
              ),
              o)
            ) {
              var r = b.splitSymbol(o),
                a = r.market,
                i = r.scode;
              v.StockRouter.routeTo({
                name: "stockdetail",
                query: { market: a, scode: i },
              });
            }
          },
          handleHotspotBuy: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            if (
              (_.reportGlobalInvest(
                _.GLOBAL_INVEST_REPORT.HOME_HOTSPOT_RELATED_ASSET_BUY_CLICK,
                g(d({}, X.value), { from_column_id: "etf_investing_globally" })
              ),
              !u.value)
            ) {
              u.value = !0;
              var t = ae.value[e] || oe();
              setTimeout(function () {
                h.GlobalInvestService.navigateToEtfBuy(
                  g(d({}, t), { source: "home_hotspot" }),
                  i,
                  Y.value
                ).finally(function () {
                  u.value = !1;
                });
              }, 50);
            }
          },
          handleHotspotSwiperChange: function (e) {
            var t,
              n =
                null == (t = null == e ? void 0 : e.detail)
                  ? void 0
                  : t.current;
            void 0 !== n && n !== s.value && (s.value = n), y || Ue();
          },
          handleMarketBuy: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            _.reportGlobalInvest(
              _.GLOBAL_INVEST_REPORT.HOME_GLOBAL_MARKET_LIST_CLICK
            ),
              u.value ||
                ((u.value = !0),
                h.GlobalInvestService.navigateToEtfBuy(
                  g(d({}, ne(e)), { source: "home_market_summary" }),
                  i,
                  Y.value
                ).finally(function () {
                  u.value = !1;
                }));
          },
          handleRegularInvest: function () {
            _.reportGlobalInvest(
              _.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_AUTO_CLICK,
              g(d({}, X.value), { from_column_id: "etf_investing_globally" })
            ),
              h.GlobalInvestService.navigateToRegularInvest(
                g(d({}, ue()), { source: "home_long_term" }),
                Y.value
              );
          },
          handleLongTermBuy: function () {
            _.reportGlobalInvest(
              _.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_BUY_CLICK,
              g(d({}, X.value), { from_column_id: "etf_investing_globally" })
            ),
              u.value ||
                ((u.value = !0),
                h.GlobalInvestService.navigateToEtfBuy(
                  g(d({}, ue()), { source: "home_long_term" }),
                  i,
                  Y.value
                ).finally(function () {
                  u.value = !1;
                }));
          },
          showRegularInvest: P,
          showRegularInvestButton: ke,
          handleGlobalMarketMore: function () {
            _.reportGlobalInvest(
              _.GLOBAL_INVEST_REPORT.HOME_GLOBAL_MARKET_HEADER_CLICK
            ),
              v.StockRouter.routeTo({
                name: "globalmarket",
                query: { from: "investglobal" },
              });
          },
          handleGlobalMarketTabbarHeaderClick: function () {
            _.reportGlobalInvest(
              _.GLOBAL_INVEST_REPORT.HOME_GLOBAL_MARKET_HEADER_CLICK
            );
          },
          handleLongTermMore: function () {
            _.reportGlobalInvest(
              _.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_ARROW_CLICK
            ),
              v.StockRouter.routeTo({
                name: "globalinvestment",
                query: { from: "investglobal" },
              });
          },
          homeMarketData: be,
          handleShare: function () {
            Be(),
              A &&
              (
                ("undefined" != typeof navigator && navigator.userAgent) ||
                ""
              ).match(/(OpenHarmony);?[\s\/]+([\d.]+)?/)
                ? v.StockBridge.toast("暂未支持，敬请期待", "none")
                : y || v.StockBridge.openShareGuide();
          },
        }
      );
    },
  });
Array ||
  (
    v.resolveComponent("HotTopicNavBar") +
    v.resolveComponent("NoData") +
    v.resolveComponent("HotspotVisual") +
    v.resolveComponent("EtfInvestHeader") +
    v.resolveComponent("GlobalMarketSwiperSection") +
    v.resolveComponent("TrustFooter") +
    v.resolveComponent("FooterBar") +
    v.resolveComponent("half-screen-ai-entry")
  )();
var y = v._export_sfc(E, [
  [
    "render",
    function (e, t, n, o, r, a) {
      return v.e(
        { a: e.isGlobalInvestNavVisible },
        e.isGlobalInvestNavVisible
          ? {
              b: v.o(e.handleBack, 607),
              c: v.p({
                title: "投全球",
                opacity: e.headerAlpha,
                "app-title-visible": !1,
              }),
            }
          : {},
        { d: e.isHomeLoading },
        e.isHomeLoading || e.showHomeEmpty
          ? {}
          : v.e(
              {
                f: e.skinImgMap.bg,
                g: v.n({ "case-page__hero--h5": !e.isMP && !e.isAPP }),
                h: e.skinImgMap.titleSvg,
                i: v.n({ "case-page__title-wrap--h5": !e.isMP && !e.isAPP }),
                j: e.hasHotspotData,
              },
              e.hasHotspotData
                ? {
                    k: v.f(e.hotspotSwiperList, function (t, n, o) {
                      return {
                        a: v.t(e.getHotspotItemName(t)),
                        b: v.f(e.getHotspotTags(t), function (e, t, n) {
                          return { a: v.t(e), b: t };
                        }),
                        c: v.o(
                          function (t) {
                            return e.handleHotspotFundInfoClick(n);
                          },
                          608,
                          n
                        ),
                        d: v.t(e.getHotspotItemRatioText(t)),
                        e: v.n(e.getHotspotRatioClass(t)),
                        f: v.o(
                          function (t) {
                            return e.handleHotspotBuy(n);
                          },
                          609,
                          n
                        ),
                        g: "f38b25d2-2-" + o,
                        h: v.p({
                          badge: e.getHotspotItemText(t, "topic_name", ""),
                          headline: e.getHotspotItemText(
                            t,
                            "event_desc",
                            e.getHotspotItemText(t, "highlight", "")
                          ),
                          description: e.getHotspotItemText(t, "highlight", ""),
                          "tag-image-url": e.getHotspotItemTagImageUrl(t),
                          "visual-bg-url": e.skinImgMap.bardBg,
                        }),
                        i: n,
                      };
                    }),
                    l: e.activeHotspotIndex,
                    m: e.hotspotAutoplay,
                    n: v.o(function () {
                      return (
                        e.handleHotspotSwiperChange &&
                        e.handleHotspotSwiperChange.apply(e, arguments)
                      );
                    }, 610),
                    o: v.f(e.hotspotSwiperList, function (t, n, o) {
                      return {
                        a: n,
                        b: v.n(
                          n === e.activeHotspotIndex
                            ? "hotspot-card__pager-dot--active"
                            : ""
                        ),
                        c: v.n(
                          1 === n && 1 !== e.activeHotspotIndex
                            ? "hotspot-card__pager-dot--middle"
                            : ""
                        ),
                        d: v.n(
                          2 === n && 2 !== e.activeHotspotIndex
                            ? "hotspot-card__pager-dot--last"
                            : ""
                        ),
                      };
                    }),
                  }
                : {},
              { p: e.hasLongTermData },
              e.hasLongTermData
                ? v.e(
                    {
                      q: e.skinImgMap.cardHeaderArrow,
                      r: v.o(function () {
                        return (
                          e.handleLongTermMore &&
                          e.handleLongTermMore.apply(e, arguments)
                        );
                      }, 611),
                      s: v.sr("etfInvestHeaderRef", "f38b25d2-3"),
                      t: v.p({
                        "featured-etf": e.homeLongTermHeaderEtf,
                        "featured-etf-symbol": e.homeLongTermHeaderSymbol,
                        "format-ratio": e.formatRatio,
                        "format-text": e.formatText,
                        "get-ratio-class": e.getRatioClass,
                        "get-etf-ratio": e.getEtfRatio,
                        "get-etf-name": e.getEtfName,
                        "show-watchlist": !0,
                        "show-relevance": !1,
                        "ratio-label": "近3年年化",
                        "report-source": "home_long_term",
                      }),
                      v: e.showRegularInvestButton,
                    },
                    e.showRegularInvestButton
                      ? {
                          w: v.o(function () {
                            return (
                              e.handleRegularInvest &&
                              e.handleRegularInvest.apply(e, arguments)
                            );
                          }, 612),
                        }
                      : {},
                    {
                      x: v.o(function () {
                        return (
                          e.handleLongTermBuy &&
                          e.handleLongTermBuy.apply(e, arguments)
                        );
                      }, 613),
                      y: v.t(e.longTermHighlightText),
                    }
                  )
                : {},
              { z: e.hasMarketData },
              e.hasMarketData
                ? {
                    A: e.skinImgMap.cardHeaderArrow,
                    B: v.o(function () {
                      return (
                        e.handleGlobalMarketMore &&
                        e.handleGlobalMarketMore.apply(e, arguments)
                      );
                    }, 614),
                    C: v.o(e.handleGlobalMarketTabbarHeaderClick, 615),
                    D: v.p({
                      "show-index-filter": !1,
                      "default-market": "us",
                      source: "home_market_summary",
                      "card-variant": "home",
                      "market-data": e.homeMarketData,
                      "channel-id": e.channelId,
                      "is-channel-id-ready": e.isChannelIdReady,
                    }),
                  }
                : {},
              { E: e.isLite },
              (e.isLite, {}),
              {
                F: v.sr("footerBarRef", "f38b25d2-6"),
                G: v.o(e.handleAiBarShow, 616),
                H: v.o(e.handleAiBarHide, 617),
                I: v.o(e.handleAskAi, 618),
                J: v.o(e.handleShare, 619),
                K: v.p({
                  scene: "etfglobalinvest",
                  "content-id": e.footerContentId,
                  "ai-report-prefix": e.footerAiReportPrefix,
                  "ai-report-info": e.footerAiReportInfo,
                  "is-mp": e.isMP,
                }),
                L: e.showAiDialog && e.isMP,
              },
              e.showAiDialog && e.isMP
                ? {
                    M: v.o(e.handleCloseAiDialog, 620),
                    N: v.p({
                      "show-ai-dialog": e.showAiDialog,
                      "ai-dialog-question": e.aiDialogQuestion,
                      "ai-question-query": e.aiQuestionQuery,
                      "server-obj": e.aiDialogServerObj,
                      theme: e.skin,
                      "source-from": "global_invest",
                    }),
                  }
                : e.showAiDialog && !e.isAPP
                ? {
                    P: v.o(e.handleCloseAiDialog, 621),
                    Q: v.p({
                      "show-ai-dialog": e.showAiDialog,
                      "ai-dialog-question": e.aiDialogQuestion,
                      "ai-question-query": e.aiQuestionQuery,
                      "server-obj": e.aiDialogServerObj,
                      "source-from": "global_invest",
                    }),
                  }
                : {},
              { O: e.showAiDialog && !e.isAPP }
            ),
        { e: e.showHomeEmpty, R: e.skin }
      );
    },
  ],
  ["__scopeId", "data-v-f38b25d2"],
]);
wx.createComponent(y);
