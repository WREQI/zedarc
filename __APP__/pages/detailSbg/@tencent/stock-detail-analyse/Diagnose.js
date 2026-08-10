var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (a, o) {
      var r = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        i = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(r, i);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../common/vendor.js"),
  a = require("../stock-crypto-modules-config/dist/index.js"),
  o = require("../stock-hq-core/config/css-token.js"),
  r = (navigator && navigator.userAgent) || "",
  i = /(Windows|Mac)Wechat/i.test(r),
  s = "2.0.1";
function c(t) {
  var e = [];
  for (var o in t) o && e.push("".concat(o, "=").concat(t[o]));
  return (
    e.push("key=".concat(a.dist.SIGN_KEY.wzq_analyse)),
    (t.sign = n.md5Module(e.join("&")).toLowerCase()),
    t
  );
}
var l = {
  props: {
    skin: { type: String, default: "white" },
    symbol: String,
    scode: String,
    market: String,
    stockName: String,
    mpscrollTop: Number,
    cStyle: String,
  },
  components: {
    f2: function () {
      return "../stock-union-f2/f2MP.js";
    },
    NoData: function () {
      return "./common/NoData.js";
    },
    AnalyseTab: function () {
      return "./components/AnalyseTab.js";
    },
    MarketView: function () {
      return "./components/MarketView/index.js";
    },
    Fundamental: function () {
      return "./components/Fundamental.js";
    },
    Capital: function () {
      return "./components/Capital.js";
    },
    Technical: function () {
      return "./components/Technical.js";
    },
  },
  data: function () {
    return {
      json: {},
      extra: {
        summary: { radar: {}, percent: 0, rating: {} },
        technical: {
          bar: [],
          hasKline: !1,
          showTooltip: !1,
          origin: null,
          left: !1,
        },
        opinion: { temp: [] },
      },
      errorMsg: null,
      showRadarChart: !1,
      marketViewData: null,
      fundamentalData: null,
      capitalData: null,
      technicalData: null,
      tabValue: "overview",
      isTop: !1,
      radarConfig: {
        padding: 22,
        appendPadding: [40, 20, 20, 20],
        animate: !1,
      },
      clickTabFlag: !1,
      tabOffsetTop: {
        technical: Number.MAX_SAFE_INTEGER,
        capital: Number.MAX_SAFE_INTEGER,
        opinion: Number.MAX_SAFE_INTEGER,
        fundamental: Number.MAX_SAFE_INTEGER,
      },
    };
  },
  computed: {
    isZXG: function () {
      return !0;
    },
    code: function () {
      return ["sz", "sh"][+this.market] + this.scode;
    },
    themeColor: function () {
      var t = o.CSSTOKEN[n.isBroker] || o.CSSTOKEN.DEFAULT;
      return {
        bigBlue: t.bigBlue || "#3077ec",
        bigRed: t.bigRed || "#E63535",
        bigGreen: t.bigGreen || "#1CAA3C",
        primary: t.primary || "#3077ec",
        lineBlue: t.lineBlue || "#4489ff",
        gridentBack: "background: linear-gradient(270deg, "
          .concat(t.midBlue, " 0%, ")
          .concat(t.primary, " 100%)"),
      };
    },
    scrollInfo: function () {
      var t = {
        overview: (this.$refs.overview && this.$refs.overview.offsetTop) || 0,
        technical:
          (this.$refs.technical &&
            this.$refs.technical.$el &&
            this.$refs.technical.$el.offsetTop) ||
          0,
        capital:
          (this.$refs.capital &&
            this.$refs.capital.$el &&
            this.$refs.capital.$el.offsetTop) ||
          0,
        opinion:
          (this.$refs.opinion &&
            this.$refs.opinion.$el &&
            this.$refs.opinion.$el.offsetTop) ||
          0,
        fundamental:
          (this.$refs.fundamental &&
            this.$refs.fundamental.$el &&
            this.$refs.fundamental.$el.offsetTop) ||
          0,
      };
      return {
        overview: t.overview,
        technical: t.technical - 36,
        capital: t.capital - 36,
        opinion: t.opinion - 36,
        fundamental: t.fundamental - 36,
      };
    },
  },
  mounted: function () {
    return e(
      this,
      null,
      t().mark(function a() {
        var o,
          r,
          i,
          l,
          u,
          m,
          p,
          d,
          h,
          f,
          g,
          k,
          y,
          _ = this;
        return t().wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    (y = this.code),
                    e(
                      exports,
                      null,
                      t().mark(function e() {
                        var a;
                        return t().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (a = {
                                    _h5ver: s,
                                    modules:
                                      "summary|technical|capital|opinion|fundamental|risk",
                                    source: "wzq",
                                    stock_code: y,
                                  }),
                                  "mp" === n.StockBridge.ENV
                                    ? (a.addWzqSign = !0)
                                    : c(a),
                                  (t.next = 4),
                                  n.StockBridge.request(
                                    "https://bisheng.tenpay.com/fcgi-bin/zg_general.fcgi",
                                    n.RequestTypeEnum.POST,
                                    a
                                  )
                                );
                              case 4:
                                return t.abrupt("return", t.sent.data);
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, e);
                      })
                    )
                  );
                case 3:
                  if ((o = a.sent)) {
                    a.next = 6;
                    break;
                  }
                  throw new Error("暂无相关数据");
                case 6:
                  (i = (r = o || {}).summary),
                    (l = void 0 === i ? {} : i),
                    (u = r.opinion),
                    (m = void 0 === u ? {} : u),
                    (p = r.capital),
                    (d = void 0 === p ? {} : p),
                    (h = r.technical),
                    (f = void 0 === h ? {} : h),
                    (g = r.fundamental),
                    (k = void 0 === g ? {} : g),
                    (this.marketViewData = { summary: l, opinion: m }),
                    (this.fundamentalData = { summary: l, fundamental: k }),
                    (this.capitalData = d),
                    (this.technicalData = { summary: l, technical: f }),
                    this.initSummary(o.summary),
                    (this.json = o),
                    this.$nextTick(function () {
                      _.showRadarChart = !0;
                    }),
                    (a.next = 13);
                  break;
                case 10:
                  (a.prev = 10),
                    (a.t0 = a.catch(0)),
                    1037320001 === (a.t0 && a.t0.retcode)
                      ? (this.errorMsg = "该股新上市，数据累计中")
                      : (this.errorMsg = "暂无相关数据");
                case 13:
                  return (
                    (a.prev = 13),
                    this.$nextTick(function () {
                      _.$emit("loaded");
                    }),
                    a.finish(13)
                  );
                case 16:
                  "mp" !== n.StockBridge.ENV &&
                    document.addEventListener("scroll", this.listenScroll);
                case 17:
                case "end":
                  return a.stop();
              }
          },
          a,
          this,
          [[0, 10, 13, 16]]
        );
      })
    );
  },
  methods: {
    getScrollInfo: function () {
      return {
        scrollTop:
          document.documentElement.scrollTop || document.body.scrollTop,
        scrollHeight:
          document.documentElement.scrollHeight || document.body.scrollHeight,
        clientHeight:
          document.documentElement.clientHeight || document.body.clientHeight,
      };
    },
    listenScroll: function () {
      var t = this.scrollInfo,
        e = this.getScrollInfo(),
        n = e.scrollTop,
        a = e.scrollHeight,
        o = e.clientHeight,
        r = t.overview;
      n > r && !1 === this.isTop && (this.isTop = !0),
        n < r && !0 === this.isTop && (this.isTop = !1);
      var i = Object.keys(this.scrollInfo);
      if (n + o > a - 20) this.tabValue = i[i.length - 1];
      else
        for (var s = 0; s < i.length; s++) {
          var c = i[s],
            l = i[s + 1],
            u = c && t[c],
            m = l && t[l];
          if (s === i.lenght - 1 && n >= u) {
            this.tabValue = c;
            break;
          }
          if (n >= u && n < m) {
            this.tabValue = c;
            break;
          }
        }
    },
    scrollToTabMp: function (t) {
      var e = this;
      n.wx$1
        .createSelectorQuery()
        .in(this)
        .select("#technical")
        .boundingClientRect()
        .select("#capital")
        .boundingClientRect()
        .select("#opinion")
        .boundingClientRect()
        .select("#fundamental")
        .boundingClientRect()
        .exec(function (a) {
          (e.tabOffsetTop.technical =
            a && a[0] && a[0].top + e.mpscrollTop - 130),
            (e.tabOffsetTop.capital =
              a && a[1] && a[1].top + e.mpscrollTop - 130),
            (e.tabOffsetTop.opinion =
              a && a[2] && a[2].top + e.mpscrollTop - 130),
            (e.tabOffsetTop.fundamental =
              a && a[3] && a[3].top + e.mpscrollTop - 130),
            n.wx$1.pageScrollTo({ scrollTop: e.tabOffsetTop[t], duration: 0 });
        });
    },
    scrollToBlock: function (t) {
      if ("mp" !== n.StockBridge.ENV) {
        var e = this.scrollInfo[t];
        (e || 0 === e) && window.scrollTo(0, e);
      } else this.scrollToTabMp(t);
    },
    clickRedar: function () {
      n.StockBridge.report("hq.detail.analyse.clickleida_click");
    },
    getExposureModules: function () {
      var t = this.$refs,
        e = t.overview,
        n = t.technical,
        a = t.capital,
        o = t.opinion,
        r = t.fundamental,
        i = [];
      return (
        i.push(
          { $el: e, name: "overview" },
          { $el: n && n.$el, name: "technical" },
          { $el: a && a.$el, name: "funds" },
          { $el: (o && o.$el) || "", name: "opinion" },
          { $el: r && r.$el, name: "basic" }
        ),
        i
      );
    },
    initSummary: function (t) {
      this.extra.summary.radar = [
        { item: "技术", score: t.technical_score, value: "technical" },
        { item: "资金", score: t.capital_score, value: "capital" },
        { item: "市场观点", score: t.public_opinion_score, value: "opinion" },
        { item: "基本面", score: t.fundamental_score, value: "fundamental" },
      ];
    },
    drawRadar: function (t) {
      var e = t.chart;
      e.coord("polar"),
        e.legend(!1),
        e.source(this.extra.summary.radar, {
          score: {
            min: 0,
            max: 100,
            nice: !0,
            tickCount: 2,
            ticks: [0, 50, 100],
          },
        }),
        e.axis("score", {
          label: null,
          line: null,
          grid: {
            type: "arc",
            lineDash: !0,
            stroke: "#DCDFE6",
            strokeOpacity: 0.5,
          },
        }),
        e.axis("item", {
          grid: { stroke: "#DCDFE6", lineDash: [0, 1, 2], strokeOpacity: 0.5 },
          label: { fill: "transparent", fontSize: 0 },
        }),
        e
          .area()
          .position("item*score")
          .color(this.themeColor.primary)
          .style({ fillOpacity: 0.3 }),
        e
          .line()
          .position("item*score")
          .color(this.themeColor.primary)
          .size(1)
          .style({ lineWidth: 1 }),
        e.point().position("item*score").color(this.themeColor.primary).size(3),
        e.tooltip(!1),
        e.render();
    },
    openExtra: function (t) {
      i ? (location.href = t) : n.StockBridge.openExtraWebview(t);
    },
    goPK: function () {
      n.StockBridge.report("hq.detail.diagnose_pk", { stockid: this.symbol }),
        "mp" === n.StockBridge.ENV
          ? n.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/strategy/stockpk/index?stock=".concat(
                this.code
              )
            )
          : n.StockBridge.routeTo({
              path: "/strategy/stockpk/index",
              query: { stock: this.code },
            });
    },
    goTeaching: function (t, e, a) {
      n.StockBridge.report("stock_detail.zg_toujiao");
      var o = [
        this.json.summary.technical_score,
        this.json.summary.capital_score,
        this.json.summary.public_opinion_score,
        this.json.summary.fundamental_score,
        this.json.summary.risk_score,
      ].join(",");
      this.openExtra(
        "https://wzq.tenpay.com/resources/diagnoseStock/#/teachWzq?part="
          .concat(t, "&score=")
          .concat(o, "&pos=")
          .concat(e, "&title=new")
          .concat(a ? "&summary=true" : "")
      );
    },
    goRank: function (t) {
      if (!this.isZXG) {
        var e = n.StockBridge.getSession("stock://statDataO") || "";
        n.StockBridge.report(
          1 === t ? "stock_detail.zg_scrank" : "stock_detail.zg_hyrank"
        ),
          this.openExtra(
            "https://wzq.tenpay.com/resources/diagnoseStock/#/rank?stockCode="
              .concat(this.code, "&rankType=")
              .concat(t, "&title=new&stat_data=")
              .concat(e)
          );
      }
    },
    goStrategy: function (t) {
      n.StockBridge.report("hq.detail.analyse.checkout.target.tag_click"),
        "mp" === n.StockBridge.ENV
          ? this.openExtra(
              "https://wzq.tenpay.com/mp/v2/index.html#/strategy/strategy/detail?id=".concat(
                t
              )
            )
          : this.$router.push({
              path: "/strategy/system/detail",
              query: { id: t },
            });
    },
  },
};
Array ||
  (
    n.resolveComponent("AnalyseTab") +
    n.resolveComponent("f2") +
    n.resolveComponent("Technical") +
    n.resolveComponent("Capital") +
    n.resolveComponent("MarketView") +
    n.resolveComponent("Fundamental") +
    n.resolveComponent("NoData")
  )();
