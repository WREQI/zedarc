var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  n = require("../../../stock-base/visibilityObserver/index.js"),
  r = "bg-rise",
  i = "bg-drop",
  o = "bg-peace",
  a = Math.round(109.8);
function u(t) {
  if (e.StockBridge.ENV === e.EnvTypeEnum.MP) {
    var n = (function () {
      if (void 0 === e.wx$1) return 0;
      try {
        if ("function" == typeof e.wx$1.getWindowInfo)
          return e.wx$1.getWindowInfo().windowWidth || 0;
        if ("function" == typeof e.wx$1.getSystemInfoSync) {
          var t = e.wx$1.getSystemInfoSync();
          return t.windowWidth || t.screenWidth || 0;
        }
      } catch (t) {}
      return 0;
    })();
    return n > 0 ? Math.round((t / 750) * n) : t;
  }
  if ("undefined" != typeof document) {
    var r = parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (r && !Number.isNaN(r)) return Math.round((t / 75) * r);
  }
  return t;
}
var d = e.defineComponent({
  name: "EtfInvestCard",
  components: {
    RankList: function () {
      return "../../../../../detailSbg/@tencent/stock-markets-base/components/RankList/RankList.js";
    },
    StMiniMins: function () {
      return "../../../../../asyncCom/@tencent/st-mini-mins/src/index.js";
    },
  },
  props: {
    featuredEtf: {
      type: Object,
      default: function () {
        return {};
      },
    },
    relatedEtfRankConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
    relatedEtfRankList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    isEtfExpanded: { type: Boolean, default: !1 },
    isFeaturedEtfAdded: { type: Boolean, default: !1 },
    isFeaturedEtfLoading: { type: Boolean, default: !1 },
    isWatchlistSubmitting: { type: Boolean, default: !1 },
    formatRatio: { type: Function, required: !0 },
    formatText: { type: Function, required: !0 },
    getRatioClass: { type: Function, required: !0 },
    getEtfRatio: { type: Function, required: !0 },
    getEtfName: { type: Function, required: !0 },
    calcHistoryReturn: { type: Function, required: !0 },
    featuredEtfSymbol: { type: String, default: "" },
    instantBuyReportChannelId: { type: String, default: "" },
  },
  setup: function (d, f) {
    var c,
      s = f.emit,
      l =
        (null == (c = e.getCurrentInstance()) ? void 0 : c.proxy) ||
        e.getCurrentInstance();
    function m(t, n) {
      e.StockBridge.mtaReport({
        busi: "hq",
        eventName: t,
        exposure: { selector: n, context: l },
      });
    }
    var p = ["mpwzq", "mpweapp"].includes("mpweapp"),
      g = null,
      h = !1;
    function y() {
      var t, e;
      null ==
        (e =
          null == (t = null == g ? void 0 : g.observer)
            ? void 0
            : t.disconnect) || e.call(t),
        (g = null),
        (h = !1);
    }
    function b() {
      return (
        (n = this),
        null,
        (r = t().mark(function n() {
          var r;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (r = ""),
                    (t.next = 3),
                    e.StockBridge.tradeFunc.fetchBrokerInfo()
                  );
                case 3:
                  e.StockBridge.tradeFunc.isBind() || (r = "I4N00p000a011"),
                    e.StockBridge.report(
                      "hq.etfhotspotdetail.etf_card_instant_buy_btn_brow",
                      { fchannel_id_fm_i: r }
                    );
                case 5:
                case "end":
                  return t.stop();
              }
          }, n);
        })),
        new Promise(function (t, e) {
          var i = function (t) {
              try {
                a(r.next(t));
              } catch (t) {
                e(t);
              }
            },
            o = function (t) {
              try {
                a(r.throw(t));
              } catch (t) {
                e(t);
              }
            },
            a = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(i, o);
            };
          a((r = r.apply(n, null)).next());
        })
      );
      var n, r;
    }
    function v(t) {
      !(function (t) {
        var e;
        if (p) return !1;
        if ("undefined" == typeof document) return !0;
        var n = null == t ? void 0 : t.boundingClientRect,
          r = document.querySelector(".footer-bar"),
          i =
            null == (e = null == r ? void 0 : r.getBoundingClientRect)
              ? void 0
              : e.call(r).top;
        return Boolean(n) && "number" == typeof i && n.bottom > i;
      })(t)
        ? ((h = !1), b())
        : (h = !0);
    }
    function E() {
      if (h && "undefined" != typeof document) {
        var t = document.querySelector(".etf-invest-card__buy");
        v(t ? { boundingClientRect: t.getBoundingClientRect() } : null);
      }
    }
    function w() {
      y(),
        e.nextTick$1(function () {
          d.featuredEtfSymbol &&
            (g = new n.VisibilityObserver(
              ".etf-invest-card__buy",
              {
                once: !1,
                callback: function (t, e) {
                  t && v(e);
                },
                intersection: { threshold: 0 },
              },
              { context: l }
            ));
        });
    }
    var k = e.ref(122),
      R = e.ref(a);
    e.onMounted(function () {
      (k.value = u(122)),
        (R.value = u(a)),
        m("etf_investment_module_brow", ".etf-invest-card"),
        m("bottom_etf_list_brow", ".etf-invest-card__more"),
        w(),
        "undefined" != typeof window &&
          window.addEventListener("scroll", E, { passive: !0 });
    }),
      e.onBeforeUnmount(function () {
        y(),
          "undefined" != typeof window &&
            window.removeEventListener("scroll", E);
      }),
      e.watch(
        function () {
          return d.featuredEtfSymbol;
        },
        function () {
          w();
        }
      ),
      e.watch(
        function () {
          return d.isEtfExpanded;
        },
        function (t) {
          t &&
            e.StockBridge.report(
              "hq.etfhotspotdetail.bottom_etf_list_expanded_brow"
            );
        }
      );
    var S = e.computed(function () {
        return d.isFeaturedEtfAdded
          ? "https://st.gtimg.com/design/a43fa0f1baa60bd218716cc87089d2f1.png"
          : (function () {
              if (p) {
                var t = e.StockBridge.getStorage("user/skin");
                return "dark" === t || "black" === t;
              }
              if ("undefined" == typeof document) return !1;
              var n = document.body.getAttribute("data-theme") || "light";
              return "dark" === n || "black" === n;
            })()
          ? "https://st.gtimg.com/image/strategy/ai/check-black.svg"
          : "https://st.gtimg.com/design/f4ce9c1ca279a4d9659ae3ed4100bcfa.png";
      }),
      _ = e.computed(function () {
        return String(d.featuredEtfSymbol || "").trim();
      }),
      x = e.computed(function () {
        var t = Number(d.getEtfRatio(d.featuredEtf)),
          e =
            "greenup" ===
            (("undefined" != typeof document &&
              document.body.getAttribute("data-zdf")) ||
              "redup");
        return Number.isNaN(t)
          ? o
          : t > 0
          ? e
            ? i
            : r
          : t < 0
          ? e
            ? r
            : i
          : o;
      }),
      B = e.computed(function () {
        return d.relatedEtfRankList.length > 1;
      }),
      C = e.computed(function () {
        return d.relatedEtfRankList.length >= 5;
      });
    return {
      chartWidth: k,
      chartHeight: R,
      getHistoryPeriodText: function (t) {
        var e;
        return "total" ===
          (null == (e = null == t ? void 0 : t.history_ratio) ? void 0 : e.type)
          ? "自基金成立以来"
          : "1年前";
      },
      watchlistIcon: S,
      trendSymbol: _,
      trendRiseDropStyle: x,
      hasRelatedEtfs: B,
      hasMoreEtfList: C,
      handleToggleWatchlist: function () {
        d.isFeaturedEtfLoading ||
          d.isWatchlistSubmitting ||
          s("toggle-watchlist", !d.isFeaturedEtfAdded);
      },
    };
  },
});
Array || (e.resolveComponent("StMiniMins") + e.resolveComponent("RankList"))();
var f = e._export_sfc(d, [
  [
    "render",
    function (t, n, r, i, o, a) {
      return e.e(
        { a: t.trendSymbol },
        t.trendSymbol
          ? {
              b: e.p({
                "choose-symbol": t.trendSymbol,
                "rise-drop-style": t.trendRiseDropStyle,
                width: t.chartWidth,
                height: t.chartHeight,
                "render-points": 40,
                "fill-chart": !0,
              }),
            }
          : {},
        {
          c: e.t(t.getEtfName(t.featuredEtf)),
          d: e.n({
            "etf-invest-card__watchlist--disabled":
              t.isFeaturedEtfLoading || t.isWatchlistSubmitting,
          }),
          e: t.watchlistIcon,
          f: t.isFeaturedEtfAdded ? "已添加" : "加自选",
          g: e.o(function () {
            return (
              t.handleToggleWatchlist &&
              t.handleToggleWatchlist.apply(t, arguments)
            );
          }, 2435),
          h: e.t(t.formatRatio(t.getEtfRatio(t.featuredEtf))),
          i: e.n(t.getRatioClass(t.getEtfRatio(t.featuredEtf))),
          j: e.t(t.formatRatio(t.featuredEtf.pos_ratio, !1)),
          k: e.t(t.formatText((100 * t.featuredEtf.price).toFixed(2))),
          l: e.t(t.getHistoryPeriodText(t.featuredEtf)),
          m: e.t(t.calcHistoryReturn(t.featuredEtf)),
          n: e.o(function (e) {
            return t.$emit("go-detail");
          }, 2436),
          o: e.o(function (e) {
            return t.$emit("buy");
          }, 2437),
          p: t.isEtfExpanded && t.hasRelatedEtfs,
        },
        t.isEtfExpanded && t.hasRelatedEtfs
          ? e.e(
              {
                q: e.p({
                  "list-config": t.relatedEtfRankConfig,
                  "rank-list": t.relatedEtfRankList,
                  "show-list-num": 5,
                  "rank-type": "基金",
                }),
                r: e.o(function (e) {
                  return t.$emit("rank-item-click");
                }, 2438),
                s: t.hasMoreEtfList,
              },
              t.hasMoreEtfList
                ? {
                    t: e.o(function (e) {
                      return t.$emit("go-more");
                    }, 2439),
                  }
                : {}
            )
          : t.hasRelatedEtfs
          ? {
              w: e.o(function (e) {
                return t.$emit("toggle");
              }, 2440),
            }
          : {},
        {
          v: t.hasRelatedEtfs,
          x: e.n({ "etf-invest-card--single": !t.hasRelatedEtfs }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-99a5c613"],
]);
wx.createComponent(f);