var u = n._export_sfc(l, [
  [
    "render",
    function (t, e, a, o, r, i) {
      return n.e(
        { a: r.json.summary },
        r.json.summary
          ? n.e(
              {
                b: n.n(r.isTop ? "tab-top" : ""),
                c: n.o(i.scrollToBlock, 1955),
                d: n.p({ tabValue: r.tabValue }),
                e: n.t(r.json.summary.update_time.slice(0, 16)),
                f: n.o(function (t) {
                  return i.goPK();
                }, 1956),
                g: n.t(Math.floor(r.json.summary.composite_score)),
                h: n.n("state-" + r.json.summary.composite_score_rise),
                i: n.o(function (t) {
                  return i.goTeaching(0, "", !0);
                }, 1957),
                j: n.n("rank" + r.json.summary.industry_rank),
                k: n.t(r.json.summary.industry_rank),
                l: n.t(r.json.summary.findustry_stock_count),
                m: !i.isZXG,
              },
              (i.isZXG, {}),
              {
                n: n.o(function (t) {
                  return i.goRank(2);
                }, 1958),
                o: n.n("rank" + r.json.summary.market_rank),
                p: n.t(r.json.summary.market_rank),
                q: n.t(r.json.summary.fmarket_stock_count),
                r: !i.isZXG,
              },
              (i.isZXG, {}),
              {
                s: n.o(function (t) {
                  return i.goRank(1);
                }, 1959),
                t: n.t(100 - r.json.summary.market_rank_percentile),
                v: n.f(r.extra.summary.radar, function (t, e, a) {
                  return n.e(
                    { a: n.t(t.item), b: 1 == e || 3 == e },
                    1 == e || 3 == e
                      ? { c: n.t(t.score) }
                      : { d: n.t(t.score) },
                    {
                      e: e,
                      f: n.o(
                        function (e) {
                          return i.scrollToBlock(t.value);
                        },
                        1960,
                        e
                      ),
                    }
                  );
                }),
                w: r.showRadarChart,
              },
              r.showRadarChart
                ? {
                    x: n.sr("radarChart", "e7fb8000-1"),
                    y: n.o(i.drawRadar, 1961),
                    z: n.p({
                      chartId: "radarChart",
                      cClass: "chart-block",
                      cStyle:
                        a.cStyle ||
                        (i.isZXG
                          ? "width: 100%; height: 2.80rem;"
                          : "width: 100%; height: 280rpx;"),
                      config: r.radarConfig,
                    }),
                  }
                : {},
              {
                A: n.o(function () {
                  return i.clickRedar && i.clickRedar.apply(i, arguments);
                }, 1962),
                B:
                  r.json.summary.stock_profile.risk_tag ||
                  r.json.summary.stock_profile.hit_strategy_tag ||
                  r.json.summary.stock_profile.character_tag,
              },
              r.json.summary.stock_profile.risk_tag ||
                r.json.summary.stock_profile.hit_strategy_tag ||
                r.json.summary.stock_profile.character_tag
                ? n.e(
                    { C: r.json.summary.stock_profile.character_tag },
                    r.json.summary.stock_profile.character_tag
                      ? {
                          D: n.f(
                            r.json.summary.stock_profile.character_tag,
                            function (t, e, a) {
                              return { a: n.t(t.name), b: t.name };
                            }
                          ),
                        }
                      : {},
                    { E: r.json.summary.stock_profile.hit_strategy_tag },
                    r.json.summary.stock_profile.hit_strategy_tag
                      ? {
                          F: n.f(
                            r.json.summary.stock_profile.hit_strategy_tag,
                            function (t, e, a) {
                              return {
                                a: n.t(t.name),
                                b: t.name,
                                c: n.o(
                                  function (e) {
                                    return i.goStrategy(t.sid);
                                  },
                                  1963,
                                  t.name
                                ),
                              };
                            }
                          ),
                        }
                      : {}
                  )
                : {}
            )
          : {},
        { G: r.technicalData },
        r.technicalData
          ? {
              H: n.sr("technical", "e7fb8000-2"),
              I: n.p({
                id: "technical",
                skin: a.skin,
                code: i.code,
                stockName: a.stockName,
                technicalData: r.technicalData,
              }),
            }
          : {},
        { J: r.capitalData },
        r.capitalData
          ? {
              K: n.sr("capital", "e7fb8000-3"),
              L: n.p({ id: "capital", capitalData: r.capitalData }),
            }
          : {},
        { M: r.marketViewData },
        r.marketViewData
          ? {
              N: n.sr("opinion", "e7fb8000-4"),
              O: n.p({
                id: "opinion",
                skin: a.skin,
                marketViewData: r.marketViewData,
              }),
            }
          : {},
        { P: r.fundamentalData },
        r.fundamentalData
          ? {
              Q: n.sr("fundamental", "e7fb8000-5"),
              R: n.p({
                skin: a.skin,
                id: "fundamental",
                fundamentalData: r.fundamentalData,
              }),
            }
          : {},
        { S: r.json.risk },
        (r.json.risk, {}),
        { T: r.errorMsg },
        r.errorMsg ? { U: n.t(r.errorMsg) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-e7fb8000"],
]);
wx.createComponent(u);
var m = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.IS_PCWEIXIN = i),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1hbmFseXNlL0RpYWdub3NlLnZ1ZQ =
    m),
  (exports.queryAnalyseBollLine = function (a) {
    return e(
      exports,
      null,
      t().mark(function e() {
        var o;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (o = { _h5ver: s, source: "wzq", stock_code: a }),
                  "mp" === n.StockBridge.ENV ? (o.addWzqSign = !0) : c(o),
                  (t.next = 4),
                  n.StockBridge.request(
                    "https://bisheng.tenpay.com/fcgi-bin/zg_boll_line.fcgi",
                    "POST",
                    o
                  )
                );
              case 4:
                return t.abrupt("return", t.sent.data);
              case 5:
              case "end":
                return t.stop();
            }
        }, e);
      })
    );
  });
